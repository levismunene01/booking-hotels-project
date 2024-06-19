// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import Home from './pages/Home';
import BookingForm from './components/BookingForm';
import './App.css';
import api from './api';  // Assuming this is your Axios instance

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    hotel_id: '',
    guest_name: '',
    check_in_date: '',
    check_out_date: ''
  });

  // Fetch bookings on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get('/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };

    fetchBookings();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/bookings', formData);
      setBookings([...bookings, response.data]);
    } catch (error) {
      console.error('Error creating booking', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={
              <BookingPage>
                <BookingForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleFormSubmit={handleFormSubmit}
                />
              </BookingPage>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
