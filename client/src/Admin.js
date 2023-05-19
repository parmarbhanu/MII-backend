import React, { useState } from 'react'
import "./Admin.css"
import Header from './Pages/Universal/Header/Header'
import Blog from './Pages/Blog/Blog'
import Event from './Pages/Event/Event'

function Admin() {
  const [curentbox, setcurentbox] = useState("blog");
  return (
    <div>
    <Header/>
<div class="container  py-5">
  <div class="row">
    <div class="col-lg-12 p-5">
      <h1> <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</h1>
      <hr />
    </div>
  </div>
  <div class="row admin-option-box">
  
    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a class="text-decoration-none" onClick={()=>{setcurentbox("blog")}}>
        <div class="card p-3 shadow bg-purple text-center border-0">
          <div class="card-body">
            <i class="fa fa-edit fa-2x" aria-hidden="true"></i>
            <hr />
            <p class="card-title-lead">Blog's</p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2" >
      <a class="text-decoration-none" onClick={()=>{setcurentbox("event")}}>
        <div class="card p-3 shadow bg-purple text-center border-0">
          <div class="card-body">
            <i class="fa fa-image fa-2x" aria-hidden="true"></i>
            <hr />
            <p class="card-title-lead">Events</p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a class="text-decoration-none" onClick={()=>{setcurentbox("contact")}}>
        <div class="card p-3 shadow bg-purple text-center border-0">
          <div class="card-body">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <hr />
            <p class="card-title-lead">Contact Form </p>
          </div>
        </div>
      </a>
    </div>
{/* 
    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a class="text-decoration-none" href="#">
        <div class="card p-3 shadow bg-purple text-center border-0">
          <div class="card-body">
            <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
            <hr />
            <p class="card-title lead">Help Desk</p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#modelHELP">
        <div class="card p-3 shadow bg-purple text-center border-0">
          <div class="card-body">
            <i class="fa fa-question fa-2x" aria-hidden="true"></i>
            <hr />
            <p class="card-title lead">Support</p>
          </div>
        </div>
      </a>
    </div> */}

  </div>
</div>



<div class="modal fade" id="modelHELP" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="fa fa-question-circle-o" aria-hidden="true"></i> Technical Support
          24/7</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-5">
        <p>
          <small>(Mon - Sat / 10AM - 6PM)</small>
        </p>
        <hr />
        <p> <i class="fa fa-envelope mr-3" aria-hidden="true"></i> </p>
        <p><i class="fa fa-volume-control-phone mr-3" aria-hidden="true"></i> +91-123654789 </p>

      </div>

    </div>
  </div>
</div>

<div className='container'>
{curentbox==="blog"? <Blog/>:<></>}
{curentbox==="event"?<Event/> :<></>}
{curentbox==="contact"? <h1>Contact Us</h1>:<></>}
</div>
    </div>
  )
}

export default Admin
