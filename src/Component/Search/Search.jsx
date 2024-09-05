import { useEffect, useState } from 'react'
import { SearchInput } from '../SearchInput/SearchInput'
import { SearchList } from '../SearchList/SearchList'
import axios from "axios";
import'./Search.css'

export const Search=()=>{

  const[searchList ,setSearchList]=useState([])
  const[userInput,setUserInput]=useState('')
  const[statee,setStatee]=useState(false)
  const API_URL="https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false"

  const fetchApi= async()=>{

    const response = await axios.request(API_URL,{
      params:{
        query:userInput,
      }
    }
    );
    console.log(response.data.results);
    setSearchList(response.data.results)
  }

  useEffect(()=>{
    const deBounce=setTimeout(()=>{
      if(userInput){
        
        fetchApi();

      }
     

    },1000)
    return () => {
      clearTimeout(deBounce);
    }

  },[userInput])
  console.log(userInput);
  console.log("list=",searchList)


  return(
    <>
    <div className="main-contianer">
    <SearchInput userInput={userInput} setUserInput={setUserInput} setSearchList={setSearchList} />
    <div className="display-contianer">
      <SearchList searchList={searchList}/>
     
    </div>
        
        

    </div>
   
    </>

  )
}