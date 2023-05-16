import React from "react";
import "./style.css";
import { slide as Menu } from 'react-burger-menu';
import circleLogo from '../../images/clays-circle-logo.webp';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';

export default function Nav() {

  const { data } = useQuery(GET_USER);
  let user;
  if(data) {
    user = data.user;
  };

  console.log(user);


  function showNavigation() {
    if(Auth.loggedIn()) {
      return(
        <>
          <a className='nav-link' onClick={() => Auth.logout()} href='/'>
            <h2>Logout</h2>
          </a>
        </>
      )
    } else {
      return(
        <>
          <a className='nav-link' href='/signup'>
            <h2>Signup</h2>
          </a>
          <a className='nav-link' href='/login'>
            <h2>Login</h2>
          </a>
        </>
      )
    }
  };

  function userTypeNav() {
   if (user === undefined) {
    return (
      <>
      </>
    )
   }
    if (user.admin === false) {
      return (
      <></>
      )
    } else if (user.admin === true) {
      return(
        <>
          <a className='nav-link' href='/admin'>
            <h2>Admin Panel</h2>
          </a>
          <ul>
            <li>
              <a className='nav-link' href='/admin/create'>
                <h2>Create Post</h2>
              </a>
            </li>
          </ul>
      </>
      )
    }
  };

  let url = document.location.href;

  let frCheck = url.split('/', 4);

  if (frCheck[3] === 'fr') {
    return (
      <Menu>
        <a className='nav-link' href='/fr'><h2>Acceuil</h2></a>
        <ul className='first-list'>
            <li>
              <a className='nav-link' href='/fr/development'><h2>Sites et Webmarketing</h2></a>
            </li>
          <ul className='second-list'>
            <li>
              <a className='nav-link' href='/fr/development-portfolio'><h2>Dossier de développeur</h2></a>
            </li>
            <li>
              <a className='nav-link' href='/fr/development-rates'><h2>Les frais</h2></a>
            </li>
          </ul>
        </ul> 
        <ul className='first-list'>
            <li>
                <a className='nav-link' href='/fr/translation'><h2>Traduction et Révision</h2></a>
            </li>
            <ul className='second-list'>
                <li>
                    <a className='nav-link' href='/fr/translation-rates'><h2>Les frais</h2></a>
                </li>
            </ul>
        </ul>            
        <a className='nav-link' href='/fr/resume'><h2>CV</h2></a>
        <a className='nav-link' href='/fr/articles'><h2>Blog</h2></a>
        <a className='nav-link' href='/fr/contact'><h2>Me Contactez</h2></a>
        <a className='nav-link' href='/fr/about'><h2>Qui est Clayton?</h2></a>
        <br />
        <div className='nav-logo-div'>
          <img
            src={circleLogo}
            alt="Clay's Creative Solutions Mini Logo"
            className='nav-logo'
          />
        </div>
      </Menu>
    )
  } else {

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
        </ul>
      </ul> 
      <ul className='first-list'>
          <li>
              <a className='nav-link' href='/translation'><h2>Translating and Writing</h2></a>
          </li>
          <ul className='second-list'>
              <li>
                  <a className='nav-link' href='/translation-rates'><h2>Rates and Services</h2></a>
              </li>
          </ul>
      </ul>            
      <a className='nav-link' href='/resume'><h2>Résumé</h2></a>
      <a className='nav-link' href='/articles'><h2>Blog</h2></a>
      <a className='nav-link' href='/contact'><h2>Contact</h2></a>
      <a className='nav-link' href='/about'><h2>About</h2></a>
      {userTypeNav()}
      {showNavigation()}
      <div className='nav-logo-div'>
        <img
          src={circleLogo}
          alt="Clay's Creative Solutions Mini Logo"
          className='nav-logo'
        />
      </div>
    </Menu>
  )
};
}
