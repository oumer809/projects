import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './components/luxury/Luxury'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
  AOS.init({

    duration: 1500,
    easing: "ease-out-cubic",
  
  });
}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;