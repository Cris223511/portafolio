import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageToggle.css';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
        >
            {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
    );
};

export default LanguageToggle;