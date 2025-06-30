export default function Hero() {
  return (
    <section className="hero h-screen flex items-center justify-center text-center relative mt-[70px]">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <img
        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Indian food background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="hero-content max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">Authentic Indian Cuisine</h1>
          <p className="text-lg md:text-xl text-white mb-8">Experience the rich flavors and spices of India in every bite</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-btns">
            <a href="#menu" className="btn btn-outline border-2 border-primary-orange text-primary-orange bg-transparent px-8 py-3 rounded-full font-semibold hover:bg-primary-orange hover:text-white transition-all duration-300">View Menu</a>
            <a href="https://food.orders.co/b9uydd6q" className="btn bg-primary-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-light-orange transition-all duration-300">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
