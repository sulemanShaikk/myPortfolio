import React, {useState} from 'react';
import './navbar.css';
import logo from "../../assests/logo1.png";
import { Link } from 'react-scroll';
import Menu from "../../assests/hamburger-50.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className="logo" />
      <div className='desktopMenu'>
        <Link to="intro" spy={true} smooth={true} offset={-50} duration={100} activeClass='active' className='desktopMenuListItem'>Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-50} duration={100} activeClass='active' className='desktopMenuListItem'>Bio</Link>
        <Link to="works" spy={true} smooth={true} offset={-50} duration={100} activeClass='active' className='desktopMenuListItem'>Portfolio</Link>
        <Link to="clients" spy={true} smooth={true} offset={-50} duration={100} activeClass='active' className='desktopMenuListItem'>About</Link>
        </div>
      <button className='workBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        Connect with me
      </button>
      
      <img src={Menu} alt="menu" className="mobMenu" onClick={() =>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={100} activeClass='active' className='ListItem'   onClick={() =>setShowMenu(!false)}   >Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={100} activeClass='active' className='ListItem'  onClick={() =>setShowMenu(!false)}   >Bio</Link>
        <Link to="works" spy={true} smooth={true} offset={-100} duration={100} activeClass='active' className='ListItem'   onClick={() =>setShowMenu(!false)}   >Portfolio</Link>
        <Link to="clients" spy={true} smooth={true} offset={-100} duration={100} activeClass='active' className='ListItem' onClick={() =>setShowMenu(!false)}   >About</Link>
        <Link to="clients" spy={true} smooth={true} offset={-100} duration={100} activeClass='active' className='ListItem' onClick={() =>setShowMenu(!false)}   >Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
