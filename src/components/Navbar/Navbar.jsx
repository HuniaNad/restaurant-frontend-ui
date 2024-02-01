import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const menuLinks = React.useMemo(() => [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ], []);
  

  const handleToggleMenu = (flag) => {
    setToggleMenu(flag);
  }

  return (
    <nav className='app__navbar'> 
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      
      <ul className='app__navbar-links'>
        { menuLinks.map((link) => (
          <NavbarItem key={link.label} href={link.href} label={link.label} />
        )) }
      </ul>

      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => handleToggleMenu(true)} />
          
        { toggleMenu && 
          (<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => handleToggleMenu(false)} />

            <ul className='app__navbar-smallscreen_links'>
            { menuLinks.map((link) => (
              <NavbarItem key={link.label} href={link.href} label={link.label} handleToggleMenu={handleToggleMenu} />
            )) }
            </ul>
          </div>)
        }

      </div>
    </nav>
  )
};

export default Navbar;
