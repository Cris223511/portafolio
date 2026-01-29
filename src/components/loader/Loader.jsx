import React from 'react';
import { useTranslation } from 'react-i18next';
import './loader.css';

const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="loader__overlay">
      <div className="loader__spinner"></div>
      <h3 className="loader__text">{t('loader.text')}</h3>
    </div>
  );
};

export default Loader;