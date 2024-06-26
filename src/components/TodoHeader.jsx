import React from 'react'
import SearchBar from "./SearchBar.jsx"
import DropDownFilter from './DropdownFilter.jsx'
import ToggleLightMode from './ToggleLightMode.jsx'

export default function TodoHeader({searchTerm, setSearchTerm, todoFilter, setFilter, lightMode, setLightMode}) {
  return (
    <div  className="todolist_header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DropDownFilter todoFilter={todoFilter} setFilter={setFilter} />
        <ToggleLightMode setLightMode ={setLightMode} lightMode={lightMode} />
    </div>
  )
}

 