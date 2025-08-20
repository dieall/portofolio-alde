import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import styled from 'styled-components';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
  z-index: 0;
`;

const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
`;

const CursorGlow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    rgba(102, 126, 234, 0.25) 0%,
    rgba(118, 75, 162, 0.15) 40%,
    transparent 70%
  );
  filter: blur(20px);
  mix-blend-mode: screen;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-3px);
  }
`;

const VisualContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CodeBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const CodeLine = styled.div`
  color: ${props => props.color || '#fff'};
  margin-bottom: 0.5rem;
`;

const TypewriterWrapper = styled.div`
  white-space: pre;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  cursor: pointer;
  z-index: 2;
`;

const Hero = ({ onSectionChange }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Cursor-follow glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });
  const glowLeft = useTransform(springX, (x) => x - 150);
  const glowTop = useTransform(springY, (y) => y - 150);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Typewriter for code block
  const codeLines = [
    "const developer = {",
    "  name: 'Alde',",
    "  role: 'Developer',",
    "  passion: 'Creating amazing experiences'",
    "}" 
  ];
  const [typedLines, setTypedLines] = useState(codeLines.map(() => ""));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeedMs = 35;

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    const interval = setInterval(() => {
      const current = codeLines[lineIndex];
      const nextCharIndex = charIndex + 1;
      const updated = [...typedLines];
      updated[lineIndex] = current.slice(0, nextCharIndex);
      setTypedLines(updated);

      if (nextCharIndex >= current.length) {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setCharIndex(nextCharIndex);
      }
    }, typingSpeedMs);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex, codeLines, typedLines]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange('about');
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <HeroSection ref={containerRef} id="home">
      <CursorGlow style={{ x: glowLeft, y: glowTop }} />
      <BackgroundGradient />
      
      <FloatingParticles>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </FloatingParticles>

      <Content>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            👋 Hello, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Alde
          </Name>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creative Developer & Designer
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative design, and cutting-edge technologies.
          </Description>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CTAButton
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </CTAButton>
          </motion.div>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTwitter />
            </SocialLink>
          </SocialLinks>
        </TextContent>

        <VisualContent>
          <CodeBlock
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterWrapper>
              {typedLines.map((line, idx) => (
                <div key={idx}>
                  {line}
                  {lineIndex === idx && (
                    <motion.span
                      style={{ marginLeft: 2 }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </div>
              ))}
            </TypewriterWrapper>
          </CodeBlock>
        </VisualContent>
      </Content>

      <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ y: 5 }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
