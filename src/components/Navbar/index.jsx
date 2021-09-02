import React from 'react';
import logo from '../../assets/img/logo.svg';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';
import './styles.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <div className="logo">
          <li>
            <img src={logo} alt="Logo Chihiro" />
          </li>
        </div>

        <div className="socials">
          <li>
            <img src={facebook} alt="Facebook Logo" />
          </li>
          <li>
            <img src={instagram} alt="Instagram Logo" />
          </li>
          <li>
            <img src={twitter} alt="Twitter Logo" />
          </li>
          <li>
            <img src={youtube} alt="Youtube Logo" />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
