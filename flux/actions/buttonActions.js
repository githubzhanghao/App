
var Dispatcher = require('../dispatcher/AppDispatcher');
var buttonActions = {

    addNewItem: function(text){

        Dispatcher.dispatch({
            actionType: 'ADD',
            text: text
        })

    },
    deleteItem: function(){
        Dispatcher.dispatch({
            actionType: 'Delete'
        })
    }

}

module.exports = buttonActions;