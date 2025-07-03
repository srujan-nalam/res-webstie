import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const QUICK_LINKS = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Menu', href: '#menu' },
  { name: 'Catering', href: '#catering' },
  { name: 'Delivery', href: '#delivery' },
  { name: 'Contact', href: '#contact' },
];
const MENU_LINKS = [
  { name: 'Breakfast', href: '#menu' },
  { name: 'Appetizers', href: '#menu' },
  { name: 'Biryanis', href: '#menu' },
  { name: 'Curries', href: '#menu' },
  { name: 'Snacks', href: '#menu' },
  { name: 'Drinks & Desserts', href: '#menu' },
];
const CONTACT_INFO = [
  {
    icon: faMapMarkerAlt,
    content: '14856 Metcalf Ave, Overland Park, KS 66223',
  },
  {
    icon: faPhoneAlt,
    content: <div><a href="tel:+19132427381" className="hover:underline"> +1 (913) 242-7381</a><br /><a href="tel:+19137356681" className="hover:underline"> +1 (913) 735-6681</a></div>,
  },
  {
    icon: faEnvelope,
    content: <a href="mailto:kushiindianrestaurant@gmail.com" className="hover:underline">kushiindianrestaurant@gmail.com</a>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white pt-16 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="footer-about">
            <div className="footer-logo mb-4">
              <h2 className="text-2xl font-bold">KUSHI Indian Restaurant</h2>
              <span className="block w-10 h-1 bg-gold mt-2"></span>
            </div>
            <p className="text-gray-400">Bringing authentic Indian flavors to your table. Our passion for traditional recipes and fresh ingredients makes every meal a memorable experience.</p>
            <a href="https://food.orders.co/b9uydd6q" className="btn bg-primary-orange text-white mt-6 inline-block px-6 py-2 rounded-full font-semibold hover:bg-light-orange transition-all duration-200">Order Online</a>
          </div>
          <div className="footer-links">
            <h3 className="text-lg font-bold mb-4 relative">Quick Links
              <span className="block w-10 h-1 bg-gold absolute left-0 -bottom-2"></span>
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(link => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-gold transition-colors duration-200">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="text-lg font-bold mb-4 relative">Menu
              <span className="block w-10 h-1 bg-gold absolute left-0 -bottom-2"></span>
            </h3>
            <ul className="space-y-2">
              {MENU_LINKS.map(link => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-gold transition-colors duration-200">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              {CONTACT_INFO.map((item, idx) => (
                <div className="contact-item flex items-start gap-3" key={idx}>
                  <div className="contact-icon w-8 h-8 flex items-center justify-center bg-gold text-text-dark rounded-full text-lg">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="contact-text text-gray-400 text-sm">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center border-t border-white/10 pt-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kushi Indian Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
