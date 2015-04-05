var AppDispatcher = require('../dispatcher/AppDispatcher');
var InputActionConstants = require('../constants/InputActionConstants');

var InputActions = {

    upsert: function(input) {
        AppDispatcher.dispatch({
            actionType: InputActionConstants.INPUT_CHANGE,
            modelKey: input.modelKey,
            modelValue: input.modelValue
        });
    }

};

module.exports = InputActions;