import React from 'react'

const Add_event = () => {
  return (
    <div>
        <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
           <p><li>Add new event</li></p>
           <form action="" className='eventAddform'>
                <input type="text" name="eventTitle" id="" className='eventtitle' placeholder='Title'/>
                <input type="text" name="eventLocation" id="" placeholder='Location' />
                <textarea name="event-txt" id="" cols="30" rows="10"placeholder='Event discription' required/>
                <div className="small-box-area">
                  <input type="date" name="eventdate" id="" />
                  <input type="text" name="eventTime" id="" placeholder='Time'/>
                </div>
                <div className="small-box-area">
                  <input type="number" name="numberofspeaker" id="" placeholder='Number of Speaker'/>
                  <input type="text" name="registrationfee" id="" placeholder='Registration Fee'/>
                </div>
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
