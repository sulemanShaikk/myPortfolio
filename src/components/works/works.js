import React from 'react';
import "./works.css";
import portfolio1 from '../../assests/portfolio1.webp';
import portfolio2 from '../../assests/portfolio2.webp';
import portfolio3 from '../../assests/portfolio3.png';
import portfolio4 from '../../assests/portfoloio.png';
import portfolio5 from '../../assests/portfolio5.png';
import portfolio6 from '../../assests/portfolio0.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'>"Aspiring software engineer dedicated to creating elegant and efficient applications. My expertise lies in front-end and back-end development, offering a unique blend of creativity and technical proficiency for impactful digital solutions."</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt='' className='worksImg'/>
            <img src={portfolio2} alt='' className='worksImg'/>
            <img src={portfolio3} alt='' className='worksImg'/>
            <img src={portfolio4} alt='' className='worksImg'/>
            <img src={portfolio5} alt='' className='worksImg'/>
            <img src={portfolio6} alt='' className='worksImg'/>
        </div>
       <button className='workBtn'>
           See More
       </button>
    </section>
  )
}

export default Works