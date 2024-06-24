import React from 'react'
import SearchBar from "./SearchBar.jsx"
import DropDownFilter from './DropdownFilter.jsx'

export default function TodoHeader({searchTerm, setSearchTerm, todoFilter, setFilter}) {
  return (
    <div  className="todolist_header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DropDownFilter todoFilter={todoFilter} setFilter={setFilter} />
        <button className='todolist_colorScheme'>NM</button>
    </div>
  )
}

 