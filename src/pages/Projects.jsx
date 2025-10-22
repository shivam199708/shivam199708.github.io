import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Chat Assistance for Live Agents",
      description: "Open-source chatbot using Sentence-BERT embeddings and semantic search. Built with Streamlit, FAISS, and GitHub Actions, deployed on Streamlit Cloud.",
      longDescription: "This project implements an intelligent chatbot system that helps live agents by providing instant, contextually relevant responses to customer queries. The system uses advanced NLP techniques including Sentence-BERT for semantic understanding and FAISS for efficient similarity search across large knowledge bases.",
      tech: ["Python", "Streamlit", "FAISS", "BERT", "NLP", "GitHub Actions"],
      github: "https://github.com/shivam199708/Chat-Agent",
      demo: "https://chat-agent-demo.streamlit.app",
      image: "/images/chat-agent.png",
      featured: true,
      category: "Machine Learning"
    },
    {
      title: "Predictive Modeling for Retail",
      description: "Predictive solution for demand forecasting and inventory optimization. Suggested enhancements to reduce stockouts and support revenue growth.",
      longDescription: "A comprehensive machine learning solution designed for retail businesses to optimize their inventory management. The system predicts demand patterns, identifies potential stockouts, and provides actionable insights for inventory optimization.",
      tech: ["Python", "Machine Learning", "GCP", "SQL", "Pandas", "Scikit-learn"],
      github: "https://github.com/shivam199708/Predicting-Sleep-Qaulity-using-Machine-learning-",
      demo: null,
      image: "/images/retail-ml.png",
      featured: true,
      category: "Data Science"
    },
    {
      title: "Churn Prediction ML Model",
      description: "Identifies at-risk customers for targeted retention strategies, improving marketing efficiency and customer lifetime value.",
      longDescription: "An end-to-end machine learning pipeline for customer churn prediction. The model analyzes customer behavior patterns and predicts the likelihood of churn, enabling businesses to implement proactive retention strategies.",
      tech: ["Python", "Machine Learning", "GCP", "Docker", "MLOps", "BigQuery"],
      github: "https://github.com/shivam199708/churn-Prediction-GCP",
      demo: null,
      image: "/images/churn-prediction.png",
      featured: true,
      category: "Machine Learning"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence and data visualization using modern web technologies.",
      longDescription: "A comprehensive analytics dashboard that provides real-time insights into business metrics. Features interactive visualizations, automated reporting, and customizable widgets for different stakeholders.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/shivam199708/analytics-dashboard",
      demo: "https://analytics-demo.vercel.app",
      image: "/images/analytics-dashboard.png",
      featured: false,
      category: "Web Development"
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "Automated CI/CD pipeline for machine learning model deployment with monitoring and versioning.",
      longDescription: "A robust MLOps pipeline that automates the entire machine learning model lifecycle from training to production deployment. Includes model versioning, A/B testing, and performance monitoring.",
      tech: ["Python", "Docker", "Kubernetes", "MLflow", "Prometheus", "Grafana"],
      github: "https://github.com/shivam199708/ml-pipeline",
      demo: null,
      image: "/images/ml-pipeline.png",
      featured: false,
      category: "MLOps"
    },
    {
      title: "Real-time Data Processing",
      description: "Stream processing system for real-time analytics and event-driven architecture.",
      longDescription: "A high-performance stream processing system built for real-time data analytics. Handles millions of events per second with low latency and provides real-time insights for business decision making.",
      tech: ["Apache Kafka", "Apache Spark", "Python", "Redis", "GCP", "Docker"],
      github: "https://github.com/shivam199708/stream-processing",
      demo: null,
      image: "/images/stream-processing.png",
      featured: false,
      category: "Big Data"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "Web Development", "MLOps", "Big Data"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="projects">
      <motion.section 
        className="projects-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="projects-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1 variants={itemVariants}>My Projects</motion.h1>
            <motion.p variants={itemVariants} className="projects-intro">
              A collection of my work showcasing expertise in machine learning, data science, 
              and cloud technologies. Each project represents a unique challenge and innovative solution.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="projects-grid-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="project-category">{project.category}</div>
                  {project.featured && <div className="featured-badge">Featured</div>}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
