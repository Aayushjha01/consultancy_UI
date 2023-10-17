import React, { createContext, useState ,useEffect} from 'react'
// import img1 from '../../assets/log.jpg'

export  const AuthContextP = createContext()
const AuthContext = ({children}) => {
   
    const [CurrentUser,setMode] = useState(JSON.parse(localStorage.getItem("user"))|| null)

    const Login = ()=>{
      setMode({id:"1",name:"Aayush jha"})
    }

    useEffect(()=>{
      localStorage.setItem ("user",JSON.stringify(CurrentUser))
    },[CurrentUser])
  return (
    <div>
    <AuthContextP.Provider value={{CurrentUser,Login}}>{children}</AuthContextP.Provider>

    </div>
  )
}

export default AuthContext