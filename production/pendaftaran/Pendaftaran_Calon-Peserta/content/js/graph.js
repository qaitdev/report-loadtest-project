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
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 12242.0, "series": [{"data": [[0.0, 121.0], [0.1, 121.0], [0.2, 121.0], [0.3, 121.0], [0.4, 121.0], [0.5, 121.0], [0.6, 121.0], [0.7, 121.0], [0.8, 121.0], [0.9, 121.0], [1.0, 132.0], [1.1, 132.0], [1.2, 132.0], [1.3, 132.0], [1.4, 132.0], [1.5, 132.0], [1.6, 132.0], [1.7, 132.0], [1.8, 132.0], [1.9, 132.0], [2.0, 154.0], [2.1, 154.0], [2.2, 154.0], [2.3, 154.0], [2.4, 154.0], [2.5, 154.0], [2.6, 154.0], [2.7, 154.0], [2.8, 154.0], [2.9, 154.0], [3.0, 174.0], [3.1, 174.0], [3.2, 174.0], [3.3, 174.0], [3.4, 174.0], [3.5, 174.0], [3.6, 174.0], [3.7, 174.0], [3.8, 174.0], [3.9, 174.0], [4.0, 182.0], [4.1, 182.0], [4.2, 182.0], [4.3, 182.0], [4.4, 182.0], [4.5, 182.0], [4.6, 182.0], [4.7, 182.0], [4.8, 182.0], [4.9, 182.0], [5.0, 416.0], [5.1, 416.0], [5.2, 416.0], [5.3, 416.0], [5.4, 416.0], [5.5, 416.0], [5.6, 416.0], [5.7, 416.0], [5.8, 416.0], [5.9, 416.0], [6.0, 422.0], [6.1, 422.0], [6.2, 422.0], [6.3, 422.0], [6.4, 422.0], [6.5, 422.0], [6.6, 422.0], [6.7, 422.0], [6.8, 422.0], [6.9, 422.0], [7.0, 426.0], [7.1, 426.0], [7.2, 426.0], [7.3, 426.0], [7.4, 426.0], [7.5, 426.0], [7.6, 426.0], [7.7, 426.0], [7.8, 426.0], [7.9, 426.0], [8.0, 430.0], [8.1, 430.0], [8.2, 430.0], [8.3, 430.0], [8.4, 430.0], [8.5, 430.0], [8.6, 430.0], [8.7, 430.0], [8.8, 430.0], [8.9, 430.0], [9.0, 430.0], [9.1, 430.0], [9.2, 430.0], [9.3, 430.0], [9.4, 430.0], [9.5, 430.0], [9.6, 430.0], [9.7, 430.0], [9.8, 430.0], [9.9, 430.0], [10.0, 430.0], [10.1, 430.0], [10.2, 430.0], [10.3, 430.0], [10.4, 430.0], [10.5, 430.0], [10.6, 430.0], [10.7, 430.0], [10.8, 430.0], [10.9, 430.0], [11.0, 434.0], [11.1, 434.0], [11.2, 434.0], [11.3, 434.0], [11.4, 434.0], [11.5, 434.0], [11.6, 434.0], [11.7, 434.0], [11.8, 434.0], [11.9, 434.0], [12.0, 436.0], [12.1, 436.0], [12.2, 436.0], [12.3, 436.0], [12.4, 436.0], [12.5, 436.0], [12.6, 436.0], [12.7, 436.0], [12.8, 436.0], [12.9, 436.0], [13.0, 436.0], [13.1, 436.0], [13.2, 436.0], [13.3, 436.0], [13.4, 436.0], [13.5, 436.0], [13.6, 436.0], [13.7, 436.0], [13.8, 436.0], [13.9, 436.0], [14.0, 437.0], [14.1, 437.0], [14.2, 437.0], [14.3, 437.0], [14.4, 437.0], [14.5, 437.0], [14.6, 437.0], [14.7, 437.0], [14.8, 437.0], [14.9, 437.0], [15.0, 438.0], [15.1, 438.0], [15.2, 438.0], [15.3, 438.0], [15.4, 438.0], [15.5, 438.0], [15.6, 438.0], [15.7, 438.0], [15.8, 438.0], [15.9, 438.0], [16.0, 438.0], [16.1, 438.0], [16.2, 438.0], [16.3, 438.0], [16.4, 438.0], [16.5, 438.0], [16.6, 438.0], [16.7, 438.0], [16.8, 438.0], [16.9, 438.0], [17.0, 439.0], [17.1, 439.0], [17.2, 439.0], [17.3, 439.0], [17.4, 439.0], [17.5, 439.0], [17.6, 439.0], [17.7, 439.0], [17.8, 439.0], [17.9, 439.0], [18.0, 442.0], [18.1, 442.0], [18.2, 442.0], [18.3, 442.0], [18.4, 442.0], [18.5, 442.0], [18.6, 442.0], [18.7, 442.0], [18.8, 442.0], [18.9, 442.0], [19.0, 444.0], [19.1, 444.0], [19.2, 444.0], [19.3, 444.0], [19.4, 444.0], [19.5, 444.0], [19.6, 444.0], [19.7, 444.0], [19.8, 444.0], [19.9, 444.0], [20.0, 445.0], [20.1, 445.0], [20.2, 445.0], [20.3, 445.0], [20.4, 445.0], [20.5, 445.0], [20.6, 445.0], [20.7, 445.0], [20.8, 445.0], [20.9, 445.0], [21.0, 447.0], [21.1, 447.0], [21.2, 447.0], [21.3, 447.0], [21.4, 447.0], [21.5, 447.0], [21.6, 447.0], [21.7, 447.0], [21.8, 447.0], [21.9, 447.0], [22.0, 448.0], [22.1, 448.0], [22.2, 448.0], [22.3, 448.0], [22.4, 448.0], [22.5, 448.0], [22.6, 448.0], [22.7, 448.0], [22.8, 448.0], [22.9, 448.0], [23.0, 449.0], [23.1, 449.0], [23.2, 449.0], [23.3, 449.0], [23.4, 449.0], [23.5, 449.0], [23.6, 449.0], [23.7, 449.0], [23.8, 449.0], [23.9, 449.0], [24.0, 451.0], [24.1, 451.0], [24.2, 451.0], [24.3, 451.0], [24.4, 451.0], [24.5, 451.0], [24.6, 451.0], [24.7, 451.0], [24.8, 451.0], [24.9, 451.0], [25.0, 452.0], [25.1, 452.0], [25.2, 452.0], [25.3, 452.0], [25.4, 452.0], [25.5, 452.0], [25.6, 452.0], [25.7, 452.0], [25.8, 452.0], [25.9, 452.0], [26.0, 452.0], [26.1, 452.0], [26.2, 452.0], [26.3, 452.0], [26.4, 452.0], [26.5, 452.0], [26.6, 452.0], [26.7, 452.0], [26.8, 452.0], [26.9, 452.0], [27.0, 453.0], [27.1, 453.0], [27.2, 453.0], [27.3, 453.0], [27.4, 453.0], [27.5, 453.0], [27.6, 453.0], [27.7, 453.0], [27.8, 453.0], [27.9, 453.0], [28.0, 453.0], [28.1, 453.0], [28.2, 453.0], [28.3, 453.0], [28.4, 453.0], [28.5, 453.0], [28.6, 453.0], [28.7, 453.0], [28.8, 453.0], [28.9, 453.0], [29.0, 453.0], [29.1, 453.0], [29.2, 453.0], [29.3, 453.0], [29.4, 453.0], [29.5, 453.0], [29.6, 453.0], [29.7, 453.0], [29.8, 453.0], [29.9, 453.0], [30.0, 454.0], [30.1, 454.0], [30.2, 454.0], [30.3, 454.0], [30.4, 454.0], [30.5, 454.0], [30.6, 454.0], [30.7, 454.0], [30.8, 454.0], [30.9, 454.0], [31.0, 454.0], [31.1, 454.0], [31.2, 454.0], [31.3, 454.0], [31.4, 454.0], [31.5, 454.0], [31.6, 454.0], [31.7, 454.0], [31.8, 454.0], [31.9, 454.0], [32.0, 454.0], [32.1, 454.0], [32.2, 454.0], [32.3, 454.0], [32.4, 454.0], [32.5, 454.0], [32.6, 454.0], [32.7, 454.0], [32.8, 454.0], [32.9, 454.0], [33.0, 454.0], [33.1, 454.0], [33.2, 454.0], [33.3, 454.0], [33.4, 454.0], [33.5, 454.0], [33.6, 454.0], [33.7, 454.0], [33.8, 454.0], [33.9, 454.0], [34.0, 456.0], [34.1, 456.0], [34.2, 456.0], [34.3, 456.0], [34.4, 456.0], [34.5, 456.0], [34.6, 456.0], [34.7, 456.0], [34.8, 456.0], [34.9, 456.0], [35.0, 457.0], [35.1, 457.0], [35.2, 457.0], [35.3, 457.0], [35.4, 457.0], [35.5, 457.0], [35.6, 457.0], [35.7, 457.0], [35.8, 457.0], [35.9, 457.0], [36.0, 460.0], [36.1, 460.0], [36.2, 460.0], [36.3, 460.0], [36.4, 460.0], [36.5, 460.0], [36.6, 460.0], [36.7, 460.0], [36.8, 460.0], [36.9, 460.0], [37.0, 461.0], [37.1, 461.0], [37.2, 461.0], [37.3, 461.0], [37.4, 461.0], [37.5, 461.0], [37.6, 461.0], [37.7, 461.0], [37.8, 461.0], [37.9, 461.0], [38.0, 462.0], [38.1, 462.0], [38.2, 462.0], [38.3, 462.0], [38.4, 462.0], [38.5, 462.0], [38.6, 462.0], [38.7, 462.0], [38.8, 462.0], [38.9, 462.0], [39.0, 462.0], [39.1, 462.0], [39.2, 462.0], [39.3, 462.0], [39.4, 462.0], [39.5, 462.0], [39.6, 462.0], [39.7, 462.0], [39.8, 462.0], [39.9, 462.0], [40.0, 463.0], [40.1, 463.0], [40.2, 463.0], [40.3, 463.0], [40.4, 463.0], [40.5, 463.0], [40.6, 463.0], [40.7, 463.0], [40.8, 463.0], [40.9, 463.0], [41.0, 464.0], [41.1, 464.0], [41.2, 464.0], [41.3, 464.0], [41.4, 464.0], [41.5, 464.0], [41.6, 464.0], [41.7, 464.0], [41.8, 464.0], [41.9, 464.0], [42.0, 465.0], [42.1, 465.0], [42.2, 465.0], [42.3, 465.0], [42.4, 465.0], [42.5, 465.0], [42.6, 465.0], [42.7, 465.0], [42.8, 465.0], [42.9, 465.0], [43.0, 467.0], [43.1, 467.0], [43.2, 467.0], [43.3, 467.0], [43.4, 467.0], [43.5, 467.0], [43.6, 467.0], [43.7, 467.0], [43.8, 467.0], [43.9, 467.0], [44.0, 469.0], [44.1, 469.0], [44.2, 469.0], [44.3, 469.0], [44.4, 469.0], [44.5, 469.0], [44.6, 469.0], [44.7, 469.0], [44.8, 469.0], [44.9, 469.0], [45.0, 482.0], [45.1, 482.0], [45.2, 482.0], [45.3, 482.0], [45.4, 482.0], [45.5, 482.0], [45.6, 482.0], [45.7, 482.0], [45.8, 482.0], [45.9, 482.0], [46.0, 489.0], [46.1, 489.0], [46.2, 489.0], [46.3, 489.0], [46.4, 489.0], [46.5, 489.0], [46.6, 489.0], [46.7, 489.0], [46.8, 489.0], [46.9, 489.0], [47.0, 495.0], [47.1, 495.0], [47.2, 495.0], [47.3, 495.0], [47.4, 495.0], [47.5, 495.0], [47.6, 495.0], [47.7, 495.0], [47.8, 495.0], [47.9, 495.0], [48.0, 497.0], [48.1, 497.0], [48.2, 497.0], [48.3, 497.0], [48.4, 497.0], [48.5, 497.0], [48.6, 497.0], [48.7, 497.0], [48.8, 497.0], [48.9, 497.0], [49.0, 503.0], [49.1, 503.0], [49.2, 503.0], [49.3, 503.0], [49.4, 503.0], [49.5, 503.0], [49.6, 503.0], [49.7, 503.0], [49.8, 503.0], [49.9, 503.0], [50.0, 510.0], [50.1, 510.0], [50.2, 510.0], [50.3, 510.0], [50.4, 510.0], [50.5, 510.0], [50.6, 510.0], [50.7, 510.0], [50.8, 510.0], [50.9, 510.0], [51.0, 559.0], [51.1, 559.0], [51.2, 559.0], [51.3, 559.0], [51.4, 559.0], [51.5, 559.0], [51.6, 559.0], [51.7, 559.0], [51.8, 559.0], [51.9, 559.0], [52.0, 562.0], [52.1, 562.0], [52.2, 562.0], [52.3, 562.0], [52.4, 562.0], [52.5, 562.0], [52.6, 562.0], [52.7, 562.0], [52.8, 562.0], [52.9, 562.0], [53.0, 568.0], [53.1, 568.0], [53.2, 568.0], [53.3, 568.0], [53.4, 568.0], [53.5, 568.0], [53.6, 568.0], [53.7, 568.0], [53.8, 568.0], [53.9, 568.0], [54.0, 573.0], [54.1, 573.0], [54.2, 573.0], [54.3, 573.0], [54.4, 573.0], [54.5, 573.0], [54.6, 573.0], [54.7, 573.0], [54.8, 573.0], [54.9, 573.0], [55.0, 575.0], [55.1, 575.0], [55.2, 575.0], [55.3, 575.0], [55.4, 575.0], [55.5, 575.0], [55.6, 575.0], [55.7, 575.0], [55.8, 575.0], [55.9, 575.0], [56.0, 590.0], [56.1, 590.0], [56.2, 590.0], [56.3, 590.0], [56.4, 590.0], [56.5, 590.0], [56.6, 590.0], [56.7, 590.0], [56.8, 590.0], [56.9, 590.0], [57.0, 592.0], [57.1, 592.0], [57.2, 592.0], [57.3, 592.0], [57.4, 592.0], [57.5, 592.0], [57.6, 592.0], [57.7, 592.0], [57.8, 592.0], [57.9, 592.0], [58.0, 611.0], [58.1, 611.0], [58.2, 611.0], [58.3, 611.0], [58.4, 611.0], [58.5, 611.0], [58.6, 611.0], [58.7, 611.0], [58.8, 611.0], [58.9, 611.0], [59.0, 614.0], [59.1, 614.0], [59.2, 614.0], [59.3, 614.0], [59.4, 614.0], [59.5, 614.0], [59.6, 614.0], [59.7, 614.0], [59.8, 614.0], [59.9, 614.0], [60.0, 636.0], [60.1, 636.0], [60.2, 636.0], [60.3, 636.0], [60.4, 636.0], [60.5, 636.0], [60.6, 636.0], [60.7, 636.0], [60.8, 636.0], [60.9, 636.0], [61.0, 662.0], [61.1, 662.0], [61.2, 662.0], [61.3, 662.0], [61.4, 662.0], [61.5, 662.0], [61.6, 662.0], [61.7, 662.0], [61.8, 662.0], [61.9, 662.0], [62.0, 664.0], [62.1, 664.0], [62.2, 664.0], [62.3, 664.0], [62.4, 664.0], [62.5, 664.0], [62.6, 664.0], [62.7, 664.0], [62.8, 664.0], [62.9, 664.0], [63.0, 699.0], [63.1, 699.0], [63.2, 699.0], [63.3, 699.0], [63.4, 699.0], [63.5, 699.0], [63.6, 699.0], [63.7, 699.0], [63.8, 699.0], [63.9, 699.0], [64.0, 719.0], [64.1, 719.0], [64.2, 719.0], [64.3, 719.0], [64.4, 719.0], [64.5, 719.0], [64.6, 719.0], [64.7, 719.0], [64.8, 719.0], [64.9, 719.0], [65.0, 723.0], [65.1, 723.0], [65.2, 723.0], [65.3, 723.0], [65.4, 723.0], [65.5, 723.0], [65.6, 723.0], [65.7, 723.0], [65.8, 723.0], [65.9, 723.0], [66.0, 741.0], [66.1, 741.0], [66.2, 741.0], [66.3, 741.0], [66.4, 741.0], [66.5, 741.0], [66.6, 741.0], [66.7, 741.0], [66.8, 741.0], [66.9, 741.0], [67.0, 744.0], [67.1, 744.0], [67.2, 744.0], [67.3, 744.0], [67.4, 744.0], [67.5, 744.0], [67.6, 744.0], [67.7, 744.0], [67.8, 744.0], [67.9, 744.0], [68.0, 750.0], [68.1, 750.0], [68.2, 750.0], [68.3, 750.0], [68.4, 750.0], [68.5, 750.0], [68.6, 750.0], [68.7, 750.0], [68.8, 750.0], [68.9, 750.0], [69.0, 750.0], [69.1, 750.0], [69.2, 750.0], [69.3, 750.0], [69.4, 750.0], [69.5, 750.0], [69.6, 750.0], [69.7, 750.0], [69.8, 750.0], [69.9, 750.0], [70.0, 757.0], [70.1, 757.0], [70.2, 757.0], [70.3, 757.0], [70.4, 757.0], [70.5, 757.0], [70.6, 757.0], [70.7, 757.0], [70.8, 757.0], [70.9, 757.0], [71.0, 766.0], [71.1, 766.0], [71.2, 766.0], [71.3, 766.0], [71.4, 766.0], [71.5, 766.0], [71.6, 766.0], [71.7, 766.0], [71.8, 766.0], [71.9, 766.0], [72.0, 798.0], [72.1, 798.0], [72.2, 798.0], [72.3, 798.0], [72.4, 798.0], [72.5, 798.0], [72.6, 798.0], [72.7, 798.0], [72.8, 798.0], [72.9, 798.0], [73.0, 902.0], [73.1, 902.0], [73.2, 902.0], [73.3, 902.0], [73.4, 902.0], [73.5, 902.0], [73.6, 902.0], [73.7, 902.0], [73.8, 902.0], [73.9, 902.0], [74.0, 932.0], [74.1, 932.0], [74.2, 932.0], [74.3, 932.0], [74.4, 932.0], [74.5, 932.0], [74.6, 932.0], [74.7, 932.0], [74.8, 932.0], [74.9, 932.0], [75.0, 965.0], [75.1, 965.0], [75.2, 965.0], [75.3, 965.0], [75.4, 965.0], [75.5, 965.0], [75.6, 965.0], [75.7, 965.0], [75.8, 965.0], [75.9, 965.0], [76.0, 984.0], [76.1, 984.0], [76.2, 984.0], [76.3, 984.0], [76.4, 984.0], [76.5, 984.0], [76.6, 984.0], [76.7, 984.0], [76.8, 984.0], [76.9, 984.0], [77.0, 996.0], [77.1, 996.0], [77.2, 996.0], [77.3, 996.0], [77.4, 996.0], [77.5, 996.0], [77.6, 996.0], [77.7, 996.0], [77.8, 996.0], [77.9, 996.0], [78.0, 997.0], [78.1, 997.0], [78.2, 997.0], [78.3, 997.0], [78.4, 997.0], [78.5, 997.0], [78.6, 997.0], [78.7, 997.0], [78.8, 997.0], [78.9, 997.0], [79.0, 1113.0], [79.1, 1113.0], [79.2, 1113.0], [79.3, 1113.0], [79.4, 1113.0], [79.5, 1113.0], [79.6, 1113.0], [79.7, 1113.0], [79.8, 1113.0], [79.9, 1113.0], [80.0, 1161.0], [80.1, 1161.0], [80.2, 1161.0], [80.3, 1161.0], [80.4, 1161.0], [80.5, 1161.0], [80.6, 1161.0], [80.7, 1161.0], [80.8, 1161.0], [80.9, 1161.0], [81.0, 1316.0], [81.1, 1316.0], [81.2, 1316.0], [81.3, 1316.0], [81.4, 1316.0], [81.5, 1316.0], [81.6, 1316.0], [81.7, 1316.0], [81.8, 1316.0], [81.9, 1316.0], [82.0, 1350.0], [82.1, 1350.0], [82.2, 1350.0], [82.3, 1350.0], [82.4, 1350.0], [82.5, 1350.0], [82.6, 1350.0], [82.7, 1350.0], [82.8, 1350.0], [82.9, 1350.0], [83.0, 1414.0], [83.1, 1414.0], [83.2, 1414.0], [83.3, 1414.0], [83.4, 1414.0], [83.5, 1414.0], [83.6, 1414.0], [83.7, 1414.0], [83.8, 1414.0], [83.9, 1414.0], [84.0, 1415.0], [84.1, 1415.0], [84.2, 1415.0], [84.3, 1415.0], [84.4, 1415.0], [84.5, 1415.0], [84.6, 1415.0], [84.7, 1415.0], [84.8, 1415.0], [84.9, 1415.0], [85.0, 1662.0], [85.1, 1662.0], [85.2, 1662.0], [85.3, 1662.0], [85.4, 1662.0], [85.5, 1662.0], [85.6, 1662.0], [85.7, 1662.0], [85.8, 1662.0], [85.9, 1662.0], [86.0, 1891.0], [86.1, 1891.0], [86.2, 1891.0], [86.3, 1891.0], [86.4, 1891.0], [86.5, 1891.0], [86.6, 1891.0], [86.7, 1891.0], [86.8, 1891.0], [86.9, 1891.0], [87.0, 2075.0], [87.1, 2075.0], [87.2, 2075.0], [87.3, 2075.0], [87.4, 2075.0], [87.5, 2075.0], [87.6, 2075.0], [87.7, 2075.0], [87.8, 2075.0], [87.9, 2075.0], [88.0, 2306.0], [88.1, 2306.0], [88.2, 2306.0], [88.3, 2306.0], [88.4, 2306.0], [88.5, 2306.0], [88.6, 2306.0], [88.7, 2306.0], [88.8, 2306.0], [88.9, 2306.0], [89.0, 3352.0], [89.1, 3352.0], [89.2, 3352.0], [89.3, 3352.0], [89.4, 3352.0], [89.5, 3352.0], [89.6, 3352.0], [89.7, 3352.0], [89.8, 3352.0], [89.9, 3352.0], [90.0, 4226.0], [90.1, 4226.0], [90.2, 4226.0], [90.3, 4226.0], [90.4, 4226.0], [90.5, 4226.0], [90.6, 4226.0], [90.7, 4226.0], [90.8, 4226.0], [90.9, 4226.0], [91.0, 4262.0], [91.1, 4262.0], [91.2, 4262.0], [91.3, 4262.0], [91.4, 4262.0], [91.5, 4262.0], [91.6, 4262.0], [91.7, 4262.0], [91.8, 4262.0], [91.9, 4262.0], [92.0, 4623.0], [92.1, 4623.0], [92.2, 4623.0], [92.3, 4623.0], [92.4, 4623.0], [92.5, 4623.0], [92.6, 4623.0], [92.7, 4623.0], [92.8, 4623.0], [92.9, 4623.0], [93.0, 5224.0], [93.1, 5224.0], [93.2, 5224.0], [93.3, 5224.0], [93.4, 5224.0], [93.5, 5224.0], [93.6, 5224.0], [93.7, 5224.0], [93.8, 5224.0], [93.9, 5224.0], [94.0, 5986.0], [94.1, 5986.0], [94.2, 5986.0], [94.3, 5986.0], [94.4, 5986.0], [94.5, 5986.0], [94.6, 5986.0], [94.7, 5986.0], [94.8, 5986.0], [94.9, 5986.0], [95.0, 6739.0], [95.1, 6739.0], [95.2, 6739.0], [95.3, 6739.0], [95.4, 6739.0], [95.5, 6739.0], [95.6, 6739.0], [95.7, 6739.0], [95.8, 6739.0], [95.9, 6739.0], [96.0, 7646.0], [96.1, 7646.0], [96.2, 7646.0], [96.3, 7646.0], [96.4, 7646.0], [96.5, 7646.0], [96.6, 7646.0], [96.7, 7646.0], [96.8, 7646.0], [96.9, 7646.0], [97.0, 8252.0], [97.1, 8252.0], [97.2, 8252.0], [97.3, 8252.0], [97.4, 8252.0], [97.5, 8252.0], [97.6, 8252.0], [97.7, 8252.0], [97.8, 8252.0], [97.9, 8252.0], [98.0, 10955.0], [98.1, 10955.0], [98.2, 10955.0], [98.3, 10955.0], [98.4, 10955.0], [98.5, 10955.0], [98.6, 10955.0], [98.7, 10955.0], [98.8, 10955.0], [98.9, 10955.0], [99.0, 12242.0], [99.1, 12242.0], [99.2, 12242.0], [99.3, 12242.0], [99.4, 12242.0], [99.5, 12242.0], [99.6, 12242.0], [99.7, 12242.0], [99.8, 12242.0], [99.9, 12242.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 44.0, "series": [{"data": [[8200.0, 1.0], [2300.0, 1.0], [600.0, 6.0], [10900.0, 1.0], [700.0, 9.0], [12200.0, 1.0], [3300.0, 1.0], [900.0, 6.0], [4200.0, 2.0], [4600.0, 1.0], [1100.0, 2.0], [5200.0, 1.0], [1300.0, 2.0], [1400.0, 2.0], [5900.0, 1.0], [400.0, 44.0], [100.0, 5.0], [1600.0, 1.0], [6700.0, 1.0], [1800.0, 1.0], [7600.0, 1.0], [500.0, 9.0], [2000.0, 1.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 42.0, "series": [{"data": [[0.0, 42.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62065652E12, "maxY": 4.894736842105263, "series": [{"data": [[1.62065658E12, 1.1500000000000001], [1.62065652E12, 4.894736842105263], [1.62065664E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62065664E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 520.4935064935065, "minX": 1.0, "maxY": 12242.0, "series": [{"data": [[8.0, 10955.0], [4.0, 2306.0], [2.0, 1331.5], [1.0, 520.4935064935065], [9.0, 7545.666666666667], [10.0, 4262.0], [5.0, 12242.0], [6.0, 5106.0], [3.0, 2713.5], [7.0, 4923.5]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}, {"data": [[1.8300000000000005, 1312.8099999999997]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 807.5, "minX": 1.62065652E12, "maxY": 67496.76666666666, "series": [{"data": [[1.62065658E12, 67496.76666666666], [1.62065652E12, 24644.9], [1.62065664E12, 27239.233333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62065658E12, 2550.0], [1.62065652E12, 807.5], [1.62065664E12, 892.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62065664E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 450.8571428571429, "minX": 1.62065652E12, "maxY": 4366.368421052632, "series": [{"data": [[1.62065658E12, 647.5333333333332], [1.62065652E12, 4366.368421052632], [1.62065664E12, 450.8571428571429]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62065664E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 414.4761904761904, "minX": 1.62065652E12, "maxY": 4271.789473684211, "series": [{"data": [[1.62065658E12, 581.4666666666666], [1.62065652E12, 4271.789473684211], [1.62065664E12, 414.4761904761904]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62065664E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 96.76190476190479, "minX": 1.62065652E12, "maxY": 2040.1052631578955, "series": [{"data": [[1.62065658E12, 218.4833333333333], [1.62065652E12, 2040.1052631578955], [1.62065664E12, 96.76190476190479]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62065664E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 416.0, "minX": 1.62065652E12, "maxY": 12242.0, "series": [{"data": [[1.62065658E12, 2075.0], [1.62065652E12, 12242.0], [1.62065664E12, 510.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62065658E12, 1146.6000000000001], [1.62065652E12, 10955.0], [1.62065664E12, 462.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62065658E12, 2075.0], [1.62065652E12, 12242.0], [1.62065664E12, 510.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62065658E12, 1501.4499999999987], [1.62065652E12, 12242.0], [1.62065664E12, 505.29999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62065658E12, 426.0], [1.62065652E12, 449.0], [1.62065664E12, 416.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62065658E12, 581.5], [1.62065652E12, 4226.0], [1.62065664E12, 452.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62065664E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 4226.0, "series": [{"data": [[1.0, 467.0], [2.0, 599.0], [5.0, 4226.0], [3.0, 1745.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 174.0], [2.0, 310.0], [3.0, 132.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 4162.0, "series": [{"data": [[1.0, 428.0], [2.0, 552.5], [5.0, 4162.0], [3.0, 1540.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 174.0], [2.0, 310.0], [3.0, 132.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.62065652E12, "maxY": 1.0, "series": [{"data": [[1.62065658E12, 1.0], [1.62065652E12, 0.3333333333333333], [1.62065664E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62065664E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62065652E12, "maxY": 0.8666666666666667, "series": [{"data": [[1.62065658E12, 0.8666666666666667], [1.62065652E12, 0.31666666666666665], [1.62065664E12, 0.35]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62065658E12, 0.13333333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62065664E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62065652E12, "maxY": 0.8666666666666667, "series": [{"data": [[1.62065658E12, 0.13333333333333333]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new-failure", "isController": false}, {"data": [[1.62065658E12, 0.8666666666666667], [1.62065652E12, 0.31666666666666665], [1.62065664E12, 0.35]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=new-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62065664E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62065652E12, "maxY": 0.8666666666666667, "series": [{"data": [[1.62065658E12, 0.8666666666666667], [1.62065652E12, 0.31666666666666665], [1.62065664E12, 0.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62065658E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62065664E12, "title": "Total Transactions Per Second"}},
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

