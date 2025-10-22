# 🚀 Shivam Tiwari - Interactive React Portfolio

A modern, interactive portfolio built with React.js, featuring smooth animations, particle effects, and a dynamic user experience.

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent storage
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern Typography** - Clean, professional fonts with perfect spacing
- **Gradient Backgrounds** - Beautiful gradient effects throughout

### 🎭 **Interactive Elements**
- **Framer Motion Animations** - Smooth, professional animations on scroll and hover
- **Interactive Particle System** - Dynamic particle background with mouse interaction
- **Typewriter Effect** - Animated text typing for dynamic content
- **Hover Effects** - Engaging micro-interactions throughout the site
- **Smooth Page Transitions** - Elegant transitions between pages

### 📱 **React Components**
- **Modern React Hooks** - useState, useEffect, useContext for state management
- **Component Architecture** - Modular, reusable components
- **Context API** - Theme and particle system management
- **React Router** - Client-side routing for SPA experience
- **Intersection Observer** - Performance-optimized scroll animations

### 🛠 **Technical Stack**
- **React 18** - Latest React features and performance optimizations
- **Vite** - Lightning-fast build tool and dev server
- **Framer Motion** - Production-ready motion library
- **React Particles** - Interactive particle system
- **React Icons** - Comprehensive icon library
- **EmailJS** - Direct email integration for contact form

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivam199708/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── ContactForm.jsx # Contact form with EmailJS
│   ├── Typewriter.jsx  # Typewriter animation
│   └── ParticleBackground.jsx # Interactive particles
├── contexts/           # React Context providers
│   ├── ThemeContext.jsx    # Dark/light theme
│   └── ParticleContext.jsx # Particle system settings
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Projects.jsx    # Projects showcase
│   ├── Blog.jsx        # Blog/articles
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main App component
├── main.jsx           # React entry point
├── index.css          # Global styles
└── App.css            # App-specific styles
```

## 🎨 Customization

### Theme Colors
Update CSS variables in `src/index.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* ... other variables */
}
```

### Content Updates
- **Personal Info**: Update `src/pages/Home.jsx` and `src/pages/About.jsx`
- **Projects**: Modify `src/pages/Projects.jsx`
- **Contact**: Update contact information in `src/pages/Contact.jsx`
- **Blog**: Add your articles in `src/pages/Blog.jsx`

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Update configuration in `src/components/ContactForm.jsx`:

```javascript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Custom Server
```bash
npm run build
npm start
```

## 🎯 Performance Features

- **Code Splitting** - Automatic route-based code splitting
- **Lazy Loading** - Images and components load on demand
- **Optimized Animations** - Hardware-accelerated CSS transforms
- **Efficient Re-renders** - Optimized React components
- **Bundle Optimization** - Tree shaking and minification

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Shivam Tiwari**
- Email: ashivam1997@gmail.com
- LinkedIn: [shiv0810](https://www.linkedin.com/in/shiv0810/)
- GitHub: [shivam199708](https://github.com/shivam199708)
- Twitter: [cvamtiwar_i](https://x.com/cvamtiwar_i)

---

⭐ **Star this repository if you found it helpful!**