import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import BaseForm from './components/BaseForm';
import LoginForm from './components/FormGenerator/LoginForm';
import TestForm from './components/FormGenerator/TestForm';
import CustomGrid from './components/Grid/CustomGrid';
import Grid from './components/Grid/Grid';
import Grid2 from './components/Grid/Grid2';
import { useContextProvider } from './contexts/AppProvider';

import { COLUMNS, COLUMNS2 } from './data/columns';
import { top100Films } from './data/dummyData';
import rows from './data/rows.json';

import './styles.css';

const App = () => {

  const {screenSize, setScreenSize} = useContextProvider()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize)
    handleResize()
    return window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    console.log(screenSize)
  }, [screenSize])

  return (
    <div className='p-5'>
        <h1 className="text-xl">Component Tests</h1>
        <TestForm/>
    </div>
  )
}

export default App

{/* <Grid2 columns={COLUMNS} rows={rows} /> */}
        {/* <CustomGrid columns={COLUMNS2} rows={rows} /> */}
        {/* <div>
          <form>
            <div>
              <h3>Lead Information</h3>
              <div className='grid grid-cols-3'>
                <FormControl>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant={'standard'} label="Movie" />}
                  />
                </FormControl>
                <FormControl>
                  <TextField variant='standard' sx={{padding: '15.8px'}} placeholder='First Name'/>
                </FormControl>
                <FormControl>
                  
                </FormControl>
              </div>
            </div>
          </form>
        </div> */}
        {/* <TestForm /> */}
        {/* <BaseForm /> */}