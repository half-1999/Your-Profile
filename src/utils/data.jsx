export const projects = [
  // Games
  {
    _id: 1,
    title: "MOBA Game",
    category: "Games",
    description: "Real-time multiplayer game using WebSockets.",
    technologies: "WebSockets",
    image: "https://via.placeholder.com/300x200?text=MOBA+Game",
    stats: {
      monthlyViews: 1200,
      downloads: 320,
      likes: 85,
    },
    comments: [
      {
        id: 1,
        user: "John Doe",
        comment: "Great project! I really like the concept.",
      },
      {
        id: 2,
        user: "Jane Smith",
        comment: "Very informative. Thanks for sharing.",
      },
      {
        id: 3,
        user: "Bob Johnson",
        comment: "Could you explain more about the backend architecture?",
      },
    ],
  },
  {
    _id: 2,
    title: "2D Platformer",
    category: "Games",
    description: "Built with Phaser and Node.js backend.",
    technologies: "Phaser, Node.js",
    image: "https://via.placeholder.com/300x200?text=2D+Platformer",
    stats: {
      monthlyViews: 800,
      downloads: 250,
      likes: 65,
    },
    comments: [
      {
        id: 1,
        user: "Emily Brown",
        comment: "Awesome game mechanics! I enjoyed playing it.",
      },
      {
        id: 2,
        user: "Alex Clark",
        comment: "Great visuals and level design.",
      },
    ],
  },
  {
    _id: 3,
    title: "Puzzle Game",
    category: "Games",
    description: "React frontend and Express backend.",
    technologies: "React, Express",
    image: "https://via.placeholder.com/300x200?text=Puzzle+Game",
    stats: {
      monthlyViews: 1500,
      downloads: 380,
      likes: 95,
    },
    comments: [
      {
        id: 1,
        user: "Sophia Lee",
        comment: "Interesting puzzles! Keeps me engaged.",
      },
      {
        id: 2,
        user: "David Wright",
        comment: "Could use more levels, but great concept overall.",
      },
    ],
  },
  {
    _id: 4,
    title: "Strategy Game",
    category: "Games",
    description: "Turn-based game using MERN stack.",
    technologies: "MERN stack",
    image: "https://via.placeholder.com/300x200?text=Strategy+Game",
    stats: {
      monthlyViews: 1000,
      downloads: 300,
      likes: 70,
    },
    comments: [
      {
        id: 1,
        user: "Michael Wilson",
        comment: "Strategic depth is impressive. Well done!",
      },
      {
        id: 2,
        user: "Olivia Martinez",
        comment: "Could use more tutorials for beginners.",
      },
    ],
  },
  {
    _id: 5,
    title: "Card Game",
    category: "Games",
    description: "Multiplayer card game with React and Firebase.",
    technologies: "React, Firebase",
    image: "https://via.placeholder.com/300x200?text=Card+Game",
    stats: {
      monthlyViews: 900,
      downloads: 280,
      likes: 75,
    },
    comments: [
      {
        id: 1,
        user: "William Thompson",
        comment: "Fun game to play with friends!",
      },
      {
        id: 2,
        user: "Ella Davis",
        comment: "Would love to see more card sets in future updates.",
      },
    ],
  },
  {
    _id: 6,
    title: "Educational Game",
    category: "Games",
    description: "Learning-based game using React and MongoDB.",
    technologies: "React, MongoDB",
    image: "https://via.placeholder.com/300x200?text=Educational+Game",
    stats: {
      monthlyViews: 1100,
      downloads: 300,
      likes: 80,
    },
    comments: [
      {
        id: 1,
        user: "Sophie Green",
        comment: "Great way to learn new concepts interactively.",
      },
      {
        id: 2,
        user: "Jack Brown",
        comment: "Needs more quizzes to reinforce learning.",
      },
    ],
  },
  {
    _id: 7,
    title: "Trivia Game",
    category: "Games",
    description: "Real-time trivia game with Node.js and WebSockets.",
    technologies: "Node.js, WebSockets",
    image: "https://via.placeholder.com/300x200?text=Trivia+Game",
    stats: {
      monthlyViews: 1300,
      downloads: 350,
      likes: 90,
    },
    comments: [
      {
        id: 1,
        user: "Grace Wilson",
        comment: "Love the variety of trivia questions!",
      },
      {
        id: 2,
        user: "Liam Moore",
        comment: "More categories would make it even better.",
      },
    ],
  },

  // Web Development
  {
    _id: 8,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "Full-featured e-commerce site with shopping cart, payment gateway.",
    technologies: "React, Node.js, Express, MongoDB, JWT, Stripe API",
    image: "https://via.placeholder.com/300x200?text=E-commerce+Platform",
    stats: {
      monthlyViews: 2500,
      downloads: 700,
      likes: 120,
    },
    comments: [
      {
        id: 1,
        user: "Emma Anderson",
        comment: "Smooth shopping experience. Great job!",
      },
      {
        id: 2,
        user: "Noah White",
        comment: "Secure payments and fast delivery. Impressive!",
      },
    ],
  },
  {
    _id: 9,
    title: "Social Media App",
    category: "Web Development",
    description:
      "Social networking site with real-time chat and notifications.",
    technologies: "React, Node.js, WebSocket",
    image: "https://via.placeholder.com/300x200?text=Social+Media+App",
    stats: {
      monthlyViews: 1800,
      downloads: 500,
      likes: 100,
    },
    comments: [
      {
        id: 1,
        user: "Mia King",
        comment: "Love connecting with friends on this platform!",
      },
      {
        id: 2,
        user: "James Taylor",
        comment: "Notifications could be more customizable.",
      },
    ],
  },
  {
    _id: 10,
    title: "Blog Platform",
    category: "Web Development",
    description: "Blogging site with markdown support and user authentication.",
    technologies: "React, Node.js, Express, Markdown",
    image: "https://via.placeholder.com/300x200?text=Blog+Platform",
    stats: {
      monthlyViews: 2000,
      downloads: 600,
      likes: 110,
    },
    comments: [
      {
        id: 1,
        user: "Sophia Brown",
        comment: "Easy to write and publish articles. Love it!",
      },
      {
        id: 2,
        user: "Daniel Clark",
        comment: "Markdown editor is very convenient.",
      },
    ],
  },
  {
    _id: 11,
    title: "Portfolio Site",
    category: "Web Development",
    description: "Personal portfolio with project showcase.",
    technologies: "React, HTML, CSS",
    image: "https://via.placeholder.com/300x200?text=Portfolio+Site",
    stats: {
      monthlyViews: 1500,
      downloads: 400,
      likes: 95,
    },
    comments: [
      {
        id: 1,
        user: "Olivia Moore",
        comment:
          "Clean design and easy navigation. Perfect for showcasing work.",
      },
      {
        id: 2,
        user: "Jacob Wilson",
        comment: "Could add more interactive elements.",
      },
    ],
  },
  {
    _id: 12,
    title: "Task Manager",
    category: "Web Development",
    description: "Task and project management tool.",
    technologies: "React, Firebase",
    image: "https://via.placeholder.com/300x200?text=Task+Manager",
    stats: {
      monthlyViews: 1200,
      downloads: 350,
      likes: 90,
    },
    comments: [
      {
        id: 1,
        user: "Isabella Harris",
        comment: "Helps me stay organized. Very useful app!",
      },
      {
        id: 2,
        user: "Ethan Parker",
        comment: "Integration with Firebase is seamless.",
      },
    ],
  },
  {
    _id: 13,
    title: "Job Portal",
    category: "Web Development",
    description: "Job search and application site.",
    technologies: "React, Node.js, Express",
    image: "https://via.placeholder.com/300x200?text=Job+Portal",
    stats: {
      monthlyViews: 1400,
      downloads: 380,
      likes: 100,
    },
    comments: [
      {
        id: 1,
        user: "Aiden King",
        comment: "Helped me find a job quickly. Thank you!",
      },
      {
        id: 2,
        user: "Chloe Taylor",
        comment: "User-friendly interface. Highly recommended.",
      },
    ],
  },

  // Software Development
  {
    _id: 14,
    title: "Inventory Management System",
    category: "Software Development",
    description: "Desktop application for inventory tracking.",
    technologies: "Electron, React, Node.js",
    image: "https://via.placeholder.com/300x200?text=Inventory+System",
    stats: {
      monthlyViews: 900,
      downloads: 280,
      likes: 70,
    },
    comments: [
      {
        id: 1,
        user: "Lucas Green",
        comment: "Saves a lot of time managing inventory.",
      },
      {
        id: 2,
        user: "Lily Anderson",
        comment: "Could use more customization options.",
      },
    ],
  },
  {
    _id: 15,
    title: "CRM System",
    category: "Software Development",
    description:
      "Customer relationship management system for sales management.",
    technologies: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/300x200?text=CRM+System",
    stats: {
      monthlyViews: 1000,
      downloads: 300,
      likes: 65,
    },
    comments: [
      {
        id: 1,
        user: "Nathan White",
        comment: "Helps us keep track of client interactions effectively.",
      },
      {
        id: 2,
        user: "Eva Hall",
        comment: "Reporting features are very useful for analyzing sales data.",
      },
    ],
  },
  {
    _id: 16,
    title: "Point of Sale (POS)",
    category: "Software Development",
    description: "POS system for retail stores.",
    technologies: "React, Node.js, Express",
    image: "https://via.placeholder.com/300x200?text=POS+System",
    stats: {
      monthlyViews: 1100,
      downloads: 320,
      likes: 75,
    },
    comments: [
      {
        id: 1,
        user: "Mason Thompson",
        comment: "Speeds up our checkout process significantly.",
      },
      {
        id: 2,
        user: "Avery Harris",
        comment: "Could use more integration options with other services.",
      },
    ],
  },
  {
    _id: 17,
    title: "Library Management System",
    category: "Software Development",
    description: "Software for managing library operations.",
    technologies: "Java, Spring Boot",
    image: "https://via.placeholder.com/300x200?text=Library+System",
    stats: {
      monthlyViews: 800,
      downloads: 250,
      likes: 60,
    },
    comments: [
      {
        id: 1,
        user: "Harper Wright",
        comment: "Easy to check in and check out books.",
      },
      {
        id: 2,
        user: "Jackson Martinez",
        comment: "Could use more advanced search options.",
      },
    ],
  },
  {
    _id: 18,
    title: "Billing System",
    category: "Software Development",
    description: "Automated billing and invoicing system.",
    technologies: "Python, Django",
    image: "https://via.placeholder.com/300x200?text=Billing+System",
    stats: {
      monthlyViews: 950,
      downloads: 270,
      likes: 70,
    },
    comments: [
      {
        id: 1,
        user: "Scarlett Garcia",
        comment: "Saves us a lot of time generating invoices.",
      },
      {
        id: 2,
        user: "Leo Parker",
        comment: "Could use more customization for invoice templates.",
      },
    ],
  },
  {
    _id: 19,
    title: "Healthcare Management System",
    category: "Software Development",
    description: "System for managing healthcare records and appointments.",
    technologies: "React, Node.js, PostgreSQL",
    image: "https://via.placeholder.com/300x200?text=Healthcare+System",
    stats: {
      monthlyViews: 1200,
      downloads: 300,
      likes: 80,
    },
    comments: [
      {
        id: 1,
        user: "Ruby Collins",
        comment: "Helps streamline patient appointments efficiently.",
      },
      {
        id: 2,
        user: "Evelyn Murphy",
        comment: "Would love to see a mobile app version for patients.",
      },
    ],
  },
];

