import'./SearchInput.css'
import closeIcon from '../../assets/closeIcon.svg'

export const SearchInput=({userInput , handleInput})=>{

  

  return(
    <div className="search-input-section">
      <input placeholder='Enter the Name ...' value={userInput} onChange={handleInput}/>
      {userInput && 

       <button className='close-icon'> 
        
          <img src={closeIcon} alt="" width='32px' height='32px' />
       
       </button>
      
      }
     
    </div>
  )
}