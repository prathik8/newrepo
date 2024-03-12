import React, { useState } from 'react'
import Nav from './Nav';
import Authmodel from './Authmodel';
 

const Home = () => {

const [showmodel,setshowmodel] = useState(false)
const [issignup, setissignup] = useState(true)

    const authToken = false

    const handleclick = () =>{
       setshowmodel(true)
       setissignup(true)
    }
  return (
    <>
    <div className='lay'> 
    <Nav minimal = {false} authToken={authToken} setshowmodel={setshowmodel} setissignup={setissignup }/>
    <div className='Home'>
        <h1>Welcome to Thinz dating App! </h1>
        <h3>tap below to create Account</h3>
        <button className='primary-button'onClick={handleclick}>
            {authToken ? 'Signout' : 'Create Account' }
        </button>
        
        {showmodel && (<Authmodel setshowmodel= {setshowmodel} showmodel={showmodel} setissignup = {setissignup}  issignup={issignup}/>)}
    </div>
    </div>
    </>
  )
}

export default Home