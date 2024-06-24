import addbutton from "../assets/addbutton.png"

export default function TodoActions({setIsOpen}) {
  return (
   
      <button
        className="todolist_actionBtn"
        onClick={() => setIsOpen(true)}>
        <img src={addbutton} alt="" ></img> 
      </button>
      
  )
}

