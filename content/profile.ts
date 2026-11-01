// Career facts come from the supplied résumé and subsequent corrections from Akash.
// Personal project links are retained from the original portfolio.
export const profile = {
  name: "Akash Kumar",
  url: "https://portfolio-dev-akash.netlify.app/",
  description:
    "Akash Kumar is a senior software engineer at Fleetx, building reliable APIs, enterprise integrations, and practical AI with Java, Spring Boot, Node.js, and Amazon Bedrock.",
};

export const caseStudies = [
  {
    kind: "ai",
    title: "SmartForms",
    category: "APPLIED AI · FLEETX · 2025",
    award: true,
    description:
      "A form should understand what someone means. I led the development of SmartForms to turn spoken or typed instructions into structured fields, connecting natural language with the actual records an application needs.",
    stack: ["Java 23", "Spring Boot", "Amazon Bedrock", "Vector DB"],
    ownership: "Team lead · LLM integration & entity resolution",
    outcome: "1st place · Fleetx GenAI Hackathon 2025",
    challenge:
      "Everyday forms ask people to translate their intent into fields, look up the right entities, and repeat familiar choices. The engineering challenge was to bridge that gap: understanding an instruction is only useful if the system can map it to valid field names and entity IDs.",
    contributions: [
      "Led Team Rocket and brought together natural-language parsing, entity lookup, and value suggestions into one form-filling workflow.",
      "Used Amazon Bedrock to extract fields such as billingParty and createdBy from speech or text, giving the application structured input it could work with.",
      "Connected extracted values to a vector database to resolve entity names to IDs, bridging the gap between how users describe a record and how the backend represents it.",
      "Applied frequency-based ranking to suggest likely values, supporting both speech-driven autofill and manual entry.",
    ],
    result:
      "The working solution won first place in the Fleetx GenAI Hackathon 2025. It demonstrated how LLMs, entity resolution, and application logic can work together to make routine data entry easier.",
  },
  {
    kind: "signature",
    title: "From paperwork to workflow",
    category: "PROCESS AUTOMATION · FLEETX",
    award: false,
    description:
      "Purchase orders used to move through manual document handling and follow-ups. I independently built and deployed a Zoho signing integration that connects document preparation, delivery, reminders, and expiry in one backend workflow.",
    stack: ["Java", "Spring Boot", "Zoho APIs", "Redis"],
    ownership: "End-to-end ownership · Development & deployment",
    outcome: "Automated signing lifecycle · Less manual follow-up",
    challenge:
      "Sending a document is just one part of a signing process. The system also needs authenticated access to the provider, the correct document template, timely follow-up, and a clear end to the signing window. Manual handling made those steps operational work.",
    contributions: [
      "Built Spring Boot APIs to authenticate with Zoho and manage tokens through Redis, giving the document workflow a reusable authentication layer.",
      "Automated document preparation and streamed signature templates directly into Zoho’s signature management system.",
      "Connected client notifications with reminders every five days and automatic document expiry after 45 days.",
      "Took the integration from implementation through deployment, bringing the purchase order lifecycle into a single automated process.",
    ],
    result:
      "Reduced the manual effort involved in preparing, sending, and following up on purchase orders. The workflow carries the document through its signing lifecycle without requiring the same repeated operational steps.",
  },
  {
    kind: "performance",
    title: "Faster APIs. Connected fleets.",
    category: "PERFORMANCE & INTEGRATION · FLEETX",
    award: false,
    description:
      "Fleet software depends on moving vehicle data between systems and serving it efficiently. My work combines Kafka-based integrations with backend performance improvements that make the APIs behind those experiences substantially faster.",
    stack: ["Java", "Spring Boot", "Kafka", "MySQL", "Redis"],
    ownership: "Backend development · Integrations & optimization",
    outcome: "60–70× API performance improvements across features",
    challenge:
      "Real-time vehicle visibility depends on data moving across third-party services and the application. At the same time, the APIs serving that data need efficient access patterns so backend work does not become a bottleneck for the product.",
    contributions: [
      "Built features to pull and push real-time vehicle data through Kafka, connecting external systems with the data used for vehicle visibility.",
      "Worked across backend features and APIs to improve performance, keeping the data flow and the request path in view together.",
      "Used database index optimization and pagination in financial APIs to make record retrieval more efficient and keep responses manageable.",
    ],
    result:
      "Improved API performance by 60–70× across features at Fleetx while expanding the platform’s real-time data integrations.",
  },
  {
    kind: "finance",
    title: "Financial logic, made usable",
    category: "FINANCIAL APIs · FLEETX",
    award: false,
    description:
      "I independently built EMI calculations and monthly installment breakdowns, translating financial requirements into backend models and APIs that make repayment information easier to retrieve and present.",
    stack: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis"],
    ownership: "Independent feature ownership · Models & APIs",
    outcome: "EMI calculations · Monthly breakdowns · Paginated access",
    challenge:
      "A financial feature has to connect the calculation with the way people consume its results. The backend needed to represent EMI information, provide a month-by-month breakdown, and retrieve the relevant records efficiently.",
    contributions: [
      "Designed the models and implemented EMI calculation features in Java and Spring Boot.",
      "Built monthly installment breakdowns so the application could present repayment information in a useful structure.",
      "Optimized database indexes and added API pagination to support efficient retrieval as the volume of records grows.",
    ],
    result:
      "Delivered the backend foundation for EMI and installment features, combining the financial logic with the data access needed to support the user-facing experience.",
  },
];

