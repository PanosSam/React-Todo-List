import React from 'react'
import moon from "../assets/moon.svg"
import sun from  "../assets/sun.svg"
import "./ToggleLightMode.css"


export default function ToggleLightMode({ lightMode, setLightMode}) {


function handleLightMode(){
    setLightMode(light => !light)
}

  return (
    <div>

        <div
        className='todolist_lightModeBtn'
        onClick={handleLightMode}
        >
          <img src={lightMode ? moon : sun} alt="" />
        </div>
      
    </div>
  )
}
