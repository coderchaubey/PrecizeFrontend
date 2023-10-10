import React, { useState } from 'react';
import axios from 'axios';

const InsertData = (props) => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    score: '',
  });

  console.log(userData);
  // handling input change dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // handling submit of form
  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/satResult/addUser', userData) 
      .then((response) => {

        console.log(response.data);
        props.showAlert(response.data, 'success');

      })
      .catch((error) => {
        console.log('Error', error);

        if(error.response && error.response.data){
          // Use the error message from the backend
          
          props.showAlert(error.response.data, 'danger');
       }
       else{
         // Fallback message if there's no error message from the backend
           
         props.showAlert('Failed to Post. Check the console for details.', 'danger');
       }

      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={userData.address} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={userData.city} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" name="country" value={userData.country} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input type="number" name="pincode" value={userData.pincode} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="score">Score:</label>
          <input type="number" name="score" value={userData.score} onChange={handleInputChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsertData;
