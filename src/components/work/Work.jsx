import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './work.css';
import WorkModal from '../modal/WorkModal';
import workDataES from '../../data/workData.es';
import workDataEN from '../../data/workData.en';

const Work = () => {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);

    const workData = i18n.language === 'en' ? workDataEN : workDataES;

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    const openModal = (work) => {
        setSelectedWork(null);
        setTimeout(() => setSelectedWork(work), 50);
    };

    const closeModal = () => setSelectedWork(null);

    return (
        <section id='work' className={isVisible ? 'visible' : 'hidden'}>
            <h5 style={{ paddingTop: '30px' }}>{t('work.subtitle')}</h5>
            <h2>{t('work.title')}</h2>

            <div className='container work__timeline-container'>
                <div className='work__timeline'>
                    {workData.map((work) => (
                        <div key={work.id} className='work__timeline-item'>
                            <div className='work__timeline-date'>
                                <span className='work__date-badge'>{work.period}</span>
                            </div>
                            <div className='work__timeline-dot'></div>
                            <div className='work__timeline-content'>
                                <div className='work__logo'>
                                    <img src={work.logo} alt={work.company} />
                                </div>
                                <h3>{work.company}</h3>
                                <h4>{work.position}</h4>
                                <p className='work__location'>{work.location}</p>
                                <p className='work__short-desc'>{work.shortDescription}</p>
                                <div className='work__buttons'>
                                    <button className='btn btn-primary' onClick={() => openModal(work)}>
                                        {t('work.viewMore')}
                                    </button>
                                    {work.url && (
                                        <a href={work.url} target='_blank' rel='noopener noreferrer' className='btn work__website-btn'>
                                            {t('work.visitWebsite')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedWork && <WorkModal work={selectedWork} onClose={closeModal} />}
        </section>
    );
};

export default Work;