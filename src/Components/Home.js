import '../Styles/Home.scss';
import Typewriter from 'typewriter-effect';

const Home = () => {

  
  return (

    
  <div className="home" id="home-section">
    
    <div className="col-12 col-sm-12 col-md-12">
      <div className="imgContainer">
        <img className="imgProfile" src="images/perfil.jpg" alt="profile"/>
      </div>
    
    <div className="text">
      <span>Hi, i am</span>
      <div className="textName">
      <span>Jonathan Ruiz</span>
      </div>
      <div className="textType">
      <Typewriter
       
        options={{
          strings: ['Front-End Developer'],
          autoStart: true,
          loop: true,
         
        }}
      />
      
      </div>

    </div>
    <div className="social">
      
      <a href="https://www.linkedin.com/in/jonathanmruiz/"><i className="nes-icon linkedin is-large"></i></a>
      <a href="https://github.com/JonathanMRuiz"><i className="nes-icon github is-large"></i></a>
      <a href="https://www.facebook.com/Jonathan.MatiasRz/"><i className="nes-icon facebook is-large"></i></a> 
      <a href="https://www.instagram.com/joni.m.r"><i className="nes-icon instagram is-large"></i></a>
      
    </div>
  </div>
  </div>
  )
};

export default Home;
