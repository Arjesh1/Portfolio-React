import React from 'react'
import Photo from '../assets/photo.png'

const Hero = () => {
  return (
    <>

<section className="section2"id="skills">
            <div className="info-container flex">
                <div className="info-lists flex">
                    <div className="info-content flex">
                        <div className="icon-container flex">
                            <i className="fa-solid fa-ribbon"></i>
                        </div>
                        <span>
                            <h5>IT</h5>
                            <p>Graduate</p>
                        </span>
                    </div>

                    <div className="info-divider">

                    </div>

                    <div className="info-content flex">
                        <div className="icon-container flex">
                            <i className="fa-solid fa-diagram-project"></i>
                        </div>
                        <span>
                            <h5>5+ Projects</h5>
                            <p>Completed</p>
                        </span>
                    </div>

                    <div className="info-divider">
                        
                    </div>

                    <div className="info-content flex">
                        <div className="icon-container flex">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <span>
                            <h5>1 Yrs</h5>
                            <p>Coding</p>
                        </span>
                    </div>

                </div>

            </div>

         </section>

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
