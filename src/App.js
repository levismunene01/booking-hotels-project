// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import Gallery from './pages/Gallery';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Services from './pages/Services';
import Home from './pages/Home';
import BookingForm from './components/BookingForm';
import AddHotelForm from './components/AddHotelForm'; // Import the AddHotelForm component
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

  // Handle booking form submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/bookings', formData);
      setBookings([...bookings, response.data]);
      // Clear form data after successful submission
      setFormData({
        hotel_id: '',
        guest_name: '',
        check_in_date: '',
        check_out_date: ''
      });
    } catch (error) {
      console.error('Error creating booking', error);
    }
  };

  // Handle booking form input changes
  const handleBookingInputChange = (e) => {
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
                  handleInputChange={handleBookingInputChange}
                  handleFormSubmit={handleBookingSubmit}
                />
              </BookingPage>
            } />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/services" element={<Services />} />
            {/* Route for adding a new hotel */}
            <Route path="/add-hotel" element={<AddHotelForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
