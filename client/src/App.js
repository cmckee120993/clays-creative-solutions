// react app imports
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// full app styling
import './App.css';

// components for the full site
import Footer from './components/footer';
import Header from './components/header';

// pages for full site
import Home from './site-pages/Home.js';
import About from './site-pages/About.js';
// import Blog from './site-pages/Blog.js';
import Contact from './site-pages/Contact.js';
import Resume from './site-pages/Resume.js';
// import Login from './site-pages/Login.js';
// import Signup from './site-pages/Signup.js';
// import Admin from './site-pages/Admin.js';
// import Post from './site-pages/Post.js';

// import Create from './admin-pages/create/index.js';

// pages for developer part of site
import Developer from './developer-pages/DevHome';
import DevPortfolio from './developer-pages/DevPortfolio';
import DevRates from './developer-pages/DevRates';

// pages for translation/editing part of site
import Translation from './language-pages/LangHome';
import TransRates from './language-pages/LangRates';


// french translation pages
import TranslationFr from './language-pages-fr/LangHomeFr';
import TransRatesFr from './language-pages-fr/LangRatesFr';

// French developer pages
import DeveloperFr from './developer-pages-fr/DevHomeFr';
import DevPortfolioFr from './developer-pages-fr/DevPortfolioFr';
import DevRatesFr from './developer-pages-fr/DevRatesFr';

// French site pages
import Contactez from './site-pages-fr/Contactez.js';
import CV from './site-pages-fr/CV.js';
import Acceuil from './site-pages-fr/Acceuil.js';
import Moi from './site-pages-fr/Moi.js';
// import Article from './site-pages-fr/Article.js';

const httpLink = createHttpLink ({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <div id='page-wrap'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* <Route path='/admin' element={<Admin />} /> */}
              {/* <Route path='/admin/create' element={<Create />} /> */}
              {/* <Route path='/blog' element={<Blog />} /> */}
              {/* <Route path='/fr/blog' element={<Article />} /> */}
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
              <Route path='/language' element={<Translation />} />
              <Route path='/language-rates' element={<TransRates />} />
              <Route path='/fr/language-rates' element={<TransRatesFr />} />
              <Route path='/fr/language' element={<TranslationFr />} />
              {/* <Route path='/login' element={<Login />} /> */}
              {/* <Route path='/signup' element={<Signup />} /> */}
              {/* <Route path='/post/:id' element={<Post />} /> */}
            </Routes>
            <Footer />
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
