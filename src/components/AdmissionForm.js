import React from 'react'
import '../styles/admission.css'
import { useState } from 'react'

const AdmissionForm = () => {
    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //       currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    //   }
     

    // const [finalData,setFinaldata]=useState({
    //     "email": "",
    //         "contact_info": {
    //             "student_contact_no": "",
    //             "student_email_id": "",
    //             "mobile_1": "",
    //             "mobile_2": "",
    //             "mobile_3": "",
    //             "guardian_mobile": "",
    //         },
    //         "student_name": "",
    //         "course": "",
    //         "quota": "",
    //         "date_of_birth": "",
    //         "gender": "",
    //         "is_hostellite": false,
    //         "community": "",
    //         "religion": "",
    //         "native_place": "",
    //         "blood_group": "",
    //         "height": 0,
    //         "weight": 0,
    //         "date_of_admission": "",
    //         "mother_tongue": "",
    //         "status": 0,
    //         "mark_info": {},
    //         "parent_info": {
    //             "father_name": "",
    //             "father_occupation": "",
    //             "father_occupation_address": "",
    //             "father_phone_number": "",
    //             "father_email": "",
    //             "mother_name": "",
    //             "mother_occupation": "",
    //             "mother_occupation_address": "",
    //             "mother_phone_number": "",
    //             "mother_email": "",
    //         },
    // })
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
        // const isEmptyField = Object.values(formData).some(value => value === "");
        // if (isEmptyField) {
        //   alert("Please fill in all fields.");
        //   return;
        // }
        // else{
        //   setSectionActive("secActive")
        // }   
        setSectionActive("secActive")
    }
    const handlePrev =()=>{
        setSectionActive("")
    }
    const handleChange =(e)=>{
        // const { name, value, type, checked } = e.target;
        // setFormData(prevState => ({
        //   ...prevState,
        //   [name]: type === 'checkbox' ? checked : value
        // }));
    }
    const handleApplicationData =(e)=>{
        // const { name, value, type, checked } = e.target;
        // setApplicationData(prevState => ({
        //   ...prevState,
        //   [name]: type === 'checkbox' ? checked : value
        // }));
    }
    const handleFormSubmit=(e)=>{
        // e.preventDefault();
        // setFinaldata({"email": formData.Email,
        // "contact_info": {
        //     "student_contact_no": formData.Mobile,
        //     "student_email_id": formData.Email,
        //     "mobile_1": formData.Mobile,
        //     "mobile_2": formData.MobileFather,
        //     "mobile_3": formData.MobileMother,
        //     "guardian_mobile": formData.MobileLocal,
        // },
        // "student_name": formData.Name,
        // "course": applicationData.Course,
        // "quota": applicationData.Category,
        // "date_of_birth": formData.Dob,
        // "gender": formData.Gender,
        // "is_hostellite": (formData.Mode==="Hostelite")?true:false,
        // "community": formData.Community,
        // "religion": formData.Religion,
        // "native_place": formData.Native,
        // "blood_group": formData.Blood,
        // "height": formData.Height,
        // "weight": formData.Weight,
        // "date_of_admission": applicationData.DateofAdmit,
        // "mother_tongue": formData.Language,
        // "status": 0,
        // "mark_info": {},
        // "parent_info": {
        //     "father_name": formData.Fathername,
        //     "father_occupation": formData.FatherOcc,
        //     "father_occupation_address": formData.FatOccAdd,
        //     "father_phone_number": formData.PhoneFather,
        //     "father_email": formData.EmailFather,
        //     "mother_name": formData.Mothername,
        //     "mother_occupation": formData.MotherOcc,
        //     "mother_occupation_address": formData.MoOccAdd,
        //     "mother_phone_number": formData.PhoneMother,
        //     "mother_email": formData.EmailMother,
        // },}

        // )
        // sleep(2000);
        // console.log(finalData);
    }
    const handleReset = () => {
        // setFormData({
        //     Name: "",
        //     Dob: "",
        //     Email: "",
        //     Gender: "",
        //     Mode: "",
        //     Native: "",
        //     Language: "",
        //     Religion: "",
        //     Community: "",
        //     Height: "",
        //     Weight: "",
        //     Blood: "",
        //     Addcom: "",
        //     Mobile: "",
        //     AddPrivate: "",
        //     AddLocal: "",
        //     MobileLocal: "",
        //     Fathername: "",
        //     FatherOcc: "",
        //     FatOccAdd: "",
        //     PhoneFather: "",
        //     MobileFather: "",
        //     EmailFather: "",
        //     Mothername: "",
        //     MotherOcc: "",
        //     MoOccAdd: "",
        //     PhoneMother: "",
        //     MobileMother: "",
        //     EmailMother: ""
        // });
      };
    const handleApplicationDataReset = () => {
        // setApplicationData({
        //     ApplicationNo: "",
        //     Course: "",
        //     Category: "",
        //     DateofAdmit: "",
        //     Checked: false
        // });
      };
  return (
    <div className="admission_container w-full m-auto">
    <div className='flex flex-row w-full'>
        <header className='tag_header w-1/2'>Admission Form</header>
    </div>
    <form className={`${SectionActive} tag_form`} action="#">
        <div className="admission_form admission_first">
        
            <div className="admission_details admission_personal">
                <span className="tag_span admission_title">Admission Details</span>

                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Date</label>
                        <input className='tag_input' type="date" name='Name' placeholder="Enter your name" value={formData.Name} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>SI.no</label>
                        <input className='tag_input' type="text" placeholder="Enter si.no" name='Dob' value={formData.Dob} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Admission No</label>
                        <input className='tag_input' type="text" placeholder="Enter your email" name="Email" value={formData.Email} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Quota</label>
                        <select className='tag_select' name="Gender" value={formData.Gender} onChange={handleChange}>
                            <option selected>Select Quota</option>
                            <option>Govt</option>
                            <option>Mgt</option>
                            <option>NRI</option>
                            <option>NRI Lapsed</option>
                        </select>
                    </div>

                    
                </div>
            </div>
            <div className="admission_details admission_address">
            <span className="tag_span admission_title">Personal Details</span>
                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Student Name</label>
                        <input className='tag_input' type="text" placeholder="Enter name" name="Fathername" value={formData.Fathername} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Date of Birth</label>
                        <input className='tag_input' type="date" name="FatherOcc" value={formData.FatherOcc} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's name</label>
                        <input className='tag_input' type="text" placeholder="Enter Father's name" name="FatOccAdd" value={formData.FatOccAdd} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Address for Communication</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="PhoneFather" value={formData.PhoneFather} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile 1 (Parent)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="MobileFather" value={formData.MobileFather} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile 2 (Parent)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="EmailFather" value={formData.EmailFather} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile (Student)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="Mothername" value={formData.Mothername} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Community</label>
                        <select className='tag_select' name="Gender" value={formData.Gender} onChange={handleChange}>
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
                        <label className='tag_label'>Whether Day Scholar/Hostelite</label>
                        <select className='tag_select' name="Gender" value={formData.Gender} onChange={handleChange}>
                            <option selected>Select type</option>
                            <option>Day Scholar</option>
                            <option>Hostelite</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>HSC(+2) Register No:</label>
                        <input className='tag_input' type="text" placeholder="Enter register number" name="PhoneMother" value={formData.PhoneMother} onChange={handleChange}/>
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
                <span className="tag_span admission_title">Mark Details</span>

                <div className="admission_fields">
                <div className="admission_input-field">
                        <label className='tag_label'>Board of Study</label>
                        <select className='tag_select' name="Gender" value={formData.Gender} onChange={handleChange}>
                            <option selected>Select Board</option>
                            <option>State Board</option>
                            <option>CBSE</option>
                            <option>ICSE</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Neet Roll Number:</label>
                        <input className='tag_input' type="text" placeholder="Enter Roll number" name='Course' value={applicationData.Course} onChange={handleApplicationData}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Year of Passing (HSC)</label>
                        <input className='tag_input' type="number" placeholder='20__' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Year of Passing (Neet)</label>
                        <input className='tag_input' type="number" placeholder='20__' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Physics Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Chemistry Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Biology Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Neet Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Neet Marks (/720)</label>
                        <input className='tag_input' type="number" placeholder='Enter Marks' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Neet Study Center:</label>
                        <input className='tag_input' type="text" name='DateofAdmit' placeholder='Enter name of center' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Physics Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Chemistry Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Biology Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='Enter Marks' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>No.of.Neet Attempts</label>
                        <input className='tag_input' type="number" placeholder='Enter attemps' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Selection Committiee Allotment Order No</label>
                        <input className='tag_input' type="number" placeholder='Enter number' name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Selection Committiee General Rank:</label>
                        <input className='tag_input' type="text" name='DateofAdmit' placeholder='Enter Rank' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Allotment Order Date</label>
                        <input className='tag_input' type="date" name='DateofAdmit' value={applicationData.DateofAdmit} onChange={handleApplicationData}/>
                    </div>
                </div>
            </div> 
            <div className="admission_details admission_family mt-10">
                <span className="tag_span admission_title">Declaration</span>
                <div className='flex flex-row mb-28'>
                    <input className='mt-4 ml-10 w-4 hover:cursor-pointer' name="Checked" value={applicationData.Checked} type='checkbox' onChange={handleApplicationData}></input>
                    <label className='ml-4 mt-4'>I declare that the particulars mentioned above are true and I will not claim/ask for any change with regard to any of the particulars furnished above.</label>
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
                    <button className="tag_button admission_sumbit" onClick={handleFormSubmit} type='submit'>
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