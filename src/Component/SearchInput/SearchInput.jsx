import { useState } from 'react'
import'./SearchInput.css'



export const SearchInput=({userInput, setUserInput,setSearchList})=>{
  const[sta,setSta]=useState('suhaasa')

  const getInput=(event)=>{
    setUserInput(event.target.value
    )
  }
  const clearAll=()=>{
    setUserInput('')
    setSearchList(prev=>[])

  }

  return(
    <div className="SearchInput-contianer">
      <div className="header">
      <img src="../public/cinema.png" alt="" width="80" height="80" />
      <h2 style={{marginTop:"20px"}}> Millions of Movies..</h2>

      </div>
      <div className='input-section'>
        <input type="text" name="" id="" placeholder='Search the Movie you need ...'value={userInput} onChange={getInput}/>
        {userInput && <button onClick={clearAll}><img src="../public/x-icon.png" alt="" width="32px"  height="32px"/></button>}
        
      </div>
     
         
    </div>
  )
}
