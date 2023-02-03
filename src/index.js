import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StepContext from './Components/DASH-BOARD/Booking - page/Dashboard-Sidebar/Forms/StepContext';
import StepContext from './Components/DASH-BOARD/Booking - page/Dashboard-Sidebar/Forms/StepContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StepContext>
);

