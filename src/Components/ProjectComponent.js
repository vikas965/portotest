import React from 'react'

const ProjectComponent = (props) => {
    const {id,title,imgurl,prolink}=props;
  return (
    <div key={id} class="project" data-aos="fade-up-right" data-aos-duration="1300">
        <div class="content" >
          <p class="pname">
            {title} <br/>
            (website)
          </p>
          <p class="cont">
            <img src={imgurl} alt=""/>
          </p>
        </div>
        <div class="visit">
         <a href={prolink}> <i class="fa-solid fa-share fa-flip"></i></a>
        </div>
      </div>
  )
}

export default ProjectComponent
