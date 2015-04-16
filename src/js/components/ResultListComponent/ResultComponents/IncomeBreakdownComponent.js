var React = require('react');
var Highcharts = require('react-highcharts');
var InputStore = require('../../../stores/InputStore');
var Validators = require('../../../util/Validators');
var MonthlyCostInputDefinitions = require('../../../defines/MonthlyCostInputDefinitions');
var ScenariosInputDefinitions = require('../../../defines/IncomeBreakdownInputDefinitions');
var Calculations = require('../../../util/Calculations');

var IncomeBreakdownComponent = React.createClass({
    _onInputChange: function() {
        this.setState({
            inputs: InputStore.getAll()
        });
    },
    componentDidMount: function() {
        InputStore.addChangeListener(this._onInputChange);
    },
    componentWillUnmount: function() {
        InputStore.removeChangeListener(this._onInputChange);
    },
    getInitialState: function() {
        return {
            inputs: InputStore.getAll()
        };
    },
    render: function() {

        var income = this.state.inputs.monthlyIncome;
        var expenses = this.state.inputs.monthlyExpenses;

        if(income > 0){
            var netIncome = income - expenses - this.props.monthlyCarCost;
            var breakdowns = [
                {
                    label: 'Cash',
                    value: (netIncome/income)*100
                },
                {
                    label: 'Expenses',
                    value: (expenses/income)*100
                },
                {
                    label: 'Monthly Car Cost',
                    value: (this.props.monthlyCarCost/income)*100
                }
            ];

            var data = [];
            breakdowns.forEach(function(e){
                if(e.value > 0){
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
            return (
                <div>
                    <Highcharts config = {config}></Highcharts>
                </div>
            );
        }
        return (
            <div></div>
        );
    }
});

module.exports = IncomeBreakdownComponent;