import React from "react"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import List from "./List"
export default function Main(props)
{
  
    return (
        <main className="main" >
<div className="wrapper main__content">
    <div className="inputs">
    <AddItem handleInput={props.handleInput} input={props.input} addItem={props.addItem}/>
    <SearchItem search={props.search} setSearch={props.setSearch} />
    </div>
    <div>
<List items={props.items.filter((item)=>
    {
        return item.value.toUpperCase().includes(props.search.toUpperCase()) 
    })} handleCheck={props.handleCheck} handleDelete={props.handleDelete}/>
    </div>
</div>
        </main>
    )
}