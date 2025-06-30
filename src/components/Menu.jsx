import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faLeaf } from '@fortawesome/free-solid-svg-icons';
import breakfastImg from '../assets/menu/breakfast.webp';
import appetizersImg from '../assets/menu/appetizers.webp';
import biryanisImg from '../assets/menu/biryanis.webp';
import curriesImg from '../assets/menu/curries.webp';
import snacksImg from '../assets/menu/snacks.webp';
import drinksDessertsImg from '../assets/menu/drinksanddessertd.webp';

const MENU_TABS = [
  { label: 'Breakfast', key: 'breakfast', img: breakfastImg },
  { label: 'Appetizers', key: 'appetizers', img: appetizersImg },
  { label: 'Biryanis', key: 'biryanis', img: biryanisImg },
  { label: 'Curries', key: 'curries', img: curriesImg },
  { label: 'Snacks', key: 'snacks', img: snacksImg },
  { label: 'Drinks & Desserts', key: 'drinksanddesserts', img: drinksDessertsImg },
];

const MENU_ITEMS = {
  lunch: [
    {
      title: 'Butter Chicken',
      hindi: 'मक्खन चिकन',
      price: '$14.99',
      desc: 'Tender chicken cooked in a creamy tomato sauce with butter and aromatic spices',
      img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      icons: [faPepperHot],
    },
    {
      title: 'Palak Paneer',
      hindi: 'पालक पनीर',
      price: '$12.99',
      desc: 'Fresh spinach cooked with homemade cottage cheese and mild spices',
      img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      icons: [faLeaf],
    },
    {
      title: 'Chicken Biryani',
      hindi: 'चिकन बिरयानी',
      price: '$15.99',
      desc: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
      img: 'https://images.unsplash.com/photo-1603893662172-99ed0cea2a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      icons: [faPepperHot],
    },
  ],
  dinner: [
    {
      title: 'Tandoori Chicken',
      hindi: 'तंदूरी चिकन',
      price: '$16.99',
      desc: 'Chicken marinated in yogurt and spices, cooked in traditional clay oven',
      img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      icons: [faPepperHot],
    },
  ],
  drinks: [
    {
      title: 'Mango Lassi',
      hindi: 'आम लस्सी',
      price: '$4.99',
      desc: 'Refreshing yogurt drink blended with mango and cardamom',
      img: 'https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      icons: [faLeaf],
    },
  ],
};

const ORDER_ONLINE_URL = 'https://food.orders.co/b9uydd6q';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast');
  return (
    <section className="menu relative py-16" id="menu">
      {/* SVG motif background */}
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-5 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path fill="#FF6B35" fillOpacity="0.05" d="M50,10C70,10,90,30,90,50C90,70,70,90,50,90C30,90,10,70,10,50C10,30,30,10,50,10Z" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 inline-block relative">
            Our Menu
            <span className="block w-16 h-1 bg-primary-orange absolute left-1/2 -bottom-3 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-text-light">Explore our delicious selection of authentic Indian dishes</p>
        </div>
        <div className="menu-tabs flex justify-center gap-2 mb-8 flex-wrap">
          {MENU_TABS.map(tab => (
            <button
              key={tab.key}
              className={`menu-tab px-6 py-2 rounded-full border-2 font-semibold transition-all duration-200 ${activeTab === tab.key ? 'bg-primary-orange text-white border-primary-orange' : 'bg-transparent text-primary-orange border-primary-orange hover:bg-primary-orange hover:text-white'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="menu-categories">
          {MENU_TABS.map(tab => (
            <div key={tab.key} className={`menu-category ${activeTab === tab.key ? 'block' : 'hidden'}`} id={tab.key}>
              <div className="flex justify-center">
                <img src={tab.img} alt={tab.label + ' menu'} className="w-full max-w-2xl rounded-lg shadow-lg object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
