


export default function DropDownFilter({ filter, setFilter } ){
   

   

return (
  <div className="todolist_select">
  <select value={filter} onChange={e => setFilter(e.target.value)}>
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="incomplete">Incomplete</option>
  </select>
</div>
  
  )

}