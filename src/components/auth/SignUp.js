import React, { useEffect, useState } from 'react';
import img1 from '../../assests/signup_img1.png';
import img2 from '../../assests/signup_img2.png';
import img4 from '../../assests/signup_img4.png';
import {auth,provider} from '../../config/config';
import {signInWithPopup} from "firebase/auth";
import img5 from '../../assests/signup_img5.png';
import {useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [value,setValue] = useState("");//we have used useState hook 
  const navigate = useNavigate();//we have used the useNavigate() hook to handle react router pages
    const handleClick = ()=>{//this part of code will save the email id in the local storage using Google Firebase
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        
      })
    };

    function navigateToLogInPage(){//to navigate to the login page we have this func
      // <Link to={<SignUp/>}/>
      navigate('/');
  };

    useEffect(()=>{
      setValue(localStorage.getItem('email'))
    })
  return (
    <div class='signlogin_form'>
      {/*The code for navbar starts from here */ }
        <div class="header_login_signup">
            <h2 class="h2style1">Sign Up</h2>
            <button class="header_btn_login_signup" onClick={navigateToLogInPage}>Log in</button>
        </div>
        {/*The code for navbar ends here */ }

    <div class="row" id='content'>
      {/*The code for the first section/ first half of our main layout starts from  here */ }
      <div class='column' id="column1"> {/*id='column1'*/}
        <img src={img2} class="img2"></img>
        <h2>Scheduling made simple</h2>
        <ul class="list">
            <li style={{paddingBottom:"5px"}}><span role={"img"}>✅</span>  Eliminate the back-and-forth emails</li>
            <li style={{paddingBottom:"5px"}}><span role={"img"}>✅</span>  14 day trial of all our supercharged features</li>
            <li><span role={"img"}>✅</span>  Sign up for FREE. No credit card required</li>
        </ul>
        <h3>Join thousands of customers worldwide.</h3>
        <img src={img1}></img>
        {/*The code for the first section/ first half of our main layout ends from  here */ }
        </div>

      {/*The code for the second section/ second half of our main layout starts from  here */ }
      <div class='column' id="column2">
        <h2 style={{marginTop:"50px"}}>Create your own account</h2>{/*Hera a bit of inline css is used to give the margin at the top*/}
        {value?navigate('/success'): //above line is js code to enable the firebase button(log in with google btn and redirect to a diff page when the login is successful)
        <button onClick={handleClick} class="google_login_btn">Sign up with google</button>
      }
        <img  style={{marginTop:"50px"}} src={img4} class="or_image"></img>
        <p>Already have an account?<a onClick={navigateToLogInPage} style={{color:"purple",cursor:"pointer"}}>Log in</a></p>
        <img class="bottom_img" src={img5}></img>
      </div>
      {/*The code for the second section/ second half of our main layout starts from  here */ }
      
    </div>
</div>
  )
}