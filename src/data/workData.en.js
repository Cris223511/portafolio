import WORK_1 from '../assets/works/work_1.jpg';
import WORK_2 from '../assets/works/work_2.jpg';
import WORK_3 from '../assets/works/work_3.png';

const workDataEN = [
    {
        id: 1,
        company: "Lidera Software S.A.C.",
        position: "Programmer Analyst",
        period: "May 2022 - August 2023",
        location: "San Borja, Lima",
        logo: WORK_1,
        shortDescription: "Development of enterprise accounting system with Angular 14 and Spring Boot. Performance optimization by 40% through clean architecture and efficient SQL queries.",
        fullDescription: "I developed a complete enterprise accounting system using Angular 14 on the frontend and Spring Boot on the backend. My main achievement was optimizing system performance by 40% through implementation of more efficient SQL queries and a clean layered architecture (Controller, Service, Repository, Model).\n\nI designed and implemented REST APIs consumed by different system modules, using Spring Data JPA to manage data persistence in MySQL. On the frontend I worked with HttpClient, Observables and RxJS to handle asynchronous requests and data flow between components.\n\nI was an active part of the agile team under Scrum methodology, participating in requirements analysis, data model design, dailies, sprint refinements, reviews and retrospectives. I applied design patterns such as MVC, DAO and DTO, following Clean Code and SOLID principles to ensure system maintainability.\n\nI managed version control with Git and GitHub, working on separate branches for each functionality and performing controlled merges. I prepared detailed technical documentation that facilitated understanding of the architecture and implemented data flows.",
        technologies: ["Angular", "TypeScript", "Spring Boot", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Scrum", "MVC/DAO/DTO"]
    },
    {
        id: 3,
        company: "Interseguro - Grupo Intercorp",
        position: "Full Stack Developer",
        period: "June 2026 - November 2026",
        location: "San Isidro, Lima",
        logo: WORK_3,
        shortDescription: "Full stack development in the insurance sector within Grupo Intercorp. Participation in Generative AI and Banking and Insurance squads, with REST API development, GCP cloud service integration, microservices architecture and generative AI adoption.",
        fullDescription: "I was part of the technology team at Interseguro, an insurance company within Grupo Intercorp. During the first month I worked on the Generative AI (GenAI) squad, where I participated in prompt optimization for automatic call center audio analysis, comparing AI evaluations against human supervisor assessments to improve the accuracy of the customer service quality evaluation system.\n\nFrom the second month I joined the Banking and Insurance squad as Full Stack Developer. My main work involved managing bank transaction files, which are structured TXT files containing policy sales records sent to Interbank via SFTP. I was responsible for modifying file structures upon bank request, adding new columns, fixing failed transmissions and maintaining data integrity between both systems. Cloud Runs executed scheduled jobs that generated the files, stored them in GCP buckets and sent them to the SFTP. There were files for new policies and cancellations, endorsements, vida free, vida cash plus and vehicular insurance, each with its own structure and delivery frequency. At each monthly closing I verified which files had not been delivered to the bank and resent them manually through an API I developed for that purpose, querying the production database and building the files with the corresponding structure.\n\nI developed the data encryption module for SOAT and travel products using AES-256 encryption with Secret Manager on GCP. I designed the complete architecture with Digital Gateway, Pub/Sub and a Consumer service I built from scratch to record encrypted data in an audit table. The flow encrypted both the request and response of the APIs, and the Consumer received Pub/Sub notifications to insert decrypted records in the corresponding tables and encrypted ones in the audit log. I worked with three main repositories for this functionality: Digital Out, Digital Web Gateway and the Consumer.\n\nI participated in planning new products such as Benefit (travel insurance integrated with Interbank) and Shopstar (new sales channel), mapping existing APIs, defining which could be reused and which needed to be created, and coordinating with Interbank teams, UX/UI design and architecture. I made production fixes on premiums and travel insurance details, and maintained direct communication with the bank team to handle file structure change requests.\n\nThe workflow followed Scrum methodology with sprints, dailies, plannings, Jira tickets and PRs reviewed by the tech lead. PRs went through unit testing pipelines and AI validation before approval. The deployment process went from feature to dev, test (where QA tested), integrator (where business users validated) and finally to main with a deployment document. I worked with PostgreSQL, MongoDB (travel) and SQL Server, managed from DBeaver. I used Cursor AI with MCPs connected to databases, Jira and Confluence to streamline development. Hybrid modality with two in-office days per week at the San Isidro offices.",
        technologies: ["Go", "Node.js", "TypeScript", "Angular", "Python", "PostgreSQL", "MongoDB", "SQL Server", "GCP", "Docker", "Postman", "DBeaver", "Jira", "Git/GitHub", "Cursor AI", "Scrum"]
    },
    {
        id: 2,
        company: "Code Resolutions S.A.C.",
        position: "Founder & Developer",
        period: "2023 - Present",
        location: "Lima, Peru",
        logo: WORK_2,
        url: "https://www.coderesolutions.com",
        shortDescription: "Freelance software development company offering end-to-end solutions for corporate clients. Web development, administrative systems, mobile apps and cloud deployments.",
        fullDescription: "I founded Code Resolutions as a freelance software development company, where I offer end-to-end technological solutions for corporate clients. I have developed over 15 projects including corporate websites, administrative systems, mobile applications (Android/iOS) and cloud deployments (AWS, Azure, Google Cloud).\n\nI gained significant experience working independently on projects from various sectors: tourism, digital marketing, real estate, health and technology. Each project allowed me to apply different technology stacks and architectures according to client needs.\n\nI implemented Scrum methodology adapted for freelance projects, using tools like Jira and Asana for task management and sprint tracking. This allowed me to maintain clear communication with clients and deliver functionalities iteratively.\n\nI handled complete project management from requirements gathering, architecture design, development, testing, deployment to post-launch maintenance. This experience allowed me to develop both technical and project management skills.",
        technologies: ["React", "Angular", "Node.js", "PHP", "Laravel", "Python", "FastAPI", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS", "Azure", "Docker", "Git", "Jira", "Asana", "Scrum"]
    }
];

export default workDataEN;
