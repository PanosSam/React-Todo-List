import { useState } from "react"
import dropdown from "../assets/dropdown.svg"
import dropup from "../assets/dropup.svg"
import "./DropdownFilter.css"



  export default function DropDownFilter({ todoFilter, setFilter } ){
   const [openFilter, setOpenFilter] = useState(false)

    
   function handleClick(){
    setOpenFilter(open => !open)
   }

   function handleOptionClick(value) {
    setFilter(value);
    setOpenFilter(false); 
  }


  return (
    <div className="dropdownWrapper">
      <button className={openFilter ? "todolist_filter-btn_open" : 
      "todolist_filter-btn"} 
       onClick={handleClick}>
      {todoFilter.toUpperCase()} <img src={openFilter ? dropup : dropdown} alt="" /></button>
        <div className="todolist_filterdropdown" 
          style={{ opacity: openFilter ? '1' : '0', zIndex: openFilter ? "2": "0"}}>
          <div className="option" value="all"  onClick={() => handleOptionClick('all')}>All</div>
          <div className="option" value="completed" onClick={() => handleOptionClick('completed')} >Completed</div>
          <div className="option" value="incomplete" onClick={() => handleOptionClick('incomplete')}>Incomplete</div>
        </div>
        
      
    </div>
    );
  };