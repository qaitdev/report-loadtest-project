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

    var data = {"OkPercent": 99.9136022463416, "KoPercent": 0.08639775365840488};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5053998596036503, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.24399494310998734, 500, 1500, "api/areas/hospital"], "isController": false}, {"data": [0.5209580838323353, 500, 1500, "api/dashboard/v2/summary-case"], "isController": false}, {"data": [0.6210089399744572, 500, 1500, "api/areas/village/32.17.09.2004"], "isController": false}, {"data": [0.5952685421994884, 500, 1500, "api/areas/district-city"], "isController": false}, {"data": [0.6118633139909736, 500, 1500, "api/case-related/32.17"], "isController": false}, {"data": [0.573007367716008, 500, 1500, "api/dashboard/v2/summary-case-criteria"], "isController": false}, {"data": [0.5874751491053678, 500, 1500, "api/reports/daily-report"], "isController": false}, {"data": [0.5446945337620579, 500, 1500, "api/country"], "isController": false}, {"data": [0.2255663430420712, 500, 1500, "api/map?kode_kab=32.17"], "isController": false}, {"data": [0.6239590006406149, 500, 1500, "api/areas/sub-district/32.17.09"], "isController": false}, {"data": [0.35471698113207545, 500, 1500, "api/login"], "isController": false}, {"data": [0.575, 500, 1500, "api/dashboard/v2/visualization-case"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 18519, 16, 0.08639775365840488, 1376.1301906150427, 51, 128943, 757.0, 2329.0, 3806.0, 10372.199999999957, 47.044806755308066, 2661.8926734180263, 31.444716608481986], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["api/areas/hospital", 1582, 0, 0.0, 2397.122629582806, 175, 21247, 1841.5, 4356.700000000001, 5357.499999999999, 11655.450000000013, 5.132197891321979, 922.5969497668289, 3.4325704582319547], "isController": false}, {"data": ["api/dashboard/v2/summary-case", 1503, 1, 0.0665335994677312, 1043.8090485695277, 64, 17353, 767.0, 1856.4000000000005, 2554.6, 5440.960000000006, 5.032983960084386, 77.0078017739343, 3.352045957790577], "isController": false}, {"data": ["api/areas/village/32.17.09.2004", 1566, 0, 0.0, 698.2931034482766, 75, 4523, 588.0, 1090.6999999999996, 1430.9499999999996, 2652.6599999999926, 5.234079674323932, 5.406124506171602, 3.4962016574585637], "isController": false}, {"data": ["api/areas/district-city", 1564, 0, 0.0, 739.2864450127879, 87, 5298, 613.0, 1183.0, 1615.25, 2874.3999999999996, 5.229789738376758, 12.245674984367477, 3.4524783819752822], "isController": false}, {"data": ["api/case-related/32.17", 1551, 0, 0.0, 704.6021921341069, 59, 4720, 595.0, 1137.3999999999999, 1404.3999999999992, 2103.36, 5.191041019599443, 5.362219890665163, 3.4218287970992423], "isController": false}, {"data": ["api/dashboard/v2/summary-case-criteria", 1493, 0, 0.0, 828.4835900870728, 62, 47635, 636.0, 1259.4000000000005, 1613.8999999999994, 2764.9399999999946, 5.006992350335197, 21.46899539251064, 3.3640729853814606], "isController": false}, {"data": ["api/reports/daily-report", 1509, 0, 0.0, 768.5712392312793, 59, 9199, 628.0, 1222.0, 1620.0, 2724.500000000004, 5.044966734646117, 15.176521075022567, 3.335393046245528], "isController": false}, {"data": ["api/country", 1555, 0, 0.0, 934.3935691318335, 59, 31851, 707.0, 1621.2000000000003, 2108.2, 4251.28000000001, 5.176138500817197, 48.253565564698405, 3.3564023091236517], "isController": false}, {"data": ["api/map?kode_kab=32.17", 1545, 0, 0.0, 5268.671197411003, 192, 128943, 2050.0, 10128.400000000001, 17795.699999999986, 59579.27999999983, 3.9422316348141155, 1778.7672472634022, 2.65638655080248], "isController": false}, {"data": ["api/areas/sub-district/32.17.09", 1561, 0, 0.0, 696.0403587443947, 51, 9568, 585.0, 1037.8, 1366.299999999999, 2518.739999999997, 5.213621546518463, 5.385037280859229, 3.4825362674010045], "isController": false}, {"data": ["api/login", 1590, 15, 0.9433962264150944, 1598.5660377358479, 249, 33513, 1288.5, 2485.0, 2943.7999999999993, 7142.679999999988, 5.2837963578359695, 9.890862682565134, 3.7133097822926358], "isController": false}, {"data": ["api/dashboard/v2/visualization-case", 1500, 0, 0.0, 775.2233333333329, 60, 8574, 634.0, 1257.6000000000004, 1611.1000000000008, 2889.79, 5.018400802944129, 21.517589233439278, 3.3717380394780867], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["502/Bad Gateway", 1, 6.25, 0.005399859603650305], "isController": false}, {"data": ["500/Internal Server Error", 12, 75.0, 0.06479831524380367], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: pikobar-pelaporan-api.digitalservice.id:443 failed to respond", 3, 18.75, 0.016199578810950917], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 18519, 16, "500/Internal Server Error", 12, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: pikobar-pelaporan-api.digitalservice.id:443 failed to respond", 3, "502/Bad Gateway", 1, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["api/dashboard/v2/summary-case", 1503, 1, "500/Internal Server Error", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["api/login", 1590, 15, "500/Internal Server Error", 11, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: pikobar-pelaporan-api.digitalservice.id:443 failed to respond", 3, "502/Bad Gateway", 1, null, null, null, null], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
