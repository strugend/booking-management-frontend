import logo from './logo.svg';
import './App.css';
import Footer from './footer_files/footer';
import ConfirmBooking from "./booking_end_pages/confirm_booking";
import Confirmation from './booking_confirmation/confirmation';
import Booking_options_3 from './booking_options/booking_options_3';
import Booking_options_2 from './booking_options/booking_options_2';
import Booking_options_1 from './booking_options/booking_options_1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload this is done on braqch kartik 1.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ConfirmBooking /> */}
      {/* <Confirmation /> */}
      {/* <Footer /> */}
        <Booking_options_2 />    
      {/* <Booking_options_3 />  */}
      {/* <Booking_options_1 />  */}

      </div>
  );
}

export default App;
