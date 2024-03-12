import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your form submission logic here
    console.log("Profile updated:", {
      firstName,
      age,
      gender,
      location,
      interests,
      hobbies,
      profilePicture,
    });

    // Assuming a successful form submission, navigate to the Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="onboarding">
      <h2>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
      <section>
          <label htmlFor="first_name"> First Name </label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="First Name"
            
            value={firstName}
            onChange={(e) => handleChange(e, setFirstName)}
          />
        </section>

        <section>
          <label htmlFor="age"> Age </label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(e) => handleChange(e, setAge)}
          />
        </section>

        <section>
          <label htmlFor="gender"> Gender </label>
          <input
            id="gender"
            type="text"
            name="gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => handleChange(e, setGender)}
          />
        </section>

        <section>
          <label htmlFor="location"> Location </label>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => handleChange(e, setLocation)}
          />
        </section>

        <section>
          <label htmlFor="interests"> Interests </label>
          <input
            id="interests"
            type="text"
            name="interests"
            placeholder="Interests"
            value={interests}
            onChange={(e) => handleChange(e, setInterests)}
          />
        </section>

        <section>
          <label htmlFor="hobbies"> Hobbies </label>
          <input
            id="hobbies"
            type="text"
            name="hobbies"
            placeholder="Hobbies"
            value={hobbies}
            onChange={(e) => handleChange(e, setHobbies)}
          />
        </section>

        <section>
          <label htmlFor="profilePicture"> Profile Picture </label>
          <input
            id="profilePicture"
            type="text"
            name="profilePicture"
            placeholder="Profile Picture URL"
            value={profilePicture}
            onChange={(e) => handleChange(e, setProfilePicture)}
          />
        </section>

        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h3>GET THE APP</h3>
    </div>
  );
};

export default Onboarding;
