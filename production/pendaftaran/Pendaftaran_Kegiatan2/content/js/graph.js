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
        data: {"result": {"minY": 114.0, "minX": 0.0, "maxY": 4090.0, "series": [{"data": [[0.0, 114.0], [0.1, 114.0], [0.2, 114.0], [0.3, 114.0], [0.4, 114.0], [0.5, 114.0], [0.6, 114.0], [0.7, 114.0], [0.8, 114.0], [0.9, 114.0], [1.0, 117.0], [1.1, 117.0], [1.2, 117.0], [1.3, 117.0], [1.4, 117.0], [1.5, 117.0], [1.6, 117.0], [1.7, 117.0], [1.8, 117.0], [1.9, 117.0], [2.0, 122.0], [2.1, 122.0], [2.2, 122.0], [2.3, 122.0], [2.4, 122.0], [2.5, 122.0], [2.6, 122.0], [2.7, 122.0], [2.8, 122.0], [2.9, 122.0], [3.0, 176.0], [3.1, 176.0], [3.2, 176.0], [3.3, 176.0], [3.4, 176.0], [3.5, 176.0], [3.6, 176.0], [3.7, 176.0], [3.8, 176.0], [3.9, 176.0], [4.0, 181.0], [4.1, 181.0], [4.2, 181.0], [4.3, 181.0], [4.4, 181.0], [4.5, 181.0], [4.6, 181.0], [4.7, 181.0], [4.8, 181.0], [4.9, 181.0], [5.0, 182.0], [5.1, 182.0], [5.2, 182.0], [5.3, 182.0], [5.4, 182.0], [5.5, 182.0], [5.6, 182.0], [5.7, 182.0], [5.8, 182.0], [5.9, 182.0], [6.0, 183.0], [6.1, 183.0], [6.2, 183.0], [6.3, 183.0], [6.4, 183.0], [6.5, 183.0], [6.6, 183.0], [6.7, 183.0], [6.8, 183.0], [6.9, 183.0], [7.0, 190.0], [7.1, 190.0], [7.2, 190.0], [7.3, 190.0], [7.4, 190.0], [7.5, 190.0], [7.6, 190.0], [7.7, 190.0], [7.8, 190.0], [7.9, 190.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 192.0], [8.5, 192.0], [8.6, 192.0], [8.7, 192.0], [8.8, 192.0], [8.9, 192.0], [9.0, 197.0], [9.1, 197.0], [9.2, 197.0], [9.3, 197.0], [9.4, 197.0], [9.5, 197.0], [9.6, 197.0], [9.7, 197.0], [9.8, 197.0], [9.9, 197.0], [10.0, 198.0], [10.1, 198.0], [10.2, 198.0], [10.3, 198.0], [10.4, 198.0], [10.5, 198.0], [10.6, 198.0], [10.7, 198.0], [10.8, 198.0], [10.9, 198.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 199.0], [11.6, 199.0], [11.7, 199.0], [11.8, 199.0], [11.9, 199.0], [12.0, 200.0], [12.1, 200.0], [12.2, 200.0], [12.3, 200.0], [12.4, 200.0], [12.5, 200.0], [12.6, 200.0], [12.7, 200.0], [12.8, 200.0], [12.9, 200.0], [13.0, 200.0], [13.1, 200.0], [13.2, 200.0], [13.3, 200.0], [13.4, 200.0], [13.5, 200.0], [13.6, 200.0], [13.7, 200.0], [13.8, 200.0], [13.9, 200.0], [14.0, 200.0], [14.1, 200.0], [14.2, 200.0], [14.3, 200.0], [14.4, 200.0], [14.5, 200.0], [14.6, 200.0], [14.7, 200.0], [14.8, 200.0], [14.9, 200.0], [15.0, 201.0], [15.1, 201.0], [15.2, 201.0], [15.3, 201.0], [15.4, 201.0], [15.5, 201.0], [15.6, 201.0], [15.7, 201.0], [15.8, 201.0], [15.9, 201.0], [16.0, 206.0], [16.1, 206.0], [16.2, 206.0], [16.3, 206.0], [16.4, 206.0], [16.5, 206.0], [16.6, 206.0], [16.7, 206.0], [16.8, 206.0], [16.9, 206.0], [17.0, 207.0], [17.1, 207.0], [17.2, 207.0], [17.3, 207.0], [17.4, 207.0], [17.5, 207.0], [17.6, 207.0], [17.7, 207.0], [17.8, 207.0], [17.9, 207.0], [18.0, 207.0], [18.1, 207.0], [18.2, 207.0], [18.3, 207.0], [18.4, 207.0], [18.5, 207.0], [18.6, 207.0], [18.7, 207.0], [18.8, 207.0], [18.9, 207.0], [19.0, 209.0], [19.1, 209.0], [19.2, 209.0], [19.3, 209.0], [19.4, 209.0], [19.5, 209.0], [19.6, 209.0], [19.7, 209.0], [19.8, 209.0], [19.9, 209.0], [20.0, 209.0], [20.1, 209.0], [20.2, 209.0], [20.3, 209.0], [20.4, 209.0], [20.5, 209.0], [20.6, 209.0], [20.7, 209.0], [20.8, 209.0], [20.9, 209.0], [21.0, 211.0], [21.1, 211.0], [21.2, 211.0], [21.3, 211.0], [21.4, 211.0], [21.5, 211.0], [21.6, 211.0], [21.7, 211.0], [21.8, 211.0], [21.9, 211.0], [22.0, 212.0], [22.1, 212.0], [22.2, 212.0], [22.3, 212.0], [22.4, 212.0], [22.5, 212.0], [22.6, 212.0], [22.7, 212.0], [22.8, 212.0], [22.9, 212.0], [23.0, 212.0], [23.1, 212.0], [23.2, 212.0], [23.3, 212.0], [23.4, 212.0], [23.5, 212.0], [23.6, 212.0], [23.7, 212.0], [23.8, 212.0], [23.9, 212.0], [24.0, 212.0], [24.1, 212.0], [24.2, 212.0], [24.3, 212.0], [24.4, 212.0], [24.5, 212.0], [24.6, 212.0], [24.7, 212.0], [24.8, 212.0], [24.9, 212.0], [25.0, 213.0], [25.1, 213.0], [25.2, 213.0], [25.3, 213.0], [25.4, 213.0], [25.5, 213.0], [25.6, 213.0], [25.7, 213.0], [25.8, 213.0], [25.9, 213.0], [26.0, 213.0], [26.1, 213.0], [26.2, 213.0], [26.3, 213.0], [26.4, 213.0], [26.5, 213.0], [26.6, 213.0], [26.7, 213.0], [26.8, 213.0], [26.9, 213.0], [27.0, 214.0], [27.1, 214.0], [27.2, 214.0], [27.3, 214.0], [27.4, 214.0], [27.5, 214.0], [27.6, 214.0], [27.7, 214.0], [27.8, 214.0], [27.9, 214.0], [28.0, 214.0], [28.1, 214.0], [28.2, 214.0], [28.3, 214.0], [28.4, 214.0], [28.5, 214.0], [28.6, 214.0], [28.7, 214.0], [28.8, 214.0], [28.9, 214.0], [29.0, 214.0], [29.1, 214.0], [29.2, 214.0], [29.3, 214.0], [29.4, 214.0], [29.5, 214.0], [29.6, 214.0], [29.7, 214.0], [29.8, 214.0], [29.9, 214.0], [30.0, 219.0], [30.1, 219.0], [30.2, 219.0], [30.3, 219.0], [30.4, 219.0], [30.5, 219.0], [30.6, 219.0], [30.7, 219.0], [30.8, 219.0], [30.9, 219.0], [31.0, 220.0], [31.1, 220.0], [31.2, 220.0], [31.3, 220.0], [31.4, 220.0], [31.5, 220.0], [31.6, 220.0], [31.7, 220.0], [31.8, 220.0], [31.9, 220.0], [32.0, 220.0], [32.1, 220.0], [32.2, 220.0], [32.3, 220.0], [32.4, 220.0], [32.5, 220.0], [32.6, 220.0], [32.7, 220.0], [32.8, 220.0], [32.9, 220.0], [33.0, 220.0], [33.1, 220.0], [33.2, 220.0], [33.3, 220.0], [33.4, 220.0], [33.5, 220.0], [33.6, 220.0], [33.7, 220.0], [33.8, 220.0], [33.9, 220.0], [34.0, 221.0], [34.1, 221.0], [34.2, 221.0], [34.3, 221.0], [34.4, 221.0], [34.5, 221.0], [34.6, 221.0], [34.7, 221.0], [34.8, 221.0], [34.9, 221.0], [35.0, 224.0], [35.1, 224.0], [35.2, 224.0], [35.3, 224.0], [35.4, 224.0], [35.5, 224.0], [35.6, 224.0], [35.7, 224.0], [35.8, 224.0], [35.9, 224.0], [36.0, 224.0], [36.1, 224.0], [36.2, 224.0], [36.3, 224.0], [36.4, 224.0], [36.5, 224.0], [36.6, 224.0], [36.7, 224.0], [36.8, 224.0], [36.9, 224.0], [37.0, 225.0], [37.1, 225.0], [37.2, 225.0], [37.3, 225.0], [37.4, 225.0], [37.5, 225.0], [37.6, 225.0], [37.7, 225.0], [37.8, 225.0], [37.9, 225.0], [38.0, 226.0], [38.1, 226.0], [38.2, 226.0], [38.3, 226.0], [38.4, 226.0], [38.5, 226.0], [38.6, 226.0], [38.7, 226.0], [38.8, 226.0], [38.9, 226.0], [39.0, 226.0], [39.1, 226.0], [39.2, 226.0], [39.3, 226.0], [39.4, 226.0], [39.5, 226.0], [39.6, 226.0], [39.7, 226.0], [39.8, 226.0], [39.9, 226.0], [40.0, 226.0], [40.1, 226.0], [40.2, 226.0], [40.3, 226.0], [40.4, 226.0], [40.5, 226.0], [40.6, 226.0], [40.7, 226.0], [40.8, 226.0], [40.9, 226.0], [41.0, 227.0], [41.1, 227.0], [41.2, 227.0], [41.3, 227.0], [41.4, 227.0], [41.5, 227.0], [41.6, 227.0], [41.7, 227.0], [41.8, 227.0], [41.9, 227.0], [42.0, 227.0], [42.1, 227.0], [42.2, 227.0], [42.3, 227.0], [42.4, 227.0], [42.5, 227.0], [42.6, 227.0], [42.7, 227.0], [42.8, 227.0], [42.9, 227.0], [43.0, 229.0], [43.1, 229.0], [43.2, 229.0], [43.3, 229.0], [43.4, 229.0], [43.5, 229.0], [43.6, 229.0], [43.7, 229.0], [43.8, 229.0], [43.9, 229.0], [44.0, 229.0], [44.1, 229.0], [44.2, 229.0], [44.3, 229.0], [44.4, 229.0], [44.5, 229.0], [44.6, 229.0], [44.7, 229.0], [44.8, 229.0], [44.9, 229.0], [45.0, 229.0], [45.1, 229.0], [45.2, 229.0], [45.3, 229.0], [45.4, 229.0], [45.5, 229.0], [45.6, 229.0], [45.7, 229.0], [45.8, 229.0], [45.9, 229.0], [46.0, 229.0], [46.1, 229.0], [46.2, 229.0], [46.3, 229.0], [46.4, 229.0], [46.5, 229.0], [46.6, 229.0], [46.7, 229.0], [46.8, 229.0], [46.9, 229.0], [47.0, 230.0], [47.1, 230.0], [47.2, 230.0], [47.3, 230.0], [47.4, 230.0], [47.5, 230.0], [47.6, 230.0], [47.7, 230.0], [47.8, 230.0], [47.9, 230.0], [48.0, 238.0], [48.1, 238.0], [48.2, 238.0], [48.3, 238.0], [48.4, 238.0], [48.5, 238.0], [48.6, 238.0], [48.7, 238.0], [48.8, 238.0], [48.9, 238.0], [49.0, 239.0], [49.1, 239.0], [49.2, 239.0], [49.3, 239.0], [49.4, 239.0], [49.5, 239.0], [49.6, 239.0], [49.7, 239.0], [49.8, 239.0], [49.9, 239.0], [50.0, 240.0], [50.1, 240.0], [50.2, 240.0], [50.3, 240.0], [50.4, 240.0], [50.5, 240.0], [50.6, 240.0], [50.7, 240.0], [50.8, 240.0], [50.9, 240.0], [51.0, 240.0], [51.1, 240.0], [51.2, 240.0], [51.3, 240.0], [51.4, 240.0], [51.5, 240.0], [51.6, 240.0], [51.7, 240.0], [51.8, 240.0], [51.9, 240.0], [52.0, 240.0], [52.1, 240.0], [52.2, 240.0], [52.3, 240.0], [52.4, 240.0], [52.5, 240.0], [52.6, 240.0], [52.7, 240.0], [52.8, 240.0], [52.9, 240.0], [53.0, 241.0], [53.1, 241.0], [53.2, 241.0], [53.3, 241.0], [53.4, 241.0], [53.5, 241.0], [53.6, 241.0], [53.7, 241.0], [53.8, 241.0], [53.9, 241.0], [54.0, 244.0], [54.1, 244.0], [54.2, 244.0], [54.3, 244.0], [54.4, 244.0], [54.5, 244.0], [54.6, 244.0], [54.7, 244.0], [54.8, 244.0], [54.9, 244.0], [55.0, 244.0], [55.1, 244.0], [55.2, 244.0], [55.3, 244.0], [55.4, 244.0], [55.5, 244.0], [55.6, 244.0], [55.7, 244.0], [55.8, 244.0], [55.9, 244.0], [56.0, 245.0], [56.1, 245.0], [56.2, 245.0], [56.3, 245.0], [56.4, 245.0], [56.5, 245.0], [56.6, 245.0], [56.7, 245.0], [56.8, 245.0], [56.9, 245.0], [57.0, 246.0], [57.1, 246.0], [57.2, 246.0], [57.3, 246.0], [57.4, 246.0], [57.5, 246.0], [57.6, 246.0], [57.7, 246.0], [57.8, 246.0], [57.9, 246.0], [58.0, 250.0], [58.1, 250.0], [58.2, 250.0], [58.3, 250.0], [58.4, 250.0], [58.5, 250.0], [58.6, 250.0], [58.7, 250.0], [58.8, 250.0], [58.9, 250.0], [59.0, 251.0], [59.1, 251.0], [59.2, 251.0], [59.3, 251.0], [59.4, 251.0], [59.5, 251.0], [59.6, 251.0], [59.7, 251.0], [59.8, 251.0], [59.9, 251.0], [60.0, 251.0], [60.1, 251.0], [60.2, 251.0], [60.3, 251.0], [60.4, 251.0], [60.5, 251.0], [60.6, 251.0], [60.7, 251.0], [60.8, 251.0], [60.9, 251.0], [61.0, 252.0], [61.1, 252.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 252.0], [61.7, 252.0], [61.8, 252.0], [61.9, 252.0], [62.0, 253.0], [62.1, 253.0], [62.2, 253.0], [62.3, 253.0], [62.4, 253.0], [62.5, 253.0], [62.6, 253.0], [62.7, 253.0], [62.8, 253.0], [62.9, 253.0], [63.0, 253.0], [63.1, 253.0], [63.2, 253.0], [63.3, 253.0], [63.4, 253.0], [63.5, 253.0], [63.6, 253.0], [63.7, 253.0], [63.8, 253.0], [63.9, 253.0], [64.0, 254.0], [64.1, 254.0], [64.2, 254.0], [64.3, 254.0], [64.4, 254.0], [64.5, 254.0], [64.6, 254.0], [64.7, 254.0], [64.8, 254.0], [64.9, 254.0], [65.0, 254.0], [65.1, 254.0], [65.2, 254.0], [65.3, 254.0], [65.4, 254.0], [65.5, 254.0], [65.6, 254.0], [65.7, 254.0], [65.8, 254.0], [65.9, 254.0], [66.0, 255.0], [66.1, 255.0], [66.2, 255.0], [66.3, 255.0], [66.4, 255.0], [66.5, 255.0], [66.6, 255.0], [66.7, 255.0], [66.8, 255.0], [66.9, 255.0], [67.0, 256.0], [67.1, 256.0], [67.2, 256.0], [67.3, 256.0], [67.4, 256.0], [67.5, 256.0], [67.6, 256.0], [67.7, 256.0], [67.8, 256.0], [67.9, 256.0], [68.0, 256.0], [68.1, 256.0], [68.2, 256.0], [68.3, 256.0], [68.4, 256.0], [68.5, 256.0], [68.6, 256.0], [68.7, 256.0], [68.8, 256.0], [68.9, 256.0], [69.0, 256.0], [69.1, 256.0], [69.2, 256.0], [69.3, 256.0], [69.4, 256.0], [69.5, 256.0], [69.6, 256.0], [69.7, 256.0], [69.8, 256.0], [69.9, 256.0], [70.0, 257.0], [70.1, 257.0], [70.2, 257.0], [70.3, 257.0], [70.4, 257.0], [70.5, 257.0], [70.6, 257.0], [70.7, 257.0], [70.8, 257.0], [70.9, 257.0], [71.0, 257.0], [71.1, 257.0], [71.2, 257.0], [71.3, 257.0], [71.4, 257.0], [71.5, 257.0], [71.6, 257.0], [71.7, 257.0], [71.8, 257.0], [71.9, 257.0], [72.0, 259.0], [72.1, 259.0], [72.2, 259.0], [72.3, 259.0], [72.4, 259.0], [72.5, 259.0], [72.6, 259.0], [72.7, 259.0], [72.8, 259.0], [72.9, 259.0], [73.0, 260.0], [73.1, 260.0], [73.2, 260.0], [73.3, 260.0], [73.4, 260.0], [73.5, 260.0], [73.6, 260.0], [73.7, 260.0], [73.8, 260.0], [73.9, 260.0], [74.0, 261.0], [74.1, 261.0], [74.2, 261.0], [74.3, 261.0], [74.4, 261.0], [74.5, 261.0], [74.6, 261.0], [74.7, 261.0], [74.8, 261.0], [74.9, 261.0], [75.0, 262.0], [75.1, 262.0], [75.2, 262.0], [75.3, 262.0], [75.4, 262.0], [75.5, 262.0], [75.6, 262.0], [75.7, 262.0], [75.8, 262.0], [75.9, 262.0], [76.0, 262.0], [76.1, 262.0], [76.2, 262.0], [76.3, 262.0], [76.4, 262.0], [76.5, 262.0], [76.6, 262.0], [76.7, 262.0], [76.8, 262.0], [76.9, 262.0], [77.0, 264.0], [77.1, 264.0], [77.2, 264.0], [77.3, 264.0], [77.4, 264.0], [77.5, 264.0], [77.6, 264.0], [77.7, 264.0], [77.8, 264.0], [77.9, 264.0], [78.0, 264.0], [78.1, 264.0], [78.2, 264.0], [78.3, 264.0], [78.4, 264.0], [78.5, 264.0], [78.6, 264.0], [78.7, 264.0], [78.8, 264.0], [78.9, 264.0], [79.0, 264.0], [79.1, 264.0], [79.2, 264.0], [79.3, 264.0], [79.4, 264.0], [79.5, 264.0], [79.6, 264.0], [79.7, 264.0], [79.8, 264.0], [79.9, 264.0], [80.0, 265.0], [80.1, 265.0], [80.2, 265.0], [80.3, 265.0], [80.4, 265.0], [80.5, 265.0], [80.6, 265.0], [80.7, 265.0], [80.8, 265.0], [80.9, 265.0], [81.0, 267.0], [81.1, 267.0], [81.2, 267.0], [81.3, 267.0], [81.4, 267.0], [81.5, 267.0], [81.6, 267.0], [81.7, 267.0], [81.8, 267.0], [81.9, 267.0], [82.0, 267.0], [82.1, 267.0], [82.2, 267.0], [82.3, 267.0], [82.4, 267.0], [82.5, 267.0], [82.6, 267.0], [82.7, 267.0], [82.8, 267.0], [82.9, 267.0], [83.0, 267.0], [83.1, 267.0], [83.2, 267.0], [83.3, 267.0], [83.4, 267.0], [83.5, 267.0], [83.6, 267.0], [83.7, 267.0], [83.8, 267.0], [83.9, 267.0], [84.0, 267.0], [84.1, 267.0], [84.2, 267.0], [84.3, 267.0], [84.4, 267.0], [84.5, 267.0], [84.6, 267.0], [84.7, 267.0], [84.8, 267.0], [84.9, 267.0], [85.0, 269.0], [85.1, 269.0], [85.2, 269.0], [85.3, 269.0], [85.4, 269.0], [85.5, 269.0], [85.6, 269.0], [85.7, 269.0], [85.8, 269.0], [85.9, 269.0], [86.0, 271.0], [86.1, 271.0], [86.2, 271.0], [86.3, 271.0], [86.4, 271.0], [86.5, 271.0], [86.6, 271.0], [86.7, 271.0], [86.8, 271.0], [86.9, 271.0], [87.0, 274.0], [87.1, 274.0], [87.2, 274.0], [87.3, 274.0], [87.4, 274.0], [87.5, 274.0], [87.6, 274.0], [87.7, 274.0], [87.8, 274.0], [87.9, 274.0], [88.0, 274.0], [88.1, 274.0], [88.2, 274.0], [88.3, 274.0], [88.4, 274.0], [88.5, 274.0], [88.6, 274.0], [88.7, 274.0], [88.8, 274.0], [88.9, 274.0], [89.0, 275.0], [89.1, 275.0], [89.2, 275.0], [89.3, 275.0], [89.4, 275.0], [89.5, 275.0], [89.6, 275.0], [89.7, 275.0], [89.8, 275.0], [89.9, 275.0], [90.0, 275.0], [90.1, 275.0], [90.2, 275.0], [90.3, 275.0], [90.4, 275.0], [90.5, 275.0], [90.6, 275.0], [90.7, 275.0], [90.8, 275.0], [90.9, 275.0], [91.0, 278.0], [91.1, 278.0], [91.2, 278.0], [91.3, 278.0], [91.4, 278.0], [91.5, 278.0], [91.6, 278.0], [91.7, 278.0], [91.8, 278.0], [91.9, 278.0], [92.0, 288.0], [92.1, 288.0], [92.2, 288.0], [92.3, 288.0], [92.4, 288.0], [92.5, 288.0], [92.6, 288.0], [92.7, 288.0], [92.8, 288.0], [92.9, 288.0], [93.0, 320.0], [93.1, 320.0], [93.2, 320.0], [93.3, 320.0], [93.4, 320.0], [93.5, 320.0], [93.6, 320.0], [93.7, 320.0], [93.8, 320.0], [93.9, 320.0], [94.0, 456.0], [94.1, 456.0], [94.2, 456.0], [94.3, 456.0], [94.4, 456.0], [94.5, 456.0], [94.6, 456.0], [94.7, 456.0], [94.8, 456.0], [94.9, 456.0], [95.0, 565.0], [95.1, 565.0], [95.2, 565.0], [95.3, 565.0], [95.4, 565.0], [95.5, 565.0], [95.6, 565.0], [95.7, 565.0], [95.8, 565.0], [95.9, 565.0], [96.0, 1473.0], [96.1, 1473.0], [96.2, 1473.0], [96.3, 1473.0], [96.4, 1473.0], [96.5, 1473.0], [96.6, 1473.0], [96.7, 1473.0], [96.8, 1473.0], [96.9, 1473.0], [97.0, 2448.0], [97.1, 2448.0], [97.2, 2448.0], [97.3, 2448.0], [97.4, 2448.0], [97.5, 2448.0], [97.6, 2448.0], [97.7, 2448.0], [97.8, 2448.0], [97.9, 2448.0], [98.0, 3275.0], [98.1, 3275.0], [98.2, 3275.0], [98.3, 3275.0], [98.4, 3275.0], [98.5, 3275.0], [98.6, 3275.0], [98.7, 3275.0], [98.8, 3275.0], [98.9, 3275.0], [99.0, 4090.0], [99.1, 4090.0], [99.2, 4090.0], [99.3, 4090.0], [99.4, 4090.0], [99.5, 4090.0], [99.6, 4090.0], [99.7, 4090.0], [99.8, 4090.0], [99.9, 4090.0]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 81.0, "series": [{"data": [[2400.0, 1.0], [300.0, 1.0], [1400.0, 1.0], [3200.0, 1.0], [200.0, 81.0], [100.0, 12.0], [400.0, 1.0], [4000.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 92.0, "series": [{"data": [[0.0, 92.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62129252E12, "maxY": 1.188679245283019, "series": [{"data": [[1.62129258E12, 1.0], [1.62129252E12, 1.188679245283019]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62129258E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 237.52083333333326, "minX": 1.0, "maxY": 4090.0, "series": [{"data": [[4.0, 4090.0], [2.0, 2448.0], [1.0, 237.52083333333326], [5.0, 3275.0], [3.0, 1473.0]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}, {"data": [[1.1000000000000003, 340.87999999999994]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1980.2666666666667, "minX": 1.62129252E12, "maxY": 26404.55, "series": [{"data": [[1.62129258E12, 21938.666666666668], [1.62129252E12, 26404.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62129258E12, 1980.2666666666667], [1.62129252E12, 2233.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62129258E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 212.5744680851064, "minX": 1.62129252E12, "maxY": 454.6603773584904, "series": [{"data": [[1.62129258E12, 212.5744680851064], [1.62129252E12, 454.6603773584904]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62129258E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 208.23404255319147, "minX": 1.62129252E12, "maxY": 449.6603773584906, "series": [{"data": [[1.62129258E12, 208.23404255319147], [1.62129252E12, 449.6603773584906]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62129258E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 77.21276595744683, "minX": 1.62129252E12, "maxY": 230.5283018867925, "series": [{"data": [[1.62129258E12, 77.21276595744683], [1.62129252E12, 230.5283018867925]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62129258E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.62129252E12, "maxY": 4090.0, "series": [{"data": [[1.62129258E12, 275.0], [1.62129252E12, 4090.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62129258E12, 240.0], [1.62129252E12, 521.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62129258E12, 275.0], [1.62129252E12, 4090.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62129258E12, 243.25], [1.62129252E12, 2696.0999999999976]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62129258E12, 181.0], [1.62129252E12, 176.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62129258E12, 219.5], [1.62129252E12, 259.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62129258E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 2861.5, "series": [{"data": [[4.0, 2861.5], [2.0, 362.5], [1.0, 230.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 2854.0, "series": [{"data": [[4.0, 2854.0], [2.0, 357.5], [1.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.62129252E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.62129258E12, 0.7833333333333333], [1.62129252E12, 0.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62129258E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62129252E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.62129258E12, 0.7333333333333333], [1.62129252E12, 0.8833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62129258E12, 0.05]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62129258E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62129252E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.62129258E12, 0.7333333333333333], [1.62129252E12, 0.8833333333333333]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published-success", "isController": false}, {"data": [[1.62129258E12, 0.05]], "isOverall": false, "label": "api/rdt/events?page=1&per_page=50&sort_order=desc&status=published-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62129258E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62129252E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.62129258E12, 0.7333333333333333], [1.62129252E12, 0.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62129258E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62129258E12, "title": "Total Transactions Per Second"}},
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

