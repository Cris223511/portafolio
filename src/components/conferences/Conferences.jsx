import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Conferences = () => {
  const { t, i18n } = useTranslation();
  const galleryRef = useRef(null);
  const swiperRef = useRef(null);
  const [lgInstance, setLgInstance] = useState(null);

  // Cargar las conferencias desde el JSON de traducciones
  const conferences = t('conferences.events', { returnObjects: true });

  const conferenceData = [
    { src: require("../../assets/conference_01.jpg"), title: conferences[0] },
    { src: require("../../assets/conference_02.jpg"), title: conferences[1] },
    { src: require("../../assets/conference_03.jpg"), title: conferences[2] },
    { src: require("../../assets/conference_04.jpg"), title: conferences[3] },
    { src: require("../../assets/conference_05.jpg"), title: conferences[4] },
    { src: require("../../assets/conference_06.jpg"), title: conferences[5] },
    { src: require("../../assets/conference_07.jpg"), title: conferences[6] }
  ];

  // Inicializar LightGallery solo cuando cambia el idioma
  useEffect(() => {
    if (galleryRef.current) {
      // Destruir instancia anterior si existe
      if (lgInstance) {
        lgInstance.destroy();
      }

      // Crear nueva instancia
      const instance = lightGallery(galleryRef.current, {
        selector: '.gallery-item',
        plugins: [lgThumbnail, lgZoom],
        thumbnail: true,
        zoom: true,
        download: false
      });

      setLgInstance(instance);
    }

    // Cleanup al desmontar o cambiar idioma
    return () => {
      if (lgInstance) {
        lgInstance.destroy();
      }
    };
  }, [i18n.language]); // Solo cuando cambia el idioma

  return (
    <section id='conferences'>
      <h5 style={{ paddingTop: '30px' }}>{t('conferences.subtitle')}</h5>
      <h2 style={{ marginBottom: "8px" }}>{t('conferences.title')}</h2>
      <h5 style={{ marginBottom: "3rem" }}>{t('conferences.subtitle2')}</h5>
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