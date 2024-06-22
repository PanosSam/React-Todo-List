import React from 'react'
import SearchBar from "./SearchBar.jsx"
import DropDownFilter from './DropdownFilter.jsx'

export default function TodoHeader({searchTerm, setSearchTerm, filter, setFilter}) {
  return (
    <div  className="todolist_header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DropDownFilter filter={filter} setFilter={setFilter} />
        <button className='todolist_colorScheme'>NM</button>
    </div>
  )
}

 