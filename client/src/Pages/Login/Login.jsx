import React, { useState } from 'react'
import './Login.css'
import axios from "axios"

import { useNavigate } from "react-router-dom"

const Login = () =>  {
  const history = useNavigate()
  const [ user, setUser] = useState({
      email:"",
      password:"",
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  async function login() {
    try {
      const { email, password } = user
      await axios.post("admin/login",user);
      history("/");
    } catch (err) {
      alert(err);
    }
  }
  return (
  <div class="main">
    <p class="sign" align="center">Log in</p>
    <form class="form1"/>
      <input class="un "  type="text" name="email" value={user.email} placeholder="Your Email"  onChange={ handleChange } align="center"/>
      <input class="pass" align="center" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
      <a class="submit" align="center" onClick={()=>{login()}}>Log in</a>
      {/* <p class="forgot" align="center"><a href="#"/>Forgot Password?</p> */}
            
                
    </div>
     

  )
}

export default Login
