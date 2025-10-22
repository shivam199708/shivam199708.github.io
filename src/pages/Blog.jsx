import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Intelligent Chatbots with Modern NLP",
      excerpt: "Explore the latest techniques in natural language processing and how to build intelligent chatbots that can understand context and provide meaningful responses.",
      author: "Shivam Tiwari",
      date: "2024-01-15",
      category: "Machine Learning",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "MLOps Best Practices for Production Deployment",
      excerpt: "Learn about the essential practices for deploying machine learning models in production environments, including monitoring, versioning, and CI/CD pipelines.",
      author: "Shivam Tiwari", 
      date: "2024-01-10",
      category: "MLOps",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "Data Preprocessing Techniques for Better ML Models",
      excerpt: "Discover advanced data preprocessing techniques that can significantly improve your machine learning model performance and accuracy.",
      author: "Shivam Tiwari",
      date: "2024-01-05",
      category: "Data Science",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Cloud Computing for Machine Learning: A Complete Guide",
      excerpt: "A comprehensive guide to leveraging cloud platforms for machine learning projects, covering GCP, AWS, and Azure solutions.",
      author: "Shivam Tiwari",
      date: "2023-12-28",
      category: "Cloud Computing",
      readTime: "15 min read",
      featured: false
    }
  ];

  const categories = ["All", "Machine Learning", "MLOps", "Data Science", "Cloud Computing"];

  return (
    <div className="blog">
      <motion.section 
        className="blog-hero"
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
            Blog & Articles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blog-intro"
          >
            Insights, tutorials, and thoughts on machine learning, data science, and technology.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="blog-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="blog-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                className={`blog-post ${post.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {post.featured && <div className="featured-badge">Featured</div>}
                
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-category">
                      <FaTag />
                      {post.category}
                    </span>
                    <span className="post-date">
                      <FaCalendarAlt />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                </div>

                <div className="post-content">
                  <p>{post.excerpt}</p>
                </div>

                <div className="post-footer">
                  <div className="post-author">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <span className="read-time">{post.readTime}</span>
                </div>

                <motion.button 
                  className="read-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
