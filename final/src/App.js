import React from 'react';
import './App.css';
import Main from './home';
import Login from './login'
import Navi from './navgate';
import{Routes,Route} from "react-router-dom";


function App() {
 
  return (
    
    <div className="App">
      <Navi/>
      <Routes>
        <Route path='/home' element={<Main/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
     
    </div>
  )
   
}

export default App;
