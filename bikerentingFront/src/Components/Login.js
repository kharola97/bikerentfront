import React, { useState } from 'react'
import "../Css/Login.css"
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
export const Login = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [data, setData] = useState({
    email:"",password:""
  })
  const navigate = useNavigate()
  const handleInputChange = (e)=>{
    const{name,value} = e.target
    setData({...data,[name]:value})
  }

const handleSubmit = async (e)=>{
  e.preventDefault()

  try {
    
 
  const requestToBackend = await axios.post("http://localhost:4000/login",data,{
    headers:{
      "Content-Type":"application/json"
    }
  });
  const result = requestToBackend.data
  if(result.status===false || !result){
    alert("password is wrong")
  }
  else{
    alert("login was successfull")
    navigate("/profile")
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
    <div className='main-login'>
        <form className='form-elements' onSubmit={handleSubmit} >
        <h1>Login</h1>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={data.email} onChange={handleInputChange}/>
            <label htmlFor='password'>Password</label>
            <input type={isChecked ? "text" : "password"} value={data.password} id='password' name='password' onChange={handleInputChange}/>
            <div className='checkbox'>
            <label htmlFor='checkbox'>show password</label>
            <input type='checkbox' className='check' id='checkbox' onClick={()=>setIsChecked(!isChecked)}></input>
            </div>
            <button type='submit'>Log in</button>
            <p>Dont have an account? <Link to='/register'>Register</Link></p>
        </form>
        </div>
  )
}
