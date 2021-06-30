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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 125.0, "minX": 0.0, "maxY": 11246.0, "series": [{"data": [[0.0, 125.0], [0.1, 125.0], [0.2, 125.0], [0.3, 125.0], [0.4, 125.0], [0.5, 125.0], [0.6, 125.0], [0.7, 125.0], [0.8, 125.0], [0.9, 125.0], [1.0, 131.0], [1.1, 131.0], [1.2, 131.0], [1.3, 131.0], [1.4, 131.0], [1.5, 131.0], [1.6, 131.0], [1.7, 131.0], [1.8, 131.0], [1.9, 131.0], [2.0, 762.0], [2.1, 762.0], [2.2, 762.0], [2.3, 762.0], [2.4, 762.0], [2.5, 762.0], [2.6, 762.0], [2.7, 762.0], [2.8, 762.0], [2.9, 762.0], [3.0, 808.0], [3.1, 808.0], [3.2, 808.0], [3.3, 808.0], [3.4, 808.0], [3.5, 808.0], [3.6, 808.0], [3.7, 808.0], [3.8, 808.0], [3.9, 808.0], [4.0, 810.0], [4.1, 810.0], [4.2, 810.0], [4.3, 810.0], [4.4, 810.0], [4.5, 810.0], [4.6, 810.0], [4.7, 810.0], [4.8, 810.0], [4.9, 810.0], [5.0, 814.0], [5.1, 814.0], [5.2, 814.0], [5.3, 814.0], [5.4, 814.0], [5.5, 814.0], [5.6, 814.0], [5.7, 814.0], [5.8, 814.0], [5.9, 814.0], [6.0, 818.0], [6.1, 818.0], [6.2, 818.0], [6.3, 818.0], [6.4, 818.0], [6.5, 818.0], [6.6, 818.0], [6.7, 818.0], [6.8, 818.0], [6.9, 818.0], [7.0, 821.0], [7.1, 821.0], [7.2, 821.0], [7.3, 821.0], [7.4, 821.0], [7.5, 821.0], [7.6, 821.0], [7.7, 821.0], [7.8, 821.0], [7.9, 821.0], [8.0, 826.0], [8.1, 826.0], [8.2, 826.0], [8.3, 826.0], [8.4, 826.0], [8.5, 826.0], [8.6, 826.0], [8.7, 826.0], [8.8, 826.0], [8.9, 826.0], [9.0, 827.0], [9.1, 827.0], [9.2, 827.0], [9.3, 827.0], [9.4, 827.0], [9.5, 827.0], [9.6, 827.0], [9.7, 827.0], [9.8, 827.0], [9.9, 827.0], [10.0, 827.0], [10.1, 827.0], [10.2, 827.0], [10.3, 827.0], [10.4, 827.0], [10.5, 827.0], [10.6, 827.0], [10.7, 827.0], [10.8, 827.0], [10.9, 827.0], [11.0, 830.0], [11.1, 830.0], [11.2, 830.0], [11.3, 830.0], [11.4, 830.0], [11.5, 830.0], [11.6, 830.0], [11.7, 830.0], [11.8, 830.0], [11.9, 830.0], [12.0, 831.0], [12.1, 831.0], [12.2, 831.0], [12.3, 831.0], [12.4, 831.0], [12.5, 831.0], [12.6, 831.0], [12.7, 831.0], [12.8, 831.0], [12.9, 831.0], [13.0, 831.0], [13.1, 831.0], [13.2, 831.0], [13.3, 831.0], [13.4, 831.0], [13.5, 831.0], [13.6, 831.0], [13.7, 831.0], [13.8, 831.0], [13.9, 831.0], [14.0, 833.0], [14.1, 833.0], [14.2, 833.0], [14.3, 833.0], [14.4, 833.0], [14.5, 833.0], [14.6, 833.0], [14.7, 833.0], [14.8, 833.0], [14.9, 833.0], [15.0, 833.0], [15.1, 833.0], [15.2, 833.0], [15.3, 833.0], [15.4, 833.0], [15.5, 833.0], [15.6, 833.0], [15.7, 833.0], [15.8, 833.0], [15.9, 833.0], [16.0, 834.0], [16.1, 834.0], [16.2, 834.0], [16.3, 834.0], [16.4, 834.0], [16.5, 834.0], [16.6, 834.0], [16.7, 834.0], [16.8, 834.0], [16.9, 834.0], [17.0, 834.0], [17.1, 834.0], [17.2, 834.0], [17.3, 834.0], [17.4, 834.0], [17.5, 834.0], [17.6, 834.0], [17.7, 834.0], [17.8, 834.0], [17.9, 834.0], [18.0, 836.0], [18.1, 836.0], [18.2, 836.0], [18.3, 836.0], [18.4, 836.0], [18.5, 836.0], [18.6, 836.0], [18.7, 836.0], [18.8, 836.0], [18.9, 836.0], [19.0, 840.0], [19.1, 840.0], [19.2, 840.0], [19.3, 840.0], [19.4, 840.0], [19.5, 840.0], [19.6, 840.0], [19.7, 840.0], [19.8, 840.0], [19.9, 840.0], [20.0, 840.0], [20.1, 840.0], [20.2, 840.0], [20.3, 840.0], [20.4, 840.0], [20.5, 840.0], [20.6, 840.0], [20.7, 840.0], [20.8, 840.0], [20.9, 840.0], [21.0, 841.0], [21.1, 841.0], [21.2, 841.0], [21.3, 841.0], [21.4, 841.0], [21.5, 841.0], [21.6, 841.0], [21.7, 841.0], [21.8, 841.0], [21.9, 841.0], [22.0, 842.0], [22.1, 842.0], [22.2, 842.0], [22.3, 842.0], [22.4, 842.0], [22.5, 842.0], [22.6, 842.0], [22.7, 842.0], [22.8, 842.0], [22.9, 842.0], [23.0, 847.0], [23.1, 847.0], [23.2, 847.0], [23.3, 847.0], [23.4, 847.0], [23.5, 847.0], [23.6, 847.0], [23.7, 847.0], [23.8, 847.0], [23.9, 847.0], [24.0, 849.0], [24.1, 849.0], [24.2, 849.0], [24.3, 849.0], [24.4, 849.0], [24.5, 849.0], [24.6, 849.0], [24.7, 849.0], [24.8, 849.0], [24.9, 849.0], [25.0, 851.0], [25.1, 851.0], [25.2, 851.0], [25.3, 851.0], [25.4, 851.0], [25.5, 851.0], [25.6, 851.0], [25.7, 851.0], [25.8, 851.0], [25.9, 851.0], [26.0, 855.0], [26.1, 855.0], [26.2, 855.0], [26.3, 855.0], [26.4, 855.0], [26.5, 855.0], [26.6, 855.0], [26.7, 855.0], [26.8, 855.0], [26.9, 855.0], [27.0, 857.0], [27.1, 857.0], [27.2, 857.0], [27.3, 857.0], [27.4, 857.0], [27.5, 857.0], [27.6, 857.0], [27.7, 857.0], [27.8, 857.0], [27.9, 857.0], [28.0, 857.0], [28.1, 857.0], [28.2, 857.0], [28.3, 857.0], [28.4, 857.0], [28.5, 857.0], [28.6, 857.0], [28.7, 857.0], [28.8, 857.0], [28.9, 857.0], [29.0, 858.0], [29.1, 858.0], [29.2, 858.0], [29.3, 858.0], [29.4, 858.0], [29.5, 858.0], [29.6, 858.0], [29.7, 858.0], [29.8, 858.0], [29.9, 858.0], [30.0, 859.0], [30.1, 859.0], [30.2, 859.0], [30.3, 859.0], [30.4, 859.0], [30.5, 859.0], [30.6, 859.0], [30.7, 859.0], [30.8, 859.0], [30.9, 859.0], [31.0, 860.0], [31.1, 860.0], [31.2, 860.0], [31.3, 860.0], [31.4, 860.0], [31.5, 860.0], [31.6, 860.0], [31.7, 860.0], [31.8, 860.0], [31.9, 860.0], [32.0, 861.0], [32.1, 861.0], [32.2, 861.0], [32.3, 861.0], [32.4, 861.0], [32.5, 861.0], [32.6, 861.0], [32.7, 861.0], [32.8, 861.0], [32.9, 861.0], [33.0, 861.0], [33.1, 861.0], [33.2, 861.0], [33.3, 861.0], [33.4, 861.0], [33.5, 861.0], [33.6, 861.0], [33.7, 861.0], [33.8, 861.0], [33.9, 861.0], [34.0, 862.0], [34.1, 862.0], [34.2, 862.0], [34.3, 862.0], [34.4, 862.0], [34.5, 862.0], [34.6, 862.0], [34.7, 862.0], [34.8, 862.0], [34.9, 862.0], [35.0, 863.0], [35.1, 863.0], [35.2, 863.0], [35.3, 863.0], [35.4, 863.0], [35.5, 863.0], [35.6, 863.0], [35.7, 863.0], [35.8, 863.0], [35.9, 863.0], [36.0, 868.0], [36.1, 868.0], [36.2, 868.0], [36.3, 868.0], [36.4, 868.0], [36.5, 868.0], [36.6, 868.0], [36.7, 868.0], [36.8, 868.0], [36.9, 868.0], [37.0, 869.0], [37.1, 869.0], [37.2, 869.0], [37.3, 869.0], [37.4, 869.0], [37.5, 869.0], [37.6, 869.0], [37.7, 869.0], [37.8, 869.0], [37.9, 869.0], [38.0, 877.0], [38.1, 877.0], [38.2, 877.0], [38.3, 877.0], [38.4, 877.0], [38.5, 877.0], [38.6, 877.0], [38.7, 877.0], [38.8, 877.0], [38.9, 877.0], [39.0, 878.0], [39.1, 878.0], [39.2, 878.0], [39.3, 878.0], [39.4, 878.0], [39.5, 878.0], [39.6, 878.0], [39.7, 878.0], [39.8, 878.0], [39.9, 878.0], [40.0, 880.0], [40.1, 880.0], [40.2, 880.0], [40.3, 880.0], [40.4, 880.0], [40.5, 880.0], [40.6, 880.0], [40.7, 880.0], [40.8, 880.0], [40.9, 880.0], [41.0, 882.0], [41.1, 882.0], [41.2, 882.0], [41.3, 882.0], [41.4, 882.0], [41.5, 882.0], [41.6, 882.0], [41.7, 882.0], [41.8, 882.0], [41.9, 882.0], [42.0, 883.0], [42.1, 883.0], [42.2, 883.0], [42.3, 883.0], [42.4, 883.0], [42.5, 883.0], [42.6, 883.0], [42.7, 883.0], [42.8, 883.0], [42.9, 883.0], [43.0, 890.0], [43.1, 890.0], [43.2, 890.0], [43.3, 890.0], [43.4, 890.0], [43.5, 890.0], [43.6, 890.0], [43.7, 890.0], [43.8, 890.0], [43.9, 890.0], [44.0, 892.0], [44.1, 892.0], [44.2, 892.0], [44.3, 892.0], [44.4, 892.0], [44.5, 892.0], [44.6, 892.0], [44.7, 892.0], [44.8, 892.0], [44.9, 892.0], [45.0, 895.0], [45.1, 895.0], [45.2, 895.0], [45.3, 895.0], [45.4, 895.0], [45.5, 895.0], [45.6, 895.0], [45.7, 895.0], [45.8, 895.0], [45.9, 895.0], [46.0, 897.0], [46.1, 897.0], [46.2, 897.0], [46.3, 897.0], [46.4, 897.0], [46.5, 897.0], [46.6, 897.0], [46.7, 897.0], [46.8, 897.0], [46.9, 897.0], [47.0, 904.0], [47.1, 904.0], [47.2, 904.0], [47.3, 904.0], [47.4, 904.0], [47.5, 904.0], [47.6, 904.0], [47.7, 904.0], [47.8, 904.0], [47.9, 904.0], [48.0, 904.0], [48.1, 904.0], [48.2, 904.0], [48.3, 904.0], [48.4, 904.0], [48.5, 904.0], [48.6, 904.0], [48.7, 904.0], [48.8, 904.0], [48.9, 904.0], [49.0, 907.0], [49.1, 907.0], [49.2, 907.0], [49.3, 907.0], [49.4, 907.0], [49.5, 907.0], [49.6, 907.0], [49.7, 907.0], [49.8, 907.0], [49.9, 907.0], [50.0, 912.0], [50.1, 912.0], [50.2, 912.0], [50.3, 912.0], [50.4, 912.0], [50.5, 912.0], [50.6, 912.0], [50.7, 912.0], [50.8, 912.0], [50.9, 912.0], [51.0, 918.0], [51.1, 918.0], [51.2, 918.0], [51.3, 918.0], [51.4, 918.0], [51.5, 918.0], [51.6, 918.0], [51.7, 918.0], [51.8, 918.0], [51.9, 918.0], [52.0, 927.0], [52.1, 927.0], [52.2, 927.0], [52.3, 927.0], [52.4, 927.0], [52.5, 927.0], [52.6, 927.0], [52.7, 927.0], [52.8, 927.0], [52.9, 927.0], [53.0, 927.0], [53.1, 927.0], [53.2, 927.0], [53.3, 927.0], [53.4, 927.0], [53.5, 927.0], [53.6, 927.0], [53.7, 927.0], [53.8, 927.0], [53.9, 927.0], [54.0, 934.0], [54.1, 934.0], [54.2, 934.0], [54.3, 934.0], [54.4, 934.0], [54.5, 934.0], [54.6, 934.0], [54.7, 934.0], [54.8, 934.0], [54.9, 934.0], [55.0, 942.0], [55.1, 942.0], [55.2, 942.0], [55.3, 942.0], [55.4, 942.0], [55.5, 942.0], [55.6, 942.0], [55.7, 942.0], [55.8, 942.0], [55.9, 942.0], [56.0, 945.0], [56.1, 945.0], [56.2, 945.0], [56.3, 945.0], [56.4, 945.0], [56.5, 945.0], [56.6, 945.0], [56.7, 945.0], [56.8, 945.0], [56.9, 945.0], [57.0, 951.0], [57.1, 951.0], [57.2, 951.0], [57.3, 951.0], [57.4, 951.0], [57.5, 951.0], [57.6, 951.0], [57.7, 951.0], [57.8, 951.0], [57.9, 951.0], [58.0, 953.0], [58.1, 953.0], [58.2, 953.0], [58.3, 953.0], [58.4, 953.0], [58.5, 953.0], [58.6, 953.0], [58.7, 953.0], [58.8, 953.0], [58.9, 953.0], [59.0, 954.0], [59.1, 954.0], [59.2, 954.0], [59.3, 954.0], [59.4, 954.0], [59.5, 954.0], [59.6, 954.0], [59.7, 954.0], [59.8, 954.0], [59.9, 954.0], [60.0, 957.0], [60.1, 957.0], [60.2, 957.0], [60.3, 957.0], [60.4, 957.0], [60.5, 957.0], [60.6, 957.0], [60.7, 957.0], [60.8, 957.0], [60.9, 957.0], [61.0, 959.0], [61.1, 959.0], [61.2, 959.0], [61.3, 959.0], [61.4, 959.0], [61.5, 959.0], [61.6, 959.0], [61.7, 959.0], [61.8, 959.0], [61.9, 959.0], [62.0, 961.0], [62.1, 961.0], [62.2, 961.0], [62.3, 961.0], [62.4, 961.0], [62.5, 961.0], [62.6, 961.0], [62.7, 961.0], [62.8, 961.0], [62.9, 961.0], [63.0, 962.0], [63.1, 962.0], [63.2, 962.0], [63.3, 962.0], [63.4, 962.0], [63.5, 962.0], [63.6, 962.0], [63.7, 962.0], [63.8, 962.0], [63.9, 962.0], [64.0, 988.0], [64.1, 988.0], [64.2, 988.0], [64.3, 988.0], [64.4, 988.0], [64.5, 988.0], [64.6, 988.0], [64.7, 988.0], [64.8, 988.0], [64.9, 988.0], [65.0, 1003.0], [65.1, 1003.0], [65.2, 1003.0], [65.3, 1003.0], [65.4, 1003.0], [65.5, 1003.0], [65.6, 1003.0], [65.7, 1003.0], [65.8, 1003.0], [65.9, 1003.0], [66.0, 1014.0], [66.1, 1014.0], [66.2, 1014.0], [66.3, 1014.0], [66.4, 1014.0], [66.5, 1014.0], [66.6, 1014.0], [66.7, 1014.0], [66.8, 1014.0], [66.9, 1014.0], [67.0, 1019.0], [67.1, 1019.0], [67.2, 1019.0], [67.3, 1019.0], [67.4, 1019.0], [67.5, 1019.0], [67.6, 1019.0], [67.7, 1019.0], [67.8, 1019.0], [67.9, 1019.0], [68.0, 1022.0], [68.1, 1022.0], [68.2, 1022.0], [68.3, 1022.0], [68.4, 1022.0], [68.5, 1022.0], [68.6, 1022.0], [68.7, 1022.0], [68.8, 1022.0], [68.9, 1022.0], [69.0, 1025.0], [69.1, 1025.0], [69.2, 1025.0], [69.3, 1025.0], [69.4, 1025.0], [69.5, 1025.0], [69.6, 1025.0], [69.7, 1025.0], [69.8, 1025.0], [69.9, 1025.0], [70.0, 1059.0], [70.1, 1059.0], [70.2, 1059.0], [70.3, 1059.0], [70.4, 1059.0], [70.5, 1059.0], [70.6, 1059.0], [70.7, 1059.0], [70.8, 1059.0], [70.9, 1059.0], [71.0, 1162.0], [71.1, 1162.0], [71.2, 1162.0], [71.3, 1162.0], [71.4, 1162.0], [71.5, 1162.0], [71.6, 1162.0], [71.7, 1162.0], [71.8, 1162.0], [71.9, 1162.0], [72.0, 1163.0], [72.1, 1163.0], [72.2, 1163.0], [72.3, 1163.0], [72.4, 1163.0], [72.5, 1163.0], [72.6, 1163.0], [72.7, 1163.0], [72.8, 1163.0], [72.9, 1163.0], [73.0, 1164.0], [73.1, 1164.0], [73.2, 1164.0], [73.3, 1164.0], [73.4, 1164.0], [73.5, 1164.0], [73.6, 1164.0], [73.7, 1164.0], [73.8, 1164.0], [73.9, 1164.0], [74.0, 1167.0], [74.1, 1167.0], [74.2, 1167.0], [74.3, 1167.0], [74.4, 1167.0], [74.5, 1167.0], [74.6, 1167.0], [74.7, 1167.0], [74.8, 1167.0], [74.9, 1167.0], [75.0, 1169.0], [75.1, 1169.0], [75.2, 1169.0], [75.3, 1169.0], [75.4, 1169.0], [75.5, 1169.0], [75.6, 1169.0], [75.7, 1169.0], [75.8, 1169.0], [75.9, 1169.0], [76.0, 1169.0], [76.1, 1169.0], [76.2, 1169.0], [76.3, 1169.0], [76.4, 1169.0], [76.5, 1169.0], [76.6, 1169.0], [76.7, 1169.0], [76.8, 1169.0], [76.9, 1169.0], [77.0, 1170.0], [77.1, 1170.0], [77.2, 1170.0], [77.3, 1170.0], [77.4, 1170.0], [77.5, 1170.0], [77.6, 1170.0], [77.7, 1170.0], [77.8, 1170.0], [77.9, 1170.0], [78.0, 1176.0], [78.1, 1176.0], [78.2, 1176.0], [78.3, 1176.0], [78.4, 1176.0], [78.5, 1176.0], [78.6, 1176.0], [78.7, 1176.0], [78.8, 1176.0], [78.9, 1176.0], [79.0, 1178.0], [79.1, 1178.0], [79.2, 1178.0], [79.3, 1178.0], [79.4, 1178.0], [79.5, 1178.0], [79.6, 1178.0], [79.7, 1178.0], [79.8, 1178.0], [79.9, 1178.0], [80.0, 1178.0], [80.1, 1178.0], [80.2, 1178.0], [80.3, 1178.0], [80.4, 1178.0], [80.5, 1178.0], [80.6, 1178.0], [80.7, 1178.0], [80.8, 1178.0], [80.9, 1178.0], [81.0, 1183.0], [81.1, 1183.0], [81.2, 1183.0], [81.3, 1183.0], [81.4, 1183.0], [81.5, 1183.0], [81.6, 1183.0], [81.7, 1183.0], [81.8, 1183.0], [81.9, 1183.0], [82.0, 1196.0], [82.1, 1196.0], [82.2, 1196.0], [82.3, 1196.0], [82.4, 1196.0], [82.5, 1196.0], [82.6, 1196.0], [82.7, 1196.0], [82.8, 1196.0], [82.9, 1196.0], [83.0, 1196.0], [83.1, 1196.0], [83.2, 1196.0], [83.3, 1196.0], [83.4, 1196.0], [83.5, 1196.0], [83.6, 1196.0], [83.7, 1196.0], [83.8, 1196.0], [83.9, 1196.0], [84.0, 1201.0], [84.1, 1201.0], [84.2, 1201.0], [84.3, 1201.0], [84.4, 1201.0], [84.5, 1201.0], [84.6, 1201.0], [84.7, 1201.0], [84.8, 1201.0], [84.9, 1201.0], [85.0, 1243.0], [85.1, 1243.0], [85.2, 1243.0], [85.3, 1243.0], [85.4, 1243.0], [85.5, 1243.0], [85.6, 1243.0], [85.7, 1243.0], [85.8, 1243.0], [85.9, 1243.0], [86.0, 1262.0], [86.1, 1262.0], [86.2, 1262.0], [86.3, 1262.0], [86.4, 1262.0], [86.5, 1262.0], [86.6, 1262.0], [86.7, 1262.0], [86.8, 1262.0], [86.9, 1262.0], [87.0, 1273.0], [87.1, 1273.0], [87.2, 1273.0], [87.3, 1273.0], [87.4, 1273.0], [87.5, 1273.0], [87.6, 1273.0], [87.7, 1273.0], [87.8, 1273.0], [87.9, 1273.0], [88.0, 1309.0], [88.1, 1309.0], [88.2, 1309.0], [88.3, 1309.0], [88.4, 1309.0], [88.5, 1309.0], [88.6, 1309.0], [88.7, 1309.0], [88.8, 1309.0], [88.9, 1309.0], [89.0, 1568.0], [89.1, 1568.0], [89.2, 1568.0], [89.3, 1568.0], [89.4, 1568.0], [89.5, 1568.0], [89.6, 1568.0], [89.7, 1568.0], [89.8, 1568.0], [89.9, 1568.0], [90.0, 1623.0], [90.1, 1623.0], [90.2, 1623.0], [90.3, 1623.0], [90.4, 1623.0], [90.5, 1623.0], [90.6, 1623.0], [90.7, 1623.0], [90.8, 1623.0], [90.9, 1623.0], [91.0, 2327.0], [91.1, 2327.0], [91.2, 2327.0], [91.3, 2327.0], [91.4, 2327.0], [91.5, 2327.0], [91.6, 2327.0], [91.7, 2327.0], [91.8, 2327.0], [91.9, 2327.0], [92.0, 2432.0], [92.1, 2432.0], [92.2, 2432.0], [92.3, 2432.0], [92.4, 2432.0], [92.5, 2432.0], [92.6, 2432.0], [92.7, 2432.0], [92.8, 2432.0], [92.9, 2432.0], [93.0, 2539.0], [93.1, 2539.0], [93.2, 2539.0], [93.3, 2539.0], [93.4, 2539.0], [93.5, 2539.0], [93.6, 2539.0], [93.7, 2539.0], [93.8, 2539.0], [93.9, 2539.0], [94.0, 4209.0], [94.1, 4209.0], [94.2, 4209.0], [94.3, 4209.0], [94.4, 4209.0], [94.5, 4209.0], [94.6, 4209.0], [94.7, 4209.0], [94.8, 4209.0], [94.9, 4209.0], [95.0, 4634.0], [95.1, 4634.0], [95.2, 4634.0], [95.3, 4634.0], [95.4, 4634.0], [95.5, 4634.0], [95.6, 4634.0], [95.7, 4634.0], [95.8, 4634.0], [95.9, 4634.0], [96.0, 5524.0], [96.1, 5524.0], [96.2, 5524.0], [96.3, 5524.0], [96.4, 5524.0], [96.5, 5524.0], [96.6, 5524.0], [96.7, 5524.0], [96.8, 5524.0], [96.9, 5524.0], [97.0, 6183.0], [97.1, 6183.0], [97.2, 6183.0], [97.3, 6183.0], [97.4, 6183.0], [97.5, 6183.0], [97.6, 6183.0], [97.7, 6183.0], [97.8, 6183.0], [97.9, 6183.0], [98.0, 6828.0], [98.1, 6828.0], [98.2, 6828.0], [98.3, 6828.0], [98.4, 6828.0], [98.5, 6828.0], [98.6, 6828.0], [98.7, 6828.0], [98.8, 6828.0], [98.9, 6828.0], [99.0, 11246.0], [99.1, 11246.0], [99.2, 11246.0], [99.3, 11246.0], [99.4, 11246.0], [99.5, 11246.0], [99.6, 11246.0], [99.7, 11246.0], [99.8, 11246.0], [99.9, 11246.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 44.0, "series": [{"data": [[2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 1.0], [11200.0, 1.0], [800.0, 44.0], [900.0, 18.0], [1000.0, 6.0], [4200.0, 1.0], [4600.0, 1.0], [1100.0, 13.0], [1200.0, 4.0], [1300.0, 1.0], [5500.0, 1.0], [1500.0, 1.0], [6100.0, 1.0], [1600.0, 1.0], [100.0, 2.0], [6800.0, 1.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 87.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 87.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.5344827586206893, "minX": 1.62014094E12, "maxY": 1.8809523809523807, "series": [{"data": [[1.62014094E12, 1.8809523809523807], [1.620141E12, 1.5344827586206893]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.620141E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 840.7800000000001, "minX": 1.0, "maxY": 5524.0, "series": [{"data": [[4.0, 5524.0], [2.0, 1348.1282051282053], [1.0, 840.7800000000001], [5.0, 3025.0], [3.0, 3278.4285714285716]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}, {"data": [[1.68, 1321.640000000001]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1788.5, "minX": 1.62014094E12, "maxY": 110769.85, "series": [{"data": [[1.62014094E12, 83068.83333333333], [1.620141E12, 110769.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62014094E12, 1788.5], [1.620141E12, 2469.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.620141E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1147.8793103448274, "minX": 1.62014094E12, "maxY": 1561.5952380952383, "series": [{"data": [[1.62014094E12, 1561.5952380952383], [1.620141E12, 1147.8793103448274]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.620141E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 808.2413793103448, "minX": 1.62014094E12, "maxY": 1189.5238095238094, "series": [{"data": [[1.62014094E12, 1189.5238095238094], [1.620141E12, 808.2413793103448]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.620141E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 89.86206896551725, "minX": 1.62014094E12, "maxY": 221.85714285714283, "series": [{"data": [[1.62014094E12, 221.85714285714283], [1.620141E12, 89.86206896551725]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.620141E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 762.0, "minX": 1.62014094E12, "maxY": 11246.0, "series": [{"data": [[1.62014094E12, 11246.0], [1.620141E12, 6828.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62014094E12, 3708.0000000000045], [1.620141E12, 1213.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62014094E12, 11246.0], [1.620141E12, 6828.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62014094E12, 5390.500000000001], [1.620141E12, 2306.9999999999936]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62014094E12, 762.0], [1.620141E12, 818.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62014094E12, 900.5], [1.620141E12, 922.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.620141E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 125.0, "minX": 1.0, "maxY": 4634.0, "series": [{"data": [[1.0, 904.0], [2.0, 945.0], [3.0, 4634.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 125.0], [1.0, 131.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 125.0, "minX": 1.0, "maxY": 4573.0, "series": [{"data": [[1.0, 727.0], [2.0, 774.0], [3.0, 4573.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 125.0], [1.0, 131.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.62014094E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.62014094E12, 0.7333333333333333], [1.620141E12, 0.9333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.620141E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62014094E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.62014094E12, 0.7], [1.620141E12, 0.9333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.620141E12, 0.03333333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.620141E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62014094E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.62014094E12, 0.7], [1.620141E12, 0.9333333333333333]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-success", "isController": false}, {"data": [[1.620141E12, 0.03333333333333333]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.620141E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62014094E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.62014094E12, 0.7], [1.620141E12, 0.9333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.620141E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.620141E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

