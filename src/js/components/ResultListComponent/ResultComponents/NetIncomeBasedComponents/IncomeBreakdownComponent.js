var React = require('react');
var Highcharts = require('react-highcharts');

var IncomeBreakdownComponent = React.createClass({
    render: function() {
        var incomeBreakDownChart;

        if(this.props.monthlyIncome > 0) {

            var breakdowns = [
                {
                    label: 'Take home',
                    value: (this.props.netIncome / this.props.monthlyIncome) * 100
                },
                {
                    label: 'Expenses',
                    value: (this.props.monthlyExpenses / this.props.monthlyIncome) * 100
                },
                {
                    label: 'Monthly Car Cost',
                    value: (this.props.monthlyCarCost / this.props.monthlyIncome) * 100
                }
            ];

            var data = [];
            breakdowns.forEach(function (e) {
                if (e.value > 0) {
                    data.push([e.label, e.value]);
                }
            });

            var config = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: 'Income<br>Breakdown',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 40
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Income Breakdown',
                    innerSize: '50%',
                    data: data
                }]
            };
            incomeBreakDownChart = <Highcharts config = {config}></Highcharts>;
        }
        return (
            <div>
                {incomeBreakDownChart}
            </div>
        );
    }
});

module.exports = IncomeBreakdownComponent;
