import React, { useState } from "react";
import "../styles/Booking.scss";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("Apartments");
  const [carType, setCarType] = useState("motorcycle");

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };

  const renderForm = () => {
    switch (activeTab) {
      case "Apartments":
        return (
          <form>
            <div className="form-row location-row">
              <label>Enter location</label>
              <input type="text" placeholder="Enter location" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Arrival</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Departure</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Rooms</label>
                <input type="number" min="1" max="100" step="1" />
              </div>
              <div className="half-width">
                <label>Guests</label>
                <input type="number" min="1" max="100" step="1" />
              </div>
            </div>
            <button type="button">Find Apartments</button>
          </form>
        );
      case "Hotels":
        return (
          <form>
            <div className="form-row location-row">
              <label>Enter location</label>
              <input type="text" className="location" placeholder="Enter location" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Arrival</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Departure</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Rooms</label>
                <input type="number" min="1" max="100" step="1" />
              </div>
              <div className="half-width">
                <label>Guests</label>
                <input type="number" min="1" max="100" step="1" />
              </div>
            </div>
            <button type="button">Find Hotels</button>
          </form>
        );
      case "Car Rental":
        return (
          <form>
            <div className="form-row location-row">
              <label>Pick-up location</label>
              <input type="text" placeholder="Pick-up location" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Pick Up Date</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Drop Off Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Type of Car</label>
                <select value={carType} onChange={handleCarTypeChange}>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                </select>
              </div>
              <div className="half-width">
                {carType === "motorcycle" ? (
                  <>
                    <label>Quantity</label>
                    <input type="number" min="1" max="100" step="1" />
                  </>
                ) : (
                  <>
                    <label>Number of Passengers</label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      step="1"
                      placeholder="max of 12"
                    />
                  </>
                )}
              </div>
            </div>
            <button type="button">Find Car Rental</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-layout">
        <div className="booking-column">
          <div className="tabs">
            <button
              className={activeTab === "Apartments" ? "active" : ""}
              onClick={() => setActiveTab("Apartments")}
            >
              Apartments
            </button>
            <button
              className={activeTab === "Hotels" ? "active" : ""}
              onClick={() => setActiveTab("Hotels")}
            >
              Hotels
            </button>
            <button
              className={activeTab === "Car Rental" ? "active" : ""}
              onClick={() => setActiveTab("Car Rental")}
            >
              Car Rental
            </button>
          </div>
          <div className="form-container">{renderForm()}</div>
        </div>
        <div className="info-column">
          <div className="info-content">
            <h2>Information</h2>
            <p>
              Empty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
