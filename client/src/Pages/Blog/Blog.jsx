import React from 'react'
import './Blog.css'

const Blog = () => {

  return (
    <div>
      <div className="add">
        <div className="add-icon" onClick={()=>{document.getElementById('add_blog_area').style='dislplay:block'}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>
        <div className="add-area add_blog_area" id='add_blog_area'>
            {/* html of blog to add */}        
            <form action="">
                <input type="text" name="Title" id="" className='title' placeholder='Title'/>
                <textarea name="blog-txt" id="" cols="30" rows="10"placeholder='Write your blog' required/>
                <button type="submit" id='blog-txt-add'>Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
      </div>
      <div className="blogs">
        <p>Blogs</p>
        <div className="blog-box">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
        </div>
        <div className="blog-box">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
        </div>
        <div className="blog-box">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
        </div>
        <div className="blog-box">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
        </div>
        <div className="blog-box">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
