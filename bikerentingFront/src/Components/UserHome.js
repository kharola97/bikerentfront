import React,{useState} from 'react'
import "../Css/Userhome.css"
import { useLocation } from 'react-router-dom'
import UserImageLeft from "../Images/userleftside3.png"
const UserHome = () => {
  const location =useLocation();
  
 const bikeDetails= [{
  bikeImg:"this is image",
  name:"pulsar",
  price:"500rs",
  shopName:"rentals",
  address:{
    state:"uttarakhnad",
    city:"mussoorie",
    street:"landour cantt"
  }
 },
 {
  bikeImg:"this is image2",
  name:"duke",
  price:"800rs",
  shopName:"aggarwals rentals",
  address:{
    state:"uttarakhnad",
    city:"mussoorie",
    street:"landour cantt"
  }
 },
//  {
//   bikeImg:"this is image3",
//   name:"bullet",
//   price:"1200rs",
//   shopName:"Singh rentals"
//  },
//  {
//   bikeImg:"this is image4",
//   name:"activa",
//   price:"500rs",
//   shopName:"kumar rentals"
//  },
//  {
//   bikeImg:"this is image5",
//   name:"access",
//   price:"500rs",
//   shopName:"ankit rentlas"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  },
//  {
//   bikeImg:"this is image6",
//   name:"apache",
//   price:"700rs",
//   shopName:"anybikerental"
//  }
]
  return (
    <div className='main-user'>
      <div className='user-leftside'>
        
        {/* <img  src={location.state.user.profileImage} alt='empty'></img>  */}
         <h4>welcome {location.state.user.username}</h4> 
         <input type='search' placeholder='search by location'></input>
         <input type='search' placeholder='search by price'></input>
         <input type='search' placeholder='search by location'></input>
         <div className='userleftimg'>
         <img  src={UserImageLeft} alt='empty'/>
         </div>
      </div>
      <div className='bike-cards'>
        {bikeDetails.map((data, index)=>{
          return(
            <div key={index} className='cards'>
            <img src='https://plus.unsplash.com/premium_photo-1661869085660-3252fcd3e505?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='empty'></img>
            <div className='bike-info'>
            <p>Bike</p>
            <p>price</p>
            <p>Shopname</p>
            </div>
            <div className='bikeinfofromback'>
              <p>{data.name}</p>
              <p>{data.price}</p>
              <p>{data.shopName}</p>
              </div>
              <div className='bikeadd'>
                <p>state :{data.address.state}</p>
                <p>city: {data.address.city}</p>
                <p>street: {data.address.street}</p>
                </div>
               
            <button type='submit'>Rent bike</button>
            </div>
          )
        })}
       
      </div>
    </div>
  )

  
}

export default UserHome