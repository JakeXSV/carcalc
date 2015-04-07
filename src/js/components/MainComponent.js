var React = require('react');
var TitleComponent = require('./TitleComponent/TitleComponent');
var InputComponentList = require('./InputComponent/InputComponentList');
var MonthlyCostComponent = require('./ResultComponents/MonthlyCostComponent/MonthlyCostComponent');
var ScenariosComponent = require('./ResultComponents/ScenariosComponent/ScenariosComponent');

var MainComponent = React.createClass({
    render: function() {
        return (
            <div className="mainComponent">
                <TitleComponent />
                <InputComponentList />
                <MonthlyCostComponent />
                <ScenariosComponent />
            </div>
        );
    }
});

module.exports = MainComponent;