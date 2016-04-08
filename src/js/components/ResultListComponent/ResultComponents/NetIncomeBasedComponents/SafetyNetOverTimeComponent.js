var React = require('react');
var InputActionConstants = require('../../../../constants/InputActionConstants');
var InputStore = require('../../../../stores/InputStore');

var SafetyNetOverTimeComponent = React.createClass({
    _onInputChange: function () {
        this.setState({
            inputs: InputStore.getAll()
        });
    },
    componentDidMount: function () {
        InputStore.addChangeListener(InputActionConstants.SAFETY_NET_CHANGE, this._onInputChange);
    },
    componentWillUnmount: function () {
        InputStore.removeChangeListener(InputActionConstants.SAFETY_NET_CHANGE, this._onInputChange);
    },
    getInitialState: function () {
        return {
            inputs: InputStore.getAll()
        };
    },
    render: function () {
        var safetyNetEffectText;

        if (this.state.inputs.safetyNet > 0) {
            var monthsOfSafetyNetEffect = 12;
            var overTime = [];
            for (var i = 1; i <= monthsOfSafetyNetEffect; i++) {
                overTime[i] = (this.state.inputs.safetyNet + (this.props.netIncome * i));
            }
            safetyNetEffectText = <h2 className="well centerText">After 6 Months Your Safety Net Would Be At ${overTime[6].toFixed(2)}</h2>;
        }

        return (
            <div>
                {safetyNetEffectText}
            </div>
        );
    }
});

module.exports = SafetyNetOverTimeComponent;
