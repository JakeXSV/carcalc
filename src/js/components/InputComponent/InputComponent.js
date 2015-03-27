var React = require('react');

var InputComponent = React.createClass({
    render: function() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.id}/>
            </div>
        );
    }
});

module.exports = InputComponent;