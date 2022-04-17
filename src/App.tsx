import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
// Components
import GlobalStyle from './components/Theme/GlobalStyle';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import MyModels from './pages/MyModels';
import MyProjects from './pages/MyProjects';
import ForSale from './pages/ForSale';
import Contact from './pages/Contact';
import ScrollTopButton from './components/Scroll/ScrollTopButtom';
import Footer from './components/Footer';
// Style
import './App.css';
// Animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showButtonTop, setShowButtonTop] = useState<boolean>(false)
  const location = useLocation()

  useScrollPosition(({currPos}) => {
    if(-currPos.y > 300) {
      setShowButtonTop(true)
    } else {
      setShowButtonTop(false)
    }
  })

  return (
    <div className="App">
      <GlobalStyle />

      <Header />
      <Navigation />
      
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/articles' element={ <Articles /> } />
          <Route path='/my_models' element={ <MyModels /> } />
          <Route path='/my_projects' element={ <MyProjects /> } />
          <Route path='/for_sale' element={ <ForSale /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </AnimatePresence>

      <AnimatePresence>
        {showButtonTop && <ScrollTopButton /> }
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
