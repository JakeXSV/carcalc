var AppDispatcher = require('../dispatcher/AppDispatcher');
var InputConstants = require('../constants/InputConstants');

var InputActions = {

    upsert: function(input) {
        AppDispatcher.dispatch({
            actionType: InputConstants.INPUT_CHANGE,
            modelKey: input.modelKey,
            modelValue: input.modelValue
        });
    }

};

module.exports = InputActions;