var React = require('react');
var InputStore = require('../../stores/InputStore');

var ResultComponent = React.createClass({
    _onStoreChange: function(){
        console.log("Store changed.");
    },
    componentDidMount: function() {
        InputStore.addChangeListener(this._onStoreChange);
    },
    componentWillUnmount: function() {
        InputStore.removeChangeListener(this._onStoreChange);
    },
    render: function() {
        return (
            <div>
                <p>$300/month</p>
            </div>
        );
    }
});

module.exports = ResultComponent;