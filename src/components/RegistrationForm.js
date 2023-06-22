import React from 'react'
import '../styles/styles.css';
import AdmissionForm from "./AdmissionForm"
const RegistrationForm = () => {
  return (
    <div className='h-screen w-screen flex'>
        <div className='flex flex-col w-full h-full m-auto'>
            <div className='flex flex-row basis-1/12 justify-center'>
                <div className='flex flex-row basis-10/12'>
                    <div className='flex basis-1/12 bg-bw-pic1 bg-contain bg-no-repeat'></div>
                    <div className='flex flex-col basis-10/12'>
                        <div className='text-3xl font-semibold mx-auto'>VELAMMAL MEDICAL COLLEGE</div>
                        <div className='text-2xl font-medium mx-auto'>HOSPITAL AND RESEARCH INSTITUTE</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col basis-11/12'>
                <div className='flex flex-col basis-full'>
                    <div className='flex w-4/6 m-auto shadow-custom'>
                        <AdmissionForm></AdmissionForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationForm