import React from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => (
  <form className="appointmentForm">
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
  </form>
);

export default AppointmentForm;
