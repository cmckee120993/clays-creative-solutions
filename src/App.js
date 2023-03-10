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
// pages for translation/editing part of site

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
          <Route path='/development' element={<Developer />} />
          <Route path='/development-portfolio' element={<DevPortfolio />} />
          <Route path='/development-rates' element={<DevRates />} />
          <Route path='/translation' element={<Translation />} />
          <Route path='/translation-rates' element={<TransRates />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
