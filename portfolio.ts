import emoji from "react-easy-emoji"
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections"

export const greetings: GreetingsType = {
  name: "Akash Kumar",
  title: "Hi all, I'm Akash Kumar",
  description: "I am a seasoned Software Engineer 2 at Celigo, specializing in advancing integration platform as a service (iPaaS) and software as a service (SaaS) solutions. My expertise lies in ensuring seamless data flow and automation across diverse applications and systems, leveraging technologies like Node.js, JavaScript, MongoDB, Docker, and various cloud services. I excel in crafting scalable and reliable backend architectures, optimizing file services, and enhancing WebSocket communication. My background includes valuable experience gained from internships at Celigo and Optum, where I applied machine learning and deep learning techniques to analyze sensor data for human activity recognition. With a solid foundation in C, C++, and data structures/algorithms from my Bachelor's degree in Computer Science, acquired at the National Institute of Technology Delhi, I am dedicated to advancing the software engineering field. I am passionate about continuous learning, collaboration, accountability, and delivering high-impact results.",
  resumeLink: "https://drive.google.com/file/d/1pV1nILGrOl7_urq6X-2OoIFJlhm_MXgj/view?usp=drive_link",
}

export const openSource = {
  githubUserName: "akash-musky",
}

export const contact = {}

export const socialLinks: SocialLinksType = {
  email: "mailto:professionalakash123@gmail.com",
  linkedin: "https://www.linkedin.com/in/akash-kumar-2a61191a6/",
  github: "https://github.com/akash-musky",
  instagram: "https://www.instagram.com/akash_1907_kumar/"
}

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Enthusiastic backend developer with an insatiable curiosity for exploring diverse technology stacks.",
  data: [
    {
      title: "Software Engineer 2",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ as a backend developer have been working on enahncing features which involves multiple message and bug fixing."),
        emoji("⚡ worked  on microservices architecture to migrate code from monolithic architecture"),
        emoji("⚡ good in debugging and finding the root cause of the problem and have a good idea on CI/CD pipelines"),
        emoji("⚡ RestApi automation and component testing on some of the webservices adaptor"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "NodeJs",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
      ],
    },
  ],
}

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Node.Js/Backend Development",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
  {
    Stack: "Machine Learning", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  }
]

export const educationInfo: EducationType[] = [
  {
    schoolName: "National Institute Of Technology, Delhi",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "Aug 2019 - May 2023",
    desc: "",
    CGPA: "7.51",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Ram Lakhan Sigh Yadav College, Bakhtiyarpur Patna Bihar-803212",
    subHeader: "I.Sc",
    duration: "Aug 2017 - May 2019",
    desc: "",
    percentage: "85",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Shri Ganesh High School, Bakhtiyarpur Patna Bihar-803212",
    subHeader: "Matriculation",
    duration: "Aug 2016 - May 2017",
    desc: "",
    percentage: "90",
    descBullets: [], // Array of Strings
  },
]

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer 2",
    company: "Celigo",
    companyLogo: "/img/icons/common/celigo1.png",
    date: "Jan 2023 - Dec 2023",
    desc: "As a pivotal member of the Microservice team, I spearheaded the seamless migration from monolith to microservices, showcasing unparalleled expertise in Node.js and MongoDB. My optimization efforts extended to key features, including S3 key retrieval and efficient handling of blob requests, as well as the refinement of critical processes such as Processaggregatedimport and Processbatchimport. In WebSocket communication protocol, I excelled in managing multiple message scenarios, boosting performance, and introducing essential features like savestate and cancelevent. Leveraging my debugging prowess, I resolved 25 to 30 software bugs, contributing significantly to software reliability within the Agile Scrum methodology. As an Agile Scrum team member, I automated REST APIs, prioritizing clean code design, and substantially increased component test code coverage from 57% to an impressive 91%, all while adeptly managing source code with Git.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Optum UHG",
    companyLogo: "/img/icons/common/optum.jpg",
    date: "June 2022 - Aug 2022",
    desc: "Led the development of the Post-Acute Care questionnaire form, a pioneering project focused on leveraging daily human activity recognition. The form utilizes sensor data from IoT devices, including accelerometers, gyroscopes, magnetometers, etc., to automatically complete relevant questions. Implemented a cutting-edge simulator, OpenSim, for visualizing human activity. Employed diverse machine learning and deep learning techniques, notably Convolutional Neural Networks (CNNs), to enhance the accuracy and efficiency of activity recognition. This groundbreaking initiative represents a fusion of sensor technology, machine learning, and healthcare, providing valuable insights into post-acute care monitoring.",
  },
  {
    role: "Competitive Prgoramming",
    company: "Codeforces",
    companyLogo: "/img/icons/common/cp.png",
    date: "Aug 2020 - Aug 2023",
    desc: "I have been participating in more than 150+ coding contest on different platform like codechef, leetcode, codeforces and geeksofgeeks to increase my problem solving skills.",
  }
]

export const projects: ProjectType[] = [
  {
    name: "Chat WebApp",
    desc: "Built a chat website using technologies such as Node.js, React.js, WebSocket, and MongoDB. The project enables multi-user messaging in a web app.",
    link: "https://github.com/akash-musky/resources_server",
  },
  {
    name: "Salon Booking",
    desc: "Collaborated with 3 team members to create a salon booking web app using technologies such as React.js,Node.js, and MySQL. The project allows users to discover and book salon slots based on availability.",
    link: "https://github.com/akash-musky/Online-Saloon-Booking-Management",
  },
  {
    name: "To Do List",
    desc: "Todo List is a bucket list in which user can add there task and subtask according to what they have to do for upcoming days and what they have did in the past. They can also strikethrough the task once it was completed.",
    link: "https://akash-musky.github.io/TodoAppweb/",
  },
  {
    name: "portfolio-dev",
    desc: "Software Developer Portfolio  built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/akash-musky/portfolio-dev",
    link: "https://6585ffabe78d1912abc17fcd--jocular-biscotti-c76634.netlify.app/",
  }
]

export const feedbacks: FeedbackType[] = []

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Akash Kumar",
  description: greetings.description,
  author: "Akash Kumar",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://6585ffabe78d1912abc17fcd--jocular-biscotti-c76634.netlify.app/",
  keywords: [
    "Akash",
    "Akash Kumar",
    "@akash-musky",
    "akash-musky",
    "Portfolio",
    "Akash Portfolio ",
    "Akash Kumar Portfolio",
  ]
}
