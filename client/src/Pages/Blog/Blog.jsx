// import React, { useEffect, useState } from 'react'
// import './Blog.css'
// import Singleblog from './Singleblog'
// import axios from "axios"





// const Blog = () => {

//   const [blogs, setblogs] = useState([]);
//   const apicall=async ()=>{
//     await axios.get("/blog/allblogs").then((res) => { setblogs(res.data) });
//   }
//   useEffect(() => {
//     apicall();
//   }, [])

//   return (
//     <div className='blog-section'>
//       <div className="add">
//         <div className="add-icon" onClick={() => { document.getElementById('add_blog_area').style = 'dislplay:block' }}>
//           {/* icon of add */}
//           <i class="fa-solid fa-plus" />
//         </div>
//         <div className="add-area add_blog_area" id='add_blog_area'>
//           {/* html of blog to add */}
//           <form action="">
//             <input type="text" name="Title" id="" className='title' placeholder='Title' />
//             <textarea name="blog-txt" id="" cols="30" rows="10" placeholder='Write your blog' required />
//             <button type="submit" id='blog-txt-add'>Add</button>
//             <button type="reset">Clear</button>
//           </form>
//         </div>
//       </div>
//       <div className="blogs">
//         <p>Blogs</p>
//         {blogs.map((item) => {
//          return <Singleblog id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Blog


import React from 'react'
import Add_blog from './Add_blog';
import './Blog.css'
import { useState } from 'react'

const Blog = () => {
const [openform,setopenform]=useState(false);
  return (
    <div>
      <div className="blog-component">
        <p>Blogs</p>
        <div className="add-icon" id='add-icon-blog' onClick={()=>{setopenform(!openform)}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>

        {openform?<Add_blog/>:<></>}
        <div className="blogs">
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
            </div>
            <div className="blog-content">
              <div className="row1">
                <h3 className="title">Title</h3>
                <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
              </div>
              <div className='row-2'>
                <span className="publisher">XYZ</span> 
                <span className="date">10/4/2023</span>
              </div>
              <div className="btn-section row-3">          
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
            </div>
            <div className="blog-content">
              <div className="row1">
                <h3 className="title">Title</h3>
                <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
              </div>
              <div className='row-2'>
                <span className="publisher">XYZ</span> 
                <span className="date">10/4/2023</span>
              </div>
              <div className="btn-section row-3">          
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
            </div>
            <div className="blog-content">
              <div className="row1">
                <h3 className="title">Title</h3>
                <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
              </div>
              <div className='row-2'>
                <span className="publisher">XYZ</span> 
                <span className="date">10/4/2023</span>
              </div>
              <div className="btn-section row-3">          
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
            </div>
            <div className="blog-content">
              <div className="row1">
                <h3 className="title">Title</h3>
                <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
              </div>
              <div className='row-2'>
                <span className="publisher">XYZ</span> 
                <span className="date">10/4/2023</span>
              </div>
              <div className="btn-section row-3">          
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
            </div>
            <div className="blog-content">
              <div className="row1">
                <h3 className="title">Title</h3>
                <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
              </div>
              <div className='row-2'>
                <span className="publisher">XYZ</span> 
                <span className="date">10/4/2023</span>
              </div>
              <div className="btn-section row-3">          
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
