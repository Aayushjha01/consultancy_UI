import './register.scss'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    
    name: '',
    address:'',
    email: '',
    password:'',
    phone:''
   
  });
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.18.15:4500/users/createUser', formData);

     
      console.log('Response:', response.data);
    } catch (error) {
      
      console.error('Error:', error);
    }
  };

  return (
    <div className="register">
    <div className="card">
          <div className="left">
          <h1>Your Consultant</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus 
          ut aspernatur ea nesciunt reprehenderit, iure fugit quia odio omnis nulla
           et nihil distinctio rerum repellendus ab numquam, commodi totam.</p>
           <span>Do you have an account ?</span>
           <Link to="/login">
           <button>Login</button>
           </Link>
          </div>
          <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
          <div>   
            <input type="text" placeholder='Name' name="name" value={formData.name} onChange={handleChange}  required/>
          </div>
  
          <div>
            <input  type="text" placeholder='Address' name="address" value={formData.address}  onChange={handleChange}  required/>
            </div>
          
            <div>
            <input type="email" placeholder='Email' name="email" value={formData.email}   onChange={handleChange}    required/>
            </div>
            <div>
              <input  type="password" placeholder='Password' name="password"  value={formData.password} onChange={handleChange}  required />
             </div>
             
             <div>
            <input type="text" placeholder='Mobile'  id="phone"  name="phone"  value={formData.phone}  onChange={handleChange} required/>
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
    
            </div>
      </div>
      </div>
    )
  }
              
              
              
              
             
          
             
             
          
              
             
              
           
         
              
            
          
          
    
          
         
    
    
          
  
  export default Register
             
             
              
              
          