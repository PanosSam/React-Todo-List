import React, { useState,useEffect } from 'react'
import TodoInput from "../TodoListComponents/TodoInput";
import "./Modal.css"



export default function Modal({isOpen, onClose, onSubmit,lightMode }){
  const [title, setTitle] = useState("");


  useEffect(() => {    //setting the Esc btn as another method of closing the modal.
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; 
    } else {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);






if (!isOpen) return null

  const handleSubmit = () => {
    onSubmit(title);
    setTitle("");
    onClose();
  };
  
  function handle(e) {
    if (e.keyCode === 13 ) {
      e.preventDefault(); 
      handleSubmit()
    }
  }
 

    return(
      <div className="container_modal" >
      <div className={lightMode ? "container_modal2": "container_modal2_nightMode" }>
        <h2 className={lightMode ? "container_modal-h2" : "container_modal-h2_nighMode"}>NEW NOTE</h2>
        <TodoInput 
        lightMode={lightMode}
        handle={handle}
        setTitle={setTitle}
        onSubmit={onSubmit} 
        title={title}
        />
        <div className='container_modal-buttons'>
          <button className={lightMode ? 'container_modal--closeBtn': 'container_modal--closeBtn_nightMode'} onClick={onClose}>CANCEL</button>  
          <button className={lightMode ? "container_modal--addBtn" : "container_modal--addBtn_nightMode" }onClick={handleSubmit} >APPLY</button>
          </div>
      </div>
    </div>
       
      
    )
}