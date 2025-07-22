"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProfileData {
  name: string;
  tagline: string;
  image: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

interface AboutData {
  bio: string;
  skills: string[];
}

interface ProjectData {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  aiHint: string;
}

interface EducationData {
  degree: string;
  institution: string;
  year: string;
}

interface ContactData {
  email: string;
  phone: string;
  location: string;
}

interface PortfolioData {
  profile: ProfileData;
  about: AboutData;
  projects: ProjectData[];
  education: EducationData[];
  contact: ContactData;
}

const initialData: PortfolioData = {
  profile: {
    name: "Alex Doe",
    tagline: "A passionate Full-Stack Developer creating modern and responsive web applications.",
    image: "https://placehold.co/550x550.png",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  about: {
    bio: "I'm a dedicated software developer with a knack for building beautiful and functional user interfaces. With over 5 years of experience in the field, I thrive on solving complex problems and learning new technologies. When I'm not coding, I enjoy hiking and photography.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Figma", "UI/UX Design", "Agile Methodologies"],
  },
  projects: [
    {
      title: "Project Alpha",
      description: "A web application for project management, built with React and Node.js. Features real-time collaboration.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["React", "Node.js", "Websockets"],
      aiHint: "technology abstract"
    },
    {
      title: "Project Beta",
      description: "A mobile app for fitness tracking. Developed using Swift for iOS. Integrates with HealthKit.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["iOS", "Swift", "HealthKit"],
      aiHint: "mobile app"
    },
    {
      title: "Project Gamma",
      description: "An e-commerce platform with a custom CMS, powered by Next.js and integrated with Stripe for payments.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["Next.js", "Stripe", "E-commerce"],
      aiHint: "online shopping"
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      year: "2020 - 2022"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State College of Engineering",
      year: "2016 - 2020"
    }
  ],
  contact: {
    email: "alex.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  }
};


interface PortfolioDataContextType {
  data: PortfolioData;
  setData: (data: PortfolioData) => void;
}

const PortfolioDataContext = createContext<PortfolioDataContextType | undefined>(undefined);

export function usePortfolioData() {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
}

export function PortfolioDataProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<PortfolioData>(initialData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('portfolioData');
      if (savedData) {
        setDataState(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Failed to parse portfolio data from localStorage", error);
    }
    setIsLoaded(true);
  }, []);

  const setData = (newData: PortfolioData) => {
    setDataState(newData);
    try {
        localStorage.setItem('portfolioData', JSON.stringify(newData));
    } catch (error) {
        console.error("Failed to save portfolio data to localStorage", error);
    }
  };
  
  if (!isLoaded) {
    return null; 
  }

  return (
    <PortfolioDataContext.Provider value={{ data, setData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
}
