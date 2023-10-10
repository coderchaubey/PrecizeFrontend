import React,{useEffect,useState} from 'react'
import axios from 'axios'
const ViewAllData = (props) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to fetch all data when the component mounts
    axios
      .get('http://localhost:8080/satResult/getAllUser') 
      .then((response) => {

        setData(response.data);
        setLoading(false);
        props.showAlert("Successfully Fetched the User Data", 'success');

      })
      .catch((error) => {
        console.error('Error fetching data:', error);

        if(error.response && error.response.data){
          // Use the error message from the backend
          
          props.showAlert(error.response.data, 'danger');
       }
       else{
         // Fallback message if there's no error message from the backend
           
         props.showAlert('Failed to Fetch Data. Check the console for details.', 'danger');
       }
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2>View All Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <h1>No data available.</h1>
      )}
    </div>
  );
}

export default ViewAllData;