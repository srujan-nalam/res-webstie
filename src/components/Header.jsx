import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../assets/logo.png';

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Catering', href: '#catering' },
  { name: 'Delivery', href: '#delivery' },
  { name: 'Contact', href: '#contact' },
];

const ORDER_ONLINE_URL = 'https://food.orders.co/b9uydd6q';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center logo">
          <img src={logoImg} alt="Kushi Indian Restaurant Logo" className="h-12 w-12 mr-2 full" />
          <h1 className="text-xl md:text-2xl font-bold text-red-600 tracking-wide">KUSHI <span className="text-text-dark">Indian Restaurant</span></h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-text-dark font-medium hover:text-primary-orange transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href={ORDER_ONLINE_URL} className="order-btn bg-primary-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-light-orange transition-all duration-200">
                Order Online
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-2xl text-primary-orange" onClick={() => setMobileOpen(!mobileOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-slide-in">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-text-dark font-medium text-lg hover:text-primary-orange transition-colors duration-200" onClick={() => setMobileOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href={ORDER_ONLINE_URL} className="order-btn bg-primary-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-light-orange transition-all duration-200" onClick={() => setMobileOpen(false)}>
                Order Online
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
