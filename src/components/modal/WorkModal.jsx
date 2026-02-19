import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './workModal.css';

const WorkModal = ({ work, onClose }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (work) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsVisible(true), 50);
        }
    }, [work]);

    const handleClose = () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => onClose(), 400);
    };

    if (!work && !isVisible) return null;

    return (
        <div className={`work-modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="work-modal-container">
                <button className="work-modal-close" onClick={handleClose}>✖</button>

                <div className='work-modal-header'>
                    <div className='work-modal-logo'>
                        <img src={work.logo} alt={work.company} />
                    </div>
                    <div>
                        <h2>{work.company}</h2>
                        <h3>{work.position}</h3>
                        <p className='work-modal-period'>{work.period} | {work.location}</p>
                    </div>
                </div>

                <div className="work-modal-content">
                    <h4>{t('workModal.description')}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{work.fullDescription}</p>

                    <h4>{t('workModal.technologies')}</h4>
                    <div className='work-modal-tech-list'>
                        {work.technologies.map((tech, index) => (
                            <span key={index} className='work-modal-tech-badge'>{tech}</span>
                        ))}
                    </div>

                    {work.url && (
                        <a href={work.url} target='_blank' rel='noopener noreferrer' className='btn btn-primary work-modal-link'>
                            {t('work.visitWebsite')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkModal;