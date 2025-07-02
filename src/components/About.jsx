import indianFoodImg from '../assets/indian_food_2.0.jpg';

export default function About() {
  return (
    <section className="about bg-off-white relative overflow-hidden py-16" id="about">
      {/* SVG motif background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path fill="#FF6B35" fillOpacity="0.03" d="M30,10L50,30L70,10L90,30L70,50L90,70L70,90L50,70L30,90L10,70L30,50L10,30L30,10Z" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 about-content">
          <div className="about-text flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-orange mb-6 relative inline-block section-title">
              Our Story
              <span className="block w-16 h-1 bg-primary-orange absolute left-0 -bottom-3"></span>
            </h2>
            <p className="text-text-light mb-4">Welcome to The Kushi Indian Restaurant, where we serve authentic Indian flavors crafted with the finest ingredients and time-honored recipes.</p>
            <p className="text-text-light mb-4">Our commitment to quality and hygiene ensures every dish is fresh, flavorful, and safe.</p>
            <p className="text-text-light">Experience a true taste of India in every bite—made with love, tradition, and care.</p>
          </div>
          <div className="about-img flex-1 rounded-lg overflow-hidden shadow-lg">
            <img src={indianFoodImg} alt="Authentic Indian food at Kushi Restaurant" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
