var React = require('react/addons');
var TitleDefinitions = require('../../defines/TitleDefinitions');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var titleIntervalTime = 10000;
var titleUpdateInterval;

var InputComponent = React.createClass({
    getInitialState: function(){
        var titles = TitleDefinitions.get();
        return {
            title: titles[Math.floor((Math.random() * (titles.length)))]
        };
    },
    componentDidMount: function(){
        var self = this;
        titleUpdateInterval = setInterval(function(){
            var titles = TitleDefinitions.get();
            self.setState({
                title: titles[Math.floor((Math.random() * (titles.length)))]
            });
        }, titleIntervalTime);
    },
    componentWillUnmount: function(){
        clearInterval(titleUpdateInterval);
    },
    render: function() {
        return (
            <div className="title">
                <ReactCSSTransitionGroup transitionName="example">
                    <h4 key="title" className="centerText">{this.state.title}</h4>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = InputComponent;