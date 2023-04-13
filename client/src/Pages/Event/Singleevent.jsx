import React from 'react'
import axios from 'axios';

const Singleevent = (props) => {
    const deleteevent=async ()=>{
        await axios.get(`/event/deleteevent/${props.id}`).then((res) => { alert(res.data) });
      }
  return (
    <div>
      <div className="event-box">
          <div className="event-img">
            <img src={props.image} alt="event-img" />
          </div>
          <div className="event-discription">
            <h3 className="title">{props.title}</h3>
            <p className="event-txt">{props.descriptionn}</p>
            <i className="fa fa-trash" aria-hidden="true"onClick={()=>{deleteevent()}}/>
          </div>
        </div>
    </div>
  )
}

export default Singleevent
