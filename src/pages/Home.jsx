import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to Our Salon</h1>
    <p>Experience the best services in town!</p>
    
    <div className="map-container">
      <iframe
        title="Salon Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509568!2d144.95373631531657!3d-37.81627957975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3b6a3a5%3A0x1fbba5b92753d9!2sMelbourne%20Central!5e0!3m2!1sen!2sin!4v1601425449026!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default Home;
