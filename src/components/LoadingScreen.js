import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiCode, FiHeart } from 'react-icons/fi';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Logo = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
`;

const LoadingText = styled(motion.p)`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 2rem;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: #666;
  font-size: 0.9rem;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <Logo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ALDE
      </Logo>
      
      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading Portfolio...
      </LoadingText>
      
      <LoadingBar>
        <LoadingProgress
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </LoadingBar>
      
      <IconContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <FiCode />
        <span>Made with</span>
        <FiHeart style={{ color: '#e74c3c' }} />
        <span>by Alde</span>
      </IconContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen;

