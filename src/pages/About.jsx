import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    {
      category: "Programming & ML",
      icon: <FaCode />,
      skills: ["Python", "PyTorch", "Machine Learning", "NLP", "Regression", "Predictive Models", "Feature Engineering"]
    },
    {
      category: "Data & Analytics", 
      icon: <FaDatabase />,
      skills: ["SQL", "BigQuery", "Pandas", "Excel", "Statistics", "Mathematics", "Data Modeling", "Data Analytics"]
    },
    {
      category: "Cloud & Big Data",
      icon: <FaCloud />,
      skills: ["GCP", "Vertex AI", "Big Data", "MLOps", "Cloud Storage", "AutoML"]
    },
    {
      category: "Tools & Workflow",
      icon: <FaTools />,
      skills: ["Git & GitHub", "CI/CD", "ETL", "Docker", "Streamlit", "Jupyter"]
    }
  ];

  const experience = [
    {
      title: "Machine Learning Engineer",
      period: "2023 - Present",
      description: "Developing end-to-end ML solutions, building intelligent chatbots, and implementing predictive models for business intelligence. Specializing in NLP, cloud deployment, and MLOps practices."
    },
    {
      title: "Data Science Projects",
      period: "2022 - 2023", 
      description: "Worked on various data science projects including churn prediction, demand forecasting, and customer analytics. Gained expertise in Python, SQL, and cloud platforms."
    },
    {
      title: "Learning & Development",
      period: "2020 - 2022",
      description: "Intensive learning phase focusing on machine learning fundamentals, programming in Python, and understanding cloud computing platforms. Built foundational projects and contributed to open-source initiatives."
    }
  ];

  const interests = [
    {
      icon: <FaRocket />,
      title: "AI Research",
      description: "Exploring cutting-edge AI technologies and staying updated with the latest research papers and developments."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Passionate about creating innovative solutions that solve real-world problems using machine learning."
    },
    {
      icon: <FaCode />,
      title: "Open Source",
      description: "Contributing to open-source projects and building tools that benefit the developer community."
    }
  ];

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
    <div className="about">
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-text" variants={itemVariants}>
              <h1>About Me</h1>
              <p className="about-intro">
                Hey 👋 I am a Machine Learning Engineer currently based in the United States. 
                I absolutely love all things to do with AI, machine learning, and transforming 
                complex data into actionable insights.
              </p>
              <p>
                My journey in machine learning began with a passion for solving complex problems 
                using data-driven approaches. I specialize in building end-to-end ML solutions, 
                from data preprocessing to model deployment on cloud platforms.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest AI research papers, 
                contributing to open-source projects, or working on innovative ML solutions 
                that make a real impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="skills-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 variants={itemVariants}>Technical Expertise</motion.h2>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
          >
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skillGroup.icon}</div>
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="skill-list">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="timeline-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 variants={itemVariants}>Professional Journey</motion.h2>
          <motion.div 
            className="timeline"
            variants={containerVariants}
          >
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <div className="timeline-date">{exp.period}</div>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="interests-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 variants={itemVariants}>Personal Interests</motion.h2>
          <motion.div 
            className="interests-grid"
            variants={containerVariants}
          >
            {interests.map((interest, index) => (
              <motion.div 
                key={index}
                className="interest-item"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
