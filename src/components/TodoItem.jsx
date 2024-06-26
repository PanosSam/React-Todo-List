import trashcan from "../assets/trashcan.svg"
import trashcanRed from "../assets/trashcanRed.svg"
import pengrey from "..//assets/pengrey.svg"
import penpurple from "../assets/penpurple.svg"
import { useState } from "react"

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){
const [mouseOverDelete,setMouseoverDelete] =useState(true)
const [mouseOverEdit, setMouseOverEdit] = useState(true)

 function handleMouseOverDelete() {
    setMouseoverDelete(mouse => !mouse)
}

function handleMouseOverEdit (){
    setMouseOverEdit(mouse => !mouse)
}

    return (
    <li className="todoItem" >
        <label className="todoItem_label">
            <input 
            className="todoItem_checkbox"
            type="checkbox" 
            checked={completed} 
            onChange ={e =>toggleTodo(id, e.target.checked)}
            />
             <span className="checkmark"></span>
        </label>
             
            <div className={completed ? "todoItem_titleChecked" : "todoItem_title"}>
             {title}
            </div>
           
         <div className="todoItem_buttons">

          <button 
          className="todoItem_editBtn"
          onMouseOver={handleMouseOverEdit}
          onMouseOut={handleMouseOverEdit}
          ><img src={mouseOverEdit ? pengrey : penpurple} alt="" />
          </button>
 
          <button 
          className="todoItem_deleteBtn"
          onClick={() => deleteTodo(id)}
          onMouseOver={handleMouseOverDelete}
          onMouseOut={handleMouseOverDelete}
          >
          <img className="todoItem_deleteBtn-img" 
          src={mouseOverDelete ? trashcan : trashcanRed} alt="" /> 
          </button>
         </div>
      
   </li>
   
    )
}