import ListItem from "./ListItem"
export default function List(props)
{
    return(
        <ul className="list">
            {
props.items.map((item)=>{
 return <ListItem key={item.id} value={item.value} checked={item.checked} handleCheck={()=>{
    props.handleCheck(item.id)
 }}  handleDelete={()=>
{
    props.handleDelete(item.id)
}}/>
})
           
            }
        </ul>
    )
}