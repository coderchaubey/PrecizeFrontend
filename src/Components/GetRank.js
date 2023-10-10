import axios from 'axios';
import React,{useState} from 'react'

const GetRank = (props) => {
  const [userName,setUserName]=useState('');
  const [rank,setRank]=useState('');

  // handling Change in Input
  const handleInputChange=(e)=>{
      setUserName(e.target.value);
      setRank('');
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault();

    // Make a GET request
    axios.get(`http://localhost:8080/satResult/getRanking/${userName}`)
    .then((response)=>{

      console.log(response.data);
      setRank(response.data);
      props.showAlert("Rank retrieval is successful", 'success');
    })
    .catch((error)=>{
      console.log('error in fetching Rank',error);

      if(error.response && error.response.data){
         // Use the error message from the backend
         
         props.showAlert(error.response.data, 'danger');
      }
      else{
        // Fallback message if there's no error message from the backend
          
        props.showAlert('Failed to Fetch Rank. Check the console for details.', 'danger');
      }
    });
  };

  return (
    <div>
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={userName} onChange={handleInputChange} required/>
      </div>
      <button type="submit">Get Your Rank</button>
    </form>
    {
        rank && (
          <div>
            <span>{userName} your Rank is {rank}</span> 
          </div>
        )
    }
  </div>
  )
}

export default GetRank