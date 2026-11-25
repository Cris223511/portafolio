import WORK_1 from '../assets/works/work_1.jpg';
import WORK_2 from '../assets/works/work_2.jpg';
import WORK_3 from '../assets/works/work_3.png';

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
        technologies: ["Angular", "TypeScript", "Spring Boot", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Scrum", "MVC/DAO/DTO"]
    },
    {
        id: 3,
        company: "Interseguro - Grupo Intercorp",
        position: "Full Stack Developer",
        period: "Junio 2026 - Noviembre 2026",
        location: "San Isidro, Lima",
        logo: WORK_3,
        shortDescription: "Desarrollo full stack en el sector seguros dentro del Grupo Intercorp. Participación en squads de IA Generativa y Banca y Seguros, con desarrollo de APIs REST, integración de servicios cloud en GCP, arquitectura de microservicios y adopción de IA generativa.",
        fullDescription: "Formé parte del equipo de tecnología de Interseguro, compañía de seguros del Grupo Intercorp. Durante el primer mes trabajé en el squad de IA Generativa (GenAI), donde participé en la optimización de prompts para el análisis automático de audios del call center, comparando las evaluaciones de la IA con las del supervisor humano para mejorar la precisión del sistema de evaluación de calidad de atención al cliente.\n\nA partir del segundo mes me integré al squad de Banca y Seguros como Full Stack Developer. Mi trabajo principal fue la gestión de tramas bancarias, que son archivos TXT estructurados con registros de ventas de pólizas que se envían a Interbank vía SFTP. Me encargué de modificar estructuras de tramas por solicitud del banco, agregar nuevas columnas, corregir envíos fallidos y mantener la integridad de los datos entre ambos sistemas. Los Cloud Runs ejecutaban jobs programados que generaban los archivos, los almacenaban en buckets de GCP y los enviaban al SFTP. Había tramas de altas y bajas, endoso, vida free, vida cash plus y vehicular, cada una con su propia estructura y frecuencia de envío. En cada cierre mensual me encargaba de verificar qué tramas no se habían entregado al banco y las reenviaba manualmente mediante una API que desarrollé para ese fin, consultando la base de datos de producción y armando los archivos con la estructura correspondiente.\n\nDesarrollé el módulo de cifrado de datos para los productos SOAT y viajes con encriptación AES-256 y Secret Manager en GCP. Diseñé la arquitectura completa con Digital Gateway, Pub/Sub y un Consumer que creé desde cero para registrar los datos cifrados en una tabla de bitácora. El flujo encriptaba tanto el request como el response de las APIs, y el Consumer recibía las notificaciones del Pub/Sub para insertar los registros descifrados en las tablas correspondientes y los cifrados en la bitácora de auditoría. Trabajé con tres repositorios principales para esta funcionalidad: Digital Out, Digital Web Gateway y el Consumer.\n\nParticipé en la planificación de nuevos productos como Benefit (seguro de viajes integrado con Interbank) y Shopstar (nuevo canal de venta), mapeando APIs existentes, definiendo cuáles se reutilizaban y cuáles se tenían que crear, y coordinando con equipos de Interbank, diseño UX/UI y arquitectura. Realicé correcciones en producción sobre primas y detalles de seguros viajeros, y mantuve comunicación directa con el equipo del banco para atender solicitudes de cambios en las tramas.\n\nEl flujo de trabajo seguía metodología Scrum con sprints, dailies, plannings, tickets en Jira y PRs revisados por el líder técnico. Los PRs pasaban por pipelines de pruebas unitarias y validación por IA antes de ser aprobados. El proceso de despliegue iba de feature a dev, test (donde los QA probaban), integrator (donde los usuarios de negocio validaban) y finalmente a main con un documento de pase. Trabajé con PostgreSQL, MongoDB (viajes) y SQL Server, gestionados desde DBeaver. Utilicé Cursor AI con MCPs conectados a base de datos, Jira y Confluence para agilizar el desarrollo. Modalidad híbrida con dos días presenciales por semana en las oficinas de San Isidro.",
        technologies: ["Go", "Node.js", "TypeScript", "Angular", "Python", "PostgreSQL", "MongoDB", "SQL Server", "GCP", "Docker", "Postman", "DBeaver", "Jira", "Git/GitHub", "Cursor AI", "Scrum"]
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
