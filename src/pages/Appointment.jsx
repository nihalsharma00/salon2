import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Appointment.css';

const Appointment = () => (
  <div className="appointment">
    <h2>Book an Appointment</h2>
    <AppointmentForm />
  </div>
);

export default Appointment;
