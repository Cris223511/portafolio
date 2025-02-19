import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'swiper/css';
import 'swiper/css/navigation';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './conferences.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const conferenceData = [
  { src: require("../../assets/conference_01.jpg"), title: "AWS Security Community LATAM - Ciberseguridad y mejores prácticas en la nube" },
  { src: require("../../assets/conference_02.jpg"), title: "The Founder Story GCP - Historias de éxito y estrategias en tecnología" },
  { src: require("../../assets/conference_03.jpg"), title: "Gobierno de Datos con Microsoft Purview - Gestión y seguridad de la información empresarial" },
  { src: require("../../assets/conference_04.jpg"), title: "Transformación Digital en Microsoft - Implementación de soluciones en la nube" },
  { src: require("../../assets/conference_05.jpg"), title: "CAMP 2023 - Innovación y estrategias en marketing digital" },
  { src: require("../../assets/conference_06.jpg"), title: "CAMP 2023 - Liderazgo y evolución en la era digital" },
  { src: require("../../assets/conference_07.jpg"), title: "Microsoft Build Colombia - Desarrollo y ecosistema de tecnología en LATAM" }
];

const Conferences = () => {
  const galleryRef = useRef(null);
  const swiperRef = useRef(null);
  const [lgInstance, setLgInstance] = useState(null);

  // inicializo LightGallery primero
  useEffect(() => {
    if (galleryRef.current) {
      // si ya existe una instancia, la destruimos antes de inicializar una nueva
      if (lgInstance) {
        lgInstance.destroy();
      }

      const instance = lightGallery(galleryRef.current, {
        selector: '.gallery-item',
        plugins: [lgThumbnail, lgZoom],
        thumbnail: true,
        zoom: true,
        download: false
      });

      setLgInstance(instance);
    }
  }, []);

  return (
    <section id='conferences'>
      <h5 style={{ paddingTop: '30px !important' }}>Algunas</h5>
      <h2 style={{ marginBottom: "8px !important" }}>Conferencias y Eventos</h2>
      <h5 style={{ marginBottom: "3rem !important" }}>donde he asistido</h5>
      <div className='container conferences__container'>

        {/* galería para LightGallery */}
        <div ref={galleryRef} className='gallery'>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              nextEl: '.carousel__btn.right',
              prevEl: '.carousel__btn.left'
            }}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className='conference__slider'
          >
            {conferenceData.map((img, index) => (
              <SwiperSlide key={index} className='conference__item'>
                <a href={img.src} className='gallery-item' data-sub-html={`<h4>${img.title}</h4>`}>
                  <img src={img.src} alt={img.title} />
                </a>
                <p className='conference__desc'>{img.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* botones de navegación */}
        <button className='carousel__btn left'>
          <FaChevronLeft />
        </button>
        <button className='carousel__btn right'>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Conferences;
