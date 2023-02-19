import React from 'react';
import './components/auth/SignUp1.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Success from './components/auth/Success';
import LoginQ1 from './components/auth/LoginQ1';
import LoginQ2 from './components/auth/LoginQ2';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/loginq1' element={<LoginQ1/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/loginq2' element={<LoginQ2/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;