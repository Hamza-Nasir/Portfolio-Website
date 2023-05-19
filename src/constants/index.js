import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    linkedin,
    pdf,
    figma,
    docker,
    sonabim,
    entreex,
    qissa_suna,
    codurr,
    coming_soon,
    python,
    license_plate,
    meta,
    starbucks,
    tesla,
    shopify,

    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Python",
      icon: python,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "git",
      icon: git,
    },

    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    
    {
      name: "TypeScript",
      icon: typescript,
    },
    
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "SONA BIM",
      icon: sonabim,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "I worked as a Junior React Developer for SONA BIM",
        "Worked on converting their C# codebase to React.",
        "Worked on Sign up, Login, Forgot password and Dashboard",
        "Use React with JavaScript and MUI",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Entreex",
      icon: entreex,
      iconBg: "#E6DEDD",
      date: "February 2023 - March 2023",
      points: [
        "I worked with another developer to make a very fast, but elegant website in HTML CSS and JS",
        "Worked on a number of pages across the entire website",
    
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Qissa Suna",
      description:
        "An Urdu Story telling application utilizing the pwoer of AI to convert Urdu text to speech and narrate it in an immersive way with a user interface simple enough even for children to use effectively.",
      tags: [
        {
          name: "ReactNative",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "white",
        },

      ],
      image: qissa_suna,
      source_code_link: "#",
    },
    {
      name: "Codurr",
      description:
        "A simple, elegant blog reading and writing application similar to Medium, but designed for Coders, where they follow their favourite authors and browse the amazing collection of blogs available.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "white",
        },
      ],
      image: codurr,
      source_code_link: "https://github.com/",
    },
    {
      name: "License Plate Detection",
      description:
        "A Machine Learning web application using OpenCV and advanced Recurrent Convolutional Neural Networks to detect License plates from the given image of cars, and extract the license plate number.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "white",
        },
      ],
      image: license_plate,
      source_code_link: "https://github.com/",
    },

   
  ];

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hmza-nasir/",
      icon: linkedin,
    },

    {
      name: "GitHub",
      url: "https://github.com/Hamza-Nasir",
      icon: github,
      
    },

    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1GO3HmydwRlMH230iq6X8Hi7mkyI_PFq2/view?usp=share_link",
      icon: pdf,
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials };