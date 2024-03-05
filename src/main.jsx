import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // You can add your own custom CSS file here if needed
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import LandingPage from './components/LandingPgae';
import ListHotel from './components/ListHotel';
import HotelBookings from './components/HotelBookings';
import { LayoutContext } from './context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/hotels",
    element: <ListHotel />,
  },
  {
    path: "/bookings",
    element: <HotelBookings />,
  },
]);


const MainLayout = ({ children }) => {
  const [globalData, setGlobalData] = useState(null);

  return (
    <LayoutContext.Provider value={{ globalData, setGlobalData }}>
      <div className="container-fluid h-100">
        {/* Top Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/" >Hotel Booking App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/hotels">Hotels</a>
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
        {children}
        </div>

        {/* Footer */}
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container">
            <span className="text-muted">Hotel Booking App - &copy; 2024</span>
          </div>
        </footer>
      </div>
    </LayoutContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainLayout>
    <RouterProvider router={router} />
  </MainLayout>

);
