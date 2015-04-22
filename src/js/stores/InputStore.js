var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var InputActionConstants = require('../constants/InputActionConstants');
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
        this.emit(InputActionConstants.MONTHLY_COST_INPUT_CHANGE);
    },

    emitScenarioChange: function(scenarioActionTypeConstant) {
        this.emit(scenarioActionTypeConstant);
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
        case InputActionConstants.MONTHLY_COST_INPUT_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitMonthlyCostInputChange();
            break;
        case InputActionConstants.MONTHLY_INCOME_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitScenarioChange(action.actionType);
            break;
        case InputActionConstants.MONTHLY_EXPENSES_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitScenarioChange(action.actionType);
            break;
        case InputActionConstants.SAFETY_NET_CHANGE:
            _inputs[action.modelKey] = action.modelValue;
            InputStore.emitScenarioChange(action.actionType);
            break;
        default:
        // no op
    }

});

module.exports = InputStore;