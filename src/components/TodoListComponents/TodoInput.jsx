import { useRef } from "react";
import "../Modal/Modal.css";

export default  function TodoInput({title,setTitle,handle,lightMode}) {
  
  const inputRef = useRef(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={lightMode ? 'item container_modal--inputBar'
     : "container_modal--inputBar_nightMode"} 
     onClick={handleContainerClick}>
     <input 
     className={lightMode ? 'item container_modal--input' 
      : "item container_modal--input_nightMode"}
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value) }
      onKeyDown={(e) => handle(e)}
      placeholder="Input your note..."
      ref={inputRef}
      />
    </div>
  )
}

