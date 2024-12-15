import React from 'react';
import './About.css';
import suman from '../../assets/alumni/suman.png'
import ilham from '../../assets/alumni/ilham.jpeg'
import arghadeep from '../../assets/alumni/arghadeep.png'
const About = () => {
  const milestones = [
    'College web development club',
    '200+ active members',
    '40+ college core members',
    'Catering to every developers need',
    'In business since 2021',
    'Actively working for every student need'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Arghadeep Mallick",
      text: "As an alumnus of Repl, I can confidently say it was a game-changer in my journey. The supportive community, challenging projects, and collaborative spirit helped me build not just coding skills but also a problem-solving mindset. Repl taught me how to turn ideas into real-world solutions, and that experience continues to shape my career.",
      image: arghadeep,
      bgColor: "#ffd4d4"
    },
    {
      id: 2,
      name: "Suman Ojha",
      text: "Being part of Repl was one of the most rewarding experiences of my life. It wasn't just about learning to code; it was about learning how to think critically, collaborate effectively, and create impactful projects. Those lessons have been invaluable in my career.",
      image: suman,
      bgColor: "#ffe4bc"
    },
    {
      id: 3,
      name: "Md. Ilham Ansari",
      text: "At Repl, I found more than just coding challenges; I found a network of like-minded innovators. The mentorship, teamwork, and hands-on projects gave me the skills and confidence to excel beyond the classroom.",
      image: ilham,
      bgColor: "#d1f5d3"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        
        <div className="about-header">
          <h1>We're standing up to <span>Big Tech.</span></h1>
          <p>
          The world of tech promised innovation and empowerment but often left developers to navigate a fragmented, overly <span>commercialized space.</span> They offered “free” tools and resources while monetizing our creativity and exploiting our data.
          </p>

          <p>
          As creators and developers ourselves, we knew the industry deserved better. That’s why we built <span>Repl Devs — a community-driven space</span> where coding and web development thrive through collaboration, innovation, and shared learning.
          </p>

          <p>
          <span>Repl Devs</span> is more than a club — it’s a mission to empower developers by providing tools, resources, and connections that prioritize creativity, privacy, and open sharing. Together, we’re shaping the future of coding, one project at a time.
          </p>
        </div>

        <div className="milestones-section">
          <h2>Milestones</h2>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        

        {/* New Testimonials Section */}
        <div className="testimonials-section">
          <span className="section-label">TESTIMONIALS</span>
          <h2>We are committed college students</h2>
          <p className="section-description">
            We place huge value on strong relationships and have seen the benefit they
            bring to our club. Alumni feedback is vital in helping us to get it right.
          </p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
                style={{ backgroundColor: testimonial.bgColor }}
              >
                <div className="testimonial-content">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p>"{testimonial.text}"</p>
                    <h3>{testimonial.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;