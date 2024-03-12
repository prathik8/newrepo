import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authmodel = ({ setshowmodel, issignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const handleclick = () => {
    setshowmodel(false);
  };

  const handleRedirectToOnboarding = () => {
    // Redirect to the onboarding page
    navigate('/onboarding');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (issignup && password !== confirmpassword) {
        setError("Passwords need to match!");
      } else {
        // Passwords match or it's a login form, proceed with your logic

        // For demonstration purposes, immediately redirect to onboarding
        handleRedirectToOnboarding();

        // You may want to handle the redirect based on your actual authentication logic
        // For example, make a request to your server to check login credentials

        // console.log("Make a post request to your data");
        // If login/signup is successful, call handleRedirectToOnboarding()
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error or set an error state if necessary
    }
  };

  return (
    <>

<div className='auth-model'>
        <div className="close-icon" onClick={handleclick}>
          ❌
        </div>
        <h2>{issignup ? "CREATE ACCOUNT" : "LOG IN"}</h2>
        <p>
          By clicking Log In, you agree to our terms. Learn how we can process
          data in privacy policy and cookie policy
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* Fix the input type for the password field */}
          <input
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {/* Fix the input type for the confirm password field */}
        { issignup &&  <input
            type='password'
            name='confirmpassword'
            placeholder='Confirm Password'
            required={true}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        }

         

          <input className='secondary-button'type='submit'/>
          <p>{error}</p>
        </form>
        <hr/>
        <h3>GET THE APP </h3>

        <button className='secondary-button'>Feedback</button>
      </div>
    
    </>
      
  );
};

export default Authmodel;
