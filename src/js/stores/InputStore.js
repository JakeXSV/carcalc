var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var InputConstants = require('../constants/InputConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _inputs = {};

var InputStore = assign({}, EventEmitter.prototype, {

    get: function(key){
        return _inputs[key];
    },

    getAll: function() {
        return _inputs;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case InputConstants.INPUT_CHANGE:
            _inputs[action.key] = action.value;
            InputStore.emitChange();
            break;
        default:
        // no op
    }

});

module.exports = InputStore;