import { names } from '../../data/name'
import { useEffect, useState } from 'react'
import { Container } from '../../layout/Container'
import { SearchInput } from '../SearchInput/SearchInput'
import './Search.css'


export const Search =()=>{

  const[userInput ,setUserInput]=useState('suhaib');
  const[userList,setUserList]=useState([]);

  const handleInput=(event)=>{

    setUserInput(event.target.value)
    
  }
  
  const filterName=()=>{
    
    const newuserList= names.filter((name)=>{
      return name.toLowerCase().startsWith(userInput.toLowerCase())
     });

    setUserList(newuserList);
    // console.log(newuserList,'=newUserList')
    // console.log(names,'names')
    console.log(userList)


    
  }

  useEffect(()=>{
    
    const interval = setTimeout(()=>{

      filterName();
    },500)

    return ()=>{
        clearTimeout(interval)
      }
    

  },
  [userInput])

  return(
    <Container>
      <div className="main-search-container">
        <h2>Search Component </h2>
        <SearchInput userInput={userInput} handleInput={handleInput} />
        <Container>
          <div className="search-result-container">

              {userList.map((name,index)=>(
                
                <div className="name-container" key={index} onClick={()=>setUserInput(name)}>
                  {name}
                </div>

                            
              ))}
           
          </div>
        </Container>
      </div>
    </Container>
  )
}