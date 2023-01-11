import React, { useEffect } from 'react'
import LoginForm from './components/FormGenerator/LoginForm';
import TestForm from './components/FormGenerator/TestForm';
import { useContextProvider } from './contexts/AppProvider';

// import { COLUMNS, COLUMNS2 } from './data/columns';
// import { top100Films } from './data/dummyData';
// import rows from './data/rows.json';

const App = () => {

  const {screenSize, setScreenSize} = useContextProvider()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize)
    handleResize()
    return window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='p-5'>
        <h1 className="text-xl">Component Tests</h1>
        <TestForm/>
    </div>
  )
}

export default App
