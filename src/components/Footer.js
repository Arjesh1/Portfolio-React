import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer-container flex">

                <div className="footer-top flex">
                    <div className="flex">
                        <h3>Links</h3>
                        <ul className="flex">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#project">Projects</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex">
                        <h3>External Links</h3>
                        <ul className="flex">
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li> <a href="https://github.com/Arjesh1">Github</a></li>
                            <li><a href="https://linkedin.com/in/arjesh-khadka">Linkedin</a></li>
                            <li><a href="https://twitter.com/ ">Twitter</a></li>
                        
                        </ul>
                    </div>
                    
                </div>

                <div className="footer-bottom flex">
                    <p>@2022| All rights reserved</p>
                </div>
            </div>
         </footer>

          {/* <!-- scroll to top btn --> */}

          <div className="scroll-to-top">
            <a href="#" className="scroll-btn">

                <i className="fa-solid fa-chevron-up"></i>
            </a>
         </div>
      
    </div>
  )
}

export default Footer
