import React from 'react'
import Login from './pages/login/Login'
import './App.scss'
import Register from './register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
  Navigate
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';

const App = () => {
  const currentUser=false;
  const Layout=()=>{
    return(
      <div> 
       <NavBar/>
       <div style={{display:"flex"}}>
       <LeftBar/>
       <Outlet/>
       <RightBar/>

       </div>
      </div>
    )

   
   
  }
  const ProtectedRoute=({children})=>{
    if(currentUser){
      console.log(!currentUser,'usder')
      // if true then this condition
    
      return <Navigate to="/login"/>
      //yaha circular json problem existed due to= <Login/> 
    }
    return children;
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