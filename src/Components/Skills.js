import '../Styles/Skills.scss';
import React from 'react';

import { FaReact,FaJs,FaHtml5,FaCss3Alt,FaPython,FaDatabase } from 'react-icons/fa';
import { DiPhp } from "react-icons/di";
import {FaFigma,FaGithub, FaBootstrap, FaSass} from 'react-icons/fa';
import { SiStyledcomponents } from "react-icons/si";
import { DiScrum } from "react-icons/di";


const data =[
    {
        image:<FaReact/>,
        name:"React",
        id:"1"
    },
    {
        image:<FaJs/>,
        name:"Java-Script",
        id:"2"
    },
    {
        image:<FaHtml5/>,
        name:"HTML5",
        id:"3"
    },
    {
        image:<FaCss3Alt/>,
        name:"CSS3",
        id:"4"
    },
    
   
    {
        image:<DiPhp/>,
        name:"PHP",
        id:"5"
    },
    {
        image:<FaPython/>,
        name:"Python",
        id:"6"
    },
    
    
    {
        image:<FaDatabase/>,
        name:"Database",
        id:"7"
    },

    {
        image:<FaFigma/>,
        name:"Figma",
        id:"8"
    },
    {
        image:<FaGithub/>,
        name:"GitHub",
        id:"13"
    },
    {
        image:<SiStyledcomponents/>,
        name:"Styled-component",
        id:"9"
    },
    
    {
        image:<FaBootstrap/>,
        name:"Bootstrap",
        id:"10"
    },
    {
        image:<FaSass/>,
        name:"Sass",
        id:"11"
    },
    {
        image:<DiScrum/>,
        name:"Scrum",
        id:"12"
    }
    
    
    
]
const Skills = () => {
  return (
      <div className="skills" id="skills-section">
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12" >
                <div className="titleSkill">
                        <h1>Skills</h1>
                    </div>
                
                    
                    <div className="order">
                    {data.map(item => (

                    <ul key={item.id}>
                        <div className="imageContainer">
                        
                        
                            <span className="icon"> {item.image} </span>
                            <span className="paraSkill">{item.name} </span>
                            
                            
                    </div>
                    
                    </ul>
                    
                    ))}

                </div>  
                </div>
        </div>
      </div>
      </div>
     
  )
};

export default Skills;
