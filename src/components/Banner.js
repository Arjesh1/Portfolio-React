import React from 'react'

const Banner = () => {
  return (
    <>
    {/* <!-- banner sction --> */} 
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

         {/* <!-- banner section end -->

         <!-- skills section --> */}
<section className="section3" >
    <div className="skills-container flex">
        <div className="flex">
            <i className="fa-brands fa-html5"></i>
            <span>HTML</span>

        </div>
        <div className="flex">
            
 
 
       <i className="fa-brands fa-css3-alt"></i>
            <span>CSS</span>

        </div>

        <div className="flex">
     
                 <i className="fa-brands fa-sass"></i>
                 <span>Sass</span>
     
             </div>


        
        <div className="flex">
            <i className="fa-brands fa-js"></i>
            <span>JavaScript</span>

        </div>
        <div className="flex">
            <i className="fa-brands fa-react"></i>
            <span>React</span>

        </div>
        <div className="flex">
            <i className="fa-brands fa-php"></i>
            <span>PHP</span>

        </div>
    </div>
</section>
         {/* {/* <!-- skills section end --> */}
      
    </>
  )
}

export default Banner
