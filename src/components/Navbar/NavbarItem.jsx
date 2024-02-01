import React from 'react'

import './Navbar.css'

const NavbarItem = ({ href, label, handleToggleMenu }) => {
  return (
    <li className='p__opensans'>
        <a href={href} onClick={() => {handleToggleMenu && handleToggleMenu(false)}}>{label}</a>
    </li>
  )
}

export default NavbarItem