export const companies = [
  {
    id: 1,
    name: "Tech Innovators Ltd.",
    startDate: "January 2022",
    endDate: "Present",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developed and maintained the Smart Home Dashboard application.",
      "Designed and implemented the E-commerce Analytics Platform.",
      "Collaborated with cross-functional teams to define and design new features.",
      "Ensured the performance, quality, and responsiveness of applications.",
      "Conducted code reviews and mentored junior developers.",
    ],
    achievements: [
      "Improved application performance by 20% by optimizing the codebase.",
      "Received Employee of the Month award for outstanding performance in March 2023.",
    ],
  },
  {
    id: 2,
    name: "Web Solutions Inc.",
    startDate: "June 2020",
    endDate: "December 2021",
    role: "Backend Developer",
    responsibilities: [
      "Built and maintained the backend for an Online Learning Management System.",
      "Developed a Real-Time Chat Application using WebSockets.",
      "Implemented RESTful APIs and integrated third-party services.",
      "Participated in architectural discussions and design reviews.",
      "Monitored and optimized server performance and scalability.",
    ],
    achievements: [
      "Reduced server response time by 15% through code optimization.",
      "Successfully migrated legacy systems to modern tech stack with zero downtime.",
    ],
  },
  {
    id: 3,
    name: "Innovative Software Solutions",
    startDate: "January 2019",
    endDate: "May 2020",
    role: "Software Engineer",
    responsibilities: [
      "Created an Inventory Management System for tracking stock and orders.",
      "Developed a Customer Relationship Management System.",
      "Performed unit testing and debugging to ensure software quality.",
      "Collaborated with UI/UX designers to improve user experience.",
      "Wrote comprehensive documentation for new and existing features.",
    ],
    achievements: [
      "Enhanced system efficiency by 25% by implementing caching strategies.",
      "Led a team of 5 developers to successfully deliver a major project on time.",
    ],
  },
  // Add more companies as needed
];

