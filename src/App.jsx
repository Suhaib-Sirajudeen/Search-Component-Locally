import { useState } from 'react'
import './App.css'
import { Search } from './components/search/Search'
import { Container } from './layout/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container>
        <Search/>
     </Container>
 
  )
}

export default App
