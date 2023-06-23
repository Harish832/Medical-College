import React, { useState } from 'react'
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
const Student = () => {
  const navigate= useNavigate();
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  const [SignUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [SignInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const handleSignUpChange =(e)=>{
    const { name, value, type, checked } = e.target;
    setSignUpData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
}
  const handleSignInChange =(e)=>{
    const { name, value, type, checked } = e.target;
    setSignInData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
}
const handleSignIn =()=>{
  const isEmptyField = Object.values(SignInData).some(value => value === "");
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
          sleep(1000)
          console.log(SignInData)
          navigate('/student/form')
        } 
}
const handleSignUp =()=>{
  const isEmptyField = Object.values(SignUpData).some(value => value === "");
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
          sleep(1000)
          console.log(SignUpData)         
          navigate('/student/form')
        } 
}
  const [swap, setSwap] = useState("")
  const swapAdmin =()=>{
    setSwap("")
  }
  const swapStudent =()=>{
    setSwap("right-panel-active")
  }
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex flex-row basis-1/12 justify-center custom-gradient'>
                <div className='flex flex-row basis-10/12 mt-2 justify-center'>
                    <div className='flex basis-1/12 bg-bw-pic1 bg-contain bg-no-repeat'></div>
                    <div className='flex flex-col basis-8/12'>
                        <div className='text-4xl font-pavanam font-semibold mx-auto'>VELAMMAL MEDICAL COLLEGE</div>
                        <div className='text-3xl font-pavanam font-semibold mx-auto'>HOSPITAL AND RESEARCH INSTITUTE</div>
                    </div>
                    <div className='flex flex-row-reverse basis-1/12 mt-5'>
                        
                    </div>
                </div>
            </div>
            <div className='flex basis-11/12 bg-blue-50'>
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
          <input className='student_input' type="text" placeholder="Name" name='username' value={SignUpData.username} onChange={handleSignUpChange} autocomplete="off"/>
          <input className='student_input' type="email" placeholder="Email" name='email' value={SignUpData.email} onChange={handleSignUpChange} autocomplete="off"/>
          <input className='student_input' type="password" placeholder="Password" name='password' value={SignUpData.password} onChange={handleSignUpChange} />
          <div className='student_button mt-3' onClick={handleSignUp}>Sign Up</div>
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
          <input className='student_input' type="email" placeholder="Email" name='email' value={SignInData.email} onChange={handleSignInChange} autocomplete="off"/>
          <input className='student_input' type="password" placeholder="password" name='password' value={SignInData.Password} onChange={handleSignInChange} autocomplete="off"/>
          <a href="#a" className='student_a'>Forgot your password?</a>
          <div className='student_button' onClick={handleSignIn}>Sign In</div>
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
    </div>
  )
}

export default Student