import React, { useState, useEffect } from 'react'
import Singleevent from './Singleevent';
import Add_event from './Add_event';
import axios from 'axios';
import './Event.css'

const Event = () => {
  const[openform,setopenform]=useState(false);
  const [events, setevents] = useState([]);
const apicall=async ()=>{
    await axios.get("/event/allevents").then((res) => { setevents(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])
  return (
    <div>
      <div className="event-component">
        <p><i className="fa-sharp fa-solid fa-apostrophe"/>Events</p>
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
      <div className="blogs">
        <p>Events</p>
         {events.map((item) => {
         return <Singleevent id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date} time={item.time} location={item.location} numberofspeaker={item.numberofspeaker} registrationfee={item.registrationfee}/>
        })}
      </div>
    </div>
  )
}

export default Event
