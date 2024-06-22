import addbutton from "../assets/addbutton.png"

export default function TodoActions({setIsOpen}) {
  return (
    <div>
      <img 
      className="todoActions_button"
      src={addbutton} alt="" 
      onClick={() => setIsOpen(true)}/>
      
  </div>
  )
}

