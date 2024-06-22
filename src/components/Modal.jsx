
import TodoInput from "./TodoInput";
import "./Modal.css"



export default function Modal({open, onClose, onSubmit}){

if (!open) return null


    return(
      <div className="modal">
      <div className="modal-content">
        <h2>Add Todo</h2>
        <TodoInput 
        onSubmit={onSubmit} 
        onClose={onClose} 
        />
      </div>
    </div>
       
      
    )
}