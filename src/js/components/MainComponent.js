var React = require('react');
var TitleComponent = require('./TitleComponent/TitleComponent');
var InputListComponent = require('./InputListComponent/InputListComponent');
var ResultListComponent = require('./ResultListComponent/ResultListComponent');

var MainComponent = React.createClass({
    render: function () {
        return (
            <div className="mainComponent">
                <TitleComponent />
                <InputListComponent />
                <ResultListComponent />
            </div>
        );
    }
});

module.exports = MainComponent;
