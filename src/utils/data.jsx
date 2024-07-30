import PtacDashBoard from '../assets/PtacDashBoard.png'
import BajajChetak from '../assets/BajajChetak.png'
import Shikshamitra from '../assets/Shikshamitra.png'
import ArtificialEdu from '../assets/ArtificialEdu.png'
import Erthpot from '../assets/Erthpot.png'
import Ados from '../assets/Ados.png'
import HitTheBlack from '../assets/Hit the Black.png'
import MathQuiz from '../assets/MathQuiz.png'
import TechJobs from '../assets/TechJobs.png'
import portfolioReact from '../assets/portfolioReact.png'
import PortFolio from '../assets/Portfolio.png'

// IMAGES
import PTAC from '../assets/PTAC1.png'
import PTACSS from '../assets/PTAC3.png'
import PTACS from '../assets/PTAC2.png'
import BC from '../assets/BajajChetak2.png'
import Shiksha2 from '../assets/Shiksha2.png'
import Shiksha3 from '../assets/Shiksha3.png'
import Shiksha4 from '../assets/Shiksha4.png'
import AE2 from '../assets/AE2.png'
import AE3 from '../assets/AE3.png'
import ERTH2 from '../assets/ERTH2.png'
import ERTH3 from '../assets/ERTH3.png'
import AD1 from '../assets/AD1.png'
import AD2 from '../assets/AD2.png'
import AD3 from '../assets/AD3.png'
import AD4 from '../assets/AD4.png'
import AD5 from '../assets/AD5.png'
import AD41 from '../assets/AD4.1.png'
import AD42 from '../assets/AD4.2.png'
import HTB2 from '../assets/HTB2.png'
import MQ2 from '../assets/MQ2.png'
import RPORT2 from '../assets/RPORT2.png'
import RPORT3 from '../assets/RPORT3.png'


