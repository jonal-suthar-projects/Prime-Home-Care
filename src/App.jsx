import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  // Theme state management
  const [theme, setTheme] = useState('light');

  // Persist theme choice in localStorage
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  // --- UPDATED SCROLL LOGIC ---
  const location = useLocation();
  useEffect(() => {
    // Only scroll to top if there is NO hash (like #personal-care)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
}

export default App;