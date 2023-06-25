import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import ApplicationForm from "./ApplicationForm"
import AdmissionForm from './AdmissionForm';
import { useLocation } from 'react-router-dom';
const RegistrationForm = () => {
    const navigate =useNavigate();
    const location=useLocation();
    const data=location.state;
    const handleLogOut = () =>{
        navigate('/student');
    }
  return (
    <div className='h-screen w-screen flex'>
        <div className='flex flex-col w-full h-full m-auto'>
            <div className='flex flex-row basis-1/12 justify-center bg-blue-200'>
                <div className='flex flex-row basis-10/12 justify-center'>
                    <div className='flex basis-2/12 bg-bw-pic1 bg-contain bg-no-repeat'></div>
                    <div className='flex flex-col basis-8/12'>
                        <div className='text-4xl font-lato font-semibold mx-auto'>VELAMMAL MEDICAL COLLEGE</div>
                        <div className='text-3xl font-lato font-medium mx-auto'>HOSPITAL AND RESEARCH INSTITUTE</div>
                    </div>
                    <div className='flex flex-row-reverse basis-2/12 mt-5'>
                        <div className='flex hover:text-red-900' onClick={handleLogOut}>
                            <div className='mr-3'><i class="fa-solid fa-power-off fa-xl"></i></div>
                            <div className='text-lg font-alef font-semibold'>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col basis-11/12 bg-sky-50'>
                <div className='flex flex-col basis-full'>
                    <div className='flex flex-col w-4/6 bg-white m-auto shadow-custom'>
                        {data.name==="Application" ? (<ApplicationForm data={data}></ApplicationForm>) : (<AdmissionForm data={data}></AdmissionForm>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationForm