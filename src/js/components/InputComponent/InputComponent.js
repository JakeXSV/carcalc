var React = require('react');
var InputActions = require('../../actions/InputActions');

var InputComponent = React.createClass({
    _onInputChange: function(){
        var input = React.findDOMNode(this.refs.input).value.trim();
        if(this.props.isValid !== undefined && typeof this.props.isValid === 'function' && this.props.isValid(input)){
            InputActions.upsert({
                modelKey: this.props.id,
                modelValue: input
            });
        }else{
            throw this.props.id + ' was not provided a validate function.';
        }
    },
    render: function() {
        var before, after;
        if(this.props.addOnBeforeInput === undefined || this.props.addOnBeforeInput){
            before = <span className="input-group-addon">{this.props.addOn}</span>;
        }else{
            after = <span className="input-group-addon">{this.props.addOn}</span>;
        }
        return (
            <div>
                <label className="label label-default" htmlFor={this.props.id}>{this.props.label}</label>
                <div className="input-group">
                    {before}
                    <input
                        className="form-control"
                        id={this.props.id}
                        type={this.props.type}
                        name={this.props.id}
                        placeholder={this.props.placeholder}
                        onChange={this._onInputChange}
                        ref="input"
                    />
                    {after}
                </div>
            </div>
        );
    }
});

module.exports = InputComponent;