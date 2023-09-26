import React, { useState } from 'react'
import { Switch } from './components/Switch/Switch'

export const App = () => {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])


  const verifyCompatibility = ()=> {
    if(selectedOptions.length === 2) {
      if(selectedOptions[0] === "Good") {
        setGood(false)
        const newOptions = selectedOptions.filter(option => option !== "Good")
        setSelectedOptions(newOptions)
        return
  
      }
      if(selectedOptions[0] === "Cheap") {
        setCheap(false)
        const newOptions = selectedOptions.filter(option => option !== "Cheap")
        setSelectedOptions(newOptions)
        return
  
      }
      if(selectedOptions[0] === "Fast") {
        setFast(false)
        const newOptions = selectedOptions.filter(option => option !== "Fast")
        setSelectedOptions(newOptions)
        return
  
      }
    }
   

    console.log(selectedOptions);
  }
  return (
    <div className='container'>
      <h1>How do you want your project to be?
</h1>
    <Switch option="Good" check={good} setChecked={setGood} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} verifyCompatibility={verifyCompatibility}/>
    <Switch option="Cheap" check={cheap} setChecked={setCheap} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} verifyCompatibility={verifyCompatibility}/>
    <Switch option="Fast" check={fast} setChecked={setFast} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} verifyCompatibility={verifyCompatibility}/>
    </div>
  )
}
