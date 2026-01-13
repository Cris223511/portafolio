import React, { useState } from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: ['Java', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'C#', 'Go', 'C++', 'C', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      skills: ['Spring Boot', 'Laravel', 'Node.js', '.NET Core', 'FastAPI', 'Gin Framework', 'API REST', 'Spring Data JPA']
    },
    {
      title: 'Frontend Development',
      skills: ['Angular', 'React', 'Vue', 'Next.js', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Sass', 'jQuery']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'Firebase', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Git', 'CI/CD']
    },
    {
      title: 'Development Tools',
      skills: ['Postman', 'Figma', 'IntelliJ IDEA', 'VS Code', 'NetBeans', 'Eclipse', 'JMeter', 'SonarQube']
    },
    {
      title: 'Metodologías & Arquitecturas',
      skills: ['Scrum', 'Kanban', 'MVC', 'SOLID', 'Clean Code', 'Microservicios']
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id='experience'>
      <h5 style={{ paddingTop: '30px' }}>¿Qué habilidades tengo?</h5>
      <h2>Mis Habilidades</h2>

      <div className='container experience__carousel-container'>
        <button className='carousel__btn carousel__btn--prev' onClick={prevSlide} aria-label='Anterior'>
          <IoChevronBack />
        </button>

        <div className='carousel__track'>
          <div className='carousel__card'>
            <h3>{skillCategories[currentIndex].title}</h3>
            <div className='experience__content'>
              {skillCategories[currentIndex].skills.map((skill, idx) => (
                <article key={idx} className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>

        <button className='carousel__btn carousel__btn--next' onClick={nextSlide} aria-label='Siguiente'>
          <IoChevronForward />
        </button>

        <div className='carousel__dots'>
          {skillCategories.map((_, index) => (
            <button
              key={index}
              className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience