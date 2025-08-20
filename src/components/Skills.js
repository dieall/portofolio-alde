import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FiCode, 
  FiDatabase, 
  FiSmartphone, 
  FiMonitor,
  FiLayers,
  FiZap
} from 'react-icons/fi';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  color: #fff;
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  color: #667eea;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #667eea;
`;

const TechName = styled.div`
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TechLevel = styled.div`
  color: #888;
  font-size: 0.9rem;
`;

const Skills = ({ onSectionChange }) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiMonitor />,
      skills: [
        { name: 'React.js', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'TypeScript', percentage: 85 },
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'Next.js', percentage: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiCode />,
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Python', percentage: 80 },
        { name: 'Express.js', percentage: 90 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'PostgreSQL', percentage: 70 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FiSmartphone />,
      skills: [
        { name: 'React Native', percentage: 80 },
        { name: 'Flutter', percentage: 70 },
        { name: 'Mobile UI/UX', percentage: 85 },
        { name: 'App Store Deployment', percentage: 75 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: <FiLayers />,
      skills: [
        { name: 'Figma', percentage: 90 },
        { name: 'Adobe XD', percentage: 85 },
        { name: 'Photoshop', percentage: 75 },
        { name: 'Git/GitHub', percentage: 95 },
        { name: 'Docker', percentage: 70 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', level: 'Expert' },
    { name: 'Node.js', icon: '🟢', level: 'Advanced' },
    { name: 'TypeScript', icon: '🔷', level: 'Advanced' },
    { name: 'Python', icon: '🐍', level: 'Intermediate' },
    { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
    { name: 'Docker', icon: '🐳', level: 'Intermediate' },
    { name: 'AWS', icon: '☁️', level: 'Basic' },
    { name: 'Figma', icon: '🎨', level: 'Advanced' }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SectionSubtitle>
            My technical skills and proficiency levels across various technologies
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skill.name}>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.percentage}%</SkillPercentage>
                    </SkillHeader>
                    <ProgressBar>
                      <ProgressFill
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            Technologies I Work With
          </SectionTitle>
          
          <TechnologiesGrid>
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
                <TechLevel>{tech.level}</TechLevel>
              </TechCard>
            ))}
          </TechnologiesGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;

