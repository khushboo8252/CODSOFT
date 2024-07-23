import React,{useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] =useState(false);
  return (
    <nav className='navbar'>
        <img className='logo' src='https://i.pinimg.com/originals/31/cd/58/31cd588617453838f221c9a5030fe126.png' alt='logo'/>
        <div className='desktopMenu'>
             <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Home</Link>
             <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Project</Link>
             <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">About</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
  document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' });
}}>
  <img className='desktopMenuImg' src='https://cdn-icons-png.flaticon.com/128/15626/15626835.png' alt='contact-logo'/>
  Contact Me
</button>

<img className='mobMenu' src='https://www.freeiconspng.com/uploads/menu-icon-15.png' alt='Menu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? "flex" : "none" }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="list" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="list" onClick={() => setShowMenu(false)}>Project</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="list" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="list" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>


    </nav>
  )
}

export default Navbar;