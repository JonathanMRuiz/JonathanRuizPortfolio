import React from 'react';
import './cartucho.scss'


const data = [
    {
        id:"1",
        title:"Game NFT",
        description:"It is a Blockchain project, in which I was in charge of doing the front-end design. In this application use Bootstrap and Node SASS for styles. It has a responsive design for mobile and tablet.",
        img: "images/last.jpg",
        link:"https://lastlegacy.io/"
    },
    {
        id:"2",
        title:"Coingecko API",
        description:"Use the api of the coingecko cryptocurrency page, has a a grid created with bootstrap classes with a filter to find the currency you want",
        img:'images/coingecko.jpg',
        link:"https://coingecko-api-six.vercel.app/"
    },
    {
        id:"3",
        title:"Food Store",
        description:"This app contains the use of styled component for styling, Material UI for icons, routing with react-router-dom.",
        img:'images/milanesas.jpg',
        link:"https://food-store-five.vercel.app/"
    },
    
]
const Casette = () => {
  return (
    
    <>
    {data.map(item=>(
      
    <div className="col-12 col-sm-12 col-md-12" key={item.id}>
    <div className="cartridge">
       
    <div className="part part_1"></div>
    <div className="part part_2">
      <div className="part stripe"></div>
      <div className="part stripe"></div>
      <div className="part stripe"></div>
      <div className="part stripe"></div>
      <div className="part stripe"></div>
    </div>
    <div className="part logo"><p>Nintendo <span>Gameboy</span></p></div>
    <div className="part large"></div>
    <div className="part dark">
      <div className="part"></div>
    </div>
    <div className="part dark image_bg">
      
        <div className="part image">
            <img src={item.img} alt=".." key={item}/>
        </div>
        
      
    </div>
    
    <div className="part triangle"></div>

    <div className="description">

    <div className=" is-centered">
        
        
        
    </div>

   
 

    <div className="nes-container  is-rounded">
      <p>{item.title}</p>
      <span>{item.description}</span>
      <a href={item.link} target="_blank" rel="noreferrer"><span>To Visit</span></a>
     
    </div>
    
    
    
    <span></span>
    </div>
  </div>
  </div>

    ))}
    </>
  );
};

export default Casette;
