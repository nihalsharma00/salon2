import React from 'react';
import './Services.css';

const services = [
  'Classic Haircut',
  'Beard Trim & Haircut',
  'Root Touch-Up Coloring',
  'Full Hair Coloring',
  'Hair Styling & Blow Dry',
  'Bridal Hair Styling',
  'Classic Manicure',
  'Gel Manicure',
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
