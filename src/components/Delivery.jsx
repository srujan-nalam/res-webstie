import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doordashImg from '../assets/doordash.png';
import ubereatsImg from '../assets/ubereats.jpg';
import grubhubImg from '../assets/grubhub.png';
import postmatesImg from '../assets/postmates.png';

const PARTNERS = [
  {
    name: 'DoorDash',
    link: 'https://www.doordash.com/store/kushi-indian-restaurant-overland-park-27957715/57898558/',
    img: doordashImg,
  },
  {
    name: 'Uber Eats',
    link: 'https://www.ubereats.com/store/kushi-indian-restaurant/uQRCK-ahUkyJG1SAKScM6A',
    img: ubereatsImg,
  },
  {
    name: 'Grubhub',
    link: 'https://www.grubhub.com/restaurant/kushi-indian-restaurant-14856-metcalf-avenue-overland-park/8236576',
    img: grubhubImg,
  },
  {
    name: 'Postmates',
    link: 'https://postmates.com/store/kushi-indian-restaurant/uQRCK-ahUkyJG1SAKScM6A',
    img: postmatesImg,
  },
];

export default function Delivery() {
  return (
    <section className="delivery-partners py-16" id="delivery">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 inline-block relative">
            Delivery Partners
            <span className="block w-16 h-1 bg-primary-orange absolute left-1/2 -bottom-3 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-text-light">Get your favorite dishes delivered to your door</p>
        </div>
        <div className="partners-grid grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="partner flex flex-col items-center gap-4">
              <a href={partner.link} className="partner-logo w-24 h-24 flex items-center justify-center bg-white rounded-full shadow hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                <img src={partner.img} alt={partner.name} className="w-full h-full object-cover rounded-full" />
              </a>
              <div className="partner-name font-semibold text-text-dark">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
