import'./SearchInput.css'

export const SearchInput=({userInput , handleInput})=>{

  

  return(
    <div className="search-input-section">
      <input placeholder='Enter the Name ...' value={userInput} onChange={handleInput}/>
    </div>
  )
}