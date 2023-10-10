import React,{useState}from 'react'
import Alert from './Components/Alert'
import { Routes, Route } from 'react-router-dom';
import InsertData from './Components/InsertData';
import DeleteRecord from './Components/DeleteRecord';
import GetRank from './Components/GetRank';
import ViewAllData from './Components/ViewAllData'
import UpdateScore from './Components/UpdateScore';
import Menu from './Components/Menu';





function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
    setAlert(null);
    }, 2000);
  }
  return (
      
        <div>
          <Menu />
          <Routes>
            <Route exact path='/insertdata' element={<><h1 style={{textAlign:'center', marginTop:'1rem', padding: '2rem', color: '#CD5C5C', backgroundColor:'#ADD8E6' }}>Insert Data</h1><InsertData showAlert={showAlert} /></>}/>
            <Route exact path='/viewalldata' element={<ViewAllData showAlert={showAlert}/>}/>
            <Route exact path='/getrank' element={<><h1 style={{textAlign:'center', marginTop:'1rem', padding: '2rem', color: '#CD5C5C', backgroundColor:'#ADD8E6' }}>Get Rank</h1><GetRank showAlert={showAlert}/></>}/>
            <Route exact path='/updatescore' element={<><h1 style={{textAlign:'center', marginTop:'1rem', padding: '2rem', color: '#CD5C5C', backgroundColor:'#ADD8E6' }}>Get Rank</h1><UpdateScore showAlert={showAlert}/></>}/>
            <Route exact path='/deleterecord' element={<><h1 style={{textAlign:'center', marginTop:'1rem', padding: '2rem', color: '#CD5C5C', backgroundColor:'#ADD8E6' }}>Get Rank</h1><DeleteRecord showAlert={showAlert}/></>}/>
          </Routes>
          <Alert alert={alert}/>
        </div>
      
  )
}

export default App