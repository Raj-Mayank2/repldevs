import React from 'react';
import './Gallery.css';
import two from '../../assets/replevent/2.jpeg'
import three from '../../assets/replevent/3.jpg'
import four from '../../assets/replevent/4.jpg'
import five from '../../assets/replevent/5.jpg'
import six from '../../assets/replevent/6.jpg'
import seven from '../../assets/replevent/7.jpg'
import eight from '../../assets/replevent/8.jpg'
import nine from '../../assets/replevent/9.jpg'
import ten from '../../assets/replevent/10.jpg'
import eleven from '../../assets/replevent/11.jpeg'
import twelve from '../../assets/replevent/12.jpeg'
import thirteen from '../../assets/replevent/13.jpeg'
import sixteen from '../../assets/replevent/16.jpeg'
import seventeen from '../../assets/replevent/17.jpeg'
import eighteen from '../../assets/replevent/18.jpeg'
import fifteen from '../../assets/replevent/15.jpeg'

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: two,
      title: "CSS BATTLE",
      description: "Group photo with all participants of CSS Battle",
      category: "Event"
    },
    {
      id: 2,
      image: three,
      title: "CSS BATTLE",
      description: "Our Founding Members",
      category: "Event"
    },
    {
      id: 3,
      image: eight,
      title: "CSS BATTLE",
      description: "Our Founding Members",
      category: "Event"
    },
    
    {
      id: 5,
      image: five,
      title: "CSS BATTLE",
      description: "Our Founding Members",
      category: "Event"
    },
    {
      id: 6,
      image: six,
      title: "CSS BATTLE",
      description: "Group photo with former Team Members",
      category: "Event"
    },
    {
      id: 8,
      image: eight,
      title: "CSS BATTLE",
      description: "Group photo with our Alumni",
      category: "Event"
    },
    {
      id: 9,
      image: nine,
      title: "CSS BATTLE",
      description: "Our Former Team Members",
      category: "Event"
    },
    {
      id: 10,
      image: ten,
      title: "CSS BATTLE",
      description: "Our Founding Members",
      category: "Event"
    },
    {
      id: 11,
      image: eleven,
      title: "CSS BATTLE",
      description: "Group photo with all participants of CSS Battle",
      category: "Event"
    },
    {
      id: 12,
      image: twelve,
      title: "CSS BATTLE",
      description: "Our Former Lead",
      category: "Event"
    },
    ,
    {
      id: 13,
      image: thirteen,
      title: "CSS BATTLE",
      description: "Group photo with all participants of CSS Battle",
      category: "Event"
    },
    {
      id: 14,
      image: sixteen,
      title: "CSS BATTLE",
      description: "Our Former Lead",
      category: "Event"
    },
    {
      id: 15,
      image: six,
      title: "CSS BATTLE",
      description: "Our Former Team Member",
      category: "Event"
    },
    {
      id: 17,
      image: seventeen,
      title: "Nirbhigna",
      description: "Our Former Lead with Founder",
      category: "Event"
    },
    {
      id: 18,
      image: eighteen,
      title: "Nirbhigna",
      description: "Audience",
      category: "Event"
    }
  ];

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
  }

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-heading">Our Events Throwback</h2>
        <div className="gallery-grid">
          {projects.map((project) => (
            <div key={project.id} className="gallery-item">
              <img 
                src={project.image}
                alt={project.title}
                className="gallery-image"
                onError={handleImageError}
              />
              <div className="gallery-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;