var React = require('react');

var InputComponent = React.createClass({
    onInputChange: function(){
        var input = React.findDOMNode(this.refs.input).value.trim();
        if(this.props.isValid !== undefined && typeof this.props.isValid === 'function' && this.props.isValid(input)){
            console.log("VALID! " + input);
        }else{
            throw this.props.id + ' was not provided a validate function.';
            return;
        }
    },
    render: function() {

        return (
            <div>
                <label className="label label-default" htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    className="form-control"
                    id={this.props.id}
                    type={this.props.type}
                    name={this.props.id}
                    placeholder={this.props.placeholder}
                    onChange={this.onInputChange}
                    ref="input"
                    />
            </div>
        );
    }
});

module.exports = InputComponent;