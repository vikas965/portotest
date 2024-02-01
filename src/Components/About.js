import React from 'react'
import studyimg from "../assets/computerstudy.png"
const About = () => {
  return (
    <section id="newabout" >
  <div class="newabout">
    
    
      <div className="newabout1">
      <p  class="headings text-center" data-aos="zoom-out-up" data-aos-duration="1300"><span class="highlight">About</span></p>
      </div>
    <div className="newabout2">
    <div className="img">
      <img src={studyimg} alt="" />
      </div>
      <div className="newabt-content">
      I am a web developer specializing in LAMP and MERN stacks, equipped with diverse skills in creating dynamic web applications. My experience includes successful project delivery, and I am eagerly awaiting new opportunities to contribute and grow......
      </div>
    </div>

      

</div>



</section>


  )
}

export default About
