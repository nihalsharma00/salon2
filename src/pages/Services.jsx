import React from 'react';
import './Services.css';

const services = [
  'Haircut',
  'Coloring',
  'Styling',
  'Manicure',
  
];

const Services = () => (
  <div className="services">
    <h2>Our Services</h2>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

export default Services;
