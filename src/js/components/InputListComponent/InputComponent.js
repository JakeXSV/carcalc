var React = require('react');
var ReactDOM = require('react-dom');
var InputActions = require('../../actions/InputActions');

var InputComponent = React.createClass({
    _onInputChange: function () {
        var input = ReactDOM.findDOMNode(this.refs.input).value.trim();
        if (input === '') {
            input = undefined; //deleted their input; resort to undefined||defaults
        }
        if (this.props.isValid(input)) {
            if (input !== undefined) {
                input = this.props.convert(input);
            }
            InputActions.upsert({
                actionType: this.props.actionType,
                modelKey: this.props.id,
                modelValue: input
            });
        }
    },
    render: function () {
        var before = undefined;
        var after = undefined;
        if (this.props.addOnBeforeInput === undefined || this.props.addOnBeforeInput) {
            before = <span className="input-group-addon">{this.props.addOn}</span>;
        } else {
            after = <span className="input-group-addon">{this.props.addOn}</span>;
        }
        var required = this.props.required ? ' required' : '';
        return (
            <div>
                <label className={"label label-default" + required} htmlFor={this.props.id}>{this.props.label}</label>
                <div className="input-group">
                    {before}
                    <input
                        className="form-control"
                        id={this.props.id}
                        type={this.props.type}
                        name={this.props.id}
                        placeholder={this.props.default}
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
