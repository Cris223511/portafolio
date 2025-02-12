import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader__overlay">
      <div className="loader__spinner"></div>
      <h3 className="loader__text">Cargando...</h3>
    </div>
  );
};

export default Loader;
