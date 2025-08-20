import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FooterText = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuickLink = styled(motion.li)`
  margin-bottom: 0.8rem;
`;

const QuickLinkItem = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #ccc;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  color: #667eea;
  font-size: 1.1rem;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 2rem 0;
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ScrollToTop = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <BackgroundPattern />
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>ALDE</FooterTitle>
            <FooterText>
              A passionate developer dedicated to creating innovative digital solutions. 
              Let's build something amazing together and bring your ideas to life.
            </FooterText>
            <SocialLinks>
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
              <SocialLink
                href="mailto:alde@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#home">Home</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#about">About</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#skills">Skills</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#projects">Projects</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#contact">Contact</QuickLinkItem>
              </QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <QuickLinks>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#projects">Web Development</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#projects">Mobile Apps</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#projects">UI/UX Design</QuickLinkItem>
              </QuickLink>
              <QuickLink
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <QuickLinkItem href="#projects">Consulting</QuickLinkItem>
              </QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon><FiMail /></ContactIcon>
                <span>alde@example.com</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon><FiPhone /></ContactIcon>
                <span>+62 812-3456-7890</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon><FiMapPin /></ContactIcon>
                <span>Jakarta, Indonesia</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <Divider />

        <BottomFooter>
          <Copyright>
            <span>© {currentYear} Alde. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart style={{ color: '#e74c3c' }} />
            </motion.div>
            <span>in Indonesia</span>
          </Copyright>
          
          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </ScrollToTop>
        </BottomFooter>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
