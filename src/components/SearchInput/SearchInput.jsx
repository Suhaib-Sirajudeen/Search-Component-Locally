import'./SearchInput.css'
import closeIcon from '../../assets/closeIcon.svg'
import { useEffect, useRef } from 'react'

export const SearchInput=({userInput , handleInput , clearAll})=>{

  const inputRef =useRef(null);

  useEffect(()=>{

   inputRef.current.focus();
  }
  
  
  ,[userInput])
  
 
  return(
    <div className="search-input-section">
      <input placeholder='Enter the Name ...' value={userInput} onChange={handleInput} ref={inputRef}/>
      {userInput && 

       <button className='close-icon' onClick={clearAll}> 
        
          <img src={closeIcon} alt="" width='32px' height='32px' />
       
       </button>
      
      }
     
    </div>
  )
}