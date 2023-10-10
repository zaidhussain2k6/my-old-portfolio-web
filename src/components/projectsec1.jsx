import React from 'react';

const projectsec1 = () => {
  const slides = [
    'https://via.placeholder.com/800x400/FF5733/FFFFFF',
    'https://via.placeholder.com/800x400/3498DB/FFFFFF',
    'https://via.placeholder.com/800x400/2ECC71/FFFFFF',
  ];

  const sliderStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  };

  const slideStyle = {
    width: '100%',
    maxWidth: '800px',
  };

  return (
    <div style={sliderStyle}>
      {slides.map((slide, index) => (
        <div key={index} style={slideStyle}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default projectsec1