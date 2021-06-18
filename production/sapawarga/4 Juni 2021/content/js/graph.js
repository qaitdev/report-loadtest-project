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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 3643.0, "series": [{"data": [[0.0, 35.0], [0.1, 40.0], [0.2, 42.0], [0.3, 44.0], [0.4, 45.0], [0.5, 46.0], [0.6, 47.0], [0.7, 48.0], [0.8, 49.0], [0.9, 50.0], [1.0, 51.0], [1.1, 52.0], [1.2, 52.0], [1.3, 53.0], [1.4, 54.0], [1.5, 55.0], [1.6, 55.0], [1.7, 56.0], [1.8, 57.0], [1.9, 58.0], [2.0, 58.0], [2.1, 59.0], [2.2, 60.0], [2.3, 60.0], [2.4, 61.0], [2.5, 61.0], [2.6, 62.0], [2.7, 63.0], [2.8, 63.0], [2.9, 64.0], [3.0, 65.0], [3.1, 65.0], [3.2, 66.0], [3.3, 66.0], [3.4, 67.0], [3.5, 67.0], [3.6, 68.0], [3.7, 69.0], [3.8, 69.0], [3.9, 70.0], [4.0, 70.0], [4.1, 71.0], [4.2, 71.0], [4.3, 72.0], [4.4, 73.0], [4.5, 73.0], [4.6, 74.0], [4.7, 74.0], [4.8, 75.0], [4.9, 75.0], [5.0, 76.0], [5.1, 76.0], [5.2, 77.0], [5.3, 78.0], [5.4, 78.0], [5.5, 79.0], [5.6, 79.0], [5.7, 80.0], [5.8, 80.0], [5.9, 81.0], [6.0, 81.0], [6.1, 82.0], [6.2, 82.0], [6.3, 83.0], [6.4, 83.0], [6.5, 84.0], [6.6, 84.0], [6.7, 85.0], [6.8, 85.0], [6.9, 85.0], [7.0, 86.0], [7.1, 87.0], [7.2, 87.0], [7.3, 88.0], [7.4, 88.0], [7.5, 89.0], [7.6, 89.0], [7.7, 90.0], [7.8, 90.0], [7.9, 91.0], [8.0, 91.0], [8.1, 91.0], [8.2, 92.0], [8.3, 92.0], [8.4, 93.0], [8.5, 93.0], [8.6, 94.0], [8.7, 94.0], [8.8, 95.0], [8.9, 95.0], [9.0, 96.0], [9.1, 96.0], [9.2, 97.0], [9.3, 97.0], [9.4, 98.0], [9.5, 98.0], [9.6, 98.0], [9.7, 99.0], [9.8, 99.0], [9.9, 100.0], [10.0, 100.0], [10.1, 101.0], [10.2, 101.0], [10.3, 102.0], [10.4, 102.0], [10.5, 103.0], [10.6, 103.0], [10.7, 104.0], [10.8, 105.0], [10.9, 105.0], [11.0, 106.0], [11.1, 106.0], [11.2, 107.0], [11.3, 108.0], [11.4, 108.0], [11.5, 109.0], [11.6, 109.0], [11.7, 110.0], [11.8, 111.0], [11.9, 111.0], [12.0, 112.0], [12.1, 112.0], [12.2, 113.0], [12.3, 113.0], [12.4, 114.0], [12.5, 114.0], [12.6, 115.0], [12.7, 116.0], [12.8, 116.0], [12.9, 117.0], [13.0, 117.0], [13.1, 118.0], [13.2, 119.0], [13.3, 119.0], [13.4, 120.0], [13.5, 121.0], [13.6, 122.0], [13.7, 122.0], [13.8, 123.0], [13.9, 123.0], [14.0, 124.0], [14.1, 125.0], [14.2, 125.0], [14.3, 126.0], [14.4, 127.0], [14.5, 128.0], [14.6, 128.0], [14.7, 129.0], [14.8, 130.0], [14.9, 130.0], [15.0, 131.0], [15.1, 132.0], [15.2, 132.0], [15.3, 133.0], [15.4, 134.0], [15.5, 134.0], [15.6, 135.0], [15.7, 136.0], [15.8, 136.0], [15.9, 137.0], [16.0, 137.0], [16.1, 138.0], [16.2, 139.0], [16.3, 139.0], [16.4, 140.0], [16.5, 140.0], [16.6, 141.0], [16.7, 142.0], [16.8, 142.0], [16.9, 143.0], [17.0, 144.0], [17.1, 144.0], [17.2, 145.0], [17.3, 145.0], [17.4, 146.0], [17.5, 147.0], [17.6, 147.0], [17.7, 148.0], [17.8, 148.0], [17.9, 149.0], [18.0, 149.0], [18.1, 150.0], [18.2, 150.0], [18.3, 151.0], [18.4, 151.0], [18.5, 152.0], [18.6, 152.0], [18.7, 153.0], [18.8, 153.0], [18.9, 154.0], [19.0, 155.0], [19.1, 155.0], [19.2, 156.0], [19.3, 156.0], [19.4, 157.0], [19.5, 158.0], [19.6, 158.0], [19.7, 158.0], [19.8, 159.0], [19.9, 159.0], [20.0, 160.0], [20.1, 160.0], [20.2, 161.0], [20.3, 161.0], [20.4, 162.0], [20.5, 162.0], [20.6, 163.0], [20.7, 163.0], [20.8, 164.0], [20.9, 164.0], [21.0, 165.0], [21.1, 165.0], [21.2, 166.0], [21.3, 166.0], [21.4, 167.0], [21.5, 167.0], [21.6, 167.0], [21.7, 168.0], [21.8, 169.0], [21.9, 169.0], [22.0, 170.0], [22.1, 170.0], [22.2, 171.0], [22.3, 172.0], [22.4, 172.0], [22.5, 172.0], [22.6, 173.0], [22.7, 173.0], [22.8, 174.0], [22.9, 174.0], [23.0, 175.0], [23.1, 175.0], [23.2, 176.0], [23.3, 177.0], [23.4, 177.0], [23.5, 177.0], [23.6, 178.0], [23.7, 179.0], [23.8, 179.0], [23.9, 179.0], [24.0, 180.0], [24.1, 180.0], [24.2, 181.0], [24.3, 181.0], [24.4, 182.0], [24.5, 182.0], [24.6, 183.0], [24.7, 183.0], [24.8, 184.0], [24.9, 184.0], [25.0, 185.0], [25.1, 186.0], [25.2, 186.0], [25.3, 187.0], [25.4, 187.0], [25.5, 188.0], [25.6, 189.0], [25.7, 189.0], [25.8, 190.0], [25.9, 190.0], [26.0, 191.0], [26.1, 191.0], [26.2, 192.0], [26.3, 192.0], [26.4, 193.0], [26.5, 193.0], [26.6, 194.0], [26.7, 194.0], [26.8, 195.0], [26.9, 196.0], [27.0, 196.0], [27.1, 197.0], [27.2, 197.0], [27.3, 198.0], [27.4, 198.0], [27.5, 199.0], [27.6, 200.0], [27.7, 201.0], [27.8, 201.0], [27.9, 202.0], [28.0, 203.0], [28.1, 203.0], [28.2, 204.0], [28.3, 204.0], [28.4, 205.0], [28.5, 205.0], [28.6, 206.0], [28.7, 207.0], [28.8, 207.0], [28.9, 208.0], [29.0, 208.0], [29.1, 209.0], [29.2, 210.0], [29.3, 210.0], [29.4, 211.0], [29.5, 212.0], [29.6, 212.0], [29.7, 213.0], [29.8, 214.0], [29.9, 214.0], [30.0, 215.0], [30.1, 216.0], [30.2, 217.0], [30.3, 218.0], [30.4, 219.0], [30.5, 220.0], [30.6, 221.0], [30.7, 221.0], [30.8, 222.0], [30.9, 223.0], [31.0, 223.0], [31.1, 224.0], [31.2, 225.0], [31.3, 226.0], [31.4, 227.0], [31.5, 228.0], [31.6, 228.0], [31.7, 229.0], [31.8, 230.0], [31.9, 231.0], [32.0, 232.0], [32.1, 233.0], [32.2, 234.0], [32.3, 235.0], [32.4, 236.0], [32.5, 237.0], [32.6, 238.0], [32.7, 239.0], [32.8, 240.0], [32.9, 241.0], [33.0, 242.0], [33.1, 243.0], [33.2, 245.0], [33.3, 246.0], [33.4, 246.0], [33.5, 247.0], [33.6, 249.0], [33.7, 250.0], [33.8, 251.0], [33.9, 252.0], [34.0, 253.0], [34.1, 254.0], [34.2, 255.0], [34.3, 256.0], [34.4, 257.0], [34.5, 257.0], [34.6, 259.0], [34.7, 260.0], [34.8, 262.0], [34.9, 263.0], [35.0, 263.0], [35.1, 265.0], [35.2, 266.0], [35.3, 267.0], [35.4, 268.0], [35.5, 269.0], [35.6, 270.0], [35.7, 272.0], [35.8, 273.0], [35.9, 274.0], [36.0, 276.0], [36.1, 277.0], [36.2, 277.0], [36.3, 278.0], [36.4, 280.0], [36.5, 281.0], [36.6, 282.0], [36.7, 283.0], [36.8, 284.0], [36.9, 285.0], [37.0, 286.0], [37.1, 288.0], [37.2, 289.0], [37.3, 290.0], [37.4, 291.0], [37.5, 292.0], [37.6, 293.0], [37.7, 294.0], [37.8, 295.0], [37.9, 296.0], [38.0, 297.0], [38.1, 298.0], [38.2, 300.0], [38.3, 301.0], [38.4, 302.0], [38.5, 304.0], [38.6, 306.0], [38.7, 307.0], [38.8, 309.0], [38.9, 311.0], [39.0, 312.0], [39.1, 313.0], [39.2, 314.0], [39.3, 316.0], [39.4, 318.0], [39.5, 320.0], [39.6, 322.0], [39.7, 325.0], [39.8, 326.0], [39.9, 329.0], [40.0, 332.0], [40.1, 334.0], [40.2, 336.0], [40.3, 339.0], [40.4, 341.0], [40.5, 344.0], [40.6, 346.0], [40.7, 348.0], [40.8, 351.0], [40.9, 353.0], [41.0, 356.0], [41.1, 358.0], [41.2, 360.0], [41.3, 362.0], [41.4, 364.0], [41.5, 366.0], [41.6, 368.0], [41.7, 370.0], [41.8, 373.0], [41.9, 376.0], [42.0, 378.0], [42.1, 380.0], [42.2, 382.0], [42.3, 385.0], [42.4, 387.0], [42.5, 389.0], [42.6, 392.0], [42.7, 394.0], [42.8, 396.0], [42.9, 398.0], [43.0, 401.0], [43.1, 403.0], [43.2, 404.0], [43.3, 407.0], [43.4, 411.0], [43.5, 413.0], [43.6, 417.0], [43.7, 419.0], [43.8, 421.0], [43.9, 426.0], [44.0, 431.0], [44.1, 437.0], [44.2, 439.0], [44.3, 441.0], [44.4, 443.0], [44.5, 446.0], [44.6, 448.0], [44.7, 451.0], [44.8, 454.0], [44.9, 456.0], [45.0, 459.0], [45.1, 461.0], [45.2, 463.0], [45.3, 466.0], [45.4, 468.0], [45.5, 470.0], [45.6, 473.0], [45.7, 475.0], [45.8, 479.0], [45.9, 481.0], [46.0, 483.0], [46.1, 485.0], [46.2, 486.0], [46.3, 488.0], [46.4, 490.0], [46.5, 491.0], [46.6, 494.0], [46.7, 496.0], [46.8, 499.0], [46.9, 500.0], [47.0, 502.0], [47.1, 504.0], [47.2, 506.0], [47.3, 508.0], [47.4, 510.0], [47.5, 511.0], [47.6, 514.0], [47.7, 516.0], [47.8, 520.0], [47.9, 522.0], [48.0, 525.0], [48.1, 526.0], [48.2, 529.0], [48.3, 532.0], [48.4, 536.0], [48.5, 539.0], [48.6, 542.0], [48.7, 546.0], [48.8, 548.0], [48.9, 551.0], [49.0, 554.0], [49.1, 555.0], [49.2, 557.0], [49.3, 559.0], [49.4, 561.0], [49.5, 562.0], [49.6, 564.0], [49.7, 566.0], [49.8, 567.0], [49.9, 569.0], [50.0, 571.0], [50.1, 573.0], [50.2, 575.0], [50.3, 577.0], [50.4, 579.0], [50.5, 581.0], [50.6, 583.0], [50.7, 586.0], [50.8, 588.0], [50.9, 590.0], [51.0, 592.0], [51.1, 594.0], [51.2, 596.0], [51.3, 598.0], [51.4, 601.0], [51.5, 605.0], [51.6, 608.0], [51.7, 609.0], [51.8, 612.0], [51.9, 614.0], [52.0, 617.0], [52.1, 620.0], [52.2, 623.0], [52.3, 627.0], [52.4, 629.0], [52.5, 632.0], [52.6, 635.0], [52.7, 638.0], [52.8, 640.0], [52.9, 642.0], [53.0, 645.0], [53.1, 648.0], [53.2, 650.0], [53.3, 654.0], [53.4, 657.0], [53.5, 661.0], [53.6, 664.0], [53.7, 668.0], [53.8, 669.0], [53.9, 672.0], [54.0, 676.0], [54.1, 680.0], [54.2, 685.0], [54.3, 688.0], [54.4, 692.0], [54.5, 696.0], [54.6, 699.0], [54.7, 702.0], [54.8, 707.0], [54.9, 711.0], [55.0, 714.0], [55.1, 719.0], [55.2, 724.0], [55.3, 728.0], [55.4, 735.0], [55.5, 742.0], [55.6, 753.0], [55.7, 759.0], [55.8, 766.0], [55.9, 775.0], [56.0, 784.0], [56.1, 793.0], [56.2, 800.0], [56.3, 807.0], [56.4, 816.0], [56.5, 823.0], [56.6, 827.0], [56.7, 834.0], [56.8, 839.0], [56.9, 845.0], [57.0, 854.0], [57.1, 868.0], [57.2, 875.0], [57.3, 889.0], [57.4, 897.0], [57.5, 904.0], [57.6, 913.0], [57.7, 926.0], [57.8, 943.0], [57.9, 952.0], [58.0, 967.0], [58.1, 986.0], [58.2, 1000.0], [58.3, 1007.0], [58.4, 1023.0], [58.5, 1038.0], [58.6, 1059.0], [58.7, 1092.0], [58.8, 1118.0], [58.9, 1146.0], [59.0, 1179.0], [59.1, 1197.0], [59.2, 1210.0], [59.3, 1219.0], [59.4, 1229.0], [59.5, 1240.0], [59.6, 1254.0], [59.7, 1267.0], [59.8, 1279.0], [59.9, 1297.0], [60.0, 1308.0], [60.1, 1316.0], [60.2, 1323.0], [60.3, 1335.0], [60.4, 1347.0], [60.5, 1358.0], [60.6, 1373.0], [60.7, 1383.0], [60.8, 1395.0], [60.9, 1408.0], [61.0, 1414.0], [61.1, 1424.0], [61.2, 1434.0], [61.3, 1449.0], [61.4, 1464.0], [61.5, 1485.0], [61.6, 1501.0], [61.7, 1518.0], [61.8, 1551.0], [61.9, 1659.0], [62.0, 1696.0], [62.1, 1719.0], [62.2, 1740.0], [62.3, 1761.0], [62.4, 1787.0], [62.5, 1816.0], [62.6, 1859.0], [62.7, 1899.0], [62.8, 1914.0], [62.9, 1929.0], [63.0, 1956.0], [63.1, 1982.0], [63.2, 1996.0], [63.3, 2007.0], [63.4, 2015.0], [63.5, 2024.0], [63.6, 2033.0], [63.7, 2043.0], [63.8, 2055.0], [63.9, 2069.0], [64.0, 2081.0], [64.1, 2087.0], [64.2, 2095.0], [64.3, 2100.0], [64.4, 2105.0], [64.5, 2112.0], [64.6, 2118.0], [64.7, 2123.0], [64.8, 2127.0], [64.9, 2133.0], [65.0, 2137.0], [65.1, 2143.0], [65.2, 2149.0], [65.3, 2155.0], [65.4, 2160.0], [65.5, 2167.0], [65.6, 2173.0], [65.7, 2179.0], [65.8, 2184.0], [65.9, 2190.0], [66.0, 2193.0], [66.1, 2197.0], [66.2, 2202.0], [66.3, 2206.0], [66.4, 2209.0], [66.5, 2213.0], [66.6, 2218.0], [66.7, 2224.0], [66.8, 2228.0], [66.9, 2231.0], [67.0, 2236.0], [67.1, 2239.0], [67.2, 2243.0], [67.3, 2248.0], [67.4, 2254.0], [67.5, 2258.0], [67.6, 2262.0], [67.7, 2267.0], [67.8, 2272.0], [67.9, 2275.0], [68.0, 2278.0], [68.1, 2281.0], [68.2, 2285.0], [68.3, 2288.0], [68.4, 2291.0], [68.5, 2294.0], [68.6, 2296.0], [68.7, 2298.0], [68.8, 2300.0], [68.9, 2303.0], [69.0, 2306.0], [69.1, 2308.0], [69.2, 2310.0], [69.3, 2311.0], [69.4, 2313.0], [69.5, 2315.0], [69.6, 2318.0], [69.7, 2320.0], [69.8, 2322.0], [69.9, 2324.0], [70.0, 2325.0], [70.1, 2327.0], [70.2, 2328.0], [70.3, 2330.0], [70.4, 2332.0], [70.5, 2334.0], [70.6, 2337.0], [70.7, 2339.0], [70.8, 2340.0], [70.9, 2343.0], [71.0, 2345.0], [71.1, 2347.0], [71.2, 2349.0], [71.3, 2351.0], [71.4, 2354.0], [71.5, 2355.0], [71.6, 2358.0], [71.7, 2361.0], [71.8, 2362.0], [71.9, 2364.0], [72.0, 2368.0], [72.1, 2370.0], [72.2, 2373.0], [72.3, 2376.0], [72.4, 2378.0], [72.5, 2380.0], [72.6, 2381.0], [72.7, 2384.0], [72.8, 2386.0], [72.9, 2388.0], [73.0, 2389.0], [73.1, 2391.0], [73.2, 2393.0], [73.3, 2395.0], [73.4, 2396.0], [73.5, 2398.0], [73.6, 2400.0], [73.7, 2401.0], [73.8, 2402.0], [73.9, 2404.0], [74.0, 2405.0], [74.1, 2406.0], [74.2, 2408.0], [74.3, 2409.0], [74.4, 2410.0], [74.5, 2411.0], [74.6, 2412.0], [74.7, 2413.0], [74.8, 2414.0], [74.9, 2416.0], [75.0, 2417.0], [75.1, 2418.0], [75.2, 2420.0], [75.3, 2421.0], [75.4, 2422.0], [75.5, 2424.0], [75.6, 2425.0], [75.7, 2426.0], [75.8, 2427.0], [75.9, 2429.0], [76.0, 2430.0], [76.1, 2431.0], [76.2, 2433.0], [76.3, 2434.0], [76.4, 2435.0], [76.5, 2437.0], [76.6, 2438.0], [76.7, 2440.0], [76.8, 2441.0], [76.9, 2444.0], [77.0, 2445.0], [77.1, 2447.0], [77.2, 2449.0], [77.3, 2450.0], [77.4, 2452.0], [77.5, 2454.0], [77.6, 2455.0], [77.7, 2457.0], [77.8, 2459.0], [77.9, 2460.0], [78.0, 2462.0], [78.1, 2463.0], [78.2, 2465.0], [78.3, 2467.0], [78.4, 2468.0], [78.5, 2470.0], [78.6, 2472.0], [78.7, 2473.0], [78.8, 2476.0], [78.9, 2478.0], [79.0, 2479.0], [79.1, 2481.0], [79.2, 2482.0], [79.3, 2484.0], [79.4, 2486.0], [79.5, 2487.0], [79.6, 2489.0], [79.7, 2490.0], [79.8, 2491.0], [79.9, 2493.0], [80.0, 2494.0], [80.1, 2496.0], [80.2, 2497.0], [80.3, 2498.0], [80.4, 2500.0], [80.5, 2501.0], [80.6, 2503.0], [80.7, 2504.0], [80.8, 2505.0], [80.9, 2506.0], [81.0, 2507.0], [81.1, 2509.0], [81.2, 2510.0], [81.3, 2511.0], [81.4, 2512.0], [81.5, 2513.0], [81.6, 2514.0], [81.7, 2515.0], [81.8, 2516.0], [81.9, 2517.0], [82.0, 2518.0], [82.1, 2519.0], [82.2, 2520.0], [82.3, 2521.0], [82.4, 2522.0], [82.5, 2524.0], [82.6, 2525.0], [82.7, 2526.0], [82.8, 2527.0], [82.9, 2528.0], [83.0, 2529.0], [83.1, 2531.0], [83.2, 2532.0], [83.3, 2533.0], [83.4, 2535.0], [83.5, 2536.0], [83.6, 2538.0], [83.7, 2539.0], [83.8, 2541.0], [83.9, 2542.0], [84.0, 2543.0], [84.1, 2545.0], [84.2, 2546.0], [84.3, 2548.0], [84.4, 2549.0], [84.5, 2550.0], [84.6, 2553.0], [84.7, 2554.0], [84.8, 2556.0], [84.9, 2558.0], [85.0, 2560.0], [85.1, 2561.0], [85.2, 2563.0], [85.3, 2564.0], [85.4, 2566.0], [85.5, 2567.0], [85.6, 2569.0], [85.7, 2570.0], [85.8, 2572.0], [85.9, 2574.0], [86.0, 2577.0], [86.1, 2578.0], [86.2, 2580.0], [86.3, 2581.0], [86.4, 2583.0], [86.5, 2585.0], [86.6, 2586.0], [86.7, 2587.0], [86.8, 2589.0], [86.9, 2591.0], [87.0, 2593.0], [87.1, 2594.0], [87.2, 2595.0], [87.3, 2596.0], [87.4, 2599.0], [87.5, 2600.0], [87.6, 2602.0], [87.7, 2603.0], [87.8, 2604.0], [87.9, 2605.0], [88.0, 2607.0], [88.1, 2608.0], [88.2, 2610.0], [88.3, 2612.0], [88.4, 2614.0], [88.5, 2615.0], [88.6, 2616.0], [88.7, 2618.0], [88.8, 2619.0], [88.9, 2621.0], [89.0, 2623.0], [89.1, 2624.0], [89.2, 2627.0], [89.3, 2628.0], [89.4, 2630.0], [89.5, 2633.0], [89.6, 2635.0], [89.7, 2637.0], [89.8, 2640.0], [89.9, 2643.0], [90.0, 2645.0], [90.1, 2647.0], [90.2, 2650.0], [90.3, 2653.0], [90.4, 2655.0], [90.5, 2658.0], [90.6, 2662.0], [90.7, 2665.0], [90.8, 2668.0], [90.9, 2672.0], [91.0, 2677.0], [91.1, 2681.0], [91.2, 2685.0], [91.3, 2688.0], [91.4, 2691.0], [91.5, 2694.0], [91.6, 2696.0], [91.7, 2698.0], [91.8, 2701.0], [91.9, 2704.0], [92.0, 2706.0], [92.1, 2709.0], [92.2, 2711.0], [92.3, 2713.0], [92.4, 2715.0], [92.5, 2718.0], [92.6, 2720.0], [92.7, 2722.0], [92.8, 2724.0], [92.9, 2727.0], [93.0, 2729.0], [93.1, 2731.0], [93.2, 2734.0], [93.3, 2737.0], [93.4, 2740.0], [93.5, 2743.0], [93.6, 2747.0], [93.7, 2752.0], [93.8, 2758.0], [93.9, 2763.0], [94.0, 2769.0], [94.1, 2773.0], [94.2, 2778.0], [94.3, 2784.0], [94.4, 2788.0], [94.5, 2791.0], [94.6, 2795.0], [94.7, 2797.0], [94.8, 2803.0], [94.9, 2806.0], [95.0, 2810.0], [95.1, 2814.0], [95.2, 2816.0], [95.3, 2821.0], [95.4, 2826.0], [95.5, 2832.0], [95.6, 2836.0], [95.7, 2840.0], [95.8, 2848.0], [95.9, 2856.0], [96.0, 2864.0], [96.1, 2875.0], [96.2, 2881.0], [96.3, 2888.0], [96.4, 2896.0], [96.5, 2902.0], [96.6, 2909.0], [96.7, 2917.0], [96.8, 2922.0], [96.9, 2927.0], [97.0, 2935.0], [97.1, 2939.0], [97.2, 2952.0], [97.3, 2964.0], [97.4, 2978.0], [97.5, 2988.0], [97.6, 2997.0], [97.7, 3005.0], [97.8, 3010.0], [97.9, 3019.0], [98.0, 3031.0], [98.1, 3047.0], [98.2, 3065.0], [98.3, 3086.0], [98.4, 3102.0], [98.5, 3122.0], [98.6, 3136.0], [98.7, 3146.0], [98.8, 3164.0], [98.9, 3182.0], [99.0, 3199.0], [99.1, 3214.0], [99.2, 3225.0], [99.3, 3237.0], [99.4, 3245.0], [99.5, 3265.0], [99.6, 3285.0], [99.7, 3297.0], [99.8, 3317.0], [99.9, 3358.0]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3785.0, "series": [{"data": [[0.0, 2100.0], [600.0, 701.0], [700.0, 332.0], [800.0, 270.0], [900.0, 160.0], [1000.0, 113.0], [1100.0, 83.0], [1200.0, 178.0], [1300.0, 190.0], [1400.0, 163.0], [1500.0, 54.0], [100.0, 3785.0], [1600.0, 37.0], [1700.0, 90.0], [1800.0, 57.0], [1900.0, 117.0], [2000.0, 223.0], [2100.0, 396.0], [2200.0, 558.0], [2300.0, 1030.0], [2400.0, 1454.0], [2500.0, 1509.0], [2600.0, 921.0], [2700.0, 640.0], [2800.0, 369.0], [2900.0, 250.0], [3000.0, 162.0], [3100.0, 132.0], [200.0, 2277.0], [3200.0, 156.0], [3300.0, 44.0], [3400.0, 7.0], [3500.0, 5.0], [3600.0, 1.0], [300.0, 1021.0], [400.0, 829.0], [500.0, 967.0]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3142.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10028.0, "series": [{"data": [[0.0, 10028.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3142.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8211.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 25.320791436912124, "minX": 1.62302634E12, "maxY": 100.0, "series": [{"data": [[1.62302664E12, 95.37276995305164], [1.62302634E12, 25.320791436912124], [1.62302652E12, 100.0], [1.6230264E12, 76.63486153130101], [1.62302658E12, 100.0], [1.62302646E12, 100.0]], "isOverall": false, "label": "Performance Test Pelaporan", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62302664E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 88.7142857142857, "minX": 1.0, "maxY": 1672.581818181818, "series": [{"data": [[2.0, 96.60975609756099], [3.0, 88.7142857142857], [4.0, 110.5185185185185], [5.0, 121.24561403508773], [6.0, 133.45000000000002], [7.0, 148.94827586206898], [8.0, 249.4375], [9.0, 166.11940298507463], [10.0, 195.30985915492954], [11.0, 157.01515151515153], [12.0, 228.0277777777777], [13.0, 210.41095890410955], [14.0, 223.07142857142858], [15.0, 236.10958904109586], [16.0, 245.28767123287665], [17.0, 251.9305555555556], [18.0, 271.53521126760563], [19.0, 303.4117647058825], [20.0, 302.49999999999994], [21.0, 449.18749999999994], [22.0, 361.93939393939394], [23.0, 301.6184210526314], [24.0, 374.2051282051283], [25.0, 356.06578947368416], [26.0, 380.5342465753426], [27.0, 380.089552238806], [28.0, 461.608695652174], [29.0, 396.62337662337666], [30.0, 458.9117647058824], [31.0, 468.40789473684225], [32.0, 452.8428571428571], [33.0, 453.825], [34.0, 458.5696202531647], [35.0, 481.94871794871807], [36.0, 485.1052631578949], [37.0, 492.5789473684208], [38.0, 689.8499999999999], [39.0, 536.3918918918919], [40.0, 578.361111111111], [41.0, 548.6315789473686], [42.0, 559.0374999999997], [43.0, 603.2191780821918], [44.0, 678.3809523809524], [45.0, 806.2153846153847], [46.0, 616.7468354430376], [47.0, 637.4189189189186], [48.0, 678.420289855072], [49.0, 710.3815789473684], [50.0, 678.8933333333331], [51.0, 744.8695652173913], [52.0, 718.4054054054054], [53.0, 716.3437499999999], [54.0, 729.3684210526319], [55.0, 758.5324675324674], [56.0, 700.4615384615385], [57.0, 775.4594594594595], [58.0, 815.0945945945948], [59.0, 837.3943661971833], [60.0, 849.1805555555554], [61.0, 816.051948051948], [62.0, 1001.6461538461537], [63.0, 1126.709677419355], [64.0, 926.4625], [65.0, 882.3380281690139], [66.0, 983.2923076923076], [67.0, 959.1851851851853], [68.0, 880.4193548387098], [69.0, 1050.0579710144928], [70.0, 913.5731707317073], [71.0, 890.5263157894735], [72.0, 1034.2875], [73.0, 983.9090909090907], [74.0, 967.7222222222223], [75.0, 935.5070422535211], [76.0, 1084.4166666666667], [77.0, 919.4507042253522], [78.0, 1082.8], [79.0, 1511.3389830508472], [80.0, 1176.2162162162153], [81.0, 1123.5714285714282], [82.0, 1086.3589743589746], [83.0, 1081.5263157894738], [84.0, 827.8301886792453], [85.0, 1221.8028169014083], [86.0, 1361.4743589743584], [87.0, 1066.9729729729727], [88.0, 1149.2625000000003], [89.0, 1230.2957746478874], [90.0, 1132.0410958904101], [91.0, 1240.6835443037976], [92.0, 1119.736842105263], [93.0, 1247.7594936708865], [94.0, 1243.4769230769234], [95.0, 1350.547619047619], [96.0, 1185.8815789473686], [97.0, 1396.67088607595], [98.0, 1672.581818181818], [99.0, 1391.2000000000007], [100.0, 1391.2765162004928], [1.0, 746.0]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}, {"data": [[84.30550488751757, 1176.0915298629607]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12212.0, "minX": 1.62302634E12, "maxY": 1763781.7166666666, "series": [{"data": [[1.62302664E12, 425272.25], [1.62302634E12, 1231092.1166666667], [1.62302652E12, 1750204.95], [1.6230264E12, 1715862.8], [1.62302658E12, 1651573.7333333334], [1.62302646E12, 1763781.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62302664E12, 12212.0], [1.62302634E12, 35351.73333333333], [1.62302652E12, 50258.4], [1.6230264E12, 49272.26666666667], [1.62302658E12, 47426.13333333333], [1.62302646E12, 50648.26666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62302664E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 353.3412260784949, "minX": 1.62302634E12, "maxY": 1478.3643192488266, "series": [{"data": [[1.62302664E12, 1478.3643192488266], [1.62302634E12, 353.3412260784949], [1.62302652E12, 1365.4227697923775], [1.6230264E12, 1047.7451710495723], [1.62302658E12, 1449.7587040618944], [1.62302646E12, 1358.2053429929806]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62302664E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 332.55497891663936, "minX": 1.62302634E12, "maxY": 1458.0713615023487, "series": [{"data": [[1.62302664E12, 1458.0713615023487], [1.62302634E12, 332.55497891663936], [1.62302652E12, 1336.371891398582], [1.6230264E12, 1016.6981615080289], [1.62302658E12, 1429.7139748549307], [1.62302646E12, 1327.8838578220527]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62302664E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.066666666666667, "minX": 1.62302634E12, "maxY": 1.9370742783003623, "series": [{"data": [[1.62302664E12, 1.066666666666667], [1.62302634E12, 1.9370742783003623], [1.62302652E12, 1.2500570385580636], [1.6230264E12, 1.74377472655341], [1.62302658E12, 1.491779497098645], [1.62302646E12, 1.7079465700701884]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62302664E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.62302634E12, "maxY": 3643.0, "series": [{"data": [[1.62302664E12, 3515.0], [1.62302634E12, 1619.0], [1.62302652E12, 3643.0], [1.6230264E12, 3119.0], [1.62302658E12, 3567.0], [1.62302646E12, 3188.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62302664E12, 2718.8], [1.62302634E12, 702.0], [1.62302652E12, 2614.0], [1.6230264E12, 2307.4000000000005], [1.62302658E12, 2952.3], [1.62302646E12, 2597.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62302664E12, 2951.7], [1.62302634E12, 1002.0], [1.62302652E12, 2939.0], [1.6230264E12, 2709.0], [1.62302658E12, 3315.0], [1.62302646E12, 3052.6399999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62302664E12, 2790.0], [1.62302634E12, 827.0], [1.62302652E12, 2736.0], [1.6230264E12, 2521.0], [1.62302658E12, 3199.1499999999996], [1.62302646E12, 2838.0999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62302664E12, 37.0], [1.62302634E12, 35.0], [1.62302652E12, 41.0], [1.6230264E12, 42.0], [1.62302658E12, 37.0], [1.62302646E12, 42.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62302664E12, 2269.0], [1.62302634E12, 276.0], [1.62302652E12, 1362.0], [1.6230264E12, 758.0], [1.62302658E12, 734.5], [1.62302646E12, 894.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62302664E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 2722.5, "series": [{"data": [[36.0, 160.5], [37.0, 367.0], [40.0, 2722.5], [44.0, 288.0], [46.0, 192.5], [47.0, 2390.0], [49.0, 117.0], [48.0, 2322.0], [51.0, 45.0], [50.0, 1377.5], [53.0, 197.0], [54.0, 280.0], [55.0, 609.0], [57.0, 146.0], [56.0, 2590.0], [59.0, 187.0], [58.0, 616.0], [60.0, 867.0], [61.0, 740.0], [63.0, 670.0], [62.0, 613.5], [67.0, 917.0], [66.0, 371.0], [64.0, 614.5], [65.0, 708.5], [71.0, 265.0], [69.0, 582.5], [68.0, 267.5], [70.0, 374.5], [73.0, 565.0], [72.0, 427.0], [75.0, 570.0], [74.0, 578.0], [77.0, 548.0], [76.0, 663.5], [78.0, 587.5], [79.0, 663.0], [80.0, 681.0], [82.0, 2073.0], [81.0, 320.0], [83.0, 2282.0], [86.0, 1940.0], [85.0, 2231.0], [84.0, 2314.0], [87.0, 2292.0], [1.0, 415.0], [22.0, 47.0], [26.0, 2149.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 35.5, "minX": 1.0, "maxY": 2703.5, "series": [{"data": [[36.0, 143.0], [37.0, 339.0], [40.0, 2703.5], [44.0, 226.0], [46.0, 177.5], [47.0, 2364.0], [49.0, 96.0], [48.0, 2303.5], [51.0, 37.0], [50.0, 1355.5], [53.0, 180.0], [54.0, 262.0], [55.0, 589.5], [57.0, 129.5], [56.0, 2568.5], [59.0, 171.0], [58.0, 565.0], [60.0, 849.0], [61.0, 685.0], [63.0, 645.0], [62.0, 592.5], [67.0, 881.0], [66.0, 331.0], [64.0, 594.5], [65.0, 681.5], [71.0, 240.0], [69.0, 560.5], [68.0, 244.0], [70.0, 342.0], [73.0, 536.0], [72.0, 405.0], [75.0, 549.5], [74.0, 553.0], [77.0, 508.0], [76.0, 643.0], [78.0, 561.0], [79.0, 638.0], [80.0, 658.5], [82.0, 2052.0], [81.0, 289.5], [83.0, 2262.5], [86.0, 1920.5], [85.0, 2210.0], [84.0, 2295.5], [87.0, 2274.0], [1.0, 403.0], [22.0, 35.5], [26.0, 2111.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.1, "minX": 1.62302634E12, "maxY": 73.61666666666666, "series": [{"data": [[1.62302664E12, 16.1], [1.62302634E12, 52.166666666666664], [1.62302652E12, 73.03333333333333], [1.6230264E12, 72.5], [1.62302658E12, 68.93333333333334], [1.62302646E12, 73.61666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62302664E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 17.75, "minX": 1.62302634E12, "maxY": 73.61666666666666, "series": [{"data": [[1.62302664E12, 17.75], [1.62302634E12, 51.38333333333333], [1.62302652E12, 73.05], [1.6230264E12, 71.61666666666666], [1.62302658E12, 68.93333333333334], [1.62302646E12, 73.61666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62302664E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 17.75, "minX": 1.62302634E12, "maxY": 73.61666666666666, "series": [{"data": [[1.62302664E12, 17.75], [1.62302634E12, 51.38333333333333], [1.62302652E12, 73.05], [1.6230264E12, 71.61666666666666], [1.62302658E12, 68.93333333333334], [1.62302646E12, 73.61666666666666]], "isOverall": false, "label": "api.pelaporan.pikobar.jabarprov.go.id/api/users?page=1&limit=30&search=&code_district_city=32.77&address_subdistrict_code=&address_village_code=&role=-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62302664E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 17.75, "minX": 1.62302634E12, "maxY": 73.61666666666666, "series": [{"data": [[1.62302664E12, 17.75], [1.62302634E12, 51.38333333333333], [1.62302652E12, 73.05], [1.6230264E12, 71.61666666666666], [1.62302658E12, 68.93333333333334], [1.62302646E12, 73.61666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62302664E12, "title": "Total Transactions Per Second"}},
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

