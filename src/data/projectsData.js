const projectsData = [
    {
        id: 5,
        title: "Code Resolutions - Plataforma Educativa en Programación",
        description: "Esta plataforma educativa fue creada con el propósito de ayudar a estudiantes de ingeniería de sistemas y software en el aprendizaje de programación. Ofrece acceso a material didáctico, sesiones en vivo y recursos interactivos para fortalecer sus conocimientos.<br><br>Las clases se llevaban a cabo en Zoom y Google Meet, donde los alumnos podían participar en grupos o recibir apoyo individual en la resolución de sus trabajos. Además, se grababan las sesiones para su posterior consulta.<br><br>El sitio web funciona como un espacio informativo donde los estudiantes pueden conocer los cursos disponibles, acceder a material complementario y leer testimonios de otros alumnos sobre su experiencia.",
        technologies: {
            frontend: ["Conjunto de tecnologías utilizadas en la construcción y diseño de la interfaz de usuario:", "HTML", "CSS", "Bootstrap v5", "JavaScript"],
            backend: [],
            databases: [],
            developmentTools: ["Herramientas empleadas para el desarrollo y gestión del código fuente:", "VS Code", "GitHub / Git"]
        },
        image: require("../assets/proyect-5.jpg"),
        gallery: ["proyect-5.jpg", "portfolio2.jpg", "portfolio3.png"]
    },
    {
        id: 12,
        title: 'Tours Perú - Plataforma de Turismo y Reservas',
        description: "Con el objetivo de fomentar el turismo en Lima, se desarrolló un sitio web que facilita la reserva de paquetes turísticos completos, incluyendo hospedaje, almuerzo y recorridos guiados por los principales destinos de la ciudad. Los usuarios pueden explorar diversas opciones y obtener información detallada sobre cada paquete.<br><br>La interfaz intuitiva permite comparar itinerarios, ver imágenes y conocer recomendaciones antes de realizar la reserva. La coordinación de pagos se realizaba a través de WhatsApp con los administradores del servicio, quienes gestionaban la información en un sistema interno diseñado para organizar las reservas y solicitudes.",
        technologies: {
            frontend: ["Se implementó la interfaz con HTML, CSS, JavaScript y Bootstrap v5, desarrollando vistas dinámicas, modales y notificaciones con SweetAlert:", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: ["El backend fue desarrollado en PHP puro con API REST para la comunicación con el sistema administrativo:", "PHP", "API REST"],
            databases: ["La base de datos fue gestionada con MySQL Workbench que sirvió para optimizar el almacenamiento y la consulta de reservas:", "MySQL Workbench"],
            developmentTools: ["Herramientas empleadas para el desarrollo, pruebas y validación de los servicios:", "VS Code", "Postman", "JMeter", "GitHub / Git"]
        },
        image: require('../assets/proyect-12.jpg')
    },
    {
        id: 14,
        title: 'JobConnect - Plataforma para Búsqueda de Empleo',
        description: "Una plataforma digital fue diseñada para conectar a postulantes con empleadores en la búsqueda de nuevas oportunidades laborales. Los usuarios pueden crear perfiles, postularse a ofertas y enviar sus currículums directamente a las empresas interesadas.<br><br>El sistema optimiza la búsqueda de empleo a través de filtros avanzados que facilitan encontrar vacantes según experiencia, ubicación y sector de interés. Los empleadores también tienen la opción de gestionar postulaciones y contactar a los candidatos más adecuados.<br><br>Se añadieron herramientas clave para agilizar el proceso de contratación, como notificaciones sobre nuevas vacantes, recomendaciones personalizadas y un sistema de mensajería interna para la comunicación directa entre empresas y postulantes.",
        technologies: {
            frontend: ["El sitio web informativo se desarrolló con HTML, CSS, JavaScript, Bootstrap v5 y SASS para el responsive y maquetación de la información de datos:", "HTML", "CSS", "JavaScript", "Bootstrap v5", "SASS"],
            backend: ["PHP fue utilizado para manejar las peticiones y conectar con el sistema de gestión de reservas a través de API REST:", "PHP", "API REST"],
            databases: ["Los datos de usuarios y vacantes fueron gestionados en MySQL Workbench:", "MySQL Workbench"],
            developmentTools: ["Se utilizaron herramientas para el desarrollo y testeo de las API:", "VS Code", "Postman", "JMeter", "GitHub / Git"]
        },
        image: require('../assets/proyect-14.jpg')
    },
    {
        id: 1,
        title: 'Probisa - Planta y Producción de Asfaltos',
        description: "La empresa líder en la producción y comercialización de asfaltos requería una página web informativa para mostrar sus productos y procesos de fabricación. El sitio fue diseñado para reforzar su presencia en el sector de la construcción de carreteras e infraestructura vial.<br><br>Entre sus principales secciones, se incluyen la historia de la empresa, sus centros de distribución y un catálogo con las especificaciones de los distintos tipos de asfaltos. También se añadió un blog con artículos especializados en pavimentación y avances tecnológicos en el sector.<br><br>Para facilitar el contacto con clientes y contratistas, se implementó un formulario avanzado de consultas y cotizaciones. La optimización SEO y la integración con redes sociales ayudaron a mejorar la visibilidad del sitio.",
        technologies: {
            frontend: ["Se desarrolló una interfaz moderna utilizando Angular 14, SASS y Vue.js, optimizando la experiencia del usuario en la búsqueda de empleo:", "Angular 14", "SASS", "Vue.js"],
            backend: [],
            databases: [],
            developmentTools: ["VS Code fue la herramienta principal de desarrollo, mientras que GitHub se utilizó para el control de versiones:", "VS Code", "GitHub / Git"]
        }, image: require('../assets/proyect-1.jpg')
    },
    {
        id: 2,
        title: 'Revive - Agencia de Marketing Digital',
        description: "Una agencia de marketing digital necesitaba un sitio web informativo que reflejara sus servicios en estrategia digital, branding y posicionamiento web. La plataforma permite a los clientes conocer sus soluciones, explorar casos de éxito y contactar con expertos en marketing para recibir asesoría.<br><br>El sitio está estructurado en secciones donde se explican los servicios de la agencia, como SEO, campañas publicitarias, identidad de marca y estrategias de email marketing. Además, se incluyeron ejemplos de proyectos anteriores y testimonios de clientes satisfechos.<br><br>Se implementó un sistema de generación de leads mediante formularios optimizados para capturar información de potenciales clientes. El diseño responsivo y la navegación intuitiva garantizan una experiencia óptima en cualquier dispositivo.",
        technologies: {
            frontend: ["El desarrollo del sitio se realizó con Angular 14, SASS y Vue.js, garantizando una navegación rápida e intuitiva:", "Angular 14", "SASS", "Vue.js"],
            backend: [],
            databases: [],
            developmentTools: ["Herramientas utilizadas para la gestión del código y pruebas de funcionalidad:", "VS Code", "GitHub / Git"]
        }, image: require('../assets/proyect-2.jpg')
    },
    {
        id: 3,
        title: 'Wingss - Agencia Inmobiliaria y Corredora de Propiedades',
        description: "Para una corredora inmobiliaria, se desarrolló un portal especializado en la compra y arriendo de propiedades. La plataforma permite a los clientes explorar inmuebles con imágenes de alta calidad, descripciones detalladas y herramientas de búsqueda avanzada.<br><br>El sistema cuenta con filtros que facilitan la búsqueda de propiedades según ubicación, precio y características específicas. Cada ficha incluye información clave y un formulario de contacto directo con asesores inmobiliarios.<br><br>Se añadió un blog con artículos sobre tendencias del mercado inmobiliario y recomendaciones para compradores y vendedores. Además, se optimizó la velocidad de carga y la compatibilidad con dispositivos móviles para mejorar la experiencia del usuario.",
        technologies: {
            frontend: ["Para la interfaz se utilizó Astro como framework estático y Tailwind CSS para el diseño adaptable:", "Astro", "Tailwind CSS"],
            backend: [],
            databases: [],
            developmentTools: ["VS Code fue el IDE principal, y GitHub se usó para el control de versiones:", "VS Code", "GitHub / Git"]
        }, image: require('../assets/proyect-3.jpg')
    },
    {
        id: 19,
        title: 'Municipalidad Provincial de Tumbes - Plataforma Informativa',
        description: "Con el fin de mejorar la comunicación con la ciudadanía, una municipalidad provincial requería un portal digital que centralizara información sobre la gestión pública y los servicios municipales. La plataforma permite acceder a noticias, eventos y normativas locales.<br><br>El sitio cuenta con un diseño intuitivo y fácil de navegar, con secciones dedicadas a la historia del municipio, proyectos en desarrollo y programas gubernamentales. Se implementó un módulo de denuncias y sugerencias para que los ciudadanos puedan reportar problemas y enviar solicitudes.<br><br>También se incorporó un espacio para comunicados oficiales y anuncios de interés general. La integración con redes sociales amplió el alcance de la información y fortaleció la interacción con la comunidad.",
        technologies: {
            frontend: ["Se implementó una página informativa con HTML, CSS, JavaScript y Bootstrap v5, incorporando animaciones y alertas dinámicas:", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: [],
            databases: [],
            developmentTools: ["Git y GitHub fueron utilizados para el control de versiones, junto con VS Code para el desarrollo:", "VS Code", "GitHub / Git"]
        },
        image: require('../assets/proyect-19.jpg')
    },
    {
        id: 10,
        title: 'ChildMinder Alert - Sistema de Monitoreo para Niños con TDAH',
        description: "Un sistema innovador fue diseñado para el monitoreo de niños con TDAH mediante una pulsera inteligente que mide el pulso cardíaco, registra actividades y envía alertas a los padres o tutores. La plataforma permite visualizar en tiempo real los datos recolectados y recibir notificaciones sobre cambios en el comportamiento del niño.<br><br>El sistema cuenta con un panel de control que ofrece estadísticas detalladas, incluyendo ubicación, niveles de estrés y patrones de actividad. Además, se integró un sistema de alertas para notificar sobre posibles episodios de distracción o hiperactividad.<br><br>La plataforma permite personalizar los parámetros de monitoreo y establecer rutinas diarias. La interfaz fue optimizada para asegurar una experiencia intuitiva y accesible en cualquier dispositivo.",
        technologies: {
            frontend: ["Se construyó la interfaz con HTML, CSS, JavaScript y Bootstrap v5, utilizando SweetAlert para notificaciones y alertas interactivas:", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: ["PHP con API REST manejó la lógica del negocio y la comunicación con la base de datos:", "PHP", "API REST"],
            databases: ["El almacenamiento de datos fue gestionado con MySQL Workbench para poder asegurar la persistencia de información de monitoreo:", "MySQL Workbench"],
            developmentTools: ["VS Code fue la herramienta de desarrollo y Postman/JMeter se usaron para testear las API:", "VS Code", "Postman", "JMeter", "GitHub / Git"]
        },
        image: require('../assets/proyect-10.jpg')
    },
    {
        id: 11,
        title: 'CargaPlus - Gestión de Archivos en Linux y PHP',
        description: "Una plataforma de gestión documental fue creada para optimizar la carga y administración de archivos en entornos empresariales. El sistema facilita la organización, almacenamiento y compartición de documentos de manera segura, mejorando la eficiencia operativa dentro de las organizaciones.<br><br>La plataforma permite categorizar archivos según proyectos, clientes o departamentos, e incorpora herramientas de búsqueda avanzada para localizar documentos de manera rápida. También se añadieron funciones de control de acceso y permisos para garantizar que solo usuarios autorizados puedan visualizar y modificar archivos.<br><br>Para reforzar la seguridad, se implementaron medidas como cifrado de datos y copias de respaldo automáticas, asegurando la integridad y confidencialidad de la información almacenada.",
        technologies: {
            frontend: ["Se construyó la interfaz con HTML, CSS, JavaScript y Bootstrap v5, implementando modales y efectos visuales dinámicos:", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: ["PHP con API REST manejó la lógica de negocio para manejar la eficiencia y escalabilidad:", "PHP", "API REST"],
            databases: ["El almacenamiento de archivos se realizó en un entorno Debian 12, utilizando MySQL en phpMyAdmin y gestionado con Maven:", "Debian 12", "Linux", "MySQL (phpMyAdmin)", "Maven"],
            developmentTools: ["Se realizaron pruebas exhaustivas con Postman y JMeter para garantizar la estabilidad del sistema:", "VS Code", "Postman", "JMeter", "GitHub / Git"]
        },
        image: require('../assets/proyect-11.jpg')
    },
    {
        id: 13,
        title: 'Amaritia Vitality - Crema de Aguaje para Cuidado de la Piel',
        description: "Amaritia Vitality es una marca enfocada en el cuidado de la piel, desarrollando productos a base de aguaje, una fruta con propiedades hidratantes y antioxidantes. La página web informativa presenta su línea de cremas y protectores solares, destacando sus beneficios y su impacto en el cuidado dermatológico.<br><br>Se incluyeron secciones explicativas sobre los beneficios del aguaje, testimonios de usuarios y un catálogo detallado de los productos. Además, se agregó un apartado sobre el compromiso de la marca con el medio ambiente y el uso de ingredientes naturales en sus fórmulas.",
        technologies: {
            frontend: ["El sitio web informativo se desarrolló utilizando HTML, CSS, JavaScript y Bootstrap v5, y así asegurar un diseño atractivo y responsivo:", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: [],
            databases: [],
            developmentTools: ["Git y GitHub fueron utilizados para el control de versiones y gestión del código:", "VS Code", "GitHub / Git"]
        }, image: require('../assets/proyect-13.jpg')
    },
    {
        id: 4,
        title: 'Servizi Solari SRLS - Paneles Solares en Italia',
        description: "Una empresa dedicada a la instalación y mantenimiento de paneles solares en Italia requería una página web que reflejara su experiencia en el sector energético. El sitio presenta información detallada sobre sus soluciones fotovoltaicas, beneficios del uso de energía renovable y casos de éxito de proyectos anteriores.<br><br>Se desarrolló un portal intuitivo con una estructura clara que permite a los usuarios conocer los productos y servicios ofrecidos. También se implementó un formulario de contacto para facilitar la comunicación con clientes interesados en cotizar soluciones energéticas personalizadas.",
        technologies: {
            frontend: ["Se desarrolló la interfaz con HTML, CSS y JavaScript, usando Bootstrap v5 para el diseño responsivo y estructuración visual del sitio.", "HTML", "CSS", "JavaScript", "Bootstrap v5"],
            backend: [],
            databases: [],
            developmentTools: ["El proyecto fue desarrollado en VS Code y gestionado con GitHub para control de versiones.", "VS Code", "GitHub / Git"]
        },
        image: require('../assets/proyect-4.jpg')
    },
    {
        id: 7,
        title: 'Voz Animal Perú - Adopción de Mascotas',
        description: "Voz Animal Perú es una plataforma diseñada para promover la adopción de mascotas y brindarles una segunda oportunidad en un hogar adecuado. La aplicación móvil permite a los usuarios visualizar perfiles de animales en adopción, conocer sus historias y ponerse en contacto con los responsables de cada caso.<br><br>El sistema facilita la publicación de nuevas mascotas por parte de albergues y rescatistas independientes, ofreciendo filtros de búsqueda avanzados para encontrar la mejor compatibilidad entre adoptantes y animales. También se añadió una sección de consejos y guías sobre el proceso de adopción responsable.",
        technologies: {
            frontend: ["La aplicación móvil se diseñó con Java, mientras que la interfaz de administración se construyó con HTML, CSS, JavaScript y jQuery.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX"],
            backend: ["El backend se desarrolló en Java con NetBeans, implementando validaciones para usuarios y gestión de adopciones.", "Java"],
            databases: ["La base de datos almacena información de mascotas, usuarios y solicitudes de adopción.", "MySQL"],
            developmentTools: ["NetBeans fue utilizado para el desarrollo y GitHub para el control de versiones.", "NetBeans", "GitHub / Git"]
        },
        image: require('../assets/proyect-7.jpg')
    },
    {
        id: 9,
        title: 'Salvando Patitas - Plataforma de Adopción en C#',
        description: "Salvando Patitas es una plataforma digital enfocada en la adopción y rescate de mascotas que brinda herramientas para conectar a rescatistas con potenciales adoptantes. Los usuarios pueden registrar y publicar perfiles de animales, visualizar adopciones disponibles y contactar directamente a los responsables.<br><br>El sistema incluye un módulo de chat en vivo para facilitar la comunicación entre adoptantes y protectores de animales. Además, permite gestionar solicitudes de adopción y realizar seguimientos post-adopción para asegurar que las mascotas encuentren un hogar estable y seguro.",
        technologies: {
            frontend: ["Se construyó la interfaz con HTML, CSS, JavaScript y jQuery, usando Bootstrap v5 para la maquetación.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap v5"],
            backend: ["El sistema se desarrolló en C# con .NET para manejar las funcionalidades de adopción y gestión de mascotas.", "C#", ".NET"],
            databases: ["El almacenamiento de datos se realizó en MySQL Workbench.", "MySQL Workbench"],
            developmentTools: ["Visual Studio se utilizó como entorno de desarrollo y GitHub para el control de versiones.", "Visual Studio", "GitHub / Git"]
        },
        image: require('../assets/proyect-9.jpg')
    },
    {
        id: 8,
        title: 'Proyectos con Arduino - Gato Robótico y Sensores',
        description: "Dos proyectos innovadores en el ámbito de Arduino fueron desarrollados, uno enfocado en la creación de un gato robótico con sensores de movimiento y otro basado en un sistema de iluminación activado por detección de presencia. Estos proyectos exploran la integración de hardware y software para la automatización de tareas.<br><br>El primer proyecto utiliza motores y sensores para simular el comportamiento de un gato robótico interactivo, mientras que el segundo implementa sensores PIR para encender luces automáticamente al detectar movimiento. Ambos proyectos fueron diseñados con materiales accesibles y un enfoque educativo en electrónica y robótica.",
        technologies: {
            frontend: ["Se desarrollaron dos proyectos en C++ con Arduino, enfocados en robótica y automatización.", "C++", "Arduino"],
            backend: [],
            databases: [],
            developmentTools: ["Las pruebas se realizaron con Tinkercad, mientras que el diseño de circuitos se trabajó en Proteus.", "Arduino IDE", "Tinkercad", "Proteus"]
        },
        image: require('../assets/proyect-8.jpg')
    },
    {
        id: 15,
        title: 'Sistemas de Ventas e Inventario - Soluciones Empresariales',
        description: "Se desarrollaron distintos sistemas de ventas e inventario adaptados a las necesidades de empresas de diversos sectores. Estos sistemas permiten la gestión de productos, almacenes, compras, ventas y proformas para asegurar un control eficiente de los procesos comerciales.<br><br>Uno de los sistemas fue diseñado específicamente para una peluquería, incluyendo la administración de servicios y productos. Otro se enfocó en la gestión de inventarios sin la necesidad de un módulo de caja, mientras que un tercero se estructuró para empresas unitarias con un único almacén centralizado. Cada solución fue ajustada según las necesidades del cliente.",
        technologies: {
            frontend: ["Se implementó la interfaz con HTML, CSS, JavaScript y jQuery, junto con Bootstrap 4 para el diseño responsivo.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap 4"],
            backend: ["El sistema gestionó las operaciones a través de API REST para conectar con la base de datos.", "API REST"],
            databases: ["La información de productos y ventas se almacenó en MySQL Workbench.", "MySQL Workbench"],
            developmentTools: ["VS Code fue el entorno de desarrollo, con GitHub para versionado y JMeter para testeo de API.", "VS Code", "GitHub / Git", "JMeter"]
        },
        image: require('../assets/proyect-15.jpg')
    },
    {
        id: 16,
        title: 'San Andrés SAC - Tienda de Productos para Construcción',
        description: "San Andrés SAC requería un sistema de ventas con un sitio web informativo donde los clientes pudieran explorar su catálogo de productos para construcción. La plataforma permite visualizar detalles de cada producto, organizados por categorías, y contactar directamente con la empresa a través de WhatsApp.<br><br>El sistema de administración permite gestionar los productos en el catálogo, así como realizar ventas, compras y proformas. También se incluyeron reportes detallados en formato A4 y tickets para un control eficiente de las transacciones comerciales.",
        technologies: {
            frontend: ["Se desarrolló con HTML, CSS, JavaScript, jQuery y Bootstrap 4, asegurando compatibilidad en diferentes dispositivos.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap 4"],
            backend: ["Se trabajó con API REST para gestionar la lógica de negocio.", "API REST"],
            databases: ["El sistema utilizó MySQL Workbench para almacenar y manejar la información.", "MySQL Workbench"],
            developmentTools: ["VS Code fue el entorno de desarrollo y GitHub para control de cambios.", "VS Code", "GitHub / Git", "JMeter"]
        },
        image: require('../assets/proyect-16.jpg')
    },
    {
        id: 17,
        title: 'Sistema de Pagos Integrado con BCP',
        description: "Un sistema de pagos fue desarrollado para facilitar transacciones y gestionar comprobantes afiliados al BCP. La plataforma permite generar vouchers de pago que pueden presentarse como comprobantes válidos en las entidades bancarias.<br><br>El sistema permite registrar y gestionar pagos, con opciones de generación de reportes en formato A4 y tickets de validación. Su integración con los sistemas de pago del BCP optimiza la administración financiera y el control de transacciones realizadas por los usuarios.",
        technologies: {
            frontend: ["El sistema de pagos se diseñó con HTML, CSS, JavaScript y Bootstrap 4, agregando jQuery para una mejor interactividad.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap 4"],
            backend: ["Las operaciones financieras se gestionaron con API REST en PHP.", "PHP", "API REST"],
            databases: ["Se utilizó MySQL Workbench para almacenar los registros de pagos y transacciones.", "MySQL Workbench"],
            developmentTools: ["Se usó VS Code, GitHub y JMeter para testear la estabilidad de las API.", "VS Code", "GitHub / Git", "JMeter"]
        },
        image: require('../assets/proyect-17.jpg')
    },
    {
        id: 18,
        title: 'Almacenes SAC - Control de Inventarios y Logística',
        description: "Almacenes SAC necesitaba un sistema de control logístico para administrar la entrada y salida de productos en diferentes almacenes. La plataforma permite la gestión de inventarios, generación de tickets y reportes en formato A4 para obtener un seguimiento preciso de cada movimiento de stock.<br><br>El sistema también integra módulos para el manejo de clientes, proveedores y empleados para facilitar la administración de los procesos operativos. La interfaz optimizada permite a los usuarios registrar transacciones de manera rápida y eficiente.",
        technologies: {
            frontend: ["Se creó una interfaz optimizada con HTML, CSS, JavaScript y jQuery, usando Bootstrap 4 para diseño flexible.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap 4"],
            backend: ["El backend fue desarrollado en PHP con API REST.", "PHP", "API REST"],
            databases: ["Toda la gestión de datos se realizó con MySQL Workbench.", "MySQL Workbench"],
            developmentTools: ["Se utilizaron herramientas para desarrollo y testeo de API.", "VS Code", "GitHub / Git", "JMeter"]
        },
        image: require('../assets/proyect-18.jpg')
    },
    {
        id: 20,
        title: 'Boticas San Rafael - Gestión de Farmacias y Ventas',
        description: "Una plataforma digital fue creada para Boticas San Rafael con el fin de optimizar la gestión de ventas y administración de productos farmacéuticos. El sistema permite la venta de medicamentos y artículos de botica, con opciones de impresión de boletas en formato A4 y tickets de compra.<br><br>Además, se desarrolló un módulo de gestión de usuarios y roles que cuentan con el acceso restringido a cada funcionalidad del sistema. La plataforma facilita el control de inventario, y así garantizar un abastecimiento adecuado y un manejo eficiente de las transacciones comerciales.",
        technologies: {
            frontend: ["La plataforma fue desarrollada con HTML, CSS, JavaScript y jQuery, con Bootstrap 4 para un diseño adaptable.", "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap 4"],
            backend: ["El sistema fue construido en Laravel, optimizando la gestión de almacenes y productos.", "Laravel"],
            databases: ["El almacenamiento de datos se realizó en MySQL Workbench.", "MySQL Workbench"],
            developmentTools: ["VS Code fue el entorno de desarrollo y GitHub para control de versiones.", "VS Code", "GitHub / Git", "JMeter"]
        },
        image: require('../assets/proyect-20.jpg')
    },
    {
        id: 6,
        title: 'Análisis Estructural con Python y Matplotlib',
        description: "En el curso de Análisis Estructural, se desarrolló un proyecto de ingeniería civil para evaluar el comportamiento de vigas continuas mediante herramientas de análisis numérico y AI. El sistema permite calcular reacciones en los apoyos, momentos flectores y fuerzas cortantes para garantizar la estabilidad estructural.<br><br>El análisis se llevó a cabo mediante simulaciones gráficas y representación de datos con Matplotlib, permitiendo visualizar los efectos de las cargas en la estructura. Esta herramienta fue diseñada para apoyar a estudiantes e ingenieros en el estudio de estructuras bajo diversas condiciones de carga.",
        technologies: {
            frontend: ["Se utilizó Python con Tkinter para la interfaz, junto con Matplotlib para visualizar datos de análisis estructural.", "Python", "Tkinter", "Matplotlib"],
            backend: [],
            databases: [],
            developmentTools: ["El proyecto se trabajó en VS Code y se gestionó con GitHub.", "VS Code", "GitHub / Git"]
        },
        image: require('../assets/proyect-6.jpg')
    }
];

export default projectsData;
