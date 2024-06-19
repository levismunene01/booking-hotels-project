// AddHotelForm.js

import React, { useState } from 'react';
import api from '../api';  // Assuming this is your Axios instance

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    description: '',
    price_per_night: '',
    is_available: true
  });

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/hotels', formData);
      console.log('Hotel added:', response.data);
      setFormData({
        name: '',
        picture: '',
        description: '',
        price_per_night: '',
        is_available: true
      });
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'is_available' ? e.target.checked : value
    });
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Picture URL</label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price per Night</label>
          <input
            type="number"
            name="price_per_night"
            value={formData.price_per_night}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            name="is_available"
            checked={formData.is_available}
            onChange={handleInputChange}
            className="form-check-input"
          />
          <label className="form-check-label">Available</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
