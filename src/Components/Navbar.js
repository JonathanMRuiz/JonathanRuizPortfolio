import '../Styles/Navbar.scss'


import { Link } from 'react-scroll'
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
    
    <>
 
    
    <nav>
    {(toggleMenu || screenWidth > 500) && (
    <div className="list">
    
        <Link activeClass="active" to="home-section" spy={true} smooth={true} offset={0} duration={700} onClick={toggleNav}>Home</Link>
        <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={-50} duration={700} onClick={toggleNav}>About</Link>
        <Link activeClass="active" to="skills-section" spy={true} smooth={true} offset={-50} duration={700} onClick={toggleNav}>Skills</Link>
        <Link activeClass="active" to="projects-section" spy={true} smooth={true} offset={-50} duration={700} onClick={toggleNav}>Projects</Link>
        <Link activeClass="active" to="contact-section" spy={true} smooth={true} offset={-50} duration={700} onClick={toggleNav}>Contact</Link>
   
       
    </div>
    )}

    <button onClick={toggleNav} className="btn">
      <div className="icon">
        <GiHamburgerMenu/>
      </div>
      
      </button>
  </nav>
  </>

  )
};

export default Navbar;
