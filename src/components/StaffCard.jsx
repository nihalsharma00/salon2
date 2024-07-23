import React from 'react';
import './StaffCard.css';

const StaffCard = ({ name, role, image }) => (
  <div className="staffCard">
    <div className="staffImageContainer">
      <img src={image} alt={name} className="staffImage" />
      <div className="staffText">{role}</div>
    </div>
    <h3 className="staffName">{name}</h3>
  </div>
);

export default StaffCard;
