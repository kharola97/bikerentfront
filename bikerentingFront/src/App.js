import React from 'react'
import Body from "./Components/Body"
import Nav from './Components/Navbar'
import Register from './Components/Register'
import Profile from './Components/Profile'
import UserHome from './Components/UserHome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import "./App.css"
const App = () => {
  return (
    <div className="App" >
     <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Contactus' element={<Body/>}></Route>
        {/* <Route path='/profile' element={<Profile/>}></Route> */}
        <Route path='/profile' element={<UserHome/>}></Route>
     
      </Routes>
      </Router>
      </div>
  )
}

export default App
