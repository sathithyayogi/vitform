import React from 'react';
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Success = () => {
  const location = useLocation();
console.log("----------------");
  console.log(location.state)
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <NavLink to="/" className='submit'>
          Go Back
        </NavLink>
        <h1 className='form-success'>Form submitted!</h1>
        <div>
          <strong>
            Name: {location.state.fname}
            Name: {location.state.lname}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default Success