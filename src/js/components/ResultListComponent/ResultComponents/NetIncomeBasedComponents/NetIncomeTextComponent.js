var React = require('react');

var NetIncomeTextComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2 className="well centerText">Take Home Per Month After Expenses And Car Payment ${this.props.netIncome.toFixed(2)}</h2>;
            </div>
        );
    }
});

module.exports = NetIncomeTextComponent;