export const testimonialsData = [
  {
    id: 1,
    title: "Quote 1",
    quote:
      "Aman's expertise in React and Node.js was crucial in delivering our project on time and exceeding expectations. His ability to understand complex requirements and translate them into functional solutions is commendable.",
    author: "Rajesh Kumar",
  },
  {
    id: 2,
    title: "Quote 2",
    quote:
      "An exceptional developer who is both innovative and reliable. Aman's work ethic and attention to detail have made a significant impact on our projects, and we look forward to continuing our collaboration.",
    author: "Priya Singh",
  },
  // Add more testimonial objects as needed
];

export const introductionData = {
  name: "Aman Sharma",
  profession: "Full-Stack Developer",
  specialization: "MERN Stack",
  summary:
    "Hi, I'm Aman Sharma, a dedicated Full-Stack Developer specializing in the MERN stack. With a solid foundation in web development, game development, and software engineering, I have consistently delivered high-quality projects that meet and exceed client expectations. My passion for technology and continuous learning drives me to stay updated with the latest trends and advancements in the tech industry.",
  education: [
    {
      institution: "AKTU University",
      degree: "Bachelor's of Technology Degree in Computer Science",
      year: 2021,
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Software Engineering",
        "Database Systems",
        "Artificial Intelligence",
      ],
      activities: [
        "Member of the Coding Club",
        "Organizer of the Annual Tech Fest",
      ],
    },
  ],
  experience: [
    {
      company: "Tech Innovators Ltd.",
      duration: "Jan 2022 - Present",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed a Smart Home Dashboard",
        "Designed and implemented an E-commerce Analytics Platform",
        "Collaborated with cross-functional teams",
        "Ensured performance, quality, and responsiveness of applications",
        "Conducted code reviews and mentored junior developers",
      ],
    },
    {
      company: "Web Solutions Inc.",
      duration: "June 2020 - Dec 2021",
      role: "Backend Developer",
      responsibilities: [
        "Built backend for an Online Learning Management System",
        "Developed a Real-Time Chat Application using WebSockets",
        "Implemented RESTful APIs and integrated third-party services",
        "Participated in architectural discussions and design reviews",
        "Monitored and optimized server performance and scalability",
      ],
    },
    {
      company: "Innovative Software Solutions",
      duration: "Jan 2019 - May 2020",
      role: "Software Engineer",
      responsibilities: [
        "Created an Inventory Management System",
        "Developed a Customer Relationship Management System",
        "Performed unit testing and debugging",
        "Collaborated with UI/UX designers",
        "Wrote comprehensive documentation for new and existing features",
      ],
    },
  ],
  achievements: [
    {
      title: "Best Developer Award",
      description:
        "Recognized for innovative solutions and outstanding coding skills during the 2020 ABC Hackathon. Developed a scalable web application that addressed real-world problems and impressed judges with its functionality and user experience.",
    },
  ],
};

