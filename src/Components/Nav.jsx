 import React from "react"

const Nav = ({minimal,authToken,setshowmodel,showmodel,setissignup}) => {

    const handleclick = () =>{
        setshowmodel(true)
        setissignup(false)
    }

   
  return (
   <>
   <div className='nav'> 
    <div className='logo-container'>
         <h1>THiNz</h1>

    </div>
    {!authToken  && <button className='nav-button'onClick={handleclick} >Log in</button>}
    </div>
   </>
  )
}

export default Nav