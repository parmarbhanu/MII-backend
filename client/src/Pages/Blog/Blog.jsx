import React, { useEffect, useState } from 'react'
import './Blog.css'
import Singleblog from './Singleblog'
import axios from "axios"

const Blog = () => {

  const [blogs, setblogs] = useState([]);
  const apicall=async ()=>{
    await axios.get("/blog/allblogs").then((res) => { setblogs(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div className='blog-section'>
      <div className="add">
        <div className="add-icon" onClick={() => { document.getElementById('add_blog_area').style = 'dislplay:block' }}>
          {/* icon of add */}
          <i class="fa-solid fa-plus" />
        </div>
        <div className="add-area add_blog_area" id='add_blog_area'>
          {/* html of blog to add */}
          <form action="">
            <input type="text" name="Title" id="" className='title' placeholder='Title' />
            <textarea name="blog-txt" id="" cols="30" rows="10" placeholder='Write your blog' required />
            <button type="submit" id='blog-txt-add'>Add</button>
            <button type="reset">Clear</button>
          </form>
        </div>
      </div>
      <div className="blogs">
        <p>Blogs</p>
        {blogs.map((item) => {
         return <Singleblog id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date}/>
        })}
      </div>
    </div>
  )
}

export default Blog
