import React from 'react'
export default function AddItem(props)
{

    return (
        <form onSubmit={props.addItem}>
<input type="text" className="add-input" onChange={props.handleInput} placeholder="Add Item" value={props.input}></input>
<button className="btn add-btn">+</button>
        </form>
    )
}