var React = require('react');

var InputComponent = React.createClass({
    render: function() {
        return (
            <input type="number" name={this.props.name} />
        );
    }
});

module.exports = InputComponent;