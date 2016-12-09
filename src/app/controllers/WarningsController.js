(function () {
    angular
        .module('app')
        .controller('WarningsController', [
            WarningsController
        ]);

    function WarningsController() {
        var vm = this;

        // TODO: move data to the service
        vm.warningsChartData = warningFunction;

        function warningFunction() {
            // Dados coletados por cada dia.
            // var tweetsByDay  = [245621, 51151, 225285, 67504, 41414, 10759, 75528, 35664, 27609, 67296, 27562, 19048, 7706, 17903, 21889, 16186, 6202, 19149, 6978, 4985, 12851];
            var tweetsByDay  = [[245621, 0], [51151, 0], [225285, 0]];
            
            var days = 10;
            var result = [];
            for (var i = 0; i < days; i++) {
                 result.push({x: i, y: tweetsByDay[i]});
            }
            return [ { values: result, color: 'rgb(0, 150, 136)', "bar": true, "key" : "Quantity" } ];
        }

        vm.chartOptions = {
            chart: {
                type: 'historicalBarChart',
                height: 210,
                margin: { top: -10, left: -20, right: -20 },
                x: function (d) { return d.x },
                y: function (d) { return d.y },
                showLabels: false,
                showLegend: false,
                title: 'Coleta de tweets',
                showYAxis: false,
                showXAxis: false,
                tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>' } }
            }
        };

        vm.options = {
            chart: {
                type: 'historicalBarChart',
                height: 210,
                margin : {
                    top: -10,
                    right: 20,
                    bottom: 65,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1]/100000;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.1f')(d);
                },
                duration: 100,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return d;
                    },
                    rotateLabels: 30,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                },
                tooltip: {
                    keyFormatter: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        vm.data = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values" : [[1472439600000, 245621], [1472526000000, 51151], [1472612400000,225285], [1472698800000, 67504], [1472785200000, 41414], [1472871600000, 10759], [1472958000000, 75528], [1473044400000, 35664], [1473130800000, 27609], [1473217200000, 67296], [1473303600000, 27562], [1473390000000, 19048], [1473476400000, 7706], [1473562800000, 17903], [1473649200000, 21889], [1473735600000, 16186], [1473822000000, 6202], [1473908400000, 19149], [1474081200000, 6978], [1474081200000, 4985], [1474254000000, 12851]]
            }];
    }
})();
