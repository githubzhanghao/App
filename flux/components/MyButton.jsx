var React = require('react');

var MyButton = function(props){

    let items = props.items;
    var itemHtml = items.map(function(e, i){
        return <li key={i}>{e}</li>
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onAdd}>新加item</button>
        <button onClick={props.onDelete}>新加item</button>
    </div>

}

module.exports = MyButton;