import React from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import '../Styles/Index.scss'

const Index = () => {
  return (
  <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
  </div>)
};

export default Index;
