import React from 'react'

import Navbar from './Components/Navbar'
import Main1 from './Components/Main1'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div className='AppPortofolio'>
      
<Navbar/>

<Routes>
  <Route path='/' element={<Main1/>} />
  <Route path='about' element={<About/>} />
  <Route path='edu' element={<Education/>} />
  <Route path='projects' element={<Projects/>} />
  <Route path='contact' element={<Contact/>} />

</Routes>

<Footer/>

{/* <Main1/>

<About/> */}
      
    </div>
  )
}

export default App
