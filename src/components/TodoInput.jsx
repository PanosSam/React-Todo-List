import { useRef } from "react";
import "./Modal.css";

export default  function TodoInput({title,setTitle,handle}) {
  
  const inputRef = useRef(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='item container_modal--inputBar' onClick={handleContainerClick}>
     <input className='container_modal--input'
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

