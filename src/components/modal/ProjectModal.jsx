import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import './projectModal.css';

const ProjectModal = ({ project, onClose }) => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef(null);

    const defaultSteps = [
        { step: 1, title: t('modal.description') },
        { step: 2, title: t('modal.technologies') },
        { step: 3, title: t('modal.images') }
    ];

    useEffect(() => {
        if (project) {
            setActiveStep(1);
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsVisible(true), 50);
        }
    }, [project]);

    useEffect(() => {
        if (activeStep === 3 && galleryRef.current) {
            lightGallery(galleryRef.current, {
                selector: '.gallery-item',
                speed: 500,
                download: false,
                plugins: [lgThumbnail, lgZoom],
                thumbnail: true,
                animateThumb: true,
                showThumbByDefault: true,
                zoom: true,
                scale: 1.5,
                actualSize: true
            });
        }
    }, [activeStep]);

    const handleClose = () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => { onClose(); }, 400);
    };

    if (!project && !isVisible) return null;

    return (
        <div className={`modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={handleClose}>✖</button>
                <h2>{project.title}</h2>
                <div className="modal-content">
                    <div className="modal-sidebar">
                        {defaultSteps.map((step) => (
                            <div
                                key={step.step}
                                className={`modal-step ${activeStep === step.step ? 'active' : ''}`}
                                onClick={() => setActiveStep(step.step)}
                            >
                                {step.step}. {step.title}
                            </div>
                        ))}
                    </div>
                    <div className="modal-main">
                        <h3>{defaultSteps.find((step) => step.step === activeStep).title}</h3>
                        {/* Paso 1: Descripción */}
                        {activeStep === 1 && (
                            <p dangerouslySetInnerHTML={{ __html: project.description || t('modal.noDescription') }} />
                        )}
                        {/* Paso 2: Tecnologías */}
                        {activeStep === 2 && (
                            <div>
                                {Object.entries(project.technologies).map(([key, values]) =>
                                    values.length > 0 && (
                                        <div key={key} className="technology-section">
                                            <h4 className="technology-title">{t(`modal.${key}`)}</h4>
                                            <ul className="technology-list">
                                                {values.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                                {Object.values(project.technologies).every(arr => arr.length === 0) && (
                                    <p>{t('modal.noTech')}</p>
                                )}
                            </div>
                        )}
                        {/* Paso 3: Imágenes */}
                        {activeStep === 3 && (
                            <div ref={galleryRef} className="modal-gallery">
                                {project.gallery?.map((img, index) => (
                                    <a key={index} href={require(`../../assets/${img}`)} className="gallery-item">
                                        <img src={require(`../../assets/${img}`)} alt={`${t('modal.image')} ${index + 1}`} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;