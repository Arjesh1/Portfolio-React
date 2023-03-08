import React from 'react'
import Photo from '../assets/photo.png'

const Hero = () => {
  return (
    <>

    {/* <!-- hero section --> */} 
<section className="section1 grid" id="home">
  <div className="left flex">
    <img src={Photo}alt=""></img>
    
    
  </div>

   <div className="right flex">
    <div flex>
        <h2 className="name"> Arjesh <span className="lname">Khadka</span></h2>
        <p className="tag">Web Developer</p>
    </div>
    <button>
        <a href="assets/resume.pdf">Download CV <span><i className="fa-solid fa-download"></i></span></a>
    </button>

   </div>

</section>

         {/* {/* <!-- hero section end--> */}
      
    </>
  )
}

export default Hero
