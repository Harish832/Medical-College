import React, { useState } from 'react'
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
const Student = () => {
  const navigate= useNavigate();
  const [swap, setSwap] = useState("right-panel-active")
  const swapAdmin =()=>{
    setSwap("")
  }
  const swapStudent =()=>{
    setSwap("right-panel-active")
  }
  const handleSubmit =()=>{
    navigate('/student/form')
  }
  return (
    <div className='w-screen h-screen flex'>
      <div className={`student_container ${swap} w-fit h-fit m-auto`} id="container">
      <div className="student_form-container student_sign-up-container">
        <form className='student_form' action="#a">
          <h1 className='student_h1'>Create Account</h1>
          <div className="student_social-container">
            <a href="#aa" className="student_a social"><i class="fa-brands fa-github"></i></a>
            <a href="#aa" className="student_a social"><i class="fa-brands fa-google"></i></a>
            <a href="#aa" className="student_a social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className='student_span'>or use your email for registration</span>
          <input className='student_input' type="text" placeholder="Name" autocomplete="off"/>
          <input className='student_input' type="email" placeholder="Email" autocomplete="off"/>
          <input className='student_input' type="password" placeholder="Password" />
          <button className='student_button' onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
      <div className="student_form-container student_sign-in-container">
        <form action="#a" className='student_form'>
          <h1 className='student_h1'>Sign in</h1>
          <div className="student_social-container">
            <a href="#dd" className="student_a social"><i class="fa-brands fa-github"></i></a>
            <a href="#da" className="student_a social"
              ><i class="fa-brands fa-google"></i></a>
            <a href="#df" className="student_a social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className='student_span'>or use your account</span>
          <input className='student_input' type="email" placeholder="Email" autocomplete="off"/>
          <input className='student_input' type="password" placeholder="Password" autocomplete="off"/>
          <a href="#a" className='student_a'>Forgot your password?</a>
          <button className='student_button' onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
      <div className="student_overlay-container">
        <div className="student_overlay">
          <div className="student_overlay-panel student_overlay-left">
            <h1 className='student_h1'>Welcome Back!</h1>
            <p className='student_p'>
              To keep connected with us please login with your personal info
            </p>
            <button className="student_button ghost" id="signIn" onClick={swapAdmin}>Sign In</button>
          </div>
          <div className="student_overlay-panel student_overlay-right">
            <h1 className='student_h1'>Hello, Friend!</h1>
            <p className='student_p'>Enter your personal details and start journey with us</p>
            <button className="student_button ghost" id="signUp" onClick={swapStudent}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Student