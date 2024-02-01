import React from 'react'
import projectsdata from './Projectdata'
import ProjectComponent from './ProjectComponent'

const Projects = () => {
  return (
    <section>
      
  <div class="projects" id="project">
    <p  class="headings text-center" data-aos="zoom-out-up" data-aos-duration="1300"><span class="highlight">MY PROJECTS</span></p>
    <div class="project-container">
        
        
     {
      projectsdata.map((eachitem)=>{
        const {id,title, imgurl, prolink} = eachitem;
        console.log(imgurl);
        return(
          <ProjectComponent key={id} title={title} imgurl={imgurl} prolink={prolink} id={id} />
        )
      })
     }
      
     
    </div>
  </div>
</section>
  )
}

export default Projects
