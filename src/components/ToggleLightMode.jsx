import React,{ useState } from 'react'

export default function ToggleLightMode({ setLightMode}) {


function handleLightMode(){
    setLightMode(light => !light)
}

  return (
    <div>

        <button 
        className='todolist_lightModeBtn'
        onClick={handleLightMode}
       
        >NM</button>
      
    </div>
  )
}
