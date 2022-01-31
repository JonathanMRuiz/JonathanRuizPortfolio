import '../Styles/Navbar.scss'

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react'



const Navbar = () => {

  const [toggleMenu, setToggleMenu ] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }

  useEffect (() =>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

      return () =>{
        window.removeEventListener('resize', changeWidth)
      }
  },[])


  return (
    
    <nav>
    {(toggleMenu || screenWidth > 500) && (
    <div className="list">
      
      <a href="home"
        className="items"
                  onClick={(e) => {
                    toggleNav()
                    e.preventDefault();
                    document
                      .getElementById("home-section")
                      .scrollIntoView();
                  }}>Home</a>
      

    
        <a href="about"
        className="items"
                  onClick={(e) => {
                    toggleNav()
                    e.preventDefault();
                    document
                      .getElementById("about-section")
                      .scrollIntoView();
                  }}>About</a>
   

      
        <a href="skills"
        className="items"
                  onClick={(e) => {
                    toggleNav()
                    e.preventDefault();
                    document
                      .getElementById("skills-section")
                      .scrollIntoView();
                  }}>Skills</a>
     

      
        <a href="projects"
        className="items"
                  onClick={(e) => {
                    toggleNav()
                    e.preventDefault();
                    document
                      .getElementById("projects-section")
                      .scrollIntoView();
                  }}>Projects</a>
      

      
        <a href="contact"
        className="items"
                  onClick={(e) => {
                    toggleNav()
                    e.preventDefault();
                    document
                      .getElementById("contact-section")
                      .scrollIntoView();
                  }}>Contact</a>
     
      
    
      
      

    </div>
    )}

    <button onClick={toggleNav} className="btn">
      <div className="icon">
        <GiHamburgerMenu/>
      </div>
      
      </button>
  </nav>


  )
};

export default Navbar;
