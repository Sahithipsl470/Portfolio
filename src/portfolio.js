// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sri Lakshmi Sahithi Portfolio",
  description:
    "Experienced software developer with 2+ years in full-stack and microservices development, strong programming foundation, leadership skills, and a results-driven approach. Skilled in collaboration, with excellent communication abilities.",
  og: {
    title: "Sri Lakshmi Sahithi Portfolio",
    type: "website",
    url: "http://srilakshmisahithi.com/",
  },
};

//Home Page
const greeting = {
  title: "Sri Lakshmi Sahithi Pabbathi",
  logo_name: "P S L Sahithi",
  subTitle:
    "Experienced software developer with 2+ years in full-stack and microservices development, strong programming foundation, leadership skills, and a results-driven approach. Skilled in collaboration, with excellent communication abilities.",
  resumeLink:
    "https://drive.google.com/drive/folders/1LiHQrK4c_kf7QMQASBJOiorVFeIUOw7s?usp=drive_link",
  portfolio_repository: "",
  githubProfile: "https://github.com/App-Dev-123",
};

const resumeLinks = {
  resumeLink:
    "https://drive.google.com/drive/folders/1LiHQrK4c_kf7QMQASBJOiorVFeIUOw7s?usp=drive_link"
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/App-Dev-123",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sahithi-psl/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:spabbath@buffalo.edu",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Microservice Development",
      fileName: "MicroservicesCloudImg",
      skills: [
        "⚡ Designing and implementing optimized payment routes within a six-microservice CI/CD pipeline, using Java data structures",
        "⚡ Debugging and resolving payment stoppages and defects across multiple microservices with tools like OpenShift, Kibana, Grafana, and Prometheus",
        "⚡ Optimizing payment routing and transaction flow, increasing data processing speed through regression model integration for trend forecasting and resource allocation",
        "⚡ Deploying and reconfiguring services across multiple countries, boosting payment flow",
        "⚡ Creating and managing unit tests for micro services, and utilizing NLP techniques to automate customer responses, enhancing support efficiency and ensuring rigorous code quality",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#005571",
          },
        },
      ],
    },
    {
      title: "Data Science, Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop full-stack solutions to transform 2D datasets into scalable 3D models, optimizing model generation time and enhancing capacity to process complex shapes",
        "⚡ Build and deploy machine learning models for payment trend forecasting, streamlining transaction routing and reducing processing delays",
        "⚡ Automate data pipelines for collection and preprocessing using web scraping and data augmentation, enabling efficient handling of large training datasets",
        "⚡ Optimize deep learning algorithms in CNN, RNN, and LSTM models to boost system performance",
        "⚡ Implement NLP solutions for automated customer support systems, increasing user engagement and operational efficiency",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "white",
            color: "#FFCA00",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "white",
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "white",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: {
            backgroundColor: "transparent",
            color: "#11557c",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed dynamic user interfaces using HTML, CSS, Bootstrap, JavaScript, and React, integrating features such as chatbots, interactive calendars, and personalized pages",
        "⚡ Built secure REST APIs with Spring Boot and Flask for back-end functionalities, implementing data validation, encryption, and secure user interactions",
        "⚡ Integrated front-end and back-end using Python Flask, incorporating third-party APIs like Google Maps for enhanced application functionality",
        "⚡ Created and managed databases with SQL and PostgreSQL, establishing seamless data connectivity with Java Database Connectivity (JDBC) for end-user storage",
        "⚡ Designed custom mobile application widgets with Flutter and Dart, focusing on intuitive layouts and user-centric design",
        "⚡ Developed a personal portfolio website to showcase projects and skills, built with HTML, CSS, and JavaScript",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "JDBC",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563D7C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/madhavisahi2000/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/madhavisahi2000",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/work",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University at Buffalo - SUNY",
      subtitle: "M.S. in Computer Science",
      logo_path: "ub_logo.png",
      alt_name: "University at Buffalo",
      duration: "August 2023 - December 2024",
      descriptions: [
        "⚡ Currently pursuing advanced coursework in Computer Science, focusing on topics like Data Intensive Computing, Machine Learning, Computer Security, and Algorithms.",
        "⚡ Additional coursework includes subjects like Operating Systems, Entrepreneurship, Data Models, Query Languages, Deep Learning, and Computer Vision.",
        "⚡ Maintaining a GPA of 4.0 while actively participating in academic projects in artificial intelligence and data science.",
      ],
      website_link: "https://www.buffalo.edu",
    },
    {
      title: "National Institute of Technology, Tiruchirappalli",
      subtitle:
        "B.Tech. in Production Engineering with a Minor in Computer Applications",
      logo_path: "nit_trichy_logo.png",
      alt_name: "NIT Trichy",
      duration: "August 2017 - May 2021",
      descriptions: [
        "⚡ Completed core coursework in Production Engineering, including subjects like Manufacturing Processes, Quality Control, Operations Management, and Industrial Automation.",
        "⚡ Pursued a minor in Computer Applications, gaining foundational knowledge in subjects like Data Structures, Algorithms, Database Management Systems, and Operating Systems.",
        "⚡ Achieved a top 10% rank in the class and was awarded the Merit cum Means Scholarship, along with recognition for academic excellence by the institute director.",
      ],
      website_link: "https://www.nitt.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/f4ea36d9-6248-4e7e-b667-225c61b63765",
      alt_name: "Amazon Web Services",
      color_code: "#FF9900",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Extra-Curricular Activities",
  description:
    "Experienced in software development, specializing in microservices, full-stack solutions, and machine learning. I have a proven track record of optimizing systems and leading teams to deliver impactful projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Standard Chartered Bank",
          company_url: "https://www.sc.com/en/",
          logo_path: "scb_logo.png",
          duration: "Aug 2021 - Aug 2023",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Developed optimized payment routes with a microservice CI/CD pipeline using Java, scaling to process 100+ payments daily. Enhanced payment processing to 200k transactions per day by integrating ML for failure prediction. Debugged issues in microservices with OpenShift, Kibana, and Grafana, ensuring 100k weekly transactions. Increased transaction speed by 40% and payment flow by 20% across 10 regions. Created unit tests covering 90k transactions/hour and used NLP techniques to enhance support automation and code quality.",
          color: "#008080",
        },
        {
          title: "Web Development Trainee",
          company: "Standard Chartered Bank",
          company_url: "https://www.sc.com/en/",
          logo_path: "scb_logo.png",
          duration: "July 2021 - Aug 2021",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Developed a responsive UI with HTML, CSS, JavaScript, and React, incorporating an NLP-based chatbot for an adaptive calendar feature, increasing engagement by 25%. Architected secure REST APIs with Spring Boot and Python for predictive analytics, enhancing security by 40%. Integrated SQL databases, implementing indexing to optimize data storage and response times by 30%.",
          color: "#5A9",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Corey Copani",
          company_url: "",
          logo_path: "corey_logo.png",
          duration: "May 2024 - Aug 2024",
          location: "New York, NY, USA",
          description:
            "Led a team of 5 to build a full-stack solution for converting 2D datasets into 3D models using Keras, PyTorch, and 3D CNNs, achieving improved 3D prediction accuracy. Leveraged LLMs and NLP techniques for real-time text-to-3D model generation. Optimized workflows by integrating model pruning and hyperparameter tuning, reducing model generation time by 20%. Developed a Flask-based frontend with JWT authentication and automated text summarization using Hugging Face models, cutting manual effort by 70%. Managed end-to-end development with Docker, Git, and Jenkins for CI/CD, enhancing system reliability by 30%.",
          color: "#4B0082",
        },
        {
          title: "App Development Intern",
          company: "Standard Chartered Bank",
          company_url: "https://www.sc.com/en/",
          logo_path: "scb_logo.png",
          duration: "May 2020 - July 2020",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Developed custom widgets with Google Maps integration using Flutter (Dart). Linked front and backend using Python Flask, incorporating third-party APIs like Google Maps. Constructed databases using Postgres and SQLite and documented processes on the Standard Chartered Official Page through Confluence.",
          color: "#FFD700",
        },
      ],
    },
    {
      title: "Extra-Curricular Activities",
      experiences: [
        {
          title: "Head of Content",
          company: "Akshara NITT",
          company_url:
            "https://www.linkedin.com/company/akshara-nitt/posts/?feedView=all", // Add URL if available
          logo_path: "akshara_nitt_logo.jpeg",
          duration: "Apr 2020 - May 2021",
          location: "NITT, India",
          description:
            "Led a content team to create and distribute engaging content for social media, event promotions, and college-wide newsletters. Contributed to significant growth in the student body’s engagement and visibility of Akshara NITT's initiatives.",
          color: "#4CAF50",
          skills:
            "Event Management · Hybrid Teamwork · Leadership · Content Creation · Digital Strategy · Public Relations · Social Media Marketing",
        },
        {
          title: "Pragyan - Team Manager",
          company: "Pragyan - NIT Trichy’s Techno-managerial Organisation",
          company_url: "https://www.pragyan.org/",
          logo_path: "pragyan_logo.png",
          duration: "Oct 2018 - Apr 2021",
          location: "NIT Trichy, India",
          description:
            "Organized and managed multiple technical workshops and events, focused on fostering student learning in fields like Machine Learning, Robotics, and Supply Chain Management. Worked with industry leaders to bring the best learning opportunities to campus.",
          color: "#FF5733",
        },
        {
          title: "Maximus - Team Manager",
          company: "Maximus NITT",
          company_url: "https://www.linkedin.com/company/maximus-nitt/",
          logo_path: "maximus_logo.jpeg",
          duration: "Sept 2018 - Apr 2021",
          location: "NIT Trichy, India",
          description:
            "Represented NIT Trichy in national math competitions, winning the Series Matrizer event and leading math-based workshops for students. Contributed to the organization of various symposiums, enhancing NITT's reputation as a leader in academic excellence.",
          color: "#FFC107",
        },
        {
          title: "Rotaract Club - Manager",
          company: "Rotaract Club of NITT",
          company_url:
            "https://www.facebook.com/profile.php?id=1481762912103070&_rdr",
          logo_path: "rotaract_logo.png",
          duration: "Oct 2018 - Apr 2020",
          location: "NIT Trichy, India",
          description:
            "Led the Rotaract Club's initiatives, organizing social impact activities such as blood donation camps, stem cell donation drives, and community welfare events. Fostered collaboration between students and faculty for social change.",
          color: "#9C27B0",
        },
        {
          title: "Orientation Team - Manager",
          company: "Orientation Team, NIT Trichy",
          company_url: "https://www.nitt.edu/home/students/orientation/",
          logo_path: "nit_trichy_logo.png",
          duration: "Mar 2018 - Mar 2019",
          location: "NIT Trichy, India",
          description:
            "Managed a 12-day orientation program for incoming freshmen, ensuring a smooth transition into college life. Organized various events such as guest lectures, workshops, and campus tours to familiarize students with the academic and cultural environment.",
          color: "#2196F3",
        },
        {
          title: "Aaveg - Manager",
          company: "Aaveg, NIT Trichy",
          company_url: "https://www.linkedin.com/company/aavegnitt/",
          logo_path: "aaveg_logo.jpeg",
          duration: "Sept 2017 - Sept 2018",
          location: "NIT Trichy, India",
          description:
            "Organized large-scale events, reaching over 3000 students with a team of 40 members. Led various activities aimed at enhancing student engagement and fostering a dynamic campus culture.",
          color: "#FF9800",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed and deployed various projects spanning web development, data science, and machine learning. These projects showcase my ability to build scalable solutions, optimize performance, and integrate advanced technologies like Python, PyTorch, and cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_me.jpg",
    description:
      "I am active across multiple platforms and am always eager to connect. Feel free to reach out, and I will respond within 24 hours. I specialize in ML, AI, Cloud infrastructure, full-stack development, and optimizing solutions for real-world applications.",
  },
  addressSection: {
    title: "Address",
    locality: "Buffalo, New York",
    country: "USA - 14221",
    streetAddress: "Apt 112, 1525 Amherst Manor Dr",
    location_map_link: "https://maps.app.goo.gl/asgHgZgFjwyviyfo9",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  resumeLinks,
};
