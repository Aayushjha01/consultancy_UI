import React, { createContext, useState ,useEffect} from 'react'
export  const Context = createContext()
const DarkModeContext = ({children}) => {
   
    const [mode,setMode]= useState(JSON.parse(localStorage.getItem("dark"))|| false)

    const toggle = ()=>{
      setMode(!mode)
    }

    useEffect(()=>{
      localStorage.setItem("dark",mode)
    },[mode])
  return (
    <div>
    <Context.Provider value={{mode,toggle}}>{children}</Context.Provider>
    </div>
  )
}

export default DarkModeContext