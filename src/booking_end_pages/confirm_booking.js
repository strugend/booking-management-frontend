import React from "react";
import css from "./booking.css"

function ConfirmBooking(){  
    

    return(
        <div>
            <div className="booking_upper">
                <h1>Name</h1>
            </div>
            <div className="booking_upper2">
                <button>Back</button>
                <h2>Confirm Booking</h2>
            </div>

            <div className="booking_confg_stamp_outline">
                <div className="booking_confg_stamp">
                    <p>
                    Friday, January 13, 2023 
                    </p>
                    <h3>1:30 PM - 2:30 PM</h3>
                    <p>Asia/Kolkata</p>
                </div>
            </div>
            <div className="booking_confg_inputs">
                <h3 className="booking_confg_input1">First name (Required)</h3>
                <input type="text"></input>
                <h3>Last name</h3>
                <input type="text"></input>
                <h3>Email (Required)</h3>
                <input type="text"></input>
            </div>
            <div className="booking_confg_submit">
                <button>Confirm Booking</button>
            </div>
            
        </div>

    )
}
export default ConfirmBooking;