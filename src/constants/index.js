import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "I am passionate about engineering software solutions, having proficiency in many domains, including full-stack web development in Android applications. My skills include a full range of languages such as C/C++, Java, Dart, Python, SQL, NoSQL, and Firebase both for the front and back ends, and creating seamless applications. My experience also includes cloud platforms like AWS, as well as frameworks such as React, Node.js, and Spring Boot. Constantly looking for new challenges, I am eager to apply this knowledge in projects that are meaningful and advance the frontier of innovation.";

export const ABOUT_TEXT = "I am currently a third-year student pursuing Computer Science and Engineering at D Y Patil College of Engineering, Akurdi, Pune. Previously, I completed my polytechnic studies in 'Inormation Technology' at RSM Polytechnic, Nashik. My journey in technology has been driven by curiosity and a relentless pursuit of knowledge. With a strong foundation in C/C++, Java, Pyhton , SQL, MongoDB, HTML, CSS, JS and React, I specialize in full-stack development, proficient in both front-end and back-end technologies. I am passionate about solving complex problems through innovative and efficient solutions.I am eager to apply my skills to real-world projects and contribute to impactful advancements in the tech industry.";

export const EXPERIENCES = [
  
  {
    year: "June(2022) - Aug(2022)",
    role: "Intern as Jr.Cloud Engineer",
    company: "Vsys Pvt. Ltd",
    description: ["Developed Yogi Machinery Tracker using Flutter and Firebase to digitize machinery operation records.",
      "Implemented role-based authentication, real-time data storage, and admin-controlled user registration.",
      "Designed an intuitive UI for seamless machinery data entry and report generation.",
    ],
    technologies: ["HTML", "CSS", "Vue.js", "AWS","Lambda","EC2 Instance","S3 Bucket"],
  },
  {
    year: "Dec(2024) - Feb(2025)",
    role: "Intern as Flutter Developer",
    company: "YOGI GROUP",
    description: "Served as a server manager and network administrator during my internship at MeriTrac, successfully conducting the MHT-CET Exam. Led the daily management of CET servers, ensuring smooth operations throughout the examination period. Managed LAN and WAN administration, performing routine maintenance, troubleshooting, and providing ongoing support for network infrastructure.",
    technologies: ["Flutter ","Firebse","Firestore","Dart","Android Studio"],
  },
  
];

export const PROJECTS = [
  {
    title: "HAWK EYE",
    image: project1,
    description:
      "Developed HAWK AI, a lightweight, palm-sized quadcopter using AI/ML for object tracking. Integrated with an in-built camera, it provides a live feed via Wi-Fi to a mobile app, offering multiple tracking modes. Utilized Drone tech, 3D Printing, Android Development, and AI/ML.",
    technologies: ["Android","Java","Python","IOT","SQL","Image Processign Algorithms"],
  },
  {
    title: "YOGI Machinery Tracker App",
    image: project2,
    description: [
      "Developed a Flutter-based app to digitize machinery tracking, replacing manual logs.",
      "Integrated Firebase Authentication with role-based access for admins and operators.",
      "Designed an intuitive UI for logging machinery use, diesel consumption, and reports.",
      "Optimized real-time data handling using Firestore and Cloud Functions."
    ],
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Firestore"],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 8657218488 ",
  email: "gauravkatheoff@gmail.com",
};
