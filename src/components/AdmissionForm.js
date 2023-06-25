import React from 'react'
import '../styles/admission.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdmissionForm = (props) => {
    const navigate=useNavigate()
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    const data=props.data
    const [Section1data,setSection1data]=useState({
        "student_contact_no": "",
        "address":"",
        "father_name": "",
        "father_phone_number": "",
        "mother_phone_number": "",
        "serial_no": "",
        "date_of_admission": "",
        "admission_no": "",
        "student_name": "",
        "quota": "",
        "date_of_birth": "",
        "community": "",
        "is_hostellite": "",
        "hsc_register_no": "",
        "board_of_study": "",
        "neet_roll_no": "",
        "hsc_year_of_passing": "",
        "neet_year": "",
        "neet_study_center_name": "",
        "no_of_neet_attempts": "",
        "selection_committee_allotment_order_no": "",
        "selection_committee_general_rank": "",
        "allotment_order_date": "",
        "neet_total_mark": "",
        "neet_physics_percentile": "",
        "neet_chemistry_percentile": "",
        "neet_biology_percentile": "",
        "neet_total_percentile": "",
        "hsc_physics_mark": "",
        "hsc_chemistry_mark": "",
        "hsc_biology_mark": "",
        "hsc_total_mark": "",
        "Checked":false,
    })
    const handleChange =(e)=>{
        const { name, value, type, checked } = e.target;
        setSection1data(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const isEmptyField = Object.values(Section1data).some(value => value === (""||false));
        if (isEmptyField) {
          alert("Please fill in all fields.");
          return;
        }
        else{
            alert("Your response was submitted!!!") 
            navigate('/student') 
            sleep(1000)
            console.log(Section1data);
        }  
    }
    const handleReset = () => {
        setSection1data({
            "student_contact_no": "",
            "address":"",
            "father_name": "",
            "father_phone_number": "",
            "mother_phone_number": "",
            "serial_no": "",
            "date_of_admission": "",
            "admission_no": "",
            "student_name": "",
            "quota": "",
            "date_of_birth": "",
            "community": "",
            "is_hostellite": "",
            "hsc_register_no": "",
            "board_of_study": "",
            "neet_roll_no": "",
            "hsc_year_of_passing": "",
            "neet_year": "",
            "neet_study_center_name": "",
            "no_of_neet_attempts": "",
            "selection_committee_allotment_order_no": "",
            "selection_committee_general_rank": "",
            "allotment_order_date": "",
            "neet_total_mark": "",
            "neet_physics_percentile": "",
            "neet_chemistry_percentile": "",
            "neet_biology_percentile": "",
            "neet_total_percentile": "",
            "hsc_physics_mark": "",
            "hsc_chemistry_mark": "",
            "hsc_biology_mark": "",
            "hsc_total_mark": "",
            "Checked":false,
        })
      };
  return (
    <div className="admission_container w-full m-auto">
    <div className='flex flex-row w-full'>
        <header className='tag_header w-1/2'>Admission Form</header>
    </div>
    <form className={`tag_form`} action="#">
        <div className="admission_form admission_first">
        
            <div className="admission_details admission_personal">
                <span className="tag_span admission_title">Admission Details</span>

                <div className="admission_fields">
                    <div className="admission_input-field">
                        <label className='tag_label'>Date</label>
                        <input className='tag_input' type="date" name='date_of_admission' value={Section1data.date_of_admission} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>SI.no</label>
                        <input className='tag_input' type="text" placeholder="Enter si.no" name='serial_no' value={Section1data.serial_no} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Admission No</label>
                        <input className='tag_input' type="text" placeholder="Enter Admission no" name="admission_no" value={Section1data.admission_no} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Quota</label>
                        <select className='tag_select' name="quota" value={Section1data.quota} onChange={handleChange}>
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
                        <input className='tag_input' type="text" placeholder="Enter your name" name="student_name" value={Section1data.student_name} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Date of Birth</label>
                        <input className='tag_input' type="date" name="date_of_birth" value={Section1data.date_of_birth} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Father's name</label>
                        <input className='tag_input' type="text" placeholder="Enter Father's name" name="father_name" value={Section1data.father_name} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Address for Communication</label>
                        <input className='tag_input' type="text" placeholder="Enter your address" name="address" value={Section1data.address} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile 1 (Parent)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="father_phone_number" value={Section1data.father_phone_number} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile 2 (Parent)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="mother_phone_number" value={Section1data.mother_phone_number} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Mobile (Student)</label>
                        <input className='tag_input' type="text" placeholder="Enter number" name="student_contact_no" value={Section1data.student_contact_no} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Community</label>
                        <select className='tag_select' name="community" value={Section1data.community} onChange={handleChange}>
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
                        <select className='tag_select' name="is_hostellite" value={Section1data.is_hostellite} onChange={handleChange}>
                            <option selected>Select type</option>
                            <option>Day Scholar</option>
                            <option>Hostelite</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>HSC(+2) Register No:</label>
                        <input className='tag_input' type="text" placeholder="Enter register number" name="hsc_register_no" value={Section1data.hsc_register_no} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="admission_details admission_family">
                <span className="tag_span admission_title">Mark Details</span>

                <div className="admission_fields">
                <div className="admission_input-field">
                        <label className='tag_label'>Board of Study</label>
                        <select className='tag_select' name="board_of_study" value={Section1data.board_of_study} onChange={handleChange}>
                            <option selected>Select Board</option>
                            <option>State Board</option>
                            <option>CBSE</option>
                            <option>ICSE</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Neet Roll Number:</label>
                        <input className='tag_input' type="text" placeholder="Enter Roll number" name='neet_roll_no' value={Section1data.neet_roll_no} onChange={handleChange}/>
                    </div>

                    <div className="admission_input-field">
                        <label className='tag_label'>Year of Passing (HSC)</label>
                        <input className='tag_input' type="number" placeholder='20__' name='hsc_year_of_passing' value={Section1data.hsc_year_of_passing} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Year of Passing (Neet)</label>
                        <input className='tag_input' type="number" placeholder='20__' name='neet_year' value={Section1data.neet_year} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Physics Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='neet_physics_percentile' value={Section1data.neet_physics_percentile} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Chemistry Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='neet_chemistry_percentile' value={Section1data.neet_chemistry_percentile} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Biology Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='neet_biology_percentile' value={Section1data.neet_biology_percentile} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Neet Percentile</label>
                        <input className='tag_input' type="number" placeholder='in %' name='neet_total_percentile' value={Section1data.neet_total_percentile} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Neet Marks (/720)</label>
                        <input className='tag_input' type="number" placeholder='Enter Marks' name='neet_total_mark' value={Section1data.neet_total_mark} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Neet Study Center:</label>
                        <input className='tag_input' type="text" name='neet_study_center_name' placeholder='Enter name of center' value={Section1data.neet_study_center_name} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Physics Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='hsc_physics_mark' value={Section1data.hsc_physics_mark} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Chemistry Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='hsc_chemistry_mark' value={Section1data.hsc_chemistry_mark} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Biology Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='200/100' name='hsc_biology_mark' value={Section1data.hsc_biology_mark} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Total Marks(HSC)</label>
                        <input className='tag_input' type="number" placeholder='Enter Marks' name='hsc_total_mark' value={Section1data.hsc_total_mark} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>No.of.Neet Attempts</label>
                        <input className='tag_input' type="number" placeholder='Enter attemps' name='no_of_neet_attempts' value={Section1data.no_of_neet_attempts} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Selection Committiee Allotment Order No</label>
                        <input className='tag_input' type="text" placeholder='Enter number' name='selection_committee_allotment_order_no' value={Section1data.selection_committee_allotment_order_no} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Selection Committiee General Rank:</label>
                        <input className='tag_input' type="text" name='selection_committee_general_rank' placeholder='Enter Rank' value={Section1data.selection_committee_general_rank} onChange={handleChange}/>
                    </div>
                    <div className="admission_input-field">
                        <label className='tag_label'>Allotment Order Date</label>
                        <input className='tag_input' type="date" name='allotment_order_date' value={Section1data.allotment_order_date} onChange={handleChange}/>
                    </div>
                </div>
            </div> 
            <div className="admission_details admission_family mt-10">
                <span className="tag_span admission_title">Declaration</span>
                <div className='flex flex-row mb-28'>
                    <input className='mt-4 ml-10 w-4 hover:cursor-pointer' name="Checked" value={Section1data.Checked} type='checkbox' onChange={handleChange}></input>
                    <label className='ml-4 mt-4'>I declare that the particulars mentioned above are true and I will not claim/ask for any change with regard to any of the particulars furnished above.</label>
                </div>
            </div>
            <div className="admission_buttons">    
                <div className="tag_button" onClick={handleReset}>
                        <span className="tag_span admission_btnText">Reset</span>
                        <i class="fa-solid fa-arrow-rotate-left tag_i"></i>
                </div>
                <button className="tag_button admission_sumbit" onClick={handleFormSubmit} type='submit'>
                        <span className="tag_span admission_btnText">Submit</span>
                        <i className="uil uil-navigator tag_i"></i>
                    </button>
            </div> 
        </div>
    </form>
</div>
  )
}

export default AdmissionForm