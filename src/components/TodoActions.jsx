import addbutton from "../assets/addbutton.png"


export default function TodoActions({setIsOpen}) {

  
  function handleClick(){
    document.body.style.overflow = 'hidden';
    setIsOpen(true)
  }
  

  return (
    
   
      <button
        className="todolist_actionBtn"
        onClick={handleClick}>
        <img src={addbutton} alt="" ></img> 
      </button>
      
  )
}

