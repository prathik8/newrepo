 import React from 'react'
 import Chatheader from './Chatheader'
 import Matchdisplay from './Matchdisplay'
 import Chatdisplay from './Chatdisplay'

 const Chat = () => {
   return (
     <>
      <div className='chat'>
      <Chatheader />

         <div>
          <button className='options'>Matches</button>
          <button className='options'>Chat</button>
         </div>
         <Matchdisplay />
         <Chatdisplay />
         

      </div>
     </>
   )
 }
 
 export default Chat