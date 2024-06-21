# # schemas.py

# from pydantic import BaseModel
# from typing import List
# from datetime import date, datetime

# class HotelBase(BaseModel):
#     name: str
#     picture: str
#     description: str
#     price_per_night: float
#     is_available: bool = True

# class HotelCreate(HotelBase):
#     pass

# class Hotel(HotelBase):
#     id: int

#     class Config:
#         orm_mode = True

# class BookingBase(BaseModel):
#     hotel_id: int
#     guest_name: str
#     check_in_date: date
#     check_out_date: date

# class BookingCreate(BookingBase):
#     pass

# class Booking(BookingBase):
#     id: int
#     booking_date: datetime
#     hotel: Hotel

#     class Config:
#         orm_mode = True
