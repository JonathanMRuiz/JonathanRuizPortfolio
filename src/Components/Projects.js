import React from 'react';
import '../Styles/Project.scss'
import Casette from './Casette'
const Projects = () => {
  return (
    <div className="projects" id="projects-section">
      <div className="container">
        <div className="col-lg-12">
          <div className="titleProject">
            <h1>Project</h1>
          </div>
          <div className="casette">
            <Casette/>
          </div>
        </div>
      </div>
  </div>);
};

export default Projects;
