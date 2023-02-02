import React from 'react';
import './components/SignUp1.css';
import Login from './components/Login';
import SignUp from './components/SignUp.js';
import {Route,Routes} from "react-router-dom";
import Success from './components/Success';
import LoginQ1 from './components/LoginQ1';
import LoginQ2 from './components/LoginQ2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/loginq1' element={<LoginQ1/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/loginq2' element={<LoginQ2/>}/>
      </Routes>
    </div>
  );
}

export default App;
