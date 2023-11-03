import React from 'react'
import "../Css/Profile.css"
import { BsSearch } from "react-icons/bs";
const Profile = () => {
  return (
    <div className='profile-main'>  
    <div className="profile-left-top">
       <div className='left-top-image'>
      </div> 
       <input type='text' name='location' placeholder='Search by location'></input>
       <button type='submit'><BsSearch/></button>
        </div>
    <div className="profile-right-top"><div className='right-top-image' > 
    </div><input type='text' name='location' placeholder='Search by location'></input>
       <button type='submit'><BsSearch/></button>
       </div>
    <div className="profile-left-bottom"><div className='left-btm-img' ></div> 
    <input type='text' name='location' placeholder='Search by location'></input>
       <button type='submit'><BsSearch/></button>
       </div>
    <div className="profile-right-bottom"><div className='right-btm-img' ></div> 
    <input type='text' name='location' placeholder='Search by location'></input>
       <button type='submit'><BsSearch/></button>
    </div>
  \
    
    </div>
  )
}

export default Profile