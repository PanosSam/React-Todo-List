import React, { useState } from 'react'
import TodoInput from "./TodoInput";
import "./Modal.css"



export default function Modal({open, onClose, onSubmit, }){
  const [title, setTitle] = useState("");
if (!open) return null

  const handleSubmit = () => {
    onSubmit(title);
    setTitle("");
    onClose();

  };
  function handle(e) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs

      handleSubmit()
    }
  }


    return(
      <div className="container_modal">
      <div className="container_modal2">
        <h2 className='item container_modal-h2'>NEW NOTE</h2>
        <TodoInput 
        handle={handle}
        setTitle={setTitle}
        onSubmit={onSubmit} 
        title={title}
        />
        <div className='item container_modal-buttons'>
          <button className='container_modal--closeBtn' onClick={onClose}>CLOSE</button>  
          <button className="container_modal--addBtn" onClick={handleSubmit} >APPLY</button>
          </div>
      </div>
    </div>
       
      
    )
}