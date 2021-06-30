/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.6465163934426229, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8169642857142857, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/staff/me"], "isController": false}, {"data": [0.8043478260869565, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=provinsi"], "isController": false}, {"data": [0.6818181818181818, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-most-likes?limit=10"], "isController": false}, {"data": [1.0, 500, 1500, "https://www.google-analytics.com/j/collect?v=1&_v=j90&a=577181619&t=pageview&_s=6&dl=https%3A%2F%2Fsapawarga.jabarprov.go.id%2F&dp=%2Fprofile&ul=en-us&de=UTF-8&dt=sapawarga&sd=24-bit&sr=1366x768&vp=1366x663&je=0&_u=SACAAEABEAAAAC~&jid=1518505877&gjid=1422412857&cid=712928393.1611076125&tid=UA-140018658-12&_gid=988461125.1620048324&_r=1&z=294886018"], "isController": false}, {"data": [0.8421052631578947, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-counts"], "isController": false}, {"data": [0.75, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/polling-latest"], "isController": false}, {"data": [1.0, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/polling/454/result"], "isController": false}, {"data": [0.8, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=kabkota"], "isController": false}, {"data": [0.0, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/staff/login"], "isController": false}, {"data": [0.6666666666666666, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-geo"], "isController": false}, {"data": [0.8214285714285714, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/categories?type=aspirasi"], "isController": false}, {"data": [0.84375, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-category-counts?limit=7"], "isController": false}, {"data": [0.7708333333333334, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/areas?parent_id=1&depth=2&all=true"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 488, 0, 0.0, 23966.653688524584, 22, 147085, 139.0, 104142.60000000003, 126736.34999999986, 143497.89, 2.747856052884967, 5.091654443024218, 2.545761234958585], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["https://sapawarga.jabarprov.go.id/api/v1/staff/me", 112, 0, 0.0, 7111.535714285716, 60, 75360, 140.0, 34619.60000000001, 71251.59999999999, 75166.82, 1.172197975865281, 1.654127026489581, 1.2397367264278314], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=provinsi", 46, 0, 0.0, 5656.782608695653, 73, 71261, 92.0, 24211.80000000002, 55457.14999999999, 71261.0, 0.5045740736678147, 0.9648008166421692, 0.5513851449553562], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-most-likes?limit=10", 33, 0, 0.0, 14318.272727272728, 117, 68856, 158.0, 63407.0, 67376.9, 68856.0, 0.3734679326852344, 1.2283593723475288, 0.4062922627063976], "isController": false}, {"data": ["https://www.google-analytics.com/j/collect?v=1&_v=j90&a=577181619&t=pageview&_s=6&dl=https%3A%2F%2Fsapawarga.jabarprov.go.id%2F&dp=%2Fprofile&ul=en-us&de=UTF-8&dt=sapawarga&sd=24-bit&sr=1366x768&vp=1366x663&je=0&_u=SACAAEABEAAAAC~&jid=1518505877&gjid=1422412857&cid=712928393.1611076125&tid=UA-140018658-12&_gid=988461125.1620048324&_r=1&z=294886018", 54, 0, 0.0, 91.5, 22, 140, 93.5, 99.5, 105.5, 140.0, 0.733835240398989, 0.4020327830701492, 0.5389102546680075], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-counts", 19, 0, 0.0, 10676.842105263158, 78, 74858, 96.0, 69874.0, 74858.0, 74858.0, 0.2415796767918219, 0.2208189233175247, 0.2597453360818319], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/polling-latest", 8, 0, 0.0, 11461.375, 120, 63682, 212.5, 63682.0, 63682.0, 63682.0, 0.09819203908043156, 0.5630699741018497, 0.10547972948093233], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/polling/454/result", 5, 0, 0.0, 94.6, 83, 117, 90.0, 117.0, 117.0, 117.0, 0.07885937795722667, 0.07377664461232729, 0.0841731446359851], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=kabkota", 40, 0, 0.0, 9068.0, 71, 67090, 97.0, 52177.19999999999, 63215.44999999997, 67090.0, 0.45166098326596055, 0.3753549773040356, 0.49312205008920307], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/staff/login", 105, 0, 0.0, 86205.74285714286, 2250, 147085, 100268.0, 140584.2, 143363.69999999998, 147000.82, 0.591239519575659, 0.7644542225763403, 0.32910793570129454], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-geo", 12, 0, 0.0, 7485.166666666668, 76, 25140, 97.0, 24798.600000000002, 25140.0, 25140.0, 0.14321176245942333, 0.5313100445149895, 0.15356104998090508], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/categories?type=aspirasi", 14, 0, 0.0, 3261.285714285714, 72, 24460, 88.5, 21945.0, 24460.0, 24460.0, 0.17264341735312977, 0.5266973005968529, 0.18528819889754847], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-category-counts?limit=7", 16, 0, 0.0, 4421.375, 81, 49131, 96.0, 28526.500000000022, 49131.0, 49131.0, 0.1895397737368951, 0.20656873778356927, 0.20693893265414912], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/areas?parent_id=1&depth=2&all=true", 24, 0, 0.0, 10250.416666666666, 71, 72076, 89.0, 65167.5, 70577.25, 72076.0, 0.2700847390868885, 2.009019001586748, 0.29250388246812437], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 488, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
