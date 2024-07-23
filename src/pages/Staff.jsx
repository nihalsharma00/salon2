import React, { useEffect, useState } from 'react';
import StaffCard from '../components/StaffCard';
import './Staff.css';

const staffMembers = [
  { name: 'Alice', role: 'He is a professional Stylist', image: '/images/alice.jpg' },
  { name: 'Bob', role: 'He is a professional Colorist', image: '/images/bob.jpg' },
];

const Staff = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 100); // Start the animation after a short delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="staff">
      <h2>Meet Our Team</h2>
      <div className="staffList">
        {staffMembers.map((staff, index) => (
          <StaffCard
            key={index}
            {...staff}
            className={showCards ? 'show' : ''}
            style={{ animationDelay: `${index * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Staff;