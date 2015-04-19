var AppDispatcher = require('../dispatcher/AppDispatcher');

var InputActions = {

    upsert: function(input) {
        AppDispatcher.dispatch({
            actionType: input.actionType,
            modelKey: input.modelKey,
            modelValue: input.modelValue
        });
    }

};

module.exports = InputActions;