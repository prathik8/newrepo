import React, { useState } from 'react'

const Chatinput = () => {
    const [textarea ,settextarea ] = useState(null)
  return (
    <>
        <div className='chat-input'>
     <textarea  onChange={(e) => settextarea(e.target.value)}/>
           <button className='secondary-button'>Submit</button>
        </div>
    </>
  )
}

export default Chatinput