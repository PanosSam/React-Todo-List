import {useState} from 'react'

export default  function TodoInput({onSubmit, onClose}) {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
      onSubmit(title);
      setTitle("");
      
    };
  return (
    <div>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter todo title"
    />
    <button onClick={handleSubmit}>Add</button>
    <button onClick={onClose}>Close</button>
  </div>
  )
}

