import React from 'react'
import contactimg from "../assets/call-image.png"
import emailimg from "../assets/email-image.png"


import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.png"
const Contact = () => {
  return (
    <div>

        <div className="contact-con">
        <p  class="headings text-center" data-aos="zoom-out-up" data-aos-duration="1300"><span class="highlight">Contact Me ...</span></p>
          <div className="email-num">
            <div className="email">
           <a href="tel:+919652021978">  <img src={contactimg} alt="" /> </a> 
             <p>+919652021978</p>
            </div>
            <div className="num">
            <a href="mailto:mahanthivikas965@email.com"><img src={emailimg} alt="" /></a>   
             <p>mahanthiivikas965@gmail.com </p>
            </div>
          </div>
        </div>


        <div className="newsocial-links">
        <p  class="headings text-center" data-aos="zoom-out-up" data-aos-duration="1300"><span class="highlight">Connect Me on ...</span></p>
          <div className="links">
    <a href=""><img src={linkedin} alt="" /></a>
    <a href=""><img src={github} alt="" /></a>
    <a href=""><img src={whatsapp} alt="" /></a>
    <a href=""><img src={instagram} alt="" /></a>
          </div>
        </div>
      
    </div>
  )
}

export default Contact
