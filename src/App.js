import React from 'react';
import './components/auth/SignUp1.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Success from './components/auth/Success';
import LoginQ1 from './components/auth/LoginQ1';
import LoginQ2 from './components/auth/LoginQ2';
import Maincont from './components/BookingForm/Maincont';
import BookingDashboard from './components/BookingDashboard/Dashboard';
import Dashboard from './components/DASH-BOARD/Dashboard';
import DashboardBookingPage from './components/DASH-BOARD/Booking - page/DashboardBookingPage';
import BookingTable from './components/BookingDashboard/Booknav';

import Footer from './components/footer_files/footer';
import ConfirmBooking from "./components/booking_end_pages/confirm_booking";
import Confirmation from './components/booking_confirmation/confirmation';
import Booking_options_3 from './components/booking_options/booking_options_3';
import Booking_options_2 from './components/booking_options/booking_options_2';
import Booking_options_1 from './components/booking_options/booking_options_1';

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
        {/* <Route path='/bookingform' element={<Maincont/>}/> */}
        <Route path='/bookingform' element={<BookingDashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/bookingpage' element={<DashboardBookingPage/>}/>
        <Route path='/bookingtable' element={<BookingTable/>}/>

        <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;