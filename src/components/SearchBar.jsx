import { useRef } from "react"
import vector from "../assets/vector.png"

export default function SearchBar({ searchTerm, setSearchTerm }){

const inputRef = useRef(null);
     
const handleContainerClick = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

return(
          <div className='todolist_searchBar' onClick={handleContainerClick}>
          <input className="todolist_searchBar-input"
            id="search"
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Search note...'
            ref={inputRef}
          />
          <img className="todolist_searchBar-vector"src={vector} alt="" />
        </div>

        
     )
}