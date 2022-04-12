import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
const Authtentication = () => {
    let navigate = useNavigate()
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
      console.log(toggle);
    },[toggle])
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("bookingUser"))
        if(user) navigate('/home')
      },[navigate])
   
  return <>
     <div className='main'>
       <div className='title'>
         make<span>My</span>show
        </div>
     <div className='auth-page col-6'>
       
        <div className='auth-btn'>
            <button className={!toggle?"btn btn-color":"btn"} onClick={()=>setToggle(false)}>Login</button>
            <button className={toggle?"btn btn-color":"btn"} onClick={()=>setToggle(true)}>Register</button>
        </div>
        <div className='auth-main'>
        {toggle? <Register/>:<Login/>}
        
        </div>
     </div>
    </div>
  </>
}

export default Authtentication;