var React = require('react');

var InputComponent = React.createClass({
    render: function() {
        return (
            <div>
                <label className="label label-default" htmlFor={this.props.id}>{this.props.label}</label>
                <input className="form-control" id={this.props.id} type={this.props.type} name={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        );
    }
});

module.exports = InputComponent;