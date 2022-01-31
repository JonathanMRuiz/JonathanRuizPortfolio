import '../Styles/Skills.scss';
import React from 'react';

const data = [
    {
        image:"images/React.png",
        name:'React',
        id:"1"
    }
    ,
    {
        image:'images/Javascript.png',
        name:'Javascript',
        id:"2"
    }
    ,
    
    {
        image:"images/Html.png",
        name:'HTML5',
        id:"3"
    }
    ,
    {
        image:"images/css3.png",
        name:'CSS3',
        id:"4"
    }
    ,
    {
        image:"images/Boostrap.png",
        name:'Boostrap',
        id:"5"
    }
    ,
    {
        image:"images/Sass.png",
        name:'Sass',
        id:"5"
    }
    ,
    {
        image:"images/Styled.png",
        name:'Styled-Components',
        id:"6"
    }
    ,
    {
        image:"images/Python.png",
        name:'Python',
        id:"10"
    }
    ,
    {
        image:"images/Php.png",
        name:'PHP',
        id:"7"
    }
    ,
    {
        image:"images/Github.png",
        name:'Github',
        id:"8"
    }
    ,
    {
        image:"images/git.png",
        name:'Git',
        id:"11"
    }
    ,
    {
        image:"images/Figma.png",
        name:'Figma',
        id:"11"
    }
    
    
]
const Skills = () => {
  return (
      
      <div className="col-12 col-sm-12 col-md-12" id="skills-section">
          <div className="titleSkill">
                <h1>Skills</h1>
            </div>
          
            <div className="skills">
            
            {data.map(item => (

             <ul key={item.id}>
                <div className="imageContainer">
                
                    <img className="nes-avatar is-large" alt={item.name} src={item.image} />
                    <span className="paraSkill">{item.name} </span>
                    
                    
            </div>
            </ul>
            
            ))}
        </div>
      </div>
     
  )
};

export default Skills;
