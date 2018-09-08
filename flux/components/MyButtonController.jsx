
var React = require('react');

var ListStore = require('../stores/ListStore');
var buttonActions = require('../actions/buttonActions');

var MyButton = require('./MyButton');

var MyButtonController = React.createClass({

    getInitialState: function(){
        return {
            items: ListStore.getAll()
        }
    },

    componentDidMount: function(){
        ListStore.addEventChangeListener(this.onChange);
    },

    componentWillUnmount: function(){
        ListStore.removeEventChangeListener(this.onChange);
    },

    onChange: function(){
        this.setState({
            items: ListStore.getAll()
        });
    },

    addNewItem: function(){
        buttonActions.addNewItem('NEW ITEM');
    },
    deleteItem: function(){
        buttonActions.deleteItem();  
    },

    render: function(){
        
        return <MyButton 
            items={this.state.items}
            onAdd={this.addNewItem}
            onDelete={this.deleteItem}
        />;

    }

})


module.exports = MyButtonController;