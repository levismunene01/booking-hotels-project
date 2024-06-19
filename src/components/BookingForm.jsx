// BookingForm.js (frontend)

import React, { useState } from 'react';
import api from '../api'; // Assuming this is your Axios instance

const BookingForm = () => {
  const [formData, setFormData] = useState({
    hotel_id: '',
    guest_name: '',
    check_in_date: '',
    check_out_date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/bookings', formData);
      console.log('Booking created:', response.data);
      // Optionally, you can add logic to show a success message or redirect to another page
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div>
      <h2>Book Hotel</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Hotel ID</label>
          <input
            type="number"
            name="hotel_id"
            value={formData.hotel_id}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Guest Name</label>
          <input
            type="text"
            name="guest_name"
            value={formData.guest_name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Check-in Date</label>
          <input
            type="date"
            name="check_in_date"
            value={formData.check_in_date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input
            type="date"
            name="check_out_date"
            value={formData.check_out_date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
