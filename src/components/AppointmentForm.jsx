import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const response = await fetch('https://formspree.io/f/xzzbzelv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset(); // Reset the form after submission
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointmentForm">
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" required />
      </label>
      <label>
        Date:
        <input type="date" name="date" required />
      </label>
      <label>
        Time:
        <input type="time" name="time" required />
      </label>
      <button type="submit">Book Appointment</button>

      {status === 'SUCCESS' && <p>Appointment request sent successfully!</p>}
      {status === 'ERROR' && <p>There was an error, please try again.</p>}
    </form>
  );
};

export default AppointmentForm;
