import React from "react";
import confirmation_css from "./confirmation.css"
import image_tick from "./tick2.png"

function Confirmation(){
    return(
        <div>
            <div className="upper_conf_part">
                <h1>Name</h1>
            </div>
            <div className="lower_conf_part">
                <div className="lower_conf_inner">
                <img src={image_tick} style={{width: "40px",height: "40px", margin:"-5%", marginBottom:"10px"}} alt="Girl in a jacket" >
                </img>
                <p className="header_conf" style={{fontWeight: "500"}}>
                Friday, January 13, 2023 
                </p>
                <h3>1:30 PM - 2:30 PM</h3>
                <p style={{fontWeight: "500"}}>Asia/Kolkata</p>
                </div>
            </div>
            <div className="bottom_conf">
                <p className="thanks_para">
                Thanks Name,
                <br></br>
                <br></br>
                You will receive a notification confirming the meeting details shortly. 
                </p>
                <button className="btn">
                    Explore More
                </button>
            </div>
        </div>
    )
}

export default Confirmation;