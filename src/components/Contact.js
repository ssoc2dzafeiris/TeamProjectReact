import React from 'react';

import '../styles/contact.css';
export default function Contact (){

    return (
        <section class="formcarry-container">
        <form action="#" method="POST" enctype="multipart/form-data">
    
            <div class="formcarry-block">
              <label for="fc-generated-1-name">Full Name</label>
              <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
            </div>
  	
            <div class="formcarry-block">
              <label for="fc-generated-1-email">Your Email Address</label>
              <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
            </div>
  	
            <div class="formcarry-block">
              <label for="fc-generated-1-message">Your message</label>
              <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
            </div>
  	
            <div class="formcarry-block">  
              <button type="submit">Send</button>
            </div>
            </form>
            </section>

)
}