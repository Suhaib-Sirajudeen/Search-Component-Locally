import'./SearchList.css'

export const SearchList=({searchList})=>{

  return(
    <>

    {searchList.map((item)=>{
      return(
       <div className="contianer">
        
          <div className="search-contianer">
              <img src={`//image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""  width="60" height="60" style={{objectFit:"contain"}}/>
              <h4>{item.title}</h4>
        

        </div>
          

       </div>
        
      )
    })}
   
    
    </>

  )
}