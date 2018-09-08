
var assign = require('object-assign');

var EventEmitter = require('events').EventEmitter;

var ListStore = assign({}, EventEmitter.prototype, {

    items: [],

    getAll: function(){
        return this.items;
    },

    addNewItem: function(text){
        this.items.push(text);
    },

    deleteItem: function(){
        this.items.pop();
    },

    addEventChangeListener: function(callBack){
        this.on('change', callBack)
    },
    removeEventChangeListener: function(callBack){
        this.removeListener('change', callBack)
    },
    emitChange: function(){
        this.emit('change');
    }
})


module.exports = ListStore;