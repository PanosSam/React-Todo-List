import React, { useState } from 'react'
import TodoInput from "./TodoInput";
import "./Modal.css"



export default function Modal({isOpen, onClose, onSubmit,lightMode }){
  const [title, setTitle] = useState("");

if (!isOpen) return null



  const handleSubmit = () => {
    onSubmit(title);
    setTitle("");
    onClose();
    document.body.style.overflow = 'auto';
  };
  
  function handle(e) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs

      handleSubmit()
    }
  }


    return(
      <div className="container_modal">
      <div className={lightMode ? "container_modal2": "container_modal2_nightMode" }>
        <h2 className={lightMode ? "item container_modal-h2" : "item_container_modal-h2_nighMode"}>NEW NOTE</h2>
        <TodoInput 
        lightMode={lightMode}
        handle={handle}
        setTitle={setTitle}
        onSubmit={onSubmit} 
        title={title}
        />
        <div className='item container_modal-buttons'>
          <button className='container_modal--closeBtn' onClick={onClose}>CANCEL</button>  
          <button className="container_modal--addBtn" onClick={handleSubmit} >APPLY</button>
          </div>
      </div>
    </div>
       
      
    )
}