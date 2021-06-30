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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.4323770491803279, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.6388888888888888, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/staff/me"], "isController": false}, {"data": [0.8333333333333334, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=provinsi"], "isController": false}, {"data": [0.5909090909090909, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-most-likes?limit=10"], "isController": false}, {"data": [0.0, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/staff/login"], "isController": false}, {"data": [1.0, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-geo"], "isController": false}, {"data": [0.5, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/categories?type=aspirasi"], "isController": false}, {"data": [1.0, 500, 1500, "https://www.google-analytics.com/j/collect?v=1&_v=j90&a=577181619&t=pageview&_s=6&dl=https%3A%2F%2Fsapawarga.jabarprov.go.id%2F&dp=%2Fprofile&ul=en-us&de=UTF-8&dt=sapawarga&sd=24-bit&sr=1366x768&vp=1366x663&je=0&_u=SACAAEABEAAAAC~&jid=1518505877&gjid=1422412857&cid=712928393.1611076125&tid=UA-140018658-12&_gid=988461125.1620048324&_r=1&z=294886018"], "isController": false}, {"data": [0.8333333333333334, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-counts"], "isController": false}, {"data": [0.0, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/polling-latest"], "isController": false}, {"data": [0.7, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=kabkota"], "isController": false}, {"data": [0.8, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-category-counts?limit=7"], "isController": false}, {"data": [0.8571428571428571, 500, 1500, "https://sapawarga.jabarprov.go.id/api/v1/areas?parent_id=1&depth=2&all=true"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 244, 0, 0.0, 62994.63524590164, 69, 180143, 63749.5, 165946.5, 172761.75, 179374.75000000003, 1.1354276700000465, 1.8309825462896179, 0.9472152284001173], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["https://sapawarga.jabarprov.go.id/api/v1/staff/me", 54, 0, 0.0, 25191.962962962964, 69, 93508, 156.0, 87500.0, 92946.0, 93508.0, 0.3816685985694495, 0.5385850829422408, 0.40365926977608774], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=provinsi", 18, 0, 0.0, 11253.722222222223, 81, 70509, 95.5, 67981.8, 70509.0, 70509.0, 0.2362080730670306, 0.44981029539131806, 0.2581219079707102], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-most-likes?limit=10", 11, 0, 0.0, 23480.0, 128, 64780, 223.0, 64762.0, 64780.0, 64780.0, 0.15651233601775702, 0.514778855183404, 0.17026830305056773], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/staff/login", 100, 0, 0.0, 128398.09000000004, 27042, 180143, 126037.5, 173134.0, 178034.0, 180142.99, 0.4653392090164125, 0.6016690554079397, 0.2590267081439015], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-geo", 2, 0, 0.0, 130.5, 94, 167, 130.5, 167.0, 167.0, 167.0, 0.280662363177098, 1.0412464040134717, 0.3009446042660679], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/categories?type=aspirasi", 4, 0, 0.0, 32053.0, 82, 64097, 32016.5, 64097.0, 64097.0, 64097.0, 0.05710777665148552, 0.17422333423753977, 0.06129047513670174], "isController": false}, {"data": ["https://www.google-analytics.com/j/collect?v=1&_v=j90&a=577181619&t=pageview&_s=6&dl=https%3A%2F%2Fsapawarga.jabarprov.go.id%2F&dp=%2Fprofile&ul=en-us&de=UTF-8&dt=sapawarga&sd=24-bit&sr=1366x768&vp=1366x663&je=0&_u=SACAAEABEAAAAC~&jid=1518505877&gjid=1422412857&cid=712928393.1611076125&tid=UA-140018658-12&_gid=988461125.1620048324&_r=1&z=294886018", 20, 0, 0.0, 101.65000000000002, 85, 118, 100.0, 115.9, 117.9, 118.0, 0.9601536245799327, 0.5260216634661546, 0.7051128180508882], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-counts", 6, 0, 0.0, 10675.666666666668, 88, 63553, 98.0, 63553.0, 63553.0, 63553.0, 0.08600424287598188, 0.07861325325382719, 0.09247135879536725], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/polling-latest", 2, 0, 0.0, 64338.0, 63960, 64716, 64338.0, 64716.0, 64716.0, 64716.0, 0.028201187269984065, 0.1617161832513149, 0.030294244137678197], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/news-most-likes?location=kabkota", 15, 0, 0.0, 17153.133333333335, 80, 65224, 93.0, 64949.2, 65224.0, 65224.0, 0.21419391689276027, 0.17800685866771385, 0.23385624910752534], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/dashboards/aspirasi-category-counts?limit=7", 5, 0, 0.0, 13004.4, 84, 64665, 93.0, 64665.0, 64665.0, 64665.0, 0.07315931171719536, 0.07973221862928714, 0.0798751079099848], "isController": false}, {"data": ["https://sapawarga.jabarprov.go.id/api/v1/areas?parent_id=1&depth=2&all=true", 7, 0, 0.0, 9159.142857142857, 86, 63436, 119.0, 63436.0, 63436.0, 63436.0, 0.10146398028699811, 0.7547374393027976, 0.10988628333816496], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 244, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
