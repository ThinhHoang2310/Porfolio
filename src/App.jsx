import React, { useState, useEffect } from 'react';
import {
   Github,
   Linkedin,
   Mail,
   ExternalLink,
   ChevronDown,
} from 'lucide-react';
import './index.css'; // Assuming you have a CSS file for styles
import './App.css';

import HtmlLogo from './assets/Images/icons8-html.svg';
import CssLogo from './assets/Images/icons8-css.svg';
import JsLogo from './assets/Images/icons8-js.svg';
import ReactLogo from './assets/Images/icons8-react.svg';
import SassLogo from './assets/Images/icons8-sass.svg';
import GithubLogo from './assets/Images/icons8-github.svg';

import CreativityImg from './assets/Images/creativity1.png';
import CommunicationImg from './assets/Images/communication.png';
import CollaborationImg from './assets/Images/collaboration.png';
import TimeManagementImg from './assets/Images/time management.png';

import LTCloImg from './assets/Images/L-TCLO-VNscreenshot.png';
import LinLinImg from './assets/Images/LINLINscreenshot.png';
import VVVNImg from './assets/Images/vivuvietnamscreenshot.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
   const [currentActiveSection, setCurrentActiveSection] = useState('hero');

   // Handle scroll to update active section
   useEffect(() => {
      const handleScrollTracking = () => {
         const navigationSections = [
            'hero',
            'about',
            'skills',
            'projects',
            'contact',
         ];
         const currentScrollPosition = window.scrollY + 100;

         for (const sectionName of navigationSections) {
            const sectionElement = document.getElementById(sectionName);
            if (sectionElement) {
               const { offsetTop, offsetHeight } = sectionElement;
               if (
                  currentScrollPosition >= offsetTop &&
                  currentScrollPosition < offsetTop + offsetHeight
               ) {
                  setCurrentActiveSection(sectionName);
                  break;
               }
            }
         }
      };

      window.addEventListener('scroll', handleScrollTracking);
      return () => window.removeEventListener('scroll', handleScrollTracking);
   }, []);

   // AOS
   useEffect(() => {
      AOS.init();
   }, []);

   // SCROLL
   const scrollToTargetSection = targetSectionId => {
      const targetElement = document.getElementById(targetSectionId);
      if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const softSkillsList = [
      {
         name: 'Creativity',
         img: CreativityImg,
         desc: 'Thinking in new and original ways.',
      },
      {
         name: 'Communication',
         img: CommunicationImg,
         desc: 'Working together to achieve shared goals.',
      },
      {
         name: 'Collaboration',
         img: CollaborationImg,
         desc: 'Sharing ideas clearly and effectively.',
      },
      {
         name: 'Time Management',
         img: TimeManagementImg,
         desc: 'Using time wisely to stay productive.',
      },
   ];

   const portfolioProjects = [
      {
         projectTitle: 'LinLin Shop',
         projectDescription:
            'Static handbag store website with modern UI.Built with basic HTML, CSS and JavaScript to handle interactions.',
         usedTechnologies: ['HTML', 'CSS', 'Javascript'],
         githubRepository: 'https://github.com/ThinhHoang2310/LINLIN-SHOP',
         liveDemo: 'https://thinhhoang2310.github.io/LINLIN-SHOP/',
         projectImage: LinLinImg,
      },
      {
         projectTitle: 'L&T Clo',
         projectDescription:
            ' A static and responsive landing page for a fashion brand, built using HTML, CSS, and JavaScript. Designed with a modern, mobile-friendly layout, the site showcases brand identity through structured sections and clean visuals.',
         usedTechnologies: ['HTML', 'CSS', 'JavaScript'],
         githubRepository: 'https://github.com/ThinhHoang2310/L-T.CLO-VN',
         liveDemo: 'https://thinhhoang2310.github.io/L-T.CLO-VN/',
         projectImage: LTCloImg,
      },
      {
         projectTitle: 'Vivu Vietnam',
         projectDescription:
            'A responsive web interface built using ReactJS to simulate a product landing page. The project focuses on layout design,responsive behavior across devices, and clean component-based structure.',
         usedTechnologies: ['ReactJS', 'SCSS'],
         githubRepository: 'https://github.com/ThinhHoang2310/travel',
         liveDemo: 'https://vivuvietnam.id.vn/',
         projectImage: VVVNImg,
      },
   ];

   const navigationMenuItems = [
      'hero',
      'about',
      'skills',
      'projects',
      'contact',
   ];

   const [showPopup, setShowPopup] = useState(false);

   useEffect(() => {
      if (showPopup) {
         const timer = setTimeout(() => {
            setShowPopup(false);
         }, 4000);
         return () => clearTimeout(timer);
      }
   }, [showPopup]);

   const handleSendMessage = () => {
      setShowPopup(true);
   };

   return (
      <div className="portfolio-container">
         {/* Navigation */}
         <nav className="navigation-header">
            <div className="navigation-container">
               <div className="navigation-content">
                  <a href="#" className="brand-logo">
                     Portfolio
                  </a>

                  <div className="navigation-menu">
                     {navigationMenuItems.map(menuItem => (
                        <button
                           key={menuItem}
                           onClick={() => scrollToTargetSection(menuItem)}
                           className={`menu-item-button ${
                              currentActiveSection === menuItem
                                 ? 'active-menu-item'
                                 : ''
                           }`}
                        >
                           {menuItem === 'hero' ? 'home' : menuItem}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section id="hero" className="hero-section">
            <div className="hero-content">
               <div className="hero-avatar">TD</div>
               <h1 className="hero-title">Thinh Dinh</h1>
               <p className="hero-subtitle">Frontend Developer</p>
               <button
                  onClick={() => scrollToTargetSection('projects')}
                  className="cta-button"
               >
                  View My Work
               </button>
               <div className="scroll-indicator">
                  <ChevronDown size={32} color="white" />
               </div>
            </div>
         </section>

         {/* About Section */}
         <section id="about" className="content-section">
            <div className="section-container">
               <h2 className="section-title">About Me</h2>
               <div
                  className="about-grid"
                  data-aos="fade-up"
                  data-aos-duration="850"
               >
                  <div>
                     <p className="about-text">
                        I am a Frontend Developer skilled in HTML, CSS,
                        JavaScript, and ReactJS. I build responsive,
                        user-friendly web applications and have experience
                        integrating with RESTful APIs and SQL databases.
                        Proficient in Git, Figma, and Agile workflows, I focus
                        on delivering high-quality, engaging solutions.
                     </p>
                     <p className="about-text">
                        When I'm not coding, you can find me exploring new
                        technologies, contributing to open-source projects, or
                        enjoying a good cup of coffee while planning my next
                        project.
                     </p>
                     <div className="social-links">
                        <a href="#" className="social-link">
                           <Github size={24} />
                        </a>
                        <a href="#" className="social-link">
                           <Linkedin size={24} />
                        </a>
                        <a href="#" className="social-link">
                           <Mail size={24} />
                        </a>
                     </div>
                  </div>
                  <div className="facts-card">
                     <h3 className="facts-title">Quick Facts</h3>
                     <div className="facts-list">
                        <div>🎓 Technology Information Graduate</div>
                        <div>💼 1+ Years Experience</div>
                        <div>🌍 Based in VietNam</div>
                        <div>☕ Coffee Enthusiast</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Skills Section */}
         <section
            id="skills"
            className="content-section section-with-background"
         >
            <div className="section-container">
               <h2 className="section-title">Skills</h2>

               <h3
                  className="skills-subtitle"
                  data-aos="fade-up"
                  data-aos-duration="800"
               >
                  Technical Skills
               </h3>
               <div
                  className="skills-icons"
                  data-aos="fade-up"
                  data-aos-duration="800"
               >
                  <img src={HtmlLogo} alt="HTML" title="HTML" />

                  <img src={CssLogo} alt="CSS" title="CSS" />

                  <img src={JsLogo} alt="JavaScript" title="JavaScript" />

                  <img src={ReactLogo} alt="ReactJS" title="ReactJS" />

                  <img src={SassLogo} alt="Sass" title="Sass" />

                  <img src={GithubLogo} alt="Github" title="Github" />
               </div>
               <h3
                  className="skills-subtitle"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  style={{ marginTop: '2rem' }}
               >
                  Soft Skills
               </h3>
               <ul
                  className="soft-skills-list"
                  data-aos="fade-up"
                  data-aos-duration="800"
               >
                  {softSkillsList.map((softSkill, idx) => (
                     <li key={idx} className="soft-skill-item">
                        <div className="soft-skill-block">
                           <img
                              src={softSkill.img}
                              alt={softSkill.name}
                              title={softSkill.name}
                              className="soft-skill-icon"
                           />
                           <div className="soft-skils-heading">
                              {softSkill.name}
                           </div>
                           <p className="soft-skill-description">
                              {softSkill.desc}
                           </p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         {/* Projects Section */}
         <section id="projects" className="content-section">
            <div className="section-container">
               <h2 className="section-title">Projects</h2>
               <div
                  className="projects-grid"
                  data-aos="fade-up"
                  data-aos-duration="800"
               >
                  {portfolioProjects.map((project, projectIndex) => (
                     <div key={projectIndex} className="project-card">
                        <h3 className="project-title">
                           {project.projectTitle}
                        </h3>

                        {/* Ảnh website */}
                        <img
                           src={project.projectImage}
                           alt={project.projectTitle}
                           className="project-image"
                        />
                        <p className="project-description">
                           {project.projectDescription}
                        </p>
                        <div className="tech-tags">
                           {project.usedTechnologies.map(
                              (technology, techIndex) => (
                                 <span key={techIndex} className="tech-tag">
                                    {technology}
                                 </span>
                              )
                           )}
                        </div>
                        <div className="project-links">
                           <a
                              href={project.githubRepository}
                              className="project-link"
                           >
                              <Github size={20} />
                           </a>
                           <a
                              href={project.liveDemo}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <ExternalLink size={20} />
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <section
            id="contact"
            className="content-section section-with-background"
         >
            <div className="section-container">
               <div className="contact-content">
                  <h2 className="section-title">Get In Touch</h2>
                  <p className="contact-description">
                     I'm always open to discussing new opportunities and
                     interesting projects.
                  </p>
                  <div className="contact-form">
                     <div className="form-group">
                        <input
                           type="text"
                           placeholder="Your Name"
                           className="form-input"
                        />
                        <input
                           type="email"
                           placeholder="Your Email"
                           className="form-input"
                        />
                        <textarea
                           placeholder="Your Message"
                           className="form-input form-textarea"
                        ></textarea>

                        <button
                           onClick={handleSendMessage}
                           className="submit-button"
                        >
                           Send Message
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="footer-section">
            <p className="footer-text">
               © 2025 Thinh Dinh. All rights reserved.
            </p>
         </footer>

         {showPopup && (
            <div className="popup show">
               <p>
                  Thank you for your interest! Your message will be responded to
                  soon.
               </p>
            </div>
         )}
      </div>
   );
};

export default Portfolio;
