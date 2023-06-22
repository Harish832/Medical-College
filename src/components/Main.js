import AdmissionForm from "./AdmissionForm"
const Main = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex flex-col basis-full'>
          <div className='flex w-4/6 m-auto shadow-custom'>
            <AdmissionForm></AdmissionForm>
          </div>
      </div>
    </div>
  )
}

export default Main