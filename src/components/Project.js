import React from 'react'
import Travel from '../assets/travel.png'
import Eccomerce from '../assets/eccomerce.png'

const Project = () => {
  return (
    <>
             {/* <!-- project section --> */} 
<section className="section4 flex " id="project">
 <h1 className="title">My Projects</h1>

 <div className="project-container grid">
    <a href="https://arjesh1.github.io/sneaky-ecommerce/"><div className="project-card flex">
        <div className="top">
            <img src={Eccomerce} alt=""></img>
        </div>

        <div className="bottom">
            <p>Dec 15, 2022</p>
            <p>Ecommerce website developed using HTML and CSS</p>
        </div>

     </div>
     </a>

     <a href="https://arjesh1.github.io/Travel_Blog/">
     <div className="project-card flex">
        <div className="top">
            <img src={Travel} alt=""></img>
        </div>

        <div className="bottom">
            <p>Dec 15, 2022</p>
            <p>Travel Blog website developed using HTML and CSS</p>
        </div>

     </div>
    </a>
     <div className="project-card flex">
        <div className="top">
    <img src={Eccomerce} alt=""></img>
        </div>

        <div className="bottom">
            <p>Dec 15, 2022</p>
            <p>Ecommerce website developed using HTML and CSS</p>
        </div>

     </div>
 </div>
</section>
         {/* {/* <!-- project section end--> */}

      
    </>
  )
}

export default Project
