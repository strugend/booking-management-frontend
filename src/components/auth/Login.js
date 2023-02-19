import React, { useEffect, useState } from 'react';
import {auth,provider} from '../../config/config';
import {signInWithPopup} from "firebase/auth";
import img4 from '../../assests/signup_img4.png';
import img5 from '../../assests/login_img1.png';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [value,setValue] = useState(""); //we have used useState hook 
  const navigate = useNavigate(); //we have used the useNavigate() hook to handle react router pages
    const handleClick = ()=>{ //this part of code will save the email id in the local storage using Google Firebase
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        
      })
    };

    function navigateToSignInPage(){ //to navigate to the signup page we have this func 
        // <Link to={<SignUp/>}/>
        navigate('/signup');
    };

    useEffect(()=>{
      setValue(localStorage.getItem('email'))
    })

  return (
    <div className='signlogin_form'>
        {/*The code for navbar starts from here */ }
        <div class="header_login_signup">
            <h2 class="h2style1">Log In</h2>
            <button class="header_btn_login_signup" onClick={navigateToSignInPage}>Sign Up</button>
        </div>
        {/*The code for navbar ends here */ }

    <div class="row" id='content'>

      {/*The code for the first section/ first half of our main layout starts from  here */ }
      <div className='column'>
        <img src={img5} class="img5_login"></img>
        <h2 class="h2style">Easily embed your booking page into your own website</h2>
        <a href="#">Find out more</a>
        </div>
        {/*The code for the first section/ first half of our main layout ends from  here */ }


        {/*The code for the second section/ second half of our main layout starts from  here */ }
      <div className='column'>
        <h2 class="h2style"style={{marginTop:"50px"}}>Log in to your account</h2>{/*Hera a bit of inline css is used to give the margin at the top*/}
        {value?navigate('/success'): //above line is js code to enable the firebase button(log in with google btn and redirect to a diff page when the login is successful)
        <button onClick={handleClick} class="google_login_btn">Log in with google</button>
      }
        <img  style={{marginTop:"40px"}} src={img4}></img>
        <form class="login_form"> {/*in this section we have a form wherein we take take the email id and password */}
          <label style={{textAlign:"start",paddingBottom:"10px"}} class="login_label">Email address</label>
          <input class="login_input" type="email" placeholder="email@password.com" required></input>

          <label style={{paddingTop:"10px",paddingBottom:"10px",marginRight:"165px"}} class="login_label">Password</label>
          <input class="login_input" type="password" required></input>
          <button class="login_btn">Log in</button>
        </form>
      </div>
      {/*The code for the second section/ second half of our main layout starts from  here */ }

    </div>
    <p class="parastyle">New to YouCanBookMe?<a onClick={navigateToSignInPage} style={{textDecoration:"none",cursor:"pointer",color:"purple"}}> Sign up for an account</a></p>
</div>
  )
}
