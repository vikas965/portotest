import React from 'react'
import mvlogo from "../assets/mvlogo.jpg"
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style={{background: "black"}}>
    <div class="container-fluid text-primary">
      <Link to="/" class="navbar-brand" ><img id="logo" src={mvlogo} alt="" data-aos="flip-right" data-aos-duration="2000"/></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto  mb-lg-0">
          <li class="nav-item">
          <NavLink class="nav-link active nav-link-ltr" aria-current="page" to="/" >Home</NavLink>
            
          </li>
          <li class="nav-item">
          <NavLink class="nav-link  nav-link-ltr" aria-current="page" to="/about" >About</NavLink>
          </li>
          <li class="nav-item">
          <NavLink class="nav-link  nav-link-ltr" aria-current="page" to="/edu" >Education</NavLink>
          </li>
         
          <li class="nav-item">
          <NavLink class="nav-link  nav-link-ltr" aria-current="page" to="/projects" >Projects</NavLink>
          </li>
          <li class="nav-item">
          <NavLink class="nav-link  nav-link-ltr" aria-current="page" to="/contact" >Contact</NavLink>
          </li>
          
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar
