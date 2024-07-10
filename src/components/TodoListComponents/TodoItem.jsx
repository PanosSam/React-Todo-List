import trashcan from "../../assets/trashcan.svg"
import trashcanRed from "../../assets/trashcanRed.svg"
import pengrey from "../../assets/pengrey.svg"
import penpurple from "../../assets/penpurple.svg"
import { useState } from "react"

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo,lightMode,editTodo }){
const [mouseOverDelete,setMouseoverDelete] =useState(true) // Both states are used in order to execute a custom hover
const [mouseOverEdit, setMouseOverEdit] = useState(true) //effect so we can swap between edit and delete images.
const [isEditing, setIsEditing] = useState(false);
const [newTitle, setNewTitle] = useState(title);

 function handleMouseOverDelete() { 
    setMouseoverDelete(mouse => !mouse)}
function handleMouseOverEdit (){
    setMouseOverEdit(mouse => !mouse)}
function handleEditClick() {
    setIsEditing(true);}
function handleSaveClick() {
    editTodo(id, newTitle);
    setIsEditing(false);}
  function handleCancelClick() {
    setIsEditing(false);
    setNewTitle(title);}

 return (
    <li className="todoItem">
        <label className="todoItem_label">
            <input 
            className={lightMode ? "todoItem_checkbox" : "todoItem_checkbox_nightMode"}
            type="checkbox" 
            checked={completed} 
            onChange ={e =>toggleTodo(id, e.target.checked)}
            />
             <span className={lightMode ? "checkmark" : "checkmark_nightMode"}></span>
        </label>
             
            <div className={` ${completed ? "todoItem_titleChecked" : "todoItem_title"}
                         ${completed && !lightMode ? "todoItem_titleChecked_nightMode" : ""}
                         ${!completed && !lightMode ? "todoItem_title_nightMode" : ""}`}>
            {isEditing ? (
          <input
          className={lightMode ? "todoItem_editInput" : "todoItem_editInput_nightMode"}
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
        )  :(title)}
            </div>
           
         <div className="todoItem_buttons">
         {isEditing ? (
          <>
            <button
            className="todoItem_editSave"
             onClick={handleSaveClick}>Save</button>
            <button 
            className="todoItem_cancelSave"
            onClick={handleCancelClick}>Cancel</button>
          </>

         ): ( 
         <>
         <button 
          className="todoItem_editBtn"
          onClick={handleEditClick}
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
          </>
         )}
         </div>
   </li>
   
    )
}