export const projects = [
  // Existing Projects
  {
    _id: 1,
    title: "PTAC ERP",
    category: "Software Development",
    description: "PTAC ERP is a comprehensive Enterprise Resource Planning (ERP) software designed to streamline and automate various business processes. It integrates functions such as finance, human resources, manufacturing, supply chain, services, procurement, and others into a single unified system. This software aims to enhance productivity, provide insights through real-time data, and improve overall business efficiency.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , MS SQL Server",
    image: PtacDashBoard,
    images: [PTAC, PtacDashBoard, PTACS, PTACSS ],
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
    title: "Shiva Automobiles ERP",
    category: "Software Development",
    description: "Shiva Automobiles ERP is a specialized ERP software designed for the automotive industry. It focuses on managing various aspects of an automobile business, including inventory management, sales, customer relationship management (CRM), service scheduling, and financial accounting. The software helps in optimizing operations, reducing costs, and improving customer satisfaction through efficient process management and data-driven insights.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , MS SQL Server",
    image: BajajChetak,
    images: [BajajChetak, BC],
    stats: {
      monthlyViews: 1000,
      downloads: 250,
      likes: 70,
    },
    comments: [
      {
        id: 1,
        user: "Michael Wilson",
        comment: "Impressive system! Easy to use.",
      },
      {
        id: 2,
        user: "Olivia Martinez",
        comment: "Could use more integrations.",
      },
    ],
  },
  {
    _id: 3,
    title: "E-Shikshamitra",
    category: "Software Development",
    description: "E-Shikshamitra is an Educational Learning Management System (ELMS) designed to facilitate online education and learning management. It offers features such as course management, student enrollment, online assessments, and progress tracking. The platform aims to provide an efficient and user-friendly environment for educators and students to interact, manage courses, and enhance the learning experience.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , Mongo DB",
    image: Shikshamitra,
    images: [Shikshamitra, Shiksha2 , Shiksha3 , Shiksha4],
    stats: {
      monthlyViews: 110,
      downloads: 280,
      likes: 75,
    },
    comments: [
      {
        id: 1,
        user: "Sophie Green",
        comment: "Great for educational management!",
      },
      {
        id: 2,
        user: "Jack Brown",
        comment: "Would love to see more features.",
      },
    ],
  },
  {
    _id: 4,
    title: "Artificial Edu",
    category: "Web Development",
    description: "Artificial Edu is an EdTech website designed to offer a variety of educational tools and resources. It provides interactive courses, tutorials, and learning materials across different subjects. The platform aims to make education accessible and engaging through the use of modern technologies and innovative teaching methods.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , Mongo DB",
    image: ArtificialEdu,
    images: [ArtificialEdu, AE2, AE3],

    stats: {
      monthlyViews: 1300,
      downloads: 350,
      likes: 90,
    },
    comments: [
      {
        id: 1,
        user: "Grace Wilson",
        comment: "Love the variety of educational tools!",
      },
      {
        id: 2,
        user: "Liam Moore",
        comment: "More interactive content would be great.",
      },
    ],
  },
  {
    _id: 5,
    title: "Erthpot",
    category: "Web Development",
    description: "Erthpot is a product-based website designed to showcase and sell a variety of products. It features a well-designed product catalog, detailed product descriptions, customer reviews, and an easy-to-use shopping cart. The website aims to provide a seamless shopping experience for customers while effectively displaying the products and their unique features.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , Mongo DB",
    image: Erthpot,
    images: [Erthpot, ERTH2, ERTH3],

    stats: {
      monthlyViews: 1400,
      downloads: 370,
      likes: 95,
    },
    comments: [
      {
        id: 1,
        user: "Aiden King",
        comment: "Well-designed product showcase.",
      },
      {
        id: 2,
        user: "Chloe Taylor",
        comment: "Very user-friendly.",
      },
    ],
  },

  // Games
  {
    _id: 6,
    title: "ADOS",
    category: "Games",
    description: "ADOS is a real-time multiplayer game developed using Construct3. The game offers engaging gameplay where players compete against each other in real-time. It features vibrant graphics, intuitive controls, and a competitive environment that keeps players hooked. ADOS aims to provide a thrilling gaming experience for players of all ages.",
    technologies: "Construct3 , Javascript",
    image: Ados,
    images: [Ados, AD1, AD2, AD3, AD4 ,AD5, AD41, AD42 ],

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
    _id: 7,
    title: "Hit The Black",
    category: "Games",
    description: "Hit The Black is a game built with JavaScript that offers an exciting gameplay experience. Players must hit the black targets while avoiding other colors. The game features simple yet challenging mechanics, making it addictive and fun to play. It aims to provide entertainment and improve players' hand-eye coordination.",
    technologies: "HTML , CSS , JavaScript",
    image: HitTheBlack,
    images: [HitTheBlack, HTB2],
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
    _id: 8,
    title: "Math Quiz Game",
    category: "Games",
    description: "Math Quiz Game is an educational game that challenges players with various math puzzles. It features a React frontend and an Express backend, offering a smooth and interactive experience. The game aims to improve players' math skills through fun and engaging quizzes, suitable for all ages.",
    technologies: "HTML , CSS , JavaScript",
    image: MathQuiz,
    images: [MathQuiz, MQ2],
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
  // {
  //   _id: 9,
  //   title: "Strategy Game",
  //   category: "Games",
  //   description: "Turn-based game using MERN stack.",
  //   technologies: "MERN stack",
  //   image: "https://via.placeholder.com/300x200?text=Strategy+Game",
  //   stats: {
  //     monthlyViews: 1000,
  //     downloads: 300,
  //     likes: 70,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Michael Wilson",
  //       comment: "Strategic depth is impressive. Well done!",
  //     },
  //     {
  //       id: 2,
  //       user: "Olivia Martinez",
  //       comment: "Could use more tutorials for beginners.",
  //     },
  //   ],
  // },
  // {
  //   _id: 10,
  //   title: "Card Game",
  //   category: "Games",
  //   description: "Multiplayer card game with React and Firebase.",
  //   technologies: "React, Firebase",
  //   image: "https://via.placeholder.com/300x200?text=Card+Game",
  //   stats: {
  //     monthlyViews: 900,
  //     downloads: 280,
  //     likes: 75,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "William Thompson",
  //       comment: "Fun game to play with friends!",
  //     },
  //     {
  //       id: 2,
  //       user: "Ella Davis",
  //       comment: "Would love to see more card sets in future updates.",
  //     },
  //   ],
  // },
  
  // Web Development
  {
    _id: 11,
    title: "PortFolio",
    category: "Web Development",
    description: "Portfolio is a full-featured website built with HTML, CSS, and JavaScript, showcasing animations and interactive elements. It serves as a personal portfolio to display projects, skills, and experiences. The site aims to create a professional online presence and effectively communicate the individual's capabilities to potential employers and clients.",
    technologies: "HTML , CSS , JS",
    image: PortFolio,
    images: [PortFolio, portfolioReact],
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
  // {
  //   _id: 12,
  //   title: "Social Media App",
  //   category: "Web Development",
  //   description: "Social networking site with real-time chat and notifications.",
  //   technologies: "React, Node.js, WebSocket",
  //   image: "https://via.placeholder.com/300x200?text=Social+Media+App",
  //   stats: {
  //     monthlyViews: 1800,
  //     downloads: 500,
  //     likes: 100,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Mia King",
  //       comment: "Love connecting with friends on this platform!",
  //     },
  //     {
  //       id: 2,
  //       user: "James Taylor",
  //       comment: "Notifications could be more customizable.",
  //     },
  //   ],
  // },
  // {
  //   _id: 13,
  //   title: "Blog Platform",
  //   category: "Web Development",
  //   description: "Blogging site with markdown support and user authentication.",
  //   technologies: "React, Node.js, Express, Markdown",
  //   image: "https://via.placeholder.com/300x200?text=Blog+Platform",
  //   stats: {
  //     monthlyViews: 2000,
  //     downloads: 600,
  //     likes: 110,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Sophia Brown",
  //       comment: "Easy to write and publish articles. Love it!",
  //     },
  //     {
  //       id: 2,
  //       user: "Daniel Clark",
  //       comment: "Markdown editor is very convenient.",
  //     },
  //   ],
  // },
  {
    _id: 14,
    title: "Portfolio Site",
    category: "Web Development",
    description: "Portfolio Site is a personal portfolio website built using HTML, CSS, JavaScript, and React. It showcases the individual's projects, skills, and achievements in a clean and organized manner. The site is designed to be visually appealing and easy to navigate, providing a comprehensive overview of the individual's professional profile.",
    technologies: "HTML, CSS , Javascript, React",
    image: portfolioReact,
    images: [portfolioReact, RPORT2, RPORT3],
    stats: {
      monthlyViews: 1500,
      downloads: 400,
      likes: 95,
    },
    comments: [
      {
        id: 1,
        user: "Olivia Moore",
        comment: "Clean design and easy navigation. Perfect for showcasing work.",
      },
      {
        id: 2,
        user: "Jacob Wilson",
        comment: "Could add more interactive elements.",
      },
    ],
  },
  // {
  //   _id: 15,
  //   title: "Task Manager",
  //   category: "Web Development",
  //   description: "Task and project management tool.",
  //   technologies: "React, Firebase",
  //   image: "https://via.placeholder.com/300x200?text=Task+Manager",
  //   stats: {
  //     monthlyViews: 1200,
  //     downloads: 350,
  //     likes: 90,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Isabella Harris",
  //       comment: "Helps me stay organized. Very useful app!",
  //     },
  //     {
  //       id: 2,
  //       user: "Ethan Parker",
  //       comment: "Integration with Firebase is seamless.",
  //     },
  //   ],
  // },
  {
    _id: 16,
    title: "Job Portal",
    category: "Web Development",
    description: "Job Portal, also known as TechJobs, is a job search and application site. It provides users with the ability to search for jobs, upload resumes, and apply directly through the platform. The site aims to connect job seekers with employers efficiently, offering features like job alerts, company profiles, and application tracking.",
    technologies: "JavaScript , ReactJs , Node Js , Express Js , Mongo DB",
    image: TechJobs,
    images: [TechJobs, portfolioReact],
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
  // {
  //   _id: 17,
  //   title: "Inventory Management System",
  //   category: "Software Development",
  //   description: "Desktop application for inventory tracking.",
  //   technologies: "Electron, React, Node.js",
  //   image: "https://via.placeholder.com/300x200?text=Inventory+System",
  //   stats: {
  //     monthlyViews: 900,
  //     downloads: 280,
  //     likes: 70,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Lucas Green",
  //       comment: "Saves a lot of time managing inventory.",
  //     },
  //     {
  //       id: 2,
  //       user: "Lily Anderson",
  //       comment: "Could use more customization options.",
  //     },
  //   ],
  // },
  // {
  //   _id: 18,
  //   title: "CRM System",
  //   category: "Software Development",
  //   description: "Customer relationship management system for sales management.",
  //   technologies: "React, Node.js, MongoDB",
  //   image: "https://via.placeholder.com/300x200?text=CRM+System",
  //   stats: {
  //     monthlyViews: 1000,
  //     downloads: 300,
  //     likes: 65,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Nathan White",
  //       comment: "Helps us keep track of client interactions effectively.",
  //     },
  //     {
  //       id: 2,
  //       user: "Eva Hall",
  //       comment: "Reporting features are very useful for analyzing sales data.",
  //     },
  //   ],
  // },
  // {
  //   _id: 19,
  //   title: "Point of Sale (POS)",
  //   category: "Software Development",
  //   description: "POS system for retail stores.",
  //   technologies: "React, Node.js, Express",
  //   image: "https://via.placeholder.com/300x200?text=POS+System",
  //   stats: {
  //     monthlyViews: 1100,
  //     downloads: 320,
  //     likes: 75,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Mason Thompson",
  //       comment: "Speeds up our checkout process significantly.",
  //     },
  //     {
  //       id: 2,
  //       user: "Avery Harris",
  //       comment: "Could use more integration options with other services.",
  //     },
  //   ],
  // },
  // {
  //   _id: 20,
  //   title: "Library Management System",
  //   category: "Software Development",
  //   description: "Software for managing library operations.",
  //   technologies: "Java, Spring Boot",
  //   image: "https://via.placeholder.com/300x200?text=Library+System",
  //   stats: {
  //     monthlyViews: 800,
  //     downloads: 250,
  //     likes: 60,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Harper Wright",
  //       comment: "Easy to check in and check out books.",
  //     },
  //     {
  //       id: 2,
  //       user: "Jackson Martinez",
  //       comment: "Could use more advanced search options.",
  //     },
  //   ],
  // },
  // {
  //   _id: 21,
  //   title: "Billing System",
  //   category: "Software Development",
  //   description: "Automated billing and invoicing system.",
  //   technologies: "Python, Django",
  //   image: "https://via.placeholder.com/300x200?text=Billing+System",
  //   stats: {
  //     monthlyViews: 950,
  //     downloads: 270,
  //     likes: 70,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Scarlett Garcia",
  //       comment: "Saves us a lot of time generating invoices.",
  //     },
  //     {
  //       id: 2,
  //       user: "Leo Parker",
  //       comment: "Could use more customization for invoice templates.",
  //     },
  //   ],
  // },
  // {
  //   _id: 22,
  //   title: "Healthcare Management System",
  //   category: "Software Development",
  //   description: "System for managing healthcare records and appointments.",
  //   technologies: "React, Node.js, PostgreSQL",
  //   image: "https://via.placeholder.com/300x200?text=Healthcare+System",
  //   stats: {
  //     monthlyViews: 1200,
  //     downloads: 300,
  //     likes: 80,
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       user: "Ruby Collins",
  //       comment: "Helps streamline patient appointments efficiently.",
  //     },
  //     {
  //       id: 2,
  //       user: "Evelyn Murphy",
  //       comment: "Would love to see a mobile app version for patients.",
  //     },
  //   ],
  // }
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
    "summary": "Hi, I'm Aman Sharma, a dedicated Full-Stack Developer specializing in the MERN stack. With a solid foundation in web development, game development, and software engineering, I have consistently delivered high-quality projects that meet and exceed client expectations. My expertise spans across HTML5, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. I am proficient in developing robust and scalable web applications, crafting engaging and interactive games using Construct 3, and managing complex software projects. My passion for technology and continuous learning drives me to stay updated with the latest trends and advancements in the tech industry, ensuring that I bring innovative solutions to the table. I am adept at problem-solving, collaborating with cross-functional teams, and committed to delivering exceptional user experiences.",
  education: [
    {
      institution: "AKTU University",
      degree: "Bachelor's of Technology Degree in Computer Science",
      year: 2022,
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
      company: "SRS Softwares",
      duration: "April 2024 - Present",
      role: "Full-Stack Software Developer",
      responsibilities: [
        "Developed a Smart Admin Dashboard",
        "Designed and implemented an CRM Platform",
        "Collaborated with cross-functional teams",
        "Ensured performance, quality, and responsiveness of applications",
        "Conducted code reviews and mentored junior developers",
      ],
    },
    {
      company: "Corplyx Technologies Pvt. Ltd",
      duration: "July 2023 - April 2024",
      role: "Full Stack Web Developer",
      responsibilities: [
        "Utilized the MERN Stack to code and script website functionalities and behaviors.",
        "Developed a comprehensive School Management System with 4 dashboards, including an admin dashboard.",
        "Designed and implemented 10+ projects, such as ELMS Software, ErthPot, E-Commerce platforms, music websites, and website clones."
      ],
    },
    {
      company: "Comely Enterprises Pvt. Ltd.",
      duration: "February 2023 - July 2023",
      role: "Game and App Developer",
      responsibilities: [
        "Utilized HTML5, CSS, and JavaScript to code and script game functionalities and behaviors.",
        "Developed and released applications using Construct 3 (Gaming Engine) and a wallet that achieved over 1000+ downloads.",
        "Designed and implemented 10+ diverse games, including Monster Truck Racing, Hungry Bird, Bubble Shooter, and Ados."
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
