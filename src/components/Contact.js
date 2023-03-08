import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="section6 flex" id="contact">
    <h1 className="title"> Get In Touch</h1>

 <div className="socials flex">
    <i className="fa-brands fa-facebook-f"></i>
    <i className="fa-brands fa-github"></i>
    <i className="fa-brands fa-linkedin-in"></i>
    <i className="fa-brands fa-twitter"></i>
 </div>

  <h1>OR</h1>

 <div className="email-section flex">
    <p>Reach out over email</p>
    <div className="email ">
        <a href="mailto:arjesh.khadka2@gmail.com">arjesh.khadka2@gmail.com</a>

        <div className="send">
            <i className="fa-sharp fa-solid fa-paper-plane"></i>
        </div>
    </div>
 </div>

</section>
         
      
    </div>
  )
}

export default Contact
