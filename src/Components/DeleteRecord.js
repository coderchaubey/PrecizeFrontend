import React, { useState } from 'react';
import axios from 'axios';



const DeleteRecord = (props) => {
  const [name, setName] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle form submission
  const handleDelete = (e) => {
    e.preventDefault();

    // Make a DELETE request to delete a record by name
    axios
      .delete(`http://localhost:8080/satResult/deleteUser/${name}`) 
      .then((response) => {
        
        console.log(response.data);
        props.showAlert(response.data, 'success');
      })
      .catch((error) => {
        console.error('Error deleting record:', error);

        if (error.response && error.response.data) {
          // Use the error message from the backend
         
          props.showAlert(error.response.data, 'danger');
        } else {
          // Fallback message if there's no error message from the backend
          
          props.showAlert('Failed to delete record. Check the console for details.', 'danger');
        }

      });
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteRecord