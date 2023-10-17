import React, { useContext } from 'react'
import Login from './pages/login/Login'
import './App.scss'
import Register from './register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import { Context } from './components/context/DarkModeContext'
import { AuthContextP } from './components/context/AuthContext'

const App = () => {
  const {mode} = useContext(Context)
  const {CurrentUser} = useContext(AuthContextP)
  const Layout=()=>{
    return(
<div className={`theme-${mode ? "dark":"light"}`}>
       <NavBar/>
     <div style={{display:"flex"}}>
       <LeftBar/>
      <div style={{flex:"6"}}>
      <Outlet/>
  </div>
      <RightBar/>
</div>
</div>
    )

   
   
  }
  const ProtectedRoute=({children})=>{
    if(!CurrentUser){
     
      // if true then this condition
    
     
      return <Navigate to="/login"/>
      //yaha circular json problem existed due to= <Login/> 
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>

        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/register",
      element:<Register/>
    },
  ]);
  return (
    <div>  
    <RouterProvider router={router}/> 
     </div>
  )
}

export default App