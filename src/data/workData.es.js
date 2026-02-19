import WORK_1 from '../assets/works/work_1.jpg';
import WORK_2 from '../assets/works/work_2.jpg';

const workDataES = [
    {
        id: 1,
        company: "Lidera Software S.A.C.",
        position: "Analista Programador",
        period: "Mayo 2022 - Agosto 2023",
        location: "San Borja, Lima",
        logo: WORK_1,
        shortDescription: "Desarrollo de sistema contable empresarial con Angular 14 y Spring Boot. Optimización del rendimiento en 40% mediante arquitectura limpia y consultas SQL eficientes.",
        fullDescription: "Desarrollé un sistema contable empresarial completo utilizando Angular 14 en el frontend y Spring Boot en el backend. Mi principal logro fue optimizar el rendimiento del sistema en un 40% mediante la implementación de consultas SQL más eficientes y una arquitectura limpia en capas (Controller, Service, Repository, Model).\n\nDiseñé e implementé APIs REST que eran consumidas por los diferentes módulos del sistema, utilizando Spring Data JPA para gestionar la persistencia de datos en MySQL. En el frontend trabajé con HttpClient, Observables y RxJS para manejar peticiones asincrónicas y el flujo de datos entre componentes.\n\nFormé parte activa del equipo ágil bajo metodología Scrum, participando en análisis de requerimientos, diseño de modelos de datos, dailies, refinamientos de sprint, reviews y retrospectivas. Apliqué patrones de diseño como MVC, DAO y DTO, siguiendo principios de Clean Code y SOLID para asegurar la mantenibilidad del sistema.\n\nGestioné el control de versiones con Git y GitHub, trabajando en ramas separadas para cada funcionalidad y realizando merges controlados. Elaboré documentación técnica detallada que facilitó la comprensión de la arquitectura y los flujos de datos implementados.",
        technologies: ["Angular 14", "TypeScript", "Spring Boot", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Scrum", "MVC/DAO/DTO"]
    },
    {
        id: 2,
        company: "Code Resolutions S.A.C.",
        position: "Fundador & Desarrollador",
        period: "2023 - Presente",
        location: "Lima, Perú",
        logo: WORK_2,
        url: "https://www.coderesolutions.com",
        shortDescription: "Empresa freelance de desarrollo de software que ofrece soluciones end-to-end para clientes corporativos. Desarrollo web, sistemas administrativos, apps móviles y despliegues en la nube.",
        fullDescription: "Fundé Code Resolutions como empresa freelance de desarrollo de software, donde ofrezco soluciones tecnológicas end-to-end para clientes corporativos. He desarrollado más de 15 proyectos que incluyen sitios web corporativos, sistemas administrativos, aplicaciones móviles (Android/iOS) y despliegues en la nube (AWS, Azure, Google Cloud).\n\nGané experiencia significativa trabajando de manera independiente en proyectos de diversos sectores: turismo, marketing digital, inmobiliarias, salud y tecnología. Cada proyecto me permitió aplicar diferentes stacks tecnológicos y arquitecturas según las necesidades del cliente.\n\nImplementé metodología Scrum adaptada para proyectos freelance, utilizando herramientas como Jira y Asana para la gestión de tareas y seguimiento de sprints. Esto me permitió mantener una comunicación clara con los clientes y entregar funcionalidades de manera iterativa.\n\nMe encargué de la gestión completa de proyectos desde el levantamiento de requerimientos, diseño de arquitectura, desarrollo, testing, despliegue hasta el mantenimiento post-lanzamiento. Esta experiencia me permitió desarrollar habilidades tanto técnicas como de gestión de proyectos.",
        technologies: ["React", "Angular", "Node.js", "PHP", "Laravel", "Python", "FastAPI", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS", "Azure", "Docker", "Git", "Jira", "Asana", "Scrum"]
    }
];

export default workDataES;