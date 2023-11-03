import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Css/Register.css"

import axios from 'axios'

const Register = () => {
  const [data, setData] = useState({
    username:"",
    password:"",
    phone:"",
    email:"",
    state:"",
    city:"",
    street:"",
    img:null
  })

 const navigate = useNavigate()

  const handleInputChange = (e)=>{
    const {name,value} = e.target
   
    setData({...data, [name]:value})
  }

  const handleImageChange = (e) => {
    const files = e.target.files[0]; // Assuming a single file is uploaded
  
    if (files) {
      setData({ ...data, img: files });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('address[state]', data.state);
    formData.append('address[city]', data.city);
    formData.append('address[street]', data.street);
    formData.append('profileImage', data.img); // Append the image file to the FormData
  
     try {
      
    
      const info = await axios.post('http://localhost:4000/register', formData);
     
       const res= info.data;
      
       if(res.status == false || !res){
        const message = res.message
        console.log(message)
        alert(`failed ${message}`)
       }
      
       else{
        alert("successful")
        navigate("login")
       }
      } catch (error) {
        if (error.response) {
          // Access the error message from the response data
          const errorMessage = error.response.data.message;
          alert(errorMessage);
        } else {
          console.error("Error:", error);
          alert("An error occurred during login");
        }
      }
      }
    

  return (
    <div className='register'>
        <h2>Register</h2>
        <form method='POST' className='register-elements' onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='details'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' value={data.username} onChange={handleInputChange} required></input>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={data.password} onChange={handleInputChange} required></input>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' name='phone' value={data.phone} onChange={handleInputChange} required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={data.email} onChange={handleInputChange} required></input>
            <button type='submit'>register</button>
            </div>
            <div className='address' >
            <label htmlFor='state'>State</label>
            <input type='text' id='state' name='state' value={data.state} onChange={handleInputChange} required></input>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' name='city' value={data.city} onChange={handleInputChange} required></input>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' name='street' value={data.street} onChange={handleInputChange} required></input>
            <label htmlFor="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" value={data.profileImage} onChange={handleImageChange} />
            <p>Already have an account? <Link to="/login" className='link'>Login</Link></p>
            </div>
        </form>
           
            
    </div>
  )
}

export default Register