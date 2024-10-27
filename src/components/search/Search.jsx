import { names } from '../../data/name'
import { useEffect, useState } from 'react'
import { Container } from '../../layout/Container'
import { SearchInput } from '../SearchInput/SearchInput'
import './Search.css'


export const Search =()=>{

  const[userInput ,setUserInput]=useState('');
  const[userList,setUserList]=useState([]);
  const[ toggle , setToggle]=useState(true)

  const handleInput=(event)=>{

    setUserInput(event.target.value)
    setToggle(true)
    
  }

  const clearAll =()=>{

    setUserInput('');
    setUserList([]);

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

      if(userInput)
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
        <SearchInput userInput={userInput} handleInput={handleInput} clearAll={clearAll}/>
        <Container>
          <div className="search-result-container">

              {userList.map((name,index)=>{

                return(
                  <>
                      {
                      toggle && 
                      
                      
                      <div className="name-container" key={index} onClick={()=>(setUserInput(name),
                        setToggle(prev=>!prev))
                      }>
                        {name}
                      </div>
                    }
                  
                  </>

                )
             
              })}
           
          </div>
        </Container>
      </div>
    </Container>
  )
}