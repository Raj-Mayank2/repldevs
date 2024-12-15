import React from 'react'
import './Teams.css';
import mayank from '../../assets/members/mayank.jpg'
import dhiraj from '../../assets/members/dhiraj.jpg'
import prince from '../../assets/members/prince.jpg'
import anurag from '../../assets/members/anurag.jpg'
import wasim from '../../assets/members/wasim.jpg'
import raj from '../../assets/members/raj.jpg'
import sumit from '../../assets/members/sumit.png'
import piyush from '../../assets/members/piyush.png'
import antika from '../../assets/members/antika.png'
import arghadeep from '../../assets/alumni/arghadeep.png'
import suman from '../../assets/alumni/suman.png'
import nirvik from '../../assets/alumni/nirvik.png'
import ritabrata from '../../assets/alumni/ritabrata.jpg'
import avik from '../../assets/alumni/avik.png'
import priti from '../../assets/alumni/PRITI GUPTA.jpg'
import tilak from '../../assets/alumni/TILAK GHOSH.jpg'
import dilip from '../../assets/alumni/dilip.jpeg'
import ilham from '../../assets/alumni/ilham.jpeg'
import astha from '../../assets/alumni/astha.jpeg'
import ritam from '../../assets/alumni/RITAM MISHRA.png'
import joyjit from '../../assets/alumni/Joyjit Das.png'
import indraneel from '../../assets/alumni/Indraneel Sarkar.jpg'
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import userPlaceholder from '../../assets/profile1.jpg'
const teamData = {
  leads: [
    {
      name: "Mayank Raj",
      position: "Current Lead",
      skills: "Web Developer, AI/ML Enthusiast",
      image: mayank
    },
    {
      name: "Piyush Kumar",
      position: "Secretary",
      skills: "Web Developer, App Developer",
      image: piyush
    }
  ],
  members: [
    {
      name: "Wasim Aktar",
      position: "Social Media Manager and Event Manager",
      skills: "Web Development",
      image: wasim
    },
    {
      name: "Dhiraj Singh",
      position: "Current Supervisor",
      skills: "Web Development",
      image: dhiraj
    },
    {
      name: "Anurag Singh",
      position: "Flutter Developer",
      skills: "App Development",
      image: anurag
    },
    {
      name: "Raj Anand",
      position: "Event Management Head",
      skills: "Web Development,App Development",
      image: raj
    },
    {
      name: "Sumit Singh",
      position: "PR Lead",
      skills: "Web Development",
      image: sumit
    },
    {
      name: "Bhaskar Haldar",
      position: "External Affairs Manager",
      skills: "Web Development",
      image: profile2
    },
    {
      name: "Prince Kumar",
      position: "App Development Lead",
      skills: "Web and App Development",
      image: prince
    },
    {
      name: "Anish Kumar",
      position: "Tech Lead",
      skills: "Java Developer",
      image: profile2
    },
    {
      name: "Antika Haldar",
      position: "External Affairs Manager",
      skills: "Spokesperson",
      image: antika
    }
  ],
  alumni: [
    {
      name: "Arghadeep Mallick",
      position: "Founder Lead",
      skills: "Web Development",
      image: arghadeep
    },
    {
      name: "Suman Ojha",
      position: "Founder Secretary",
      skills: "Web Development",
      image: suman
    },
    
    {
        name: "Md. Ilham Ansari",
        position: "Former Lead",
        skills: "Web Development",
        image: ilham
      },
      {
        name: "Nirvik Ghosh",
        position: "Former Secretary & Technical Lead",
        skills: "Web Development",
        image: nirvik
      },
      {
        name: "Astha Samaddar",
        position: "Former Supervisor",
        skills: "Web Development",
        image: astha
      },
      {
        name: "Ritam Mishra",
        position: "Former Team Member",
        skills: "Web Development",
        image: ritam
      },
      {
        name: "Indraneel Sarkar",
        position: "Former Team Member",
        skills: "Web Development",
        image: indraneel
      },
      {
        name: "Joyjit Das",
        position: "Former Team Member",
        skills:"Web Development",
        image: joyjit
      },
      
      {
        name: "Tilak Ghosh",
        position: "Former Team Member",
        skills: "Web Development",
        image: tilak
      },
      {
        name: "Dilip Sarkar",
        position: "Former Team Member",
        skills:"Web Development",
        image: dilip
      },
      
      {
        name: "Ritabrata Chakraborty",
        position: "Former Team Member",
        skills: "Web Development",
        image: ritabrata
      },
      {
        name: "Avik Mukherjee",
        position: "Former Team Member",
        skills:"Web Development",
        image: avik
      },
      {
        name: "Priti Gupta",
        position: "Former Team Member",
        skills: "Web Development",
        image: priti
      }
  ]
}

const TeamSection = ({ title, members }) => (
  <div className="main-container">
    <h2>{title}</h2>
    <hr/>
    <div className="members">
      {members.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <p>{member.position}</p>
          <p>({member.skills})</p>
        </div>
      ))}
    </div>
  </div>
)

const Teams = () => {
  return (
    <div className='teams'>
      <TeamSection title="Our Leads" members={teamData.leads} />
      <TeamSection title="Our Team Members" members={teamData.members} />
      <TeamSection title="Our Alumni" members={teamData.alumni} />
    </div>
  )
}

export default Teams