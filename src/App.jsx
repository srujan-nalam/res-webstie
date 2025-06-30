import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Catering from './components/Catering';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ORDER_ONLINE_URL = "https://food.orders.co/b9uydd6q"; // Replace with your real link

const navItems = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Catering", href: "#catering" },
  { name: "Delivery Partners", href: "#delivery" },
  { name: "Contact Us", href: "#contact" },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Catering />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
