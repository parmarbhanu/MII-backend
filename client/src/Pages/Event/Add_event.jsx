import React from 'react'

const Add_event = () => {
  return (
    <div>
        <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
           <p><li>Add new event</li></p>
           <form action="">
                <input type="text" name="eventTitle" id="" className='eventtitle' placeholder='Title'/>
                <textarea name="event-txt" id="" cols="30" rows="10"placeholder='Event discription' required/>
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i class="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img" id="" />
                </div>
                <button type="submit" id='blog-txt-add'>Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    </div>
  )
}

export default Add_event
