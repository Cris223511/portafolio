import WORK_1 from '../assets/works/work_1.jpg';
import WORK_2 from '../assets/works/work_2.jpg';

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
        technologies: ["Angular 14", "TypeScript", "Spring Boot", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Scrum", "MVC/DAO/DTO"]
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