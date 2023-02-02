import React from 'react'
// import { useNavigate } from 'react-router-dom';

export default function Success() {
  // const navigate = useNavigate();
    const logout=()=>{//we clear the memory stored in our local storage 
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
      <h1>Successfully loged in</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
