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
  const [Application, setApplication] = useState({
    email: "",
    password: "",
  });
  const [Admission, setAdmission] = useState({
    email: "",
    password: "",
  });
  const handleAdmissionChange =(e)=>{
    const { name, value, type, checked } = e.target;
    setAdmission(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
}
  const handleApplicationChange =(e)=>{
    const { name, value, type, checked } = e.target;
    setApplication(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
}
const handleAdmission =()=>{
  const isEmptyField = Object.values(Admission).some(value => value === "");
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
          sleep(1000)
          const data2={
            name:"Admission",
            email:Admission.email,
            password:Admission.password
          }
          console.log(Admission)
          navigate('/student/form',{state:data2})
        } 
}
const handleApplication =()=>{
  const isEmptyField = Object.values(Application).some(value => value === "");
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
          sleep(1000)
          const data1={
            name:"Application",
            email:Application.email,
            password:Application.password
          }
          console.log(Application)         
          navigate('/student/form',{state:data1})
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
    // <CustomModal data={data}></CustomModal>
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
        <div className={`student_container ${swap} w-fit h-fit m-auto `} id="container">
          <div className="student_form-container student_sign-up-container">
            <form className='student_form' action="#a">
              <h1 className='student_h1'>Admission Form</h1>
          
              <span className='student_span'>Sign in</span>
              <br></br>
              <input className='student_input' type="email" placeholder="Email" name='email' value={Admission.email} onChange={handleAdmissionChange} autocomplete="off"/>
              <input className='student_input' type="password" placeholder="Password" name='password' value={Admission.password} onChange={handleAdmissionChange} />
              <br></br>
              <div className='student_button mt-3' onClick={handleAdmission}>Log in</div>
            </form>
          </div>
          <div className="student_form-container student_sign-in-container">
            <form action="#a" className='student_form'>
              <h1 className='student_h1'>Application Form</h1>
              <span className='student_span'>Sign in</span><br></br>
              <input className='student_input' type="email" placeholder="Email" name='email' value={Application.email} onChange={handleApplicationChange} autocomplete="off"/>
              <input className='student_input' type="password" placeholder="password" name='password' value={Application.password} onChange={handleApplicationChange} autocomplete="off"/>
              <br></br>
              <div className='student_button hover:cursor-pointer' onClick={handleApplication}>Log In</div>
            </form>
          </div>
      <div className="student_overlay-container">
        <div className="student_overlay">
          <div className="student_overlay-panel student_overlay-left">
            <h1 className='student_h1'>Welcome Back!</h1>
            <p className='student_p'>
              To keep connected with us please login with your personal info
            </p>
            <button className="student_button ghost" id="signIn" onClick={swapAdmin}>Application</button>
          </div>
          <div className="student_overlay-panel student_overlay-right">
            <h1 className='student_h1'>Hello, Friend!</h1>
            <p className='student_p'>Enter your personal details and start journey with us</p>
            <button className="student_button ghost" id="signUp" onClick={swapStudent}>Admission</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Student