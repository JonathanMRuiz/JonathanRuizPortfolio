import '../Styles/Contact.scss'
import { send } from '@emailjs/browser';
import React, { useState } from 'react';
import swal from 'sweetalert'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  
    const sendEmail = (e) =>{
     
      e.preventDefault();
      send(
        
        'service_h48esit',
        'template_hv4g62d',
        {name, email, message},
        'user_w4ytvAFzwFah4Y0RELf3q'
      ).then(() =>{
        swal({ title: "Your message", text:"has been sent successfully", icon:"success", button:"Accept" } )
        
      })
      .catch((err)=>{
        alert('Failed ❌', err);
        
      });

      e.target.reset()
      
     
      
    }

  return (
    <div className="col-12 col-sm-12 col-md-12" id="contact-section">
      
      <div className="titleContact">
        <h1>Contact</h1>
      </div>
      
    <div className="contact">
      
      <form className="form" onSubmit={sendEmail}>

      <div className="nes-field">
        <label>Your name</label>
        <input type="text" id="name_field" className="nes-input" value={name} onChange={(e)=> setName(e.target.value)} required/>
      </div>
      <div className="nes-field">
        <label >Your email</label>
        <input type="email" id="email_field" className="nes-input" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      </div>
      <div className="nes-field">
      <label>Message</label>
      <textarea id="textarea_field" className="nes-textarea" value={message} onChange={(e)=> setMessage(e.target.value)}/>
      </div>
      <button type="submit" className="nes-btn is-success">Send Message</button>
    
    </form>

    

  
  </div>
  </div>
  );
};

export default Contact;
