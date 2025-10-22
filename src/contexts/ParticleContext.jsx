import React, { createContext, useContext, useState } from 'react';

const ParticleContext = createContext();

export const useParticles = () => {
  const context = useContext(ParticleContext);
  if (!context) {
    throw new Error('useParticles must be used within a ParticleProvider');
  }
  return context;
};

export const ParticleProvider = ({ children }) => {
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [particleCount, setParticleCount] = useState(50);
  const [particleSpeed, setParticleSpeed] = useState(1);

  const toggleParticles = () => {
    setParticlesEnabled(prev => !prev);
  };

  const updateParticleCount = (count) => {
    setParticleCount(Math.max(10, Math.min(200, count)));
  };

  const updateParticleSpeed = (speed) => {
    setParticleSpeed(Math.max(0.1, Math.min(3, speed)));
  };

  const value = {
    particlesEnabled,
    particleCount,
    particleSpeed,
    toggleParticles,
    updateParticleCount,
    updateParticleSpeed
  };

  return (
    <ParticleContext.Provider value={value}>
      {children}
    </ParticleContext.Provider>
  );
};
