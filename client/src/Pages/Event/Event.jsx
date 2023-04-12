import React, { useState } from 'react'
import './Event.css'
import Add_event from './Add_event';

const Event = () => {
  const[openform,setopenform]=useState(false);
  return (
    <div>
      <div className="event-component">
        <p><i class="fa-sharp fa-solid fa-apostrophe"/>Events</p>
        <div className="add-icon" id="add-icon-event" onClick={()=>{setopenform(!openform)}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>
        {openform?<Add_event/>:<></>}
        
      {/* </div> */}
      <div className="events">
        <div className="event-box">
          <div className="event-img">
            <img src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg" alt="event1" />
          </div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">
            <img src="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531__480.jpg" alt="eventyy" />
          </div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Event
