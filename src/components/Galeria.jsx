import React, { useState } from 'react';
import logoConsul from '../assets/logo-consul-768.png';
import logoBrastemp from '../assets/brastemp.png';
import logoEletrolux from '../assets/electolux.png';
import logoLg from '../assets/lg.png';
import logoSamsung from '../assets/samsung 1.png';
import './Galeria.css';

const Galeria = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4; // Total de imagens disponíveis
  const visibleSlides = 3; // Quantas imagens são visíveis de cada vez
  const slidesToScroll = 2; // Quantas imagens mover por vez

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return totalSlides - visibleSlides;
      }
      return prev - slidesToScroll;
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      if (prev >= totalSlides - visibleSlides) {
        return 0;
      }
      return prev + slidesToScroll;
    });
  };

  return (
    <div className="galeria-marcas" id="marcas">
      <h2>Trabalhamos com as marcas</h2>
      <div className="carrossel">
        <button className="carousel-controls left" onClick={handlePrev}>←</button>
        <div className="container-img">
          <ul style={{ transform: `translateX(-${(currentSlide / totalSlides) * 100}%)` }}>
            <li><img src={logoConsul} alt="marca consul" /></li>
            <li><img src={logoBrastemp} alt="marca brastemp" /></li>
            <li><img src={logoEletrolux} alt="marca electrolux" /></li>
            <li><img src={logoSamsung} alt="marca samsung" /></li>
          </ul>
        </div>
        <button className="carousel-controls right" onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Galeria;