export const career = [
  {
    company: "Fleetx",
    monogram: "fx",
    role: "Senior Software Engineer · Backend",
    dates: "APR 2024 — PRESENT",
    points: [
      "Own backend features from business requirements through implementation and deployment, spanning purchase order automation, financial workflows, and third-party integrations.",
      "Independently built a Zoho signing workflow with Redis-backed token management, automated document delivery, five-day reminders, and 45-day expiry.",
      "Developed EMI calculations and monthly installment breakdowns, pairing the financial logic with optimized database indexes and paginated APIs.",
      "Built Kafka-based features for pulling and pushing real-time vehicle data, and improved API performance by 60–70× across multiple features.",
      "Led Team Rocket to first place in the 2025 GenAI Hackathon, combining Amazon Bedrock, vector-based entity resolution, and ranked suggestions in SmartForms.",
    ],
    stack: "Java / Spring Boot / MySQL / Kafka / Redis / AWS",
  },
  {
    company: "Celigo",
    monogram: "c",
    role: "Software Engineer 2",
    dates: "JAN 2023 — MAR 2024",
    points: [
      "Worked on the backend of integrator.io, where reliable communication and state handling support integrations between business applications.",
      "Enhanced WebSocket communication with saveState and cancelEvent messages, giving workflows more explicit control over saving state and cancelling events.",
      "Resolved 250+ software bugs through deep debugging across Node.js, MongoDB, and integrator.io, strengthening platform reliability and reducing recurring friction in development.",
    ],
    stack: "Node.js / MongoDB / WebSocket / Kafka / Splunk",
  },
  {
    company: "Optum UHG",
    monogram: "o",
    role: "Software Development Engineering Intern · Machine Learning",
    dates: "JUN 2022 — AUG 2022",
    points: [
      "Built a post-acute care prediction model that used daily activity patterns to explore whether a patient could be discharged within one to two weeks.",
      "Worked with accelerometer, magnetometer, and gyroscope data, mapping more than 300 human activities for model training.",
      "Used OpenSim to visualize motion and explored machine learning approaches including CNNs and support vector machines to connect sensor signals with meaningful activity patterns.",
    ],
    stack: "Python / CNNs / SVM / Jupyter / OpenSim",
  },
];

export const projects = [
  {
    title: "Real-time chat",
    description: "A multi-user messaging app connecting a React interface with a WebSocket-powered backend.",
    stack: "React · Node.js · WebSocket · MongoDB",
    url: "https://github.com/akash-musky/resources_server",
    demo: false,
  },
  {
    title: "Salon booking",
    description: "A collaborative full-stack project for discovering salons and booking available appointment slots.",
    stack: "React · Node.js · MySQL",
    url: "https://github.com/akash-musky/Online-Saloon-Booking-Management",
    demo: false,
  },
  {
    title: "Everyday tasks",
    description: "A lightweight task organizer for tracking to-dos, breaking work into subtasks, and marking progress.",
    stack: "Task management · Web app",
    url: "https://akash-musky.github.io/TodoAppweb/",
    demo: true,
  },
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    description: "Services, integrations, and the logic that keeps products running.",
    skills: ["Java", "Spring Boot", "Node.js", "JavaScript", "REST APIs", "WebSocket"],
  },
  {
    title: "Data & infrastructure",
    description: "Moving, storing, and serving data with reliability in mind.",
    skills: ["MySQL", "MongoDB", "Redis", "Kafka", "AWS", "Docker"],
  },
  {
    title: "AI & engineering tools",
    description: "Practical intelligence, delivery workflows, and production insight.",
    skills: ["Amazon Bedrock", "LLMs", "Python", "Vector DB", "CI/CD", "Jenkins", "Kibana", "Git"],
  },
];
