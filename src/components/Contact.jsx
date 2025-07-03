import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons';

const CONTACT_INFO = [
  {
    icon: faMapMarkerAlt,
    title: 'Address',
    content: '14856 Metcalf Ave, Overland Park, KS 66223',
  },
  {
    icon: faPhoneAlt,
    title: 'Phone',
    content: (
      <div>
        <a href="tel:+19132427381" className="hover:underline">+1 (913) 242-7381</a><br />
        <a href="tel:+19137356681" className="hover:underline">+1 (913) 735-6681</a>
      </div>
    ),
  },
  {
    icon: faEnvelope,
    title: 'Email',
    content: <a href="mailto:kushiindianrestaurant@gmail.com" className="hover:underline">kushiindianrestaurant@gmail.com</a>,
  },
  {
    icon: faClock,
    title: 'Hours',
    content: (
      <table className="text-left text-sm">
        <tbody>
          <tr><td className="pr-4">Monday:</td><td>10am - 11:30pm</td></tr>
          <tr><td className="pr-4">Tuesday:</td><td>10am - 11:30pm</td></tr>
          <tr><td className="pr-4">Wednesday:</td><td>10am - 11:30pm</td></tr>
          <tr><td className="pr-4">Thursday:</td><td>10am - 11:30pm</td></tr>
          <tr><td className="pr-4">Friday:</td><td>10am - 1am</td></tr>
          <tr><td className="pr-4">Saturday:</td><td>8am - 1am</td></tr>
          <tr><td className="pr-4">Sunday:</td><td>8am - 12:30am</td></tr>
        </tbody>
      </table>
    ),
  },
];

const SOCIAL_LINKS = [
  { icon: faFacebookF, link: 'https://www.facebook.com/p/Kushi-Indian-Restaurant-61555023013176/' },
  { icon: faInstagram, link: 'https://www.instagram.com/kushiindianrestaurant/' },
  { icon: faYelp, link: 'https://www.yelp.com/biz/kushi-indian-restaurant-overland-park' },
];

export default function Contact() {
  return (
    <section className="contact bg-off-white py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 inline-block relative">
            Contact Us
            <span className="block w-16 h-1 bg-primary-orange absolute left-1/2 -bottom-3 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-text-light">We'd love to hear from you</p>
        </div>
        <div className="contact-content flex flex-col md:flex-row gap-12">
          <div className="contact-info flex-1">
            <div className="contact-details space-y-6">
              {CONTACT_INFO.map((item, idx) => (
                <div className="contact-item flex items-start gap-4" key={idx}>
                  <div className="contact-icon w-10 h-10 flex items-center justify-center bg-primary-orange text-white rounded-full text-xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="contact-text">
                    <h3 className="font-semibold text-text-dark mb-1">{item.title}</h3>
                    <div className="text-text-light text-sm">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links flex gap-4 mt-8">
              {SOCIAL_LINKS.map((item, idx) => (
                <a href={item.link} key={idx} className="social-link w-10 h-10 flex items-center justify-center bg-primary-orange text-white rounded-full text-lg hover:bg-light-orange transition-all duration-200">
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-map flex-1 rounded-lg overflow-hidden shadow-lg min-h-[400px]">
            <div className="w-full h-[400px] md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.8295206372068!2d-94.66842799999999!3d38.8592592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0c10029b04843%3A0xab17045b7dd13e8e!2sKushi%20Indian%20Restaurant!5e0!3m2!1sen!2sus!4v1751318360599!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
