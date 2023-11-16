import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assests/MyPic.png';
import btnImg from '../../assests/hireme.png';
import cvImg from '../../assests/Resume.png';

const Intro = () => {
  return (
    <section id='intro'> 
      <div className='intrContent'>
        <span className='hello'>Hello,</span>
        <span className='IntroText'>I'm <span className='introName'>SHAIK</span><br />MERN Stack developer</span>
        <p className='introPara'>As a developer, I design seamless web applications by Using MERN Stack and Next.js<br/>to deliver fast and user-centric solutions.</p>
        <div>
        <Link><button className='btn'  onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }} > <img src = {btnImg} alt='Hire me' style={{ width: '64px', height: '48px', border: 'none'}}/></button>
      </Link>
      <a href='/final_resume.docx' download>
          <button className='resume'>
            <img src={cvImg} alt='Download CV' style={{ width: '64px', height: '48px', border: 'none'}} />
          </button>
        </a>
        </div>
        
      </div>
      <img src={bg} alt="profile" className='Bg' /> 
    </section>
  );
}

export default Intro;
