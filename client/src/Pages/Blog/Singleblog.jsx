import axios from 'axios';
import React from 'react'

export default function Singleblog(props) {
  const deleteblg=async ()=>{
    await axios.get(`/blog/deleteblog/${props.id}`).then((res) => { alert(res.data) });
  }
  return (
    <div className="blog-box">
      <div>
        <img width={"80%"} src={props.images} alt=''/>
      </div>
      <div>
        <h3 className="title">{props.title}</h3>
        <p className="blogtxt">{props.description}</p>
        <p className="blogtxt" style={{fontWeight:"800"}}>{props.authername} {props.date}</p>
        <button className='delete_blog' onClick={()=>{deleteblg()}}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    </div>
  )
}
