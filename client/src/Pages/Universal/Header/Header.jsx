import React from 'react'
import './Header.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const history = useNavigate();

  async function logout() {
    try {
      await axios.get("admin/logout").then((res)=>{history("/login")})
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
        <nav className="nav-bar">
       
          <div className="left-align">
            {/* <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i>Services</a>
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Contact us</a> */}
            <h1 class="nav-link text-white" style={{fontSize:"30px"}}>Admin Panel</h1>
           </div>
            <div class="right-align">
            {/* <a class="nav-link text-white" href="#">Sign in/Log in <i class="fa fa-sign-out" aria-hidden="true"></i></a> */}
            <button class="nav-link text-white" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
             </div>   
            </nav>
    </div>
  )
}

export default Header
