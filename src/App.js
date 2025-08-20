import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const MainContent = styled(motion.main)`
  position: relative;
  z-index: 1;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppContainer>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar currentSection={currentSection} onSectionChange={handleSectionChange} />
          
          <MainContent>
            <Hero onSectionChange={handleSectionChange} />
            <About onSectionChange={handleSectionChange} />
            <Skills onSectionChange={handleSectionChange} />
            <Projects onSectionChange={handleSectionChange} />
            <Contact onSectionChange={handleSectionChange} />
            <Footer />
          </MainContent>
        </motion.div>
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;

