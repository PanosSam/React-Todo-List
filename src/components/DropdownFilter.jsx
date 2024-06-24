


  export default function DropDownFilter({ todoFilter, setFilter } ){
   
    
    


  return (
    <div >
      <select className="todolist_select-btn" value={todoFilter} onChange={e => setFilter(e.target.value)}>
        <option className="option" value="all">All</option>
        <option className="option" value="completed">Completed</option>
        <option className="option" value="incomplete">Incomplete</option>
      </select>
    </div>
    );
  };