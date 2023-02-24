import React from "react";
import "./style.css";
import { slide as Menu } from 'react-burger-menu';
import circleLogo from '../../images/clays-circle-logo.webp';

export default function Nav() {

  return (
    <Menu>
      <a className='nav-link' href='/'><h2>Home</h2></a>
      <ul className='first-list'>
          <li>
            <a className='nav-link' href='/development'><h2>Web Marketing</h2></a>
          </li>
        <ul className='second-list'>
          <li>
            <a className='nav-link' href='/development-portfolio'><h2>Portfolio</h2></a>
          </li>
          <li>
            <a className='nav-link' href='/development-rates'><h2>Rates and Services</h2></a>
          </li>
          <li>
            {/* <a className='nav-link' href='/development-articles'><h2>Articles</h2></a> */}
          </li>
        </ul>
      </ul> 
      {/* <ul className='first-list'>
          <li>
              <a className='nav-link' href='/translation'><h2>Translating and Writing</h2></a>
          </li>
          <ul className='second-list'>
              <li>
                  <a className='nav-link' href='/translation-portfolio'><h2>Portfolio</h2></a>
              </li>
              <li>
                  <a className='nav-link' href='/translation-rates'><h2>Rates and Services</h2></a>
              </li>
              <li>
                  <a className='nav-link' href='/translation-articles'><h2>Articles</h2></a>
              </li>
          </ul>
      </ul>             */}
      <a className='nav-link' href='/resume'><h2>Résumé</h2></a>
      {/* <a className='nav-link' href='/blog'><h2>Articles</h2></a> */}
      <a className='nav-link' href='/contact'><h2>Contact</h2></a>
      <a className='nav-link' href='/about'><h2>About</h2></a>
      <div className='nav-logo-div'>
        <img
          src={circleLogo}
          alt="Clay's Creative Solutions Mini Logo"
          className='nav-logo'
        />
      </div>
    </Menu>
  );
}
