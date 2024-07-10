import { useRef } from "react"
import mglass from "../../assets/mglass.svg"
import mglasswhite from "../../assets/mglasswhite.svg"

export default function SearchBar({ searchTerm, setSearchTerm,lightMode }){

const inputRef = useRef(null);
     
const handleContainerClick = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

return(
          <div className={lightMode ? 'todolist_searchBar':
           "todolist_searchBar_nightMode"} onClick={handleContainerClick}>
          <input className={lightMode ? "todolist_searchBar-input" :
           "todolist_searchBar-input_nightMode"}
            id="search"
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Search note...'
            ref={inputRef}
          />
          <img className="todolist_searchBar-vector" src={lightMode ? mglass : mglasswhite }alt="" />
        </div>
     )}