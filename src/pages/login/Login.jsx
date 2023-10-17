import { useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContextP } from '../../components/context/AuthContext'

const Login = () => {
  const {Login}  = useContext(AuthContextP)
  const HandleLogin  = ()=>{
    Login()
  }
  return (
    <div className="login">
    <div className="card">
          <div className="left">
          <h1>Your Consultant</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus 
          ut aspernatur ea nesciunt reprehenderit, iure fugit quia odio omnis nulla
           et nihil distinctio rerum repellendus ab numquam, commodi totam.</p>
           <span>Don't you have an account ?</span>
           <Link to="/register"> <button>Register</button></Link>
          
          </div>
          <div className="right">
          <h1>Login</h1>
          <form action="">
          <input type="text" name="" id="" placeholder='Username'/>
          <input type="password" name="" id="" placeholder='Password'/>
          <button onClick={HandleLogin}>Login</button>
          </form>
  
          </div>
    </div>
    </div>
  )
}

export default Login