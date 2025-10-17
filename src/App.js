import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./assets/css/remixicon.css"
import Home from './View/Home/home';
import Location from './View/Location/location';
import Footer from './View/_Common/Footer';
import Loader from './View/_Common/loader';

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const location = useLocation();
  const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <React.Fragment>
      {loading && <Loader />}
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
