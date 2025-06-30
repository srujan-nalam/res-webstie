import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const REVIEWS = [
  {
    name: 'Priya S.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Absolutely delicious! The butter chicken was the best I have ever had. The staff was friendly and the ambiance was perfect for a family dinner.',
  },
  {
    name: 'Rahul M.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    text: 'Great food and quick delivery. The biryani was flavorful and the naan was fresh. Will definitely order again!',
  },
  {
    name: 'Emily T.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'We had Spice Haven cater our wedding and it was a hit! Guests loved the variety and the staff was very professional.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-gold">
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar}
          className="text-lg"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 inline-block relative">
            What Our Customers Say
            <span className="block w-16 h-1 bg-primary-orange absolute left-1/2 -bottom-3 transform -translate-x-1/2"></span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-off-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-primary-orange" />
              <h3 className="font-bold text-lg text-text-dark mb-1">{review.name}</h3>
              <StarRating rating={review.rating} />
              <p className="text-text-light mt-4">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 