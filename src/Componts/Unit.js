import React from 'react';

export const Unit = ({ image, name, city, position }) => {
  return (
  
   <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
      }}>
        <span>{city}</span>
        <span>{position}</span>
      </p>
    </div>
    
  );
};
