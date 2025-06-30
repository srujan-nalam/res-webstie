import { useState } from 'react';
import partyHallImg from '../assets/partyhall.avif';

export default function Catering() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventDate: '', guests: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Placeholder for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send form data to backend or email service
    setSubmitted(true);
  };

  return (
    <section className="catering bg-off-white relative py-16" id="catering">
      {/* SVG motif background */}
      <div className="absolute top-0 left-0 w-52 h-52 opacity-5 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path fill="#FF6B35" fillOpacity="0.05" d="M50,10C70,10,90,30,90,50C90,70,70,90,50,90C30,90,10,70,10,50C10,30,30,10,50,10Z" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 inline-block relative">
            Catering Services
            <span className="block w-16 h-1 bg-primary-orange absolute left-1/2 -bottom-3 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-text-light">Bring the flavors of India to your next event</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 catering-content mb-12">
          {/* Party Hall Photo */}
          <div className="catering-photo flex-1 flex items-center justify-center">
            <img
              src={partyHallImg}
              alt="Our Party Hall"
              className="rounded-lg shadow-lg object-cover w-full max-h-80 md:max-h-96"
            />
          </div>
          <div className="catering-text flex-1 flex items-center">
            <div>
              <p className="text-text-light mb-4">At Kushi, We offers full-service catering for weddings, corporate events, and private parties. Our experienced team will work with you to create a customized menu that fits your event's theme and dietary requirements.</p>
              <p className="text-text-light mb-4">We provide everything you need for a successful event, including:</p>
              <ul className="list-disc pl-6 text-text-light mb-4 space-y-2">
                <li>Customized Indian menus for any occasion</li>
                <li>Professional staff including chefs and servers</li>
                <li>Complete setup and cleanup</li>
                <li>Traditional Indian serving options (thali, buffet, or plated service)</li>
                <li>Vegetarian, vegan, and gluten-free options available</li>
              </ul>
              <p className="text-text-light">Contact us today to discuss your catering needs and request a quote.</p>
            </div>
          </div>
        </div>
        {/* Catering Form below the row */}
        <div className="catering-form bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-primary-orange mb-6">Request Catering Information</h3>
          {submitted ? (
            <div className="text-green-600 font-semibold text-center">Thank you! Your request has been submitted.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="block mb-1 font-medium text-text-dark">Name</label>
                <input type="text" id="name" required className="w-full border border-gray-200 rounded px-4 py-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block mb-1 font-medium text-text-dark">Email</label>
                <input type="email" id="email" required className="w-full border border-gray-200 rounded px-4 py-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="block mb-1 font-medium text-text-dark">Phone</label>
                <input type="tel" id="phone" required className="w-full border border-gray-200 rounded px-4 py-2" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="event-date" className="block mb-1 font-medium text-text-dark">Event Date</label>
                <input type="date" id="event-date" className="w-full border border-gray-200 rounded px-4 py-2" value={form.eventDate} onChange={e => setForm({ ...form, eventDate: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="guests" className="block mb-1 font-medium text-text-dark">Number of Guests</label>
                <input type="number" id="guests" min="10" className="w-full border border-gray-200 rounded px-4 py-2" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block mb-1 font-medium text-text-dark">Additional Information</label>
                <textarea id="message" className="w-full border border-gray-200 rounded px-4 py-2" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn bg-primary-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-light-orange transition-all duration-200">Submit Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
