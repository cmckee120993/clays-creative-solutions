// react app imports
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// full app styling
import './App.css';

// components for the full site
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';

// pages for full site
import Home from './site-pages/Home.js';
import About from './site-pages/About.js';
// import Blog from './site-pages/Blog.js';
import Contact from './site-pages/Contact.js';
import Resume from './site-pages/Resume.js';

// pages for developer part of site
import Developer from './developer-pages/DevHome';
import DevPortfolio from './developer-pages/DevPortfolio';
import DevRates from './developer-pages/DevRates';

// pages for translation/editing part of site
import Translation from './translation-pages/TransHome';
import TransRates from './translation-pages/TransRates';


// french pages
import TranslationFr from './translation-pages-fr/TransHomeFr';
import TransRatesFr from './translation-pages-fr/TransRatesFr';
import DeveloperFr from './developer-pages-fr/DevHomeFr';
import DevPortfolioFr from './developer-pages-fr/DevPortfolioFr';
import DevRatesFr from './developer-pages-fr/DevRatesFr';
import Contactez from './site-pages/Contactez.js';
import CV from './site-pages/CV.js';
import Acceuil from './site-pages/Acceuil.js';
import Moi from './site-pages/Moi.js';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/articles' element={<Blog />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/fr' element={<Acceuil />} />
          <Route path='/fr/about' element={<Moi />} />
          <Route path='/fr/contact' element={<Contactez />} />
          <Route path='/fr/resume' element={<CV />} />
          <Route path='/development' element={<Developer />} />
          <Route path='/development-portfolio' element={<DevPortfolio />} />
          <Route path='/development-rates' element={<DevRates />} />
          <Route path='/fr/development' element={<DeveloperFr />} />
          <Route path='/fr/development-portfolio' element={<DevPortfolioFr />} />
          <Route path='/fr/development-rates' element={<DevRatesFr />} />
          <Route path='/translation' element={<Translation />} />
          <Route path='/translation-rates' element={<TransRates />} />
          <Route path='/fr/translation-rates' element={<TransRatesFr />} />
          <Route path='/fr/translation' element={<TranslationFr />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
