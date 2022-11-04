export default function SearchItem(props)
{
    return (
        <form>
    <input type="text" className="search-input" value={props.search} 
    onChange={(event)=>{
        const {value}=event.target
        props.setSearch(value)
    }}placeholder="Search Item"></input>
        </form>
    )
}