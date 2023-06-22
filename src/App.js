import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Admin from './components/Admin'
import Student from './components/Student'
import RegistrationForm from './components/RegistrationForm'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main></Main>}></Route>
      <Route path='/student' element={<Student></Student>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='/student/form' element={<RegistrationForm></RegistrationForm>}></Route>
    </Routes>   
    </BrowserRouter>
  )
}

export default App
