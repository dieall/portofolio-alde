import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiUser, FiAward, FiBriefcase, FiMapPin } from 'react-icons/fi';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #888;
  max-width: 600px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #667eea;
`;

const TextContent = styled.div``;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SkillsPreview = styled.div`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillTag = styled(motion.span)`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const About = ({ onSectionChange }) => {
  const stats = [
    { icon: <FiBriefcase />, number: '3+', label: 'Years Experience' },
    { icon: <FiAward />, number: '50+', label: 'Projects Completed' },
    { icon: <FiUser />, number: '30+', label: 'Happy Clients' },
    { icon: <FiMapPin />, number: '5+', label: 'Countries Served' }
  ];

  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design', 'Figma', 'Git'];

  const floatingElements = [
    { id: 1, x: '10%', y: '20%', icon: '⚡' },
    { id: 2, x: '80%', y: '30%', icon: '🎨' },
    { id: 3, x: '20%', y: '80%', icon: '💻' },
    { id: 4, x: '70%', y: '70%', icon: '🚀' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Passionate developer with a love for creating innovative digital solutions
          </SectionSubtitle>
        </SectionHeader>

        <Content>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfileImage>
              <ImagePlaceholder>ALDE</ImagePlaceholder>
            </ProfileImage>
            
            <FloatingElements>
              {floatingElements.map((element) => (
                <FloatingElement
                  key={element.id}
                  style={{
                    left: element.x,
                    top: element.y
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: element.id * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {element.icon}
                </FloatingElement>
              ))}
            </FloatingElements>
          </ImageContainer>

          <TextContent>
            <AboutText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a passionate and creative developer with over 3 years of experience in building 
              modern web applications. My journey in technology started with curiosity and has 
              evolved into a deep passion for creating meaningful digital experiences.
            </AboutText>
            
            <AboutText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I specialize in React, JavaScript, and modern web technologies. I believe in writing 
              clean, maintainable code and creating user-centered designs that solve real problems. 
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge with the developer community.
            </AboutText>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>

            <SkillsPreview
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <SkillsTitle>Key Skills</SkillsTitle>
              <SkillsList>
                {skills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </SkillsPreview>
          </TextContent>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;

