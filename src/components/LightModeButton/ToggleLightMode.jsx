import React,{ useEffect } from 'react'
import moon from "../../assets/moon.svg"
import sun from  "../../assets/sun.svg"
import "./ToggleLightMode.css"

export default function ToggleLightMode({ lightMode, setLightMode}) {

  useEffect(() => {
    const savedLightMode = localStorage.getItem('lightMode');
    if (savedLightMode) {
      setLightMode(JSON.parse(savedLightMode));
    }}, [setLightMode]);

  function handleLightMode(){
    setLightMode(light => {
      const newLightMode = !light;
      localStorage.setItem('lightMode', JSON.stringify(newLightMode));
      return newLightMode;
    });}
  return (
    <div>
        <div
        className='todolist_lightModeBtn'
        onClick={handleLightMode}>
          <img src={lightMode ? moon : sun} alt="" />
        </div> 
    </div>)}
