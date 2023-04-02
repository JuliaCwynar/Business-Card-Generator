import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Data from './Data'
import Background from './Background'
import Style from './Style'




function GenerateButton() {
  return (
      <form className='form'>
          <button className='form--button'>Generate business card</button>
      </form>
  )
}
function App() {
  
return (        
    <div className="App">
      <Navbar />
      <Data />
      <Background />
      <Style />
      <GenerateButton />
      </div>
  )
}

export default App