export const resumeData = {
  education: [
    {
      institution: "XYZ University",
      degree: "Bachelor's Degree in Computer Science",
      year: 2021,
    },
  ],
  experience: [
    {
      company: "Tech Innovators Ltd.",
      duration: "Jan 2022 - Present",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed a Smart Home Dashboard",
        "Designed and implemented an E-commerce Analytics Platform",
      ],
    },
    {
      company: "Web Solutions Inc.",
      duration: "June 2020 - Dec 2021",
      role: "Backend Developer",
      responsibilities: [
        "Built the backend for an Online Learning Management System",
        "Developed a Real-Time Chat Application using WebSockets",
      ],
    },
    {
      company: "Innovative Software Solutions",
      duration: "Jan 2019 - May 2020",
      role: "Software Engineer",
      responsibilities: [
        "Created an Inventory Management System",
        "Developed a Customer Relationship Management System",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "REST API",
    "Firebase",
    "MS SQL Server",
    "MySQL",
    "Next.js",
    "WebSockets",
    "Electron",
    "Phaser",
    "D3.js",
    "JWT",
    "Redis",
    "VSCode",
    "Postman",
    "Docker",
    "Jenkins",
  ],
  projects: [
    "E-commerce Platform",
    "Multiplayer Online Battle Arena (MOBA) Game",
    "Inventory Management System",
  ],
  certifications: [
    "Certified MERN Stack Developer",
    "Certified JavaScript Developer",
    "AWS Certified Solutions Architect",
  ],
};
