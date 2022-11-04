import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import React from 'react'
function App() {
  const [items,setItem]=React.useState([])
const [input,setInput]=React.useState("")
const [search,setSearch]=React.useState("")
function handleInput(event)
{
const {value}=event.target
setInput(function(input)
{
return value 
})
}
function handleCheck(id)
{
const newArray=items.map((item)=>
{
    return item.id===id ? {...item,checked:!item.checked}:item
})
setItem(function(items)
{
    return newArray
})
}
function handleDelete(id)
{
  const newArray=[]
for(let i=0;i<items.length;i++)
{
const currentItem=items[i]
if(currentItem.id===id)
{
  continue
}
else{
  newArray.push(currentItem)
}
}
setItem(function(items)
{
  return newArray
})
}
function addItem(event)
{
  event.preventDefault()
  if(input){
      const item={
    id:items.length+1,
    value:input,
    checked:false
  }
  setItem(function(items)
  {
    return [...items,item]
  })
  setInput(function(input)
  {
    return ""
  })
  }


}
function changeSearch(value)
{
  setSearch(value)
}
  return (
    <div>
      <Header/>
      <Main input={input} handleInput={handleInput} handleCheck={handleCheck} items={items} handleDelete={handleDelete} addItem={addItem} search={search} setSearch={changeSearch}/>
      <Footer/>
    </div>
  );
}

export default App;
