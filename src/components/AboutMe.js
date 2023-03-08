import React from 'react'
import Photo from '../assets/photo.png'

const AboutMe = () => {
  return (
    <div>
        <section className="section5 flex" id="about">

<h1 className="title">About Me</h1>
<div className="about-container flex">

    <div className="left">
        <div className="bg"></div>
        <img src={Photo} alt=""></img>
    </div>

    <div className="right flex">
        <h1>Arjesh Khadka</h1>
        <p>
            I grew up in Kathmandu, Nepal and 
            currently living in Sydney, Australia. 
        </p>

        <p>Sydney, Australia</p>

        <a href="" flex>Connect with me</a>

        <div className="flex">
            <div className="tag">
               <p> Interests</p>
            <span>Coding</span>
            <span>Sports</span>
            <span>Movies</span>
        </div>
        </div>
    </div>
</div>
</section>
      
    </div>
  )
}

export default AboutMe
