
var Dispatcher = require('flux').Dispatcher;

var appDispatcher = new Dispatcher();

var ListStore = require('../stores/ListStore');

appDispatcher.register(function(action){
    switch(action.actionType){

        case 'ADD':
            ListStore.addNewItem(action.text);
            ListStore.emitChange();
            break;
        case 'Delete':
            ListStore.deleteItem();
            ListStore.emitChange();
            break;
        default:
            console.log('default');
    }
});

module.exports = appDispatcher;