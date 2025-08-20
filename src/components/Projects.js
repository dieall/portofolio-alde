import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiExternalLink, FiGithub, FiEye, FiCode, FiSmartphone, FiMonitor } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? '#fff' : '#888'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.1)'};
    color: #fff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-2px);
  }
`;

const Projects = ({ onSectionChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      category: 'web',
      tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'web'
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness goals with beautiful UI and comprehensive analytics.',
      image: '💪',
      category: 'mobile',
      tags: ['React Native', 'Redux', 'Firebase', 'Charts'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'mobile'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations, responsive design, and interactive elements showcasing creative work.',
      image: '🎨',
      category: 'web',
      tags: ['React', 'Framer Motion', 'Styled Components'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'web'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather dashboard with real-time data, interactive maps, and detailed forecasts using multiple weather APIs.',
      image: '🌤️',
      category: 'web',
      tags: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'web'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and content management.',
      image: '📊',
      category: 'web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Social APIs'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      type: 'web'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FiCode /> },
    { id: 'web', label: 'Web Apps', icon: <FiMonitor /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            A showcase of my recent work and creative solutions
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon} {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <ProjectImage>
                  {project.image}
                  <ProjectOverlay
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </ProjectLink>
                    <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </ProjectLink>
                  </ProjectOverlay>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTags>
                    {project.tags.map((tag) => (
                      <ProjectTag key={tag}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                  
                  <ProjectLinks>
                    <ProjectButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FiEye /> Live Demo
                    </ProjectButton>
                    <ProjectButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </ProjectButton>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

