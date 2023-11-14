import React from 'react';
import uiUxImage from "../../assests/ui-ux.png";
import "./skills.css";




const Skills = () => {
    return (
      <section id='skills'>
        <span className='skillTitle'>WHO I AM ?</span>
        <span className='skillDesc'>Passionate software engineering graduate with a strong foundation in MERN and a keen interest in modern technologies. Eager to contribute enthusiasm and a commitment to a dynamic development team.</span>
        <div className='skillbars'>
          <div className='skillbar'>
            <img src={uiUxImage} alt='' className='skillbarImg' />
            <div className='skillbartext'>
              <h2>Front-end development</h2>
              <p>I specialize in creating visually appealing user interfaces, combining creativity  to enhance the user experience.</p>
            </div>
          </div>
          <div className='skillbar'>
            <img src={uiUxImage} alt='' className='skillbarImg' />
            <div className='skillbartext'>
              <h2>Web development</h2>
              <p>I design and build fast,user-friendly websites, in front-end and back-end technologies to deliver seamless online experiences.</p>
            </div>
          </div>
          <div className='skillbar'>
            <img src={uiUxImage} alt='' className='skillbarImg' />
            <div className='skillbartext'>
              <h2>Software engineering</h2>
              <p>, I develop efficient software solutions,Using my skills in coding, problem-solving, and a passion for innovation to  meet diverse user needs.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;