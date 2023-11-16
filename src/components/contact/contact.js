import React, { useRef } from 'react';
import "./contact.css";
import stack1 from '../../assests/s1.png';
import stack2 from '../../assests/s2.png';
import stack3 from '../../assests/s3.png';
import stack4 from '../../assests/s4.png';
import stack5 from '../../assests/s5.png';
import stack6 from '../../assests/s6.png';
import stack7 from '../../assests/s7.png';
import stack8 from '../../assests/s8.png';
import stack9 from '../../assests/s9.png';
import stack10 from '../../assests/s10.png';
import a1 from '../../assests/1.png';
import a2 from '../../assests/2.png';
import a3 from '../../assests/3.png';
import a4 from '../../assests/4.png';
import a5 from '../../assests/5.png';
import a6 from '../../assests/6.png';
import a7 from '../../assests/7.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2iur4ip', 'template_c6aht4i', form.current, 'IH_TI-Im9C4vpOP6_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Aapka mail pahunchgaya hai');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='contactPage'>
         <div id='clients'>
            <h1>
                Technologies & Tools
            </h1>
            <p>Below are tech stacks, tools & languages that am familiar with in my development journey</p>
           <div className='clientImgs'>
                <img src={stack1} alt='' className='pic'/>
                <img src={stack2} alt='' className='pic2'/>
                <img src={stack3} alt='' className='pic'/>
                <img src={stack4} alt='' className='pic'/>
                <img src={stack5} alt='' className='pic2'/>
                <img src={stack6} alt='' className='pic'/>
                <img src={stack7} alt='' className='pic'/>
                <img src={stack8} alt='' className='pic'/>
                <img src={stack9} alt='' className='pic'/>
                <img src={stack10} alt='' className='pic'/>
            </div>
       </div>   
         <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>
              Please fill out the form below to discuss about any opportunity 
            </span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name'  name='your_name'/>
                <input type='email' className='email'   placeholder='Your Email' name='your_email'/>
                <textarea className='msg'  rows="5" placeholder='Your message' name='message' />
                <button type='submit' value='send' className='submitbtn'>Submit</button>
            </form>
                <div className='socials'>
                <img  src={a1} alt='' className='Link'/>
                <img  src={a2} alt='' className='Link'/>
                <img  src={a3} alt='' className='Link'/>
                <img  src={a4} alt='' className='Link'/>
                <img  src={a5} alt='' className='Link'/>
                <img  src={a6} alt='' className='Link'/>
                <img  src={a7} alt='' className='Link'/>
                </div>
        </div> 
    </section>
  )
}

export default Contact;