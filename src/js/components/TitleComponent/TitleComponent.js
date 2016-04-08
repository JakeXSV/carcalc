var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TitleDefinitions = require('../../defines/TitleDefinitions');
var titleIntervalTime = 5000;
var titleUpdateInterval;

// https://github.com/facebook/react/issues/1326
var InputComponent = React.createClass({
    getInitialState: function () {
        var titles = TitleDefinitions.get();
        return {
            title: titles[Math.floor((Math.random() * (titles.length)))]
        };
    },
    componentDidMount: function () {
        var self = this;
        titleUpdateInterval = setInterval(function () {
            var titles = TitleDefinitions.get();
            self.setState({
                title: titles[Math.floor((Math.random() * (titles.length)))]
            });
        }, titleIntervalTime);
    },
    componentWillUnmount: function () {
        clearInterval(titleUpdateInterval);
    },
    render: function () {
        return (
            <div className="title">
                <ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true} transitionLeave={false} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    <div key={this.state.title}>
                        <h5 key="title" className="centerText">{this.state.title}</h5>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = InputComponent;
