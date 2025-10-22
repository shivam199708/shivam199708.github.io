import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';
import Typewriter from '../components/Typewriter';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home">
      <ParticleBackground />
      
      <motion.section 
        ref={heroRef}
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-left"
              variants={itemVariants}
            >
              <motion.div 
                className="hero-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/images/shivam.jpg" alt="Shivam Tiwari" />
                <div className="image-glow"></div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-right"
              variants={itemVariants}
            >
              <motion.h1 
                className="hero-title"
                variants={itemVariants}
              >
                <span className="greeting">Hello, I'm</span>
                <span className="name">Shivam Tiwari</span>
              </motion.h1>

              <motion.div 
                className="hero-subtitle"
                variants={itemVariants}
              >
                <Typewriter 
                  texts={[
                    "Machine Learning Engineer",
                    "Cloud Solutions Architect", 
                    "AI/ML Solutions Developer",
                    "Data Science Enthusiast"
                  ]}
                  speed={100}
                  deleteSpeed={50}
                  delay={2000}
                />
              </motion.div>

              <motion.p 
                className="hero-description"
                variants={itemVariants}
              >
                Passionate about transforming complex data into actionable insights through AI/ML solutions. 
                Specializing in GCP, Python, SQL, and end-to-end AI deployment.
              </motion.p>

              <motion.div 
                className="hero-actions"
                variants={itemVariants}
              >
                <motion.a 
                  href="/ML_Github_Website.pdf" 
                  target="_blank" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download Resume
                </motion.a>
                
                <motion.button 
                  className="btn btn-secondary"
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </motion.div>

              <motion.div 
                className="social-links"
                variants={itemVariants}
              >
                <motion.a 
                  href="mailto:ashivam1997@gmail.com"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/shiv0810/" 
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://github.com/shivam199708" 
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://x.com/cvamtiwar_i" 
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="scroll-indicator"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="projects"
        className="projects-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            {[
              {
                title: "Chat Assistance for Live Agents",
                description: "Open-source chatbot using Sentence-BERT embeddings and semantic search.",
                tech: ["Python", "Streamlit", "FAISS", "BERT"],
                link: "https://github.com/shivam199708/Chat-Agent",
                featured: true
              },
              {
                title: "Predictive Modeling for Retail",
                description: "Predictive solution for demand forecasting and inventory optimization.",
                tech: ["Python", "ML", "GCP", "SQL"],
                link: "https://github.com/shivam199708/Predicting-Sleep-Qaulity-using-Machine-learning-",
                featured: true
              },
              {
                title: "Churn Prediction ML Model",
                description: "Identifies at-risk customers for targeted retention strategies.",
                tech: ["Python", "ML", "GCP", "Docker"],
                link: "https://github.com/shivam199708/churn-Prediction-GCP",
                featured: true
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" className="project-link">
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="projects-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
