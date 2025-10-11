import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./assets/css/remixicon.css"
import Home from './View/Home/home';
import About from './View/About/about-us';
import Contact from './View/Contact/contact-us';
import Footer from './View/_Common/Footer';
import NGO from './View/Donation/ngo';
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<NGO />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
