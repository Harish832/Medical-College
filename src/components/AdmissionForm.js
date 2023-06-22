import React from 'react'
import '../styles/admission.css'
import { useState } from 'react'

const AdmissionForm = () => {
    const [SectionActive, setSectionActive] = useState("")
    const [formData, setFormData] = useState({
        Name: "",
        Dob: "",
        Email: "",
        Gender: "",
        Mode: "",
        Native: "",
        Language: "",
        Religion: "",
        Community: "",
        Height: "",
        Weight: "",
        Blood: "",
        Addcom: "",
        Mobile: "",
        AddPrivate: "",
        AddLocal: "",
        MobileLocal: "",
        Fathername: "",
        FatherOcc: "",
        FatOccAdd: "",
        PhoneFather: "",
        MobileFather: "",
        EmailFather: "",
        Mothername: "",
        MotherOcc: "",
        MoOccAdd: "",
        PhoneMother: "",
        MobileMother: "",
        EmailMother: ""
      });
    const [applicationData, setApplicationData] = useState({
        ApplicationNo: "",
        Course: "",
        Category: "",
        DateofAdmit: "",
        Checked: false
      });
    const handleNext =()=>{
        const isEmptyField = Object.values(formData).some(value => value === "");
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
          setSectionActive("secActive")
        }   
        
    }
    const handlePrev =()=>{
        setSectionActive("")
    }
    const handleChange =(e)=>{
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
    }
    const handleApplicationData =(e)=>{
        const { name, value, type, checked } = e.target;
        setApplicationData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    const handleReset = () => {
        setFormData({
            Name: "",
            Dob: "",
            Email: "",
            Gender: "",
            Mode: "",
            Native: "",
            Language: "",
            Religion: "",
            Community: "",
            Height: "",
            Weight: "",
            Blood: "",
            Addcom: "",
            Mobile: "",
            AddPrivate: "",
            AddLocal: "",
            MobileLocal: "",
            Fathername: "",
            FatherOcc: "",
            FatOccAdd: "",
            PhoneFather: "",
            MobileFather: "",
            EmailFather: "",
            Mothername: "",
            MotherOcc: "",
            MoOccAdd: "",
            PhoneMother: "",
            MobileMother: "",
            EmailMother: ""
        });
      };
    const handleApplicationDataReset = () => {
        setApplicationData({
            ApplicationNo: "",
            Course: "",
            Category: "",
            DateofAdmit: "",
            Checked: false
        });
      };
  return (
    <div className="admission_container w-full m-auto">
    <div className='flex flex-row w-full'>
        <header className='tag_header w-1/2'>Application Form</header>
    </div>
    <form className={`${SectionActive} tag_form`} action="#">
        <div className="admission_form admission_first">
            <div className="admission_details admission_personal">
                <span className="tag_span admission_title">Personal Details</span>

                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Full Name</label>
                        <input className='tag_input' type="text" name='Name' placeholder="Enter your name" value={formData.Name} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Date of Birth</label>
                        <input className='tag_input' type="date" placeholder="Enter birth date" name='Dob' value={formData.Dob} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Email</label>
                        <input className='tag_input' type="email" placeholder="Enter your email" name="Email" value={formData.Email} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Gender</label>
                        <select className='tag_select' name="Gender" value={formData.Gender} onChange={handleChange}>
                            <option selected>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Whether Day Scholar/Hostelite</label>
                        <select className='tag_select' name="Mode" value={formData.Mode} onChange={handleChange}>
                            <option selected>Select type</option>
                            <option>Day Scholar</option>
                            <option>Hostelite</option>
                        </select>
                    </div>
                
                    <div className="admission_input-field">
                        <label className='tag_label'>Native</label>
                        <input className='tag_input' type="text" placeholder="Enter your native" name="Native" value={formData.Native} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mother Tongue</label>
                        <input className='tag_input' type="text" placeholder="Enter your Mother tongue" name="Language" value={formData.Language} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Religion</label>
                        <input className='tag_input' type="text" placeholder="Enter your Religion" name="Religion" value={formData.Religion} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Community</label>
                        <select className='tag_select' name="Community" value={formData.Community} onChange={handleChange}>
                            <option selected>Select Community</option>
                            <option>OC</option>
                            <option>BC</option>
                            <option>MBC</option>
                            <option>SC</option>
                            <option>SC(A)</option>
                            <option>ST</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Height(in cms)</label>
                        <input className='tag_input' type="number" placeholder="Enter height" name="Height" value={formData.Height} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Weight(in kgs)</label>
                        <input className='tag_input' type="number" placeholder="Enter weight" name="Weight" value={formData.Weight} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Blood Group</label>
                        <input className='tag_input' type="text" placeholder="Enter your Blood group" name="Blood" value={formData.Blood} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Address for Communication</label>
                        <input className='tag_input' type="text" placeholder="Enter your address" name="Addcom" value={formData.Addcom} onChange={handleChange}/>
                    </div>
                    
                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile Number</label>
                        <input className='tag_input' type="text" placeholder="Enter mobile number" name="Mobile" value={formData.Mobile} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Address of students staying Privately</label>
                        <input className='tag_input' type="text" placeholder="Enter your address" name="AddPrivate" value={formData.AddPrivate} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Local Guardian's Address</label>
                        <input className='tag_input' type="text" placeholder="Enter your address" name="AddLocal" value={formData.AddLocal} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Local Guardian's Phone no</label>
                        <input className='tag_input' type="text" placeholder="Enter phone number" name="MobileLocal" value={formData.MobileLocal} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">

                    </div>
                </div>
            </div>
            <div className="admission_details admission_address">
            <span className="tag_span admission_title">Family Details</span>
                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Father's Name</label>
                        <input className='tag_input' type="text" placeholder="Enter name" name="Fathername" value={formData.Fathername} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's Occupation</label>
                        <input className='tag_input' type="text" placeholder="Enter occupation" name="FatherOcc" value={formData.FatherOcc} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Occupational Address</label>
                        <input className='tag_input' type="text" placeholder="Enter address" name="FatOccAdd" value={formData.FatOccAdd} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's Phone no</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="PhoneFather" value={formData.PhoneFather} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's Mobile no</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="MobileFather" value={formData.MobileFather} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's Email</label>
                        <input className='tag_input' type="email" placeholder="Enter email" name="EmailFather" value={formData.EmailFather} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Mother's Name</label>
                        <input className='tag_input' type="text" placeholder="Enter name" name="Mothername" value={formData.Mothername} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mother's Occupation</label>
                        <input className='tag_input' type="text" placeholder="Enter occupation" name="MotherOcc" value={formData.MotherOcc} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Occupational Address</label>
                        <input className='tag_input' type="text" placeholder="Enter address" name="MoOccAdd" value={formData.MoOccAdd} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mother's Phone no</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="PhoneMother" value={formData.PhoneMother} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mother's Mobile no</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="MobileMother" value={formData.MobileMother} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mother's Email</label>
                        <input className='tag_input' type="email" placeholder="Enter email" name="EmailMother" value={formData.EmailMother} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="admission_buttons">
                <div className="admission_nextBtn tag_button" onClick={handleNext}>
                    <span className="admission_btnText tag_span">Next</span>
                    <i className="uil uil-navigator tag_i"></i>
                </div>      
                <div className="tag_button" onClick={handleReset}>
                        <span className="tag_span admission_btnText">Reset</span>
                        <i class="fa-solid fa-arrow-rotate-left tag_i"></i>
                </div>
            </div> 
        </div>
        <div className="admission_form admission_second w-full">
            <div className="admission_details admission_family">
                <span className="tag_span admission_title">Application Details</span>

                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Application no</label>
                        <input className='tag_input' type="text" placeholder="Enter application no" name='ApplicationNo' value={applicationData.ApplicationNo} onChange={handleApplicationData}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Course</label>
                        <input className='tag_input' type="text" placeholder="Enter course name" name='Course' value={applicationData.Course} onChange={handleApplicationData}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Admission Category</label>
                        <select className='tag_select' name='Category' value={applicationData.Category} onChange={handleApplicationData}>
                            <option selected>Select Category</option>
                            <option>Management Quota</option>
                            <option>Government Quota</option>
                            <option>NRI</option>
                            <option>NRI Lapsed</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Date of Admission</label>
                        <input className='tag_input' type="date" name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                </div>
            </div> 
            <div className="admission_details admission_family mt-10">
                <span className="tag_span admission_title">Declaration</span>
                <div className='flex flex-row mb-28'>
                    <input className='mt-4 ml-10 w-4 hover:cursor-pointer' name="Checked" value={applicationData.Checked} type='checkbox' onChange={handleApplicationData}></input>
                    <label className='ml-4 mt-4'>I certify that the information given above by me is complete and true to the best of my knowledge.</label>
                </div>
                <div className="admission_buttons">
                    <div className="admission_backBtn" onClick={handlePrev}>
                        <i className="uil uil-navigator tag_i"></i>
                        <span className="tag_span admission_btnText">Back</span>
                    </div>
                    <div className="tag_button" onClick={handleApplicationDataReset}>
                        <span className="tag_span admission_btnText">Reset</span>
                        <i class="fa-solid fa-arrow-rotate-left tag_i"></i>
                    </div>
                    <button className="tag_button admission_sumbit" onClick={handleFormSubmit}>
                        <span className="tag_span admission_btnText">Submit</span>
                        <i className="uil uil-navigator tag_i"></i>
                    </button>
                </div>
            </div> 
        </div>
    </form>
</div>
  )
}

export default AdmissionForm