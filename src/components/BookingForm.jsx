// frontend/src/components/BookingForm.js
import React from 'react';

const BookingForm = ({ formData, handleInputChange, handleFormSubmit }) => {
  return (
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BookingForm;
