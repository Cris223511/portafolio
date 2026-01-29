import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './work.css';
import WORK from '../../assets/work.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Work = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <section id='work' className={isVisible ? 'visible' : 'hidden'}>
            <h5 style={{ paddingTop: '30px' }}>{t('work.subtitle')}</h5>
            <h2>{t('work.title')}</h2>
            <div className='container work__container'>
                <div className='work__content'>
                    <h3>{t('work.jobs.0.position')}</h3>
                    <p className='work__period'>{t('work.jobs.0.period')}</p>
                    <p className={`work__text ${expanded ? 'expanded' : ''}`} style={{ whiteSpace: 'pre-line' }}>
                        {t('work.jobs.0.description')}
                    </p>
                    <div className="work__toggle" onClick={() => setExpanded(!expanded)}>
                        {expanded ? <FaChevronUp /> : <FaChevronDown />}
                        <span>{expanded ? t('work.jobs.0.showLess') : t('work.jobs.0.showMore')}</span>
                    </div>
                </div>
                <div className={`work__me ${expanded ? 'sticky' : ''}`}>
                    <div className='work__me-image'>
                        <img unselectable='on' src={WORK} alt="Work" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;