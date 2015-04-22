var React = require('react');
var AnimateMixin = require('react-animate');
var TitleDefinitions = require('../../defines/TitleDefinitions');
var titleIntervalTime = 10000;
var titleUpdateInterval;

var InputComponent = React.createClass({
    mixins: [AnimateMixin],
    fadeIn: function(){
        this.animate(
            'fadeIn',
            { opacity: 0 },
            { opacity: 1 },
            1000,
            { easing: 'linear' }
        );
    },
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
            self.fadeIn();
        }, titleIntervalTime);
    },
    componentWillUnmount: function(){
        clearInterval(titleUpdateInterval);
    },
    render: function() {
        return (
            <div className="title">
                <h5 key="title" style={this.getAnimatedStyle('fadeIn')} className="centerText">{this.state.title}</h5>
            </div>
        );
    }
});

module.exports = InputComponent;