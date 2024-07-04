import React from 'react'
import SearchBar from "../SearchBar/SearchBar.jsx"
import DropDownFilter from '../DropDownFilter/DropdownFilter.jsx'
import ToggleLightMode from '../LightModeButton/ToggleLightMode.jsx'

export default function TodoHeader({searchTerm, setSearchTerm, todoFilter, setFilter, lightMode, setLightMode}) {
  return (
    <div  className="todolist_header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} lightMode={lightMode} />
        <DropDownFilter todoFilter={todoFilter} setFilter={setFilter} />
        <ToggleLightMode setLightMode ={setLightMode} lightMode={lightMode} />
    </div>
  )
}

 