import './login.scss'

const Register = () => {
  return (
    <div className="login">
    <div className="card">
          <div className="left">
          <h1>Your Consultant</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus 
          ut aspernatur ea nesciunt reprehenderit, iure fugit quia odio omnis nulla
           et nihil distinctio rerum repellendus ab numquam, commodi totam.</p>
           <span>Do you have an account ?</span>
           <button>Login</button>
          </div>
          <div className="right">
          <h1>Login</h1>
          <form action="">
          <input type="text" name="" id="" placeholder='Username'/>
          <input type="password" name="" id="" placeholder='Password'/>
          <button>Login</button>
          </form>
  
          </div>
    </div>
    </div>
  )
}

export default Register