from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Annotated
from models import Booking, Hotel  # Ensure models are correctly imported
from fastapi.middleware.cors import CORSMiddleware
from datetime import date, datetime
from database import SessionLocal, engine, Base

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request and response validation
class BookingBase(BaseModel):
    hotel_id: int
    guest_name: str  # Corrected from 'text' to 'str'
    check_in_date: date
    check_out_date: date

class BookingModel(BookingBase):
    id: int
    booking_date: datetime

    class Config:
        orm_mode = True

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

# Create all database tables
Base.metadata.create_all(bind=engine)

# Endpoint to create a booking
@app.post("/bookings", response_model=BookingModel)
async def create_bookings(booking: BookingBase, db: db_dependency):
    db_booking = Booking(
        hotel_id=booking.hotel_id,
        guest_name=booking.guest_name,
        check_in_date=booking.check_in_date,
        check_out_date=booking.check_out_date,
        booking_date=datetime.now()
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

# Endpoint to read bookings
@app.get("/bookings", response_model=List[BookingModel])  # Corrected endpoint path
async def read_bookings(db: db_dependency, skip: int = 0, limit: int = 100):
    bookings = db.query(Booking).offset(skip).limit(limit).all()  # Using Booking directly
    return bookings
