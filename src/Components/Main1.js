import React from 'react'
import profile from "../assets/profile.png"
import globe from "../assets/globe.png"


const Main1 = () => {
  return (
    <section>
 <div class="abs">
  <div class="hello" data-aos="fade-down-right" data-aos-duration="1500">
    <div class="data">
     <p class="p1">Hello !!</p>
     <p class="p2">I'm <span class="span1">Mahanthi Vikas</span> </p>
     <p>I'm a  <span style={{color:"rgba(0, 204, 255, 0.858)"}}>Full Stack Developer</span>   <h4 style={{fontSize:"bold"}}> <span style={{fontFamily:"Franklin Gothic Medium"}}>LAMP</span> <img style={{width:"70px"}} src={globe} alt="" /> <span style={{fontFamily:"Franklin Gothic Medium"}}>MERN</span>   </h4></p>
     <a href="#" class="resumelink" ><i class="fa-solid fa-file"></i> Get Resume</a>
    </div>
    <div class="hellopic" data-aos="zoom-in-left" data-aos-duration="1500">
   <img  src={profile} alt=""/> 
  
    </div>
   </div>
   
 </div>

</section>
  )
}

export default Main1
