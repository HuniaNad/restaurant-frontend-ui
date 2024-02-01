import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavor"/>
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolorum hic eius sit illo veniam voluptatem eum accusantium molestias minima, inventore ab quos. Ea, dolore?</p>
        <button type='button' className='custom__button'>Explore Menu</button>

      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
}

export default Header;
