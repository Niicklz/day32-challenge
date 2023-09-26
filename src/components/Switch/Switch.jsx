import React, { useState } from 'react'
import "./Switch.css"


export const Switch = ({option,setChecked, check, selectedOptions, setSelectedOptions, verifyCompatibility}) => {

  
  const handleClick = () => {
    if(selectedOptions.includes(option)){
      setSelectedOptions(selectedOptions.filter(op => op !== option ))
      setChecked(false)
      return
    }
    verifyCompatibility()
    setChecked(true)
    
   
   
    setSelectedOptions((selectedOptions) => [...selectedOptions, option])
    


  }

  return (
    <div className="option-container">
       <div className={`switch ${check? "active-bg": ""}`} onClick={handleClick}>
      <input type="checkbox" onChange={handleClick} checked={check}/>
      <div className={`switch__circle ${check? "active": ""}`} />
    </div>
      <p className="option">{option}</p>
    </div>
  )  
}
