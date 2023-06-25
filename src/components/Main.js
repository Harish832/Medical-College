// import AdmissionForm from "./AdmissionForm"
import CustomModal from "./CustomModal"
const Main = () => {
  const data={
    display:"hello",
    message:"Hi",
  }
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex flex-col basis-full'>
          <div className='flex w-4/6 m-auto shadow-custom'>
            {/* <AdmissionForm></AdmissionForm> */}
            <CustomModal data={data}></CustomModal>
          </div>
      </div>
    </div>
  )
}

export default Main