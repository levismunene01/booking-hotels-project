from sqlalchemy import Column, Integer, String,Text, Boolean, Float, Date, DateTime, ForeignKey
from database import Base

class Hotel(Base):
    __tablename__ = "hotels"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    picture = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price_per_night = Column(Float, nullable=False)
    is_available = Column(Boolean, default=True)

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    hotel_id = Column(Integer, ForeignKey('hotels.id'))
    guest_name = Column(Text,)
    check_in_date = Column(Date)
    check_out_date = Column(Date)
    booking_date = Column(DateTime)
