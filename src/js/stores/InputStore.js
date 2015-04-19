var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var InputConstants = require('../constants/InputActionConstants');
var assign = require('object-assign');

var _inputs = {};

var InputStore = assign({}, EventEmitter.prototype, {

    get: function(key){
        return _inputs[key];
    },
    getAll: function() {
        return _inputs;
    },

    emitMonthlyCostInputChange: function() {
        this.emit(InputConstants.MONTHLY_COST_INPUT_CHANGE);
    },

    emitIncomeBreakdownInputChange: function() {
        this.emit(InputConstants.INCOME_BREAKDOWN_INPUT_CHANGE);
    },

    addChangeListener: function(TypeOfChange, callback) {
        this.on(TypeOfChange, callback);
    },
    removeChangeListener: function(TypeOfChange, callback) {
        this.removeListener(TypeOfChange, callback);
    }

});

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case InputConstants.MONTHLY_COST_INPUT_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitMonthlyCostInputChange();
            break;
        case InputConstants.INCOME_BREAKDOWN_INPUT_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitIncomeBreakdownInputChange();
            break;
        default:
        // no op
    }

});

module.exports = InputStore;