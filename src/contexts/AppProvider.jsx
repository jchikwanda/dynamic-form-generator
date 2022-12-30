import React, { createContext, useContext, useState } from 'react'

const ContextProvider = createContext()

const AppProvider = ({children}) => {

    const [screenSize, setScreenSize] = useState(null)

    return (
        <ContextProvider.Provider value={{
            screenSize, setScreenSize
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

export const useContextProvider = () => useContext(ContextProvider);
export default AppProvider