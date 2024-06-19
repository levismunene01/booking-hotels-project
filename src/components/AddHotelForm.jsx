// AddHotelForm.js (frontend)

import React, { useState } from 'react';
import api from '../api'; // Assuming this is your Axios instance

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    is_available: true,
    price: 0.0
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
      const response = await api.post('/hotels', formData);
      console.log('Hotel added:', response.data);
      // Optionally, you can add logic to show a success message or redirect to another page
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
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
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
