import React from 'react'

const Header = () => {
  return (
    <>
        <header className="primary-header flex">
           <div className="logo flex">
            <div>
               <h1>Arjesh</h1>
            </div>

            <div>
                <h1 className="line">Web Developer</h1>
            </div>
           </div> 

           <div className="right">
            <input type="checkbox" id="check"/>
            <label for="check" className="menu-icon"><i className="fa-solid fa-bars"></i></label>
            <ul className="navigation flex">
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



        </header>
      
    </>
  )
}

export default Header
