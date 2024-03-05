import React from 'react';
import './App.css'
import LandingPage from './components/LandingPgae';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ListHotel from './components/ListHotel';


function App() {
  return (
    <div className="container-fluid h-100">
      {/* Top Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" to="/" >Hotel Booking App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" to="/hotels">Hotels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bookings">My Bookings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="row h-100">
       
      </div>

      {/* Footer */}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Hotel Booking App - &copy; 2024</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
