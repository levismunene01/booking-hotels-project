import React, { useState } from 'react';
import axios from 'axios';

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    description: '',
    price_per_night: '',
    is_available: true
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
      await axios.post('http://localhost:8000/hotels', formData);
      alert('Hotel added successfully!');
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Hotel Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Picture URL:
        <input type="text" name="picture" value={formData.picture} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Price Per Night:
        <input type="number" name="price_per_night" value={formData.price_per_night} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Is Available:
        <input type="checkbox" name="is_available" checked={formData.is_available} onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })} />
      </label>
      <br />
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotelForm;
