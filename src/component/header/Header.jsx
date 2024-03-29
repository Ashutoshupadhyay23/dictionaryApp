import React from 'react'
import './Header.css'
import { MenuItem, TextField, createMuiTheme, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import categories from '../../data/category'

const Header = ({ category, setCategory, word, setWord, lightMode }) => {

  // const darkTheme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: '#fff',
  //     },
  //     type: 'dark',
  //   }
  // })

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#fff',
      },
      type: lightMode ? 'light' : 'dark',
    }
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  }



  return (
    <div className='header'>
      <span className='title'>
        {word ? word : "Word Hunt"}
      </span>
      
      <div className='input'>

        <ThemeProvider theme={darkTheme}>
          {/* <TextField 
            label='Search a Word'
            className='search'
            value={word}
            onChange={(e) => setCategory(e.target.value)}
          /> */}

          <TextField
            id="standard-basic" 
            // label="Standard" 
            variant="standard"
            label='Search a Word'
            className='search'
            value={word}
            onChange={(e) => setCategory(e.target.value)}
            
            
          />

          {/* <TextField
            className='select'
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            
          > */}

          <TextField
            // id="outlined-select-currency"
            className='select'
            select
            label="Language"
            // defaultValue="EUR"
            // helperText="Please select your currency"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            
            {categories.map((option) => {
              <MenuItem key={option.value} value={option.label}>
                {option.value}
              </MenuItem>
            })}
            
            
          </TextField>

        </ThemeProvider>
        
      </div>
    </div>
  )
}

export default Header