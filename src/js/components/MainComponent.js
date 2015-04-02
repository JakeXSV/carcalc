var React = require('react');
var InputComponent = require('./InputComponent/InputComponent');
var ResultComponent = require('./ResultComponent/ResultComponent');

var MainComponent = React.createClass({

    render: function() {
        var inputs;
        if(this.props.inputs !== undefined && this.props.inputs.length > 0) {
            inputs = this.props.inputs.map(function (e) {
                return (
                    <InputComponent
                        key={e.id}
                        id={e.id}
                        type={e.type}
                        label={e.label}
                        default={e.default||''}
                        addOnBeforeInput={e.addOnBeforeInput||true}
                        addOn={e.addOn}
                        isValid={e.isValid}
                    />
                );
            });
        }
        return (
            <div className="mainComponent">
                {inputs}
                <ResultComponent />
            </div>
        );
    }
});

module.exports = MainComponent;