import {
    mobile,
    backend,
    creator,
    web,
    python,
    java,
    racket,
    matlab,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    wonderland,
    sandalwood,
    waterloo,
    clc,
    plasp,
    personal,
    meso,
    caesar,
    password,
    threejs,
  } from "../../public/assets";
  
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
    {
      id: "resume",
      title: "Resume",
      link: "/public/logo.png"
    },
  ];
  
  const services = [
    {
      title: "Mathematics Student",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Active Learner",
      icon: backend,
    },
    {
      title: "Inventor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Racket",
      icon: racket,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Honours Mathematics Co-op Student",
      company_name: "University of Waterloo",
      icon: waterloo,
      iconBg: "#383E56",
      date: "Sep 2024 - Current",
      points: [
        "Building a strong foundation in calculus, linear algebra, and mathematical proofs through advanced coursework.",
        "Enhancing problem-solving skills through assignments, projects, and co-op experiences.",
        "Collaborating with peers and faculty to explore mathematical applications in various fields.",
      ],
    },
    {
      title: "Software Developer and Ambassador",
      company_name: "Canada Learning Code",
      icon: clc,
      iconBg: "#383E56",
      date: "Sep 2023 - July 2024",
      points: [
        "Established and led a high school coding club under the Canada Learning Code banner, mentoring over 30 students to create their own programming projects using provided resources.",
        "Secured first place in the Quarterly Challenge, earning a scholarship that allowed club members to complete the Grow with Google Cybersecurity Career Certificate program at no cost.",
        "Participated in an ambassador program designed to combine a passion for technology with community-building opportunities while gaining insights into the tech industry from leading professionals.",
        "Developed and implemented technical projects, including a Caesar cipher encryption tool and a password manager.",
      ],
    },
    {
      title: "IT Systems Developer Co-op",
      company_name: "PLASP",
      icon: plasp,
      iconBg: "#383E56",
      date: "July 2023 - Aug 2023",
      points: [
        "Designed and implemented a system for efficient tablet inventory management, ensuring accountability and reducing downtime.",
        "Automated data backup and reset procedures, enhancing the efficiency and reliability of tablet maintenance processes.",
        "Troubleshot software issues and performed system updates to optimize device performance and user experience.",
        "Gained practical experience in IT workflows and software systems, building a foundation for a future career in software development.",
      ],
    },
    {
      title: "Food and Beverage Associate",
      company_name: "Canada's Wonderland",
      icon: wonderland,
      iconBg: "#383E56",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Handled sales transactions efficiently through a POS system, ensuring accurate processing and timely service delivery.",
        "Managed administrative responsibilities, including preparing and submitting deposit packages with a high degree of accuracy and punctuality.",
        "Adapted service strategies to meet the evolving needs of guests, responding effectively to the dynamic nature of events on a monthly basis.",
        "Maintained a strong focus on customer satisfaction, consistently providing high-quality service in a fast-paced environment.",
      ],
    },
    {
      title: "High School Student",
      company_name: "Sandalwood Heights Secondary School",
      icon: sandalwood,
      iconBg: "#383E56",
      date: "Sep 2020 - Jun 2024",
      points: [
        "Completed Ontario Secondary School Diploma (OSSD) in the Business SHSM (Specialist High Skills Major) Program.",
        "Nominated for the prestigious Schulich Leader Scholarship, earning a $100,000 full-ride scholarship to York University for Computer Science, and recognized as the Top Ontario Scholar in Peel for achieving the highest academic average at Sandalwood.",
        "Graduated as Valedictorian of the Class of 2024, earning multiple academic awards including the Business Excellence Award, Highest Marks in various courses, and the Sandalwood Spirit Award for exemplary contributions to academics, school life, and community.",
        "Demonstrated leadership and dedication as a PDSB Student Volunteer, assisting elementary and middle school students in completing school work efficiently, and earning the Business SHSM Award of Excellence for exceptional engagement in the Business SHSM program.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a teacher who has had the privilege of working closely with Rathisan, I can attest to his exceptional academic achievements, leadership qualities, and commitment to community service. He demonstrates a drive for knowledge that is truly inspiring. His ability to grasp complex concepts and apply them creatively to real-world situations sets him apart as an exceptional thinker and problem solver.",
      name: "Mr. U",
      designation: "Teacher",
      company: "Sandalwood Heights SS",
    },
    {
      testimonial:
        "I had the pleasure of witnessing his exceptional leadership skills and proactive approach to problem-solving. Rathisan consistently took initiative to improve processes and drive efficiency within the team. He demonstrated strong collaboration abilities by working seamlessly with his team and ensuring that the group met critical deadlines.",
      name: "Mr. D' Souza",
      designation: "Manager, IT",
      company: "PLASP",

    },
    {
      testimonial:
        "From his time in my classes over these past few years, he has demonstrated an exceptional understanding of the concepts and skills of each course, and has proven to be a motivated, hardworking and conscientious student who always puts forth his best effort in all his work. Rathisan's motivation to learn and challenge himself extends beyond the classroom.",
      name: "Mr. S",
      designation: "Teacher",
      company: "Sandalwood Heights SS",

    },
  ];
  
  const projects = [
    {
      name: "Personal Website (Portfolio)",
      description:
        "A personal website that showcases my professional experiences, projects, and skills. This platform serves as an online portfolio, offering a detailed overview of my journey and accomplishments, providing a direct way for potential employers or collaborators to learn more about my work.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mesothelioma Diagnosis Prediction Using ML",
      description:
        "A machine learning-based project where I developed a predictive model to diagnose mesothelioma using Python. The proposed system of predicting mesothelioma consists of an artificial neural network (ANN) in machine learning using the Keras library and optimized using the “Adam” optimization algorithm.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: meso,
      source_code_link: "https://github.com/",
    },
    {
      name: "Caesar Cipher Encryption Website",
      description:
        "A web application that allows users to encrypt and decrypt messages using the Caesar cipher algorithm. The tool includes an encryption key feature, giving users the ability to adjust the shift value and securely encode and decode messages.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: caesar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Password Manager with Secure PIN",
      description:
        "A password management tool designed to store and organize passwords securely using a personal PIN. The application ensures that sensitive information is encrypted, helping users manage and safeguard their passwords for different online accounts in a safe and accessible way.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: password,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };