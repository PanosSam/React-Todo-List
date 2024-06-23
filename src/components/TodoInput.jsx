import React,{useState} from 'react'

export default  function TodoInput({onSubmit, onClose}) {
    const [title, setTitle] = useState("");

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
  return (
    <div>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value) }
        onKeyDown={(e) => handle(e)}
      placeholder="Enter todo title"
    />
    <button onClick={handleSubmit} >Add</button>
    <button onClick={onClose}>Close</button>
  </div>
  )
}

