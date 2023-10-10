import React, { useState } from 'react';
import axios from 'axios';


function UpdateScore(props) {
  const [updateData, setUpdateData] = useState({
    userName:'',
    newScore:'',
  });

  console.log(updateData);
  // Function to handle input change both for username and change for new score
  const handleInputChange = (e) => {
    const {name,value}=e.target;
    setUpdateData({...updateData,[name]:value});
  };
  

  // Function to handle form submission
  const handleUpdateScore = (e) => {
    e.preventDefault();

    // Make a PUT request to update the score
    axios
      .put(`http://localhost:8080/satResult/updateScore?userName=${updateData.userName}&newScore=${updateData.newScore}`)
      .then((response) => {
        console.log(response.data);
        props.showAlert(response.data, 'success');
      })
      .catch((error) => {
        console.error('Error updating score:', error);
        if (error.response && error.response.data) {
          // Use the error message from the backend
         
          props.showAlert(error.response.data, 'danger');
        } else {
          // Fallback message if there's no error message from the backend
         
          props.showAlert('Failed to update score. Check the console for details.', 'danger');
        }
      });
  };

  return (
    <div>
      <h2>Update Score</h2>
      <form onSubmit={handleUpdateScore}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input type="text" name="userName" value={updateData.userName} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="newScore">New Score:</label>
          <input type="number" name="newScore" value={updateData.newScore} onChange={handleInputChange} required/>
        </div>
        <button type="submit">Update Score</button>
      </form>
    </div>
  );
}

export default UpdateScore;
