export default function ListItem(props)
{
  
    return (
        <li className="item">
            <span>{props.value}</span>
            <input type="checkbox" onChange={()=>{props.handleCheck(props.id)}} checked={props.checked}></input>
            <button  className="btn del-btn" onClick={()=>props.handleDelete(props.id)}>Delete</button>
        </li>
    )
}