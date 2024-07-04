import addbutton from "../../assets/addbutton.png"


export default function TodoActions({setIsOpen, lightMode}) {

  
  function handleClick(){
    document.body.style.overflow = 'hidden';
    setIsOpen(true)
  }
  

  return (
    
   
      <button
        className={lightMode ? "todolist_actionBtn": "todolist_actionBtn_nightMode"}
        onClick={handleClick}>
        <img src={addbutton} alt="" ></img> 
      </button>
      
  )
}

