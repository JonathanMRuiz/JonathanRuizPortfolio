import './App.scss';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';


function App() {

  return (
    
      <div className="App">
          <Navbar/>
        
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
       
      
      </div>
 
  );
}

export default App;
