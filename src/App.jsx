import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/header/Header'

function App() {

  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState('')

  const dictionaryApi = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')

      setMeanings(data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [])
 
  return (
    <div 
      className='App'
      style={{height: '100vh', backgroundColor: '#282c34', color: 'white'}}
    >
      <Container
        maxWidth='md'
        style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
      >
        
        <Header />

      </Container>
    </div>
  )
}

export default App

// https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

// i have to install material ui and axios 