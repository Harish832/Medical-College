import React from 'react'
import '../styles/application.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationForm = (props) => {
    const navigate=useNavigate()
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    // const data=props.data
    const [finalData,setFinaldata]=useState({
        'email' : '',
        'student_name': '',
        'course': '',
        'date_of_birth': '',
        'gender': '',
        'is_hostellite': '',
        'community': '',
        'religion': '',
        'native_place': '',
        'blood_group': '',
        'height': '',
        'weight': '',
        'caste': '',
        'address_for_communication': '',
        'date_of_admission': '',
        'address_local_guardian': '',
        'nationality': '',
        'mother_tongue': '',
        'father_name': '',
        'father_occupation': '',
        'father_occupation_address': '',
        'father_phone_number': '',
        'father_email': '',
        'mother_name': '',
        'mother_occupation': '',
        'mother_occupation_address': '',
        'mother_phone_number': '',
        'mother_email': '',
        'student_contact_no': '',
        'student_email_id': '',
        'mobile_1': '',
        'mobile_2': '',
        'mobile_3': '',
        'guardian_mobile': '',
    })
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
        // setSectionActive("secActive")
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
        const isEmptyField = Object.values(applicationData).some(value => value === (""||false));
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
            setFinaldata({'email' : formData.Email,
            'student_name': formData.Name,
            'course': applicationData.Course,
            'date_of_birth': formData.Dob,
            'gender': formData.Gender,
            'is_hostellite':(formData.Mode==="Hostelite")?true:false ,
            'community':formData.Community ,
            'religion': formData.Religion,
            'native_place': formData.Native,
            'blood_group': formData.Blood,
            'height': formData.Height,
            'weight': formData.Weight,
            'caste': 'none',
            'address_for_communication': formData.Addcom,
            'date_of_admission': applicationData.DateofAdmit,
            'address_local_guardian': formData.AddLocal,
            'nationality': 'Indian',
            'mother_tongue': formData.Language,
            'father_name': formData.Fathername,
            'father_occupation': formData.FatherOcc,
            'father_occupation_address': formData.FatOccAdd,
            'father_phone_number': formData.PhoneFather,
            'father_email': formData.EmailFather,
            'mother_name': formData.Mothername,
            'mother_occupation': formData.MotherOcc,
            'mother_occupation_address': formData.MoOccAdd,
            'mother_phone_number': formData.PhoneMother,
            'mother_email': formData.EmailMother,
            'student_contact_no': formData.Mobile,
            'student_email_id': formData.Email,
            'mobile_1': formData.MobileFather,
            'mobile_2': formData.MobileMother,
            'mobile_3': formData.Mobile,
            'guardian_mobile': formData.MobileLocal,}    
            )
            alert("Your response was submitted!!!") 
            navigate('/student') 
            sleep(1000);
            console.log(finalData);
        }
        
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
    <div className="application_container w-full m-auto">
    <div className='flex flex-row w-full'>
        <header className='tag1_header w-1/2'>Application Form</header>
    </div>
    <form className={`${SectionActive} tag1_form`} action="#">
        <div className="application_form application_first">
            <div className="application_details application_personal">
                <span className="tag1_span application_title">Personal Details</span>

                <div className="application_fields">
                    <div className="application_input-field">
                        <label className='tag1_label'>Full Name</label>
                        <input className='tag1_input' type="text" name='Name' placeholder="Enter your name" value={formData.Name} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Date of Birth</label>
                        <input className='tag1_input' type="date" placeholder="Enter birth date" name='Dob' value={formData.Dob} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Email</label>
                        <input className='tag1_input' type="email" placeholder="Enter your email" name="Email" value={formData.Email} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Gender</label>
                        <select className='tag1_select' name="Gender" value={formData.Gender} onChange={handleChange}>
                            <option selected>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Whether Day Scholar/Hostelite</label>
                        <select className='tag1_select' name="Mode" value={formData.Mode} onChange={handleChange}>
                            <option selected>Select type</option>
                            <option>Day Scholar</option>
                            <option>Hostelite</option>
                        </select>
                    </div>
                
                    <div className="application_input-field">
                        <label className='tag1_label'>Native</label>
                        <input className='tag1_input' type="text" placeholder="Enter your native" name="Native" value={formData.Native} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Mother Tongue</label>
                        <input className='tag1_input' type="text" placeholder="Enter your Mother tongue" name="Language" value={formData.Language} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Religion</label>
                        <input className='tag1_input' type="text" placeholder="Enter your Religion" name="Religion" value={formData.Religion} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Community</label>
                        <select className='tag1_select' name="Community" value={formData.Community} onChange={handleChange}>
                            <option selected>Select Community</option>
                            <option>OC</option>
                            <option>BC</option>
                            <option>MBC</option>
                            <option>SC</option>
                            <option>SC(A)</option>
                            <option>ST</option>
                        </select>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Height(in cms)</label>
                        <input className='tag1_input' type="number" placeholder="Enter height" name="Height" value={formData.Height} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Weight(in kgs)</label>
                        <input className='tag1_input' type="number" placeholder="Enter weight" name="Weight" value={formData.Weight} onChange={handleChange}/>
                    </div>
                    <div className="application_input-field">
                        <label className='tag1_label'>Blood Group</label>
                        <input className='tag1_input' type="text" placeholder="Enter your Blood group" name="Blood" value={formData.Blood} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Address for Communication</label>
                        <input className='tag1_input' type="text" placeholder="Enter your address" name="Addcom" value={formData.Addcom} onChange={handleChange}/>
                    </div>
                    
                    <div className="application_input-field">
                        <label className='tag1_label'>Mobile Number</label>
                        <input className='tag1_input' type="text" placeholder="Enter mobile number" name="Mobile" value={formData.Mobile} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Address of students staying Privately</label>
                        <input className='tag1_input' type="text" placeholder="Enter your address" name="AddPrivate" value={formData.AddPrivate} onChange={handleChange}/>
                    </div>
                    <div className="application_input-field">
                        <label className='tag1_label'>Local Guardian's Address</label>
                        <input className='tag1_input' type="text" placeholder="Enter your address" name="AddLocal" value={formData.AddLocal} onChange={handleChange}/>
                    </div>
                    <div className="application_input-field">
                        <label className='tag1_label'>Local Guardian's Phone no</label>
                        <input className='tag1_input' type="text" placeholder="Enter phone number" name="MobileLocal" value={formData.MobileLocal} onChange={handleChange}/>
                    </div>
                    <div className="application_input-field">

                    </div>
                </div>
            </div>
            <div className="application_details application_address">
            <span className="tag1_span application_title">Family Details</span>
                <div className="application_fields">
                    <div className="application_input-field">
                        <label className='tag1_label'>Father's Name</label>
                        <input className='tag1_input' type="text" placeholder="Enter name" name="Fathername" value={formData.Fathername} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Father's Occupation</label>
                        <input className='tag1_input' type="text" placeholder="Enter occupation" name="FatherOcc" value={formData.FatherOcc} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Occupational Address</label>
                        <input className='tag1_input' type="text" placeholder="Enter address" name="FatOccAdd" value={formData.FatOccAdd} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Father's Phone no</label>
                        <input className='tag1_input' type="text" placeholder="Enter number" name="PhoneFather" value={formData.PhoneFather} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Father's Mobile no</label>
                        <input className='tag1_input' type="text" placeholder="Enter number" name="MobileFather" value={formData.MobileFather} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Father's Email</label>
                        <input className='tag1_input' type="email" placeholder="Enter email" name="EmailFather" value={formData.EmailFather} onChange={handleChange}/>
                    </div>
                    <div className="application_input-field">
                        <label className='tag1_label'>Mother's Name</label>
                        <input className='tag1_input' type="text" placeholder="Enter name" name="Mothername" value={formData.Mothername} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Mother's Occupation</label>
                        <input className='tag1_input' type="text" placeholder="Enter occupation" name="MotherOcc" value={formData.MotherOcc} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Occupational Address</label>
                        <input className='tag1_input' type="text" placeholder="Enter address" name="MoOccAdd" value={formData.MoOccAdd} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Mother's Phone no</label>
                        <input className='tag1_input' type="text" placeholder="Enter number" name="PhoneMother" value={formData.PhoneMother} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Mother's Mobile no</label>
                        <input className='tag1_input' type="text" placeholder="Enter number" name="MobileMother" value={formData.MobileMother} onChange={handleChange}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Mother's Email</label>
                        <input className='tag1_input' type="email" placeholder="Enter email" name="EmailMother" value={formData.EmailMother} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="application_buttons">
                <div className="application_nextBtn tag1_button" onClick={handleNext}>
                    <span className="application_btnText tag1_span">Next</span>
                    <i className="uil uil-navigator tag1_i"></i>
                </div>      
                <div className="tag1_button" onClick={handleReset}>
                        <span className="tag1_span application_btnText">Reset</span>
                        <i class="fa-solid fa-arrow-rotate-left tag1_i"></i>
                </div>
            </div> 
        </div>
        <div className="application_form application_second w-full">
            <div className="application_details application_family">
                <span className="tag1_span application_title">Application Details</span>

                <div className="application_fields">
                    <div className="application_input-field">
                        <label className='tag1_label'>Application no</label>
                        <input className='tag1_input' type="text" placeholder="Enter application no" name='ApplicationNo' value={applicationData.ApplicationNo} onChange={handleApplicationData}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Course</label>
                        <input className='tag1_input' type="text" placeholder="Enter course name" name='Course' value={applicationData.Course} onChange={handleApplicationData}/>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Admission Category</label>
                        <select className='tag1_select' name='Category' value={applicationData.Category} onChange={handleApplicationData}>
                            <option selected>Select Category</option>
                            <option>Management Quota</option>
                            <option>Government Quota</option>
                            <option>NRI</option>
                            <option>NRI Lapsed</option>
                        </select>
                    </div>

                    <div className="application_input-field">
                        <label className='tag1_label'>Date of Admission</label>
                        <input className='tag1_input' type="date" name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                </div>
            </div> 
            <div className="application_details application_family mt-10">
                <span className="tag1_span application_title">Declaration</span>
                <div className='flex flex-row mb-28'>
                    <input className='mt-4 ml-10 w-4 hover:cursor-pointer' name="Checked" value={applicationData.Checked} type='checkbox' onChange={handleApplicationData}></input>
                    <label className='ml-4 mt-4'>I certify that the information given above by me is complete and true to the best of my knowledge.</label>
                </div>
                <div className="application_buttons">
                    <div className="application_backBtn" onClick={handlePrev}>
                        <i className="uil uil-navigator tag1_i"></i>
                        <span className="tag1_span application_btnText">Back</span>
                    </div>
                    <div className="tag1_button" onClick={handleApplicationDataReset}>
                        <span className="tag1_span application_btnText">Reset</span>
                        <i class="fa-solid fa-arrow-rotate-left tag1_i"></i>
                    </div>
                    <button className="tag1_button application_sumbit" onClick={handleFormSubmit} type='submit'>
                        <span className="tag1_span application_btnText">Submit</span>
                        <i className="uil uil-navigator tag1_i"></i>
                    </button>
                </div>
            </div> 
        </div>
    </form>
</div>
  )
}

export default ApplicationForm