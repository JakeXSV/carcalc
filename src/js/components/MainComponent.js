var React = require('react');
var TitleComponent = require('./TitleComponent/TitleComponent');
var InputComponentList = require('./InputComponent/InputComponentList');
var MonthlyCostComponent = require('./ResultComponents/MonthlyCostComponent/MonthlyCostComponent');
var PercentOfNetIncomeComponent = require('./ResultComponents/PercentOfNetIncomeComponent/PercentOfNetIncomeComponent');

var MainComponent = React.createClass({
    render: function() {
        return (
            <div className="mainComponent">
                <TitleComponent />
                <InputComponentList />
                <MonthlyCostComponent />
                <PercentOfNetIncomeComponent />
            </div>
        );
    }
});

module.exports = MainComponent;