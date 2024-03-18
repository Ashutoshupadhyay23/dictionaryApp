import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/header/Header'

import { Container, Switch } from '@mui/material'
import {withStyles} from '@mui/material/styles'
import axios from 'axios'
import Definition from './component/definitions/Definition'
import { grey } from '@mui/material/colors'

function App() {

  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("en")

  const purpleSwitch = withStyles({
    swichBase: {
      color: grey[300],
      "&$checked" : {
        color: grey[500],
      },
      "&$checked + $track" : {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)

      setMeanings(data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [word, category])
 
  return (
    <div 
      className='App'
      style={{height: '100vh', backgroundColor: '#282c34', color: 'white'}}
    >
      <Container
        maxWidth='md'
        style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
      >

        <div 
          style={{position: 'absolute', top: 0, right: 15, paddingTop: 10}}
        >
          theme
        </div>
        
        <Header 
          category={category} 
          setCategory={setCategory} 
          word={word} 
          setWord={setWord} 
        />

       {meanings && (
        <Definition 
          word={word} 
          meanings={meanings} 
          category={category} 
        />)}

      </Container>
    </div>
  )
}

export default App