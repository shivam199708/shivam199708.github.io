import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPhone } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ashivam1997@gmail.com",
      link: "mailto:ashivam1997@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (561) 299-6593",
      link: "tel:+15612996593"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "shiv0810",
      link: "https://www.linkedin.com/in/shiv0810/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "shivam199708",
      link: "https://github.com/shivam199708"
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      value: "cvamtiwar_i",
      link: "https://x.com/cvamtiwar_i"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in machine learning solutions, data analysis, cloud deployment, and end-to-end AI project development."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple ML models can take 2-4 weeks, while comprehensive solutions may require 2-3 months."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes! I enjoy working with startups and can provide flexible engagement models to fit your budget and timeline."
    },
    {
      question: "What's your preferred tech stack?",
      answer: "Python for ML/AI, Google Cloud Platform for deployment, SQL for data management, and modern web technologies for interfaces."
    }
  ];

  return (
    <div className="contact">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-intro"
          >
            Let's discuss your next ML project or just say hello!
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Me a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Contact Information</h2>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <h3>Connect With Me</h3>
                <div className="social-grid">
                  {contactInfo.slice(2).map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.section 
            className="faq-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
