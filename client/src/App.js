import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import Header from './Pages/Universal/Header/Header'
import Footer from './Pages/Universal/Footer/Footer'
import Login from './Pages/Login/Login'
import axios from "axios"
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
// import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";

// const app=()=>{
//   const[frontend,setData]=useState();
//   const getData=async()=>{
//     const response=await Axios.get("http:localhost:5000/getData");
//     setData(response.data);
//   }

// }
import { useNavigate } from "react-router-dom"
import Blog from './Pages/Blog/Blog'
import { Axios } from 'axios'
function App() {
  const history = useNavigate()

  async function isauthenticated() {
    try {
      await axios.get("admin/isauthenticated").then((res)=>{res.data?history("/"):history("/login")})
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
   isauthenticated();
  }, [])
  
  return (
    <div>
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/" element={<Admin/>}/>
       {/* <Header/> */}
          {/* <Admin/> */}
          {/* <Blog/> */}
          
       {/* <Footer/> */}
       </Routes>
    </div>
  )
}

export default App




  
        
