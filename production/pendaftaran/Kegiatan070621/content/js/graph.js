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
        data: {"result": {"minY": 142.0, "minX": 0.0, "maxY": 3995.0, "series": [{"data": [[0.0, 142.0], [0.1, 142.0], [0.2, 142.0], [0.3, 142.0], [0.4, 142.0], [0.5, 142.0], [0.6, 142.0], [0.7, 142.0], [0.8, 142.0], [0.9, 142.0], [1.0, 161.0], [1.1, 161.0], [1.2, 161.0], [1.3, 161.0], [1.4, 161.0], [1.5, 161.0], [1.6, 161.0], [1.7, 161.0], [1.8, 161.0], [1.9, 161.0], [2.0, 181.0], [2.1, 181.0], [2.2, 181.0], [2.3, 181.0], [2.4, 181.0], [2.5, 181.0], [2.6, 181.0], [2.7, 181.0], [2.8, 181.0], [2.9, 181.0], [3.0, 186.0], [3.1, 186.0], [3.2, 186.0], [3.3, 186.0], [3.4, 186.0], [3.5, 186.0], [3.6, 186.0], [3.7, 186.0], [3.8, 186.0], [3.9, 186.0], [4.0, 187.0], [4.1, 187.0], [4.2, 187.0], [4.3, 187.0], [4.4, 187.0], [4.5, 187.0], [4.6, 187.0], [4.7, 187.0], [4.8, 187.0], [4.9, 187.0], [5.0, 188.0], [5.1, 188.0], [5.2, 188.0], [5.3, 188.0], [5.4, 188.0], [5.5, 188.0], [5.6, 188.0], [5.7, 188.0], [5.8, 188.0], [5.9, 188.0], [6.0, 189.0], [6.1, 189.0], [6.2, 189.0], [6.3, 189.0], [6.4, 189.0], [6.5, 189.0], [6.6, 189.0], [6.7, 189.0], [6.8, 189.0], [6.9, 189.0], [7.0, 189.0], [7.1, 189.0], [7.2, 189.0], [7.3, 189.0], [7.4, 189.0], [7.5, 189.0], [7.6, 189.0], [7.7, 189.0], [7.8, 189.0], [7.9, 189.0], [8.0, 190.0], [8.1, 190.0], [8.2, 190.0], [8.3, 190.0], [8.4, 190.0], [8.5, 190.0], [8.6, 190.0], [8.7, 190.0], [8.8, 190.0], [8.9, 190.0], [9.0, 190.0], [9.1, 190.0], [9.2, 190.0], [9.3, 190.0], [9.4, 190.0], [9.5, 190.0], [9.6, 190.0], [9.7, 190.0], [9.8, 190.0], [9.9, 190.0], [10.0, 191.0], [10.1, 191.0], [10.2, 191.0], [10.3, 191.0], [10.4, 191.0], [10.5, 191.0], [10.6, 191.0], [10.7, 191.0], [10.8, 191.0], [10.9, 191.0], [11.0, 191.0], [11.1, 191.0], [11.2, 191.0], [11.3, 191.0], [11.4, 191.0], [11.5, 191.0], [11.6, 191.0], [11.7, 191.0], [11.8, 191.0], [11.9, 191.0], [12.0, 192.0], [12.1, 192.0], [12.2, 192.0], [12.3, 192.0], [12.4, 192.0], [12.5, 192.0], [12.6, 192.0], [12.7, 192.0], [12.8, 192.0], [12.9, 192.0], [13.0, 193.0], [13.1, 193.0], [13.2, 193.0], [13.3, 193.0], [13.4, 193.0], [13.5, 193.0], [13.6, 193.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 193.0], [14.1, 193.0], [14.2, 193.0], [14.3, 193.0], [14.4, 193.0], [14.5, 193.0], [14.6, 193.0], [14.7, 193.0], [14.8, 193.0], [14.9, 193.0], [15.0, 194.0], [15.1, 194.0], [15.2, 194.0], [15.3, 194.0], [15.4, 194.0], [15.5, 194.0], [15.6, 194.0], [15.7, 194.0], [15.8, 194.0], [15.9, 194.0], [16.0, 194.0], [16.1, 194.0], [16.2, 194.0], [16.3, 194.0], [16.4, 194.0], [16.5, 194.0], [16.6, 194.0], [16.7, 194.0], [16.8, 194.0], [16.9, 194.0], [17.0, 195.0], [17.1, 195.0], [17.2, 195.0], [17.3, 195.0], [17.4, 195.0], [17.5, 195.0], [17.6, 195.0], [17.7, 195.0], [17.8, 195.0], [17.9, 195.0], [18.0, 196.0], [18.1, 196.0], [18.2, 196.0], [18.3, 196.0], [18.4, 196.0], [18.5, 196.0], [18.6, 196.0], [18.7, 196.0], [18.8, 196.0], [18.9, 196.0], [19.0, 197.0], [19.1, 197.0], [19.2, 197.0], [19.3, 197.0], [19.4, 197.0], [19.5, 197.0], [19.6, 197.0], [19.7, 197.0], [19.8, 197.0], [19.9, 197.0], [20.0, 198.0], [20.1, 198.0], [20.2, 198.0], [20.3, 198.0], [20.4, 198.0], [20.5, 198.0], [20.6, 198.0], [20.7, 198.0], [20.8, 198.0], [20.9, 198.0], [21.0, 200.0], [21.1, 200.0], [21.2, 200.0], [21.3, 200.0], [21.4, 200.0], [21.5, 200.0], [21.6, 200.0], [21.7, 200.0], [21.8, 200.0], [21.9, 200.0], [22.0, 203.0], [22.1, 203.0], [22.2, 203.0], [22.3, 203.0], [22.4, 203.0], [22.5, 203.0], [22.6, 203.0], [22.7, 203.0], [22.8, 203.0], [22.9, 203.0], [23.0, 204.0], [23.1, 204.0], [23.2, 204.0], [23.3, 204.0], [23.4, 204.0], [23.5, 204.0], [23.6, 204.0], [23.7, 204.0], [23.8, 204.0], [23.9, 204.0], [24.0, 204.0], [24.1, 204.0], [24.2, 204.0], [24.3, 204.0], [24.4, 204.0], [24.5, 204.0], [24.6, 204.0], [24.7, 204.0], [24.8, 204.0], [24.9, 204.0], [25.0, 205.0], [25.1, 205.0], [25.2, 205.0], [25.3, 205.0], [25.4, 205.0], [25.5, 205.0], [25.6, 205.0], [25.7, 205.0], [25.8, 205.0], [25.9, 205.0], [26.0, 205.0], [26.1, 205.0], [26.2, 205.0], [26.3, 205.0], [26.4, 205.0], [26.5, 205.0], [26.6, 205.0], [26.7, 205.0], [26.8, 205.0], [26.9, 205.0], [27.0, 206.0], [27.1, 206.0], [27.2, 206.0], [27.3, 206.0], [27.4, 206.0], [27.5, 206.0], [27.6, 206.0], [27.7, 206.0], [27.8, 206.0], [27.9, 206.0], [28.0, 207.0], [28.1, 207.0], [28.2, 207.0], [28.3, 207.0], [28.4, 207.0], [28.5, 207.0], [28.6, 207.0], [28.7, 207.0], [28.8, 207.0], [28.9, 207.0], [29.0, 208.0], [29.1, 208.0], [29.2, 208.0], [29.3, 208.0], [29.4, 208.0], [29.5, 208.0], [29.6, 208.0], [29.7, 208.0], [29.8, 208.0], [29.9, 208.0], [30.0, 209.0], [30.1, 209.0], [30.2, 209.0], [30.3, 209.0], [30.4, 209.0], [30.5, 209.0], [30.6, 209.0], [30.7, 209.0], [30.8, 209.0], [30.9, 209.0], [31.0, 210.0], [31.1, 210.0], [31.2, 210.0], [31.3, 210.0], [31.4, 210.0], [31.5, 210.0], [31.6, 210.0], [31.7, 210.0], [31.8, 210.0], [31.9, 210.0], [32.0, 210.0], [32.1, 210.0], [32.2, 210.0], [32.3, 210.0], [32.4, 210.0], [32.5, 210.0], [32.6, 210.0], [32.7, 210.0], [32.8, 210.0], [32.9, 210.0], [33.0, 212.0], [33.1, 212.0], [33.2, 212.0], [33.3, 212.0], [33.4, 212.0], [33.5, 212.0], [33.6, 212.0], [33.7, 212.0], [33.8, 212.0], [33.9, 212.0], [34.0, 212.0], [34.1, 212.0], [34.2, 212.0], [34.3, 212.0], [34.4, 212.0], [34.5, 212.0], [34.6, 212.0], [34.7, 212.0], [34.8, 212.0], [34.9, 212.0], [35.0, 213.0], [35.1, 213.0], [35.2, 213.0], [35.3, 213.0], [35.4, 213.0], [35.5, 213.0], [35.6, 213.0], [35.7, 213.0], [35.8, 213.0], [35.9, 213.0], [36.0, 213.0], [36.1, 213.0], [36.2, 213.0], [36.3, 213.0], [36.4, 213.0], [36.5, 213.0], [36.6, 213.0], [36.7, 213.0], [36.8, 213.0], [36.9, 213.0], [37.0, 214.0], [37.1, 214.0], [37.2, 214.0], [37.3, 214.0], [37.4, 214.0], [37.5, 214.0], [37.6, 214.0], [37.7, 214.0], [37.8, 214.0], [37.9, 214.0], [38.0, 214.0], [38.1, 214.0], [38.2, 214.0], [38.3, 214.0], [38.4, 214.0], [38.5, 214.0], [38.6, 214.0], [38.7, 214.0], [38.8, 214.0], [38.9, 214.0], [39.0, 214.0], [39.1, 214.0], [39.2, 214.0], [39.3, 214.0], [39.4, 214.0], [39.5, 214.0], [39.6, 214.0], [39.7, 214.0], [39.8, 214.0], [39.9, 214.0], [40.0, 215.0], [40.1, 215.0], [40.2, 215.0], [40.3, 215.0], [40.4, 215.0], [40.5, 215.0], [40.6, 215.0], [40.7, 215.0], [40.8, 215.0], [40.9, 215.0], [41.0, 216.0], [41.1, 216.0], [41.2, 216.0], [41.3, 216.0], [41.4, 216.0], [41.5, 216.0], [41.6, 216.0], [41.7, 216.0], [41.8, 216.0], [41.9, 216.0], [42.0, 216.0], [42.1, 216.0], [42.2, 216.0], [42.3, 216.0], [42.4, 216.0], [42.5, 216.0], [42.6, 216.0], [42.7, 216.0], [42.8, 216.0], [42.9, 216.0], [43.0, 217.0], [43.1, 217.0], [43.2, 217.0], [43.3, 217.0], [43.4, 217.0], [43.5, 217.0], [43.6, 217.0], [43.7, 217.0], [43.8, 217.0], [43.9, 217.0], [44.0, 219.0], [44.1, 219.0], [44.2, 219.0], [44.3, 219.0], [44.4, 219.0], [44.5, 219.0], [44.6, 219.0], [44.7, 219.0], [44.8, 219.0], [44.9, 219.0], [45.0, 220.0], [45.1, 220.0], [45.2, 220.0], [45.3, 220.0], [45.4, 220.0], [45.5, 220.0], [45.6, 220.0], [45.7, 220.0], [45.8, 220.0], [45.9, 220.0], [46.0, 221.0], [46.1, 221.0], [46.2, 221.0], [46.3, 221.0], [46.4, 221.0], [46.5, 221.0], [46.6, 221.0], [46.7, 221.0], [46.8, 221.0], [46.9, 221.0], [47.0, 225.0], [47.1, 225.0], [47.2, 225.0], [47.3, 225.0], [47.4, 225.0], [47.5, 225.0], [47.6, 225.0], [47.7, 225.0], [47.8, 225.0], [47.9, 225.0], [48.0, 227.0], [48.1, 227.0], [48.2, 227.0], [48.3, 227.0], [48.4, 227.0], [48.5, 227.0], [48.6, 227.0], [48.7, 227.0], [48.8, 227.0], [48.9, 227.0], [49.0, 227.0], [49.1, 227.0], [49.2, 227.0], [49.3, 227.0], [49.4, 227.0], [49.5, 227.0], [49.6, 227.0], [49.7, 227.0], [49.8, 227.0], [49.9, 227.0], [50.0, 228.0], [50.1, 228.0], [50.2, 228.0], [50.3, 228.0], [50.4, 228.0], [50.5, 228.0], [50.6, 228.0], [50.7, 228.0], [50.8, 228.0], [50.9, 228.0], [51.0, 229.0], [51.1, 229.0], [51.2, 229.0], [51.3, 229.0], [51.4, 229.0], [51.5, 229.0], [51.6, 229.0], [51.7, 229.0], [51.8, 229.0], [51.9, 229.0], [52.0, 230.0], [52.1, 230.0], [52.2, 230.0], [52.3, 230.0], [52.4, 230.0], [52.5, 230.0], [52.6, 230.0], [52.7, 230.0], [52.8, 230.0], [52.9, 230.0], [53.0, 230.0], [53.1, 230.0], [53.2, 230.0], [53.3, 230.0], [53.4, 230.0], [53.5, 230.0], [53.6, 230.0], [53.7, 230.0], [53.8, 230.0], [53.9, 230.0], [54.0, 231.0], [54.1, 231.0], [54.2, 231.0], [54.3, 231.0], [54.4, 231.0], [54.5, 231.0], [54.6, 231.0], [54.7, 231.0], [54.8, 231.0], [54.9, 231.0], [55.0, 232.0], [55.1, 232.0], [55.2, 232.0], [55.3, 232.0], [55.4, 232.0], [55.5, 232.0], [55.6, 232.0], [55.7, 232.0], [55.8, 232.0], [55.9, 232.0], [56.0, 233.0], [56.1, 233.0], [56.2, 233.0], [56.3, 233.0], [56.4, 233.0], [56.5, 233.0], [56.6, 233.0], [56.7, 233.0], [56.8, 233.0], [56.9, 233.0], [57.0, 234.0], [57.1, 234.0], [57.2, 234.0], [57.3, 234.0], [57.4, 234.0], [57.5, 234.0], [57.6, 234.0], [57.7, 234.0], [57.8, 234.0], [57.9, 234.0], [58.0, 234.0], [58.1, 234.0], [58.2, 234.0], [58.3, 234.0], [58.4, 234.0], [58.5, 234.0], [58.6, 234.0], [58.7, 234.0], [58.8, 234.0], [58.9, 234.0], [59.0, 236.0], [59.1, 236.0], [59.2, 236.0], [59.3, 236.0], [59.4, 236.0], [59.5, 236.0], [59.6, 236.0], [59.7, 236.0], [59.8, 236.0], [59.9, 236.0], [60.0, 237.0], [60.1, 237.0], [60.2, 237.0], [60.3, 237.0], [60.4, 237.0], [60.5, 237.0], [60.6, 237.0], [60.7, 237.0], [60.8, 237.0], [60.9, 237.0], [61.0, 238.0], [61.1, 238.0], [61.2, 238.0], [61.3, 238.0], [61.4, 238.0], [61.5, 238.0], [61.6, 238.0], [61.7, 238.0], [61.8, 238.0], [61.9, 238.0], [62.0, 239.0], [62.1, 239.0], [62.2, 239.0], [62.3, 239.0], [62.4, 239.0], [62.5, 239.0], [62.6, 239.0], [62.7, 239.0], [62.8, 239.0], [62.9, 239.0], [63.0, 240.0], [63.1, 240.0], [63.2, 240.0], [63.3, 240.0], [63.4, 240.0], [63.5, 240.0], [63.6, 240.0], [63.7, 240.0], [63.8, 240.0], [63.9, 240.0], [64.0, 240.0], [64.1, 240.0], [64.2, 240.0], [64.3, 240.0], [64.4, 240.0], [64.5, 240.0], [64.6, 240.0], [64.7, 240.0], [64.8, 240.0], [64.9, 240.0], [65.0, 242.0], [65.1, 242.0], [65.2, 242.0], [65.3, 242.0], [65.4, 242.0], [65.5, 242.0], [65.6, 242.0], [65.7, 242.0], [65.8, 242.0], [65.9, 242.0], [66.0, 245.0], [66.1, 245.0], [66.2, 245.0], [66.3, 245.0], [66.4, 245.0], [66.5, 245.0], [66.6, 245.0], [66.7, 245.0], [66.8, 245.0], [66.9, 245.0], [67.0, 245.0], [67.1, 245.0], [67.2, 245.0], [67.3, 245.0], [67.4, 245.0], [67.5, 245.0], [67.6, 245.0], [67.7, 245.0], [67.8, 245.0], [67.9, 245.0], [68.0, 252.0], [68.1, 252.0], [68.2, 252.0], [68.3, 252.0], [68.4, 252.0], [68.5, 252.0], [68.6, 252.0], [68.7, 252.0], [68.8, 252.0], [68.9, 252.0], [69.0, 255.0], [69.1, 255.0], [69.2, 255.0], [69.3, 255.0], [69.4, 255.0], [69.5, 255.0], [69.6, 255.0], [69.7, 255.0], [69.8, 255.0], [69.9, 255.0], [70.0, 256.0], [70.1, 256.0], [70.2, 256.0], [70.3, 256.0], [70.4, 256.0], [70.5, 256.0], [70.6, 256.0], [70.7, 256.0], [70.8, 256.0], [70.9, 256.0], [71.0, 261.0], [71.1, 261.0], [71.2, 261.0], [71.3, 261.0], [71.4, 261.0], [71.5, 261.0], [71.6, 261.0], [71.7, 261.0], [71.8, 261.0], [71.9, 261.0], [72.0, 262.0], [72.1, 262.0], [72.2, 262.0], [72.3, 262.0], [72.4, 262.0], [72.5, 262.0], [72.6, 262.0], [72.7, 262.0], [72.8, 262.0], [72.9, 262.0], [73.0, 262.0], [73.1, 262.0], [73.2, 262.0], [73.3, 262.0], [73.4, 262.0], [73.5, 262.0], [73.6, 262.0], [73.7, 262.0], [73.8, 262.0], [73.9, 262.0], [74.0, 263.0], [74.1, 263.0], [74.2, 263.0], [74.3, 263.0], [74.4, 263.0], [74.5, 263.0], [74.6, 263.0], [74.7, 263.0], [74.8, 263.0], [74.9, 263.0], [75.0, 263.0], [75.1, 263.0], [75.2, 263.0], [75.3, 263.0], [75.4, 263.0], [75.5, 263.0], [75.6, 263.0], [75.7, 263.0], [75.8, 263.0], [75.9, 263.0], [76.0, 265.0], [76.1, 265.0], [76.2, 265.0], [76.3, 265.0], [76.4, 265.0], [76.5, 265.0], [76.6, 265.0], [76.7, 265.0], [76.8, 265.0], [76.9, 265.0], [77.0, 267.0], [77.1, 267.0], [77.2, 267.0], [77.3, 267.0], [77.4, 267.0], [77.5, 267.0], [77.6, 267.0], [77.7, 267.0], [77.8, 267.0], [77.9, 267.0], [78.0, 269.0], [78.1, 269.0], [78.2, 269.0], [78.3, 269.0], [78.4, 269.0], [78.5, 269.0], [78.6, 269.0], [78.7, 269.0], [78.8, 269.0], [78.9, 269.0], [79.0, 269.0], [79.1, 269.0], [79.2, 269.0], [79.3, 269.0], [79.4, 269.0], [79.5, 269.0], [79.6, 269.0], [79.7, 269.0], [79.8, 269.0], [79.9, 269.0], [80.0, 271.0], [80.1, 271.0], [80.2, 271.0], [80.3, 271.0], [80.4, 271.0], [80.5, 271.0], [80.6, 271.0], [80.7, 271.0], [80.8, 271.0], [80.9, 271.0], [81.0, 272.0], [81.1, 272.0], [81.2, 272.0], [81.3, 272.0], [81.4, 272.0], [81.5, 272.0], [81.6, 272.0], [81.7, 272.0], [81.8, 272.0], [81.9, 272.0], [82.0, 272.0], [82.1, 272.0], [82.2, 272.0], [82.3, 272.0], [82.4, 272.0], [82.5, 272.0], [82.6, 272.0], [82.7, 272.0], [82.8, 272.0], [82.9, 272.0], [83.0, 274.0], [83.1, 274.0], [83.2, 274.0], [83.3, 274.0], [83.4, 274.0], [83.5, 274.0], [83.6, 274.0], [83.7, 274.0], [83.8, 274.0], [83.9, 274.0], [84.0, 276.0], [84.1, 276.0], [84.2, 276.0], [84.3, 276.0], [84.4, 276.0], [84.5, 276.0], [84.6, 276.0], [84.7, 276.0], [84.8, 276.0], [84.9, 276.0], [85.0, 277.0], [85.1, 277.0], [85.2, 277.0], [85.3, 277.0], [85.4, 277.0], [85.5, 277.0], [85.6, 277.0], [85.7, 277.0], [85.8, 277.0], [85.9, 277.0], [86.0, 282.0], [86.1, 282.0], [86.2, 282.0], [86.3, 282.0], [86.4, 282.0], [86.5, 282.0], [86.6, 282.0], [86.7, 282.0], [86.8, 282.0], [86.9, 282.0], [87.0, 285.0], [87.1, 285.0], [87.2, 285.0], [87.3, 285.0], [87.4, 285.0], [87.5, 285.0], [87.6, 285.0], [87.7, 285.0], [87.8, 285.0], [87.9, 285.0], [88.0, 292.0], [88.1, 292.0], [88.2, 292.0], [88.3, 292.0], [88.4, 292.0], [88.5, 292.0], [88.6, 292.0], [88.7, 292.0], [88.8, 292.0], [88.9, 292.0], [89.0, 322.0], [89.1, 322.0], [89.2, 322.0], [89.3, 322.0], [89.4, 322.0], [89.5, 322.0], [89.6, 322.0], [89.7, 322.0], [89.8, 322.0], [89.9, 322.0], [90.0, 350.0], [90.1, 350.0], [90.2, 350.0], [90.3, 350.0], [90.4, 350.0], [90.5, 350.0], [90.6, 350.0], [90.7, 350.0], [90.8, 350.0], [90.9, 350.0], [91.0, 378.0], [91.1, 378.0], [91.2, 378.0], [91.3, 378.0], [91.4, 378.0], [91.5, 378.0], [91.6, 378.0], [91.7, 378.0], [91.8, 378.0], [91.9, 378.0], [92.0, 521.0], [92.1, 521.0], [92.2, 521.0], [92.3, 521.0], [92.4, 521.0], [92.5, 521.0], [92.6, 521.0], [92.7, 521.0], [92.8, 521.0], [92.9, 521.0], [93.0, 558.0], [93.1, 558.0], [93.2, 558.0], [93.3, 558.0], [93.4, 558.0], [93.5, 558.0], [93.6, 558.0], [93.7, 558.0], [93.8, 558.0], [93.9, 558.0], [94.0, 574.0], [94.1, 574.0], [94.2, 574.0], [94.3, 574.0], [94.4, 574.0], [94.5, 574.0], [94.6, 574.0], [94.7, 574.0], [94.8, 574.0], [94.9, 574.0], [95.0, 1171.0], [95.1, 1171.0], [95.2, 1171.0], [95.3, 1171.0], [95.4, 1171.0], [95.5, 1171.0], [95.6, 1171.0], [95.7, 1171.0], [95.8, 1171.0], [95.9, 1171.0], [96.0, 1572.0], [96.1, 1572.0], [96.2, 1572.0], [96.3, 1572.0], [96.4, 1572.0], [96.5, 1572.0], [96.6, 1572.0], [96.7, 1572.0], [96.8, 1572.0], [96.9, 1572.0], [97.0, 2765.0], [97.1, 2765.0], [97.2, 2765.0], [97.3, 2765.0], [97.4, 2765.0], [97.5, 2765.0], [97.6, 2765.0], [97.7, 2765.0], [97.8, 2765.0], [97.9, 2765.0], [98.0, 3845.0], [98.1, 3845.0], [98.2, 3845.0], [98.3, 3845.0], [98.4, 3845.0], [98.5, 3845.0], [98.6, 3845.0], [98.7, 3845.0], [98.8, 3845.0], [98.9, 3845.0], [99.0, 3995.0], [99.1, 3995.0], [99.2, 3995.0], [99.3, 3995.0], [99.4, 3995.0], [99.5, 3995.0], [99.6, 3995.0], [99.7, 3995.0], [99.8, 3995.0], [99.9, 3995.0]], "isOverall": false, "label": "Kegiatan", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 68.0, "series": [{"data": [[1100.0, 1.0], [300.0, 3.0], [2700.0, 1.0], [1500.0, 1.0], [200.0, 68.0], [100.0, 21.0], [3800.0, 1.0], [3900.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "Kegiatan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 89.0, "series": [{"data": [[0.0, 89.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62307086E12, "maxY": 1.2553191489361701, "series": [{"data": [[1.62307086E12, 1.2553191489361701], [1.62307092E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62307092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 238.8842105263158, "minX": 1.0, "maxY": 2783.5, "series": [{"data": [[2.0, 2508.0], [1.0, 238.8842105263158], [5.0, 2783.5], [3.0, 2765.0]], "isOverall": false, "label": "Kegiatan", "isController": false}, {"data": [[1.12, 360.4199999999997]], "isOverall": false, "label": "Kegiatan-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1980.2666666666667, "minX": 1.62307086E12, "maxY": 24761.85, "series": [{"data": [[1.62307086E12, 23259.9], [1.62307092E12, 24761.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62307086E12, 1980.2666666666667], [1.62307092E12, 2233.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62307092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 230.7735849056604, "minX": 1.62307086E12, "maxY": 506.61702127659566, "series": [{"data": [[1.62307086E12, 506.61702127659566], [1.62307092E12, 230.7735849056604]], "isOverall": false, "label": "Kegiatan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62307092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 225.6603773584906, "minX": 1.62307086E12, "maxY": 499.7234042553194, "series": [{"data": [[1.62307086E12, 499.7234042553194], [1.62307092E12, 225.6603773584906]], "isOverall": false, "label": "Kegiatan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62307092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 98.26415094339622, "minX": 1.62307086E12, "maxY": 270.0, "series": [{"data": [[1.62307086E12, 270.0], [1.62307092E12, 98.26415094339622]], "isOverall": false, "label": "Kegiatan", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62307092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.62307086E12, "maxY": 3995.0, "series": [{"data": [[1.62307086E12, 3995.0], [1.62307092E12, 558.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62307086E12, 1251.2000000000012], [1.62307092E12, 276.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62307086E12, 3995.0], [1.62307092E12, 558.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62307086E12, 3412.9999999999936], [1.62307092E12, 334.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62307086E12, 194.0], [1.62307092E12, 181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62307086E12, 232.0], [1.62307092E12, 212.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62307092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 161.0, "minX": 1.0, "maxY": 1968.0, "series": [{"data": [[2.0, 1065.0], [4.0, 1968.0], [1.0, 225.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 161.0, "minX": 1.0, "maxY": 1965.5, "series": [{"data": [[2.0, 1057.5], [4.0, 1965.5], [1.0, 216.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.62307086E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.62307086E12, 0.7833333333333333], [1.62307092E12, 0.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62307092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62307086E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62307086E12, 0.7833333333333333], [1.62307092E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62307092E12, 0.05]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62307092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62307086E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62307092E12, 0.05]], "isOverall": false, "label": "Kegiatan-failure", "isController": false}, {"data": [[1.62307086E12, 0.7833333333333333], [1.62307092E12, 0.8333333333333334]], "isOverall": false, "label": "Kegiatan-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62307092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62307086E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62307086E12, 0.7833333333333333], [1.62307092E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62307092E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62307092E12, "title": "Total Transactions Per Second"}},
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

