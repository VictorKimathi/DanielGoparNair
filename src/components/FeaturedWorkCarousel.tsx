import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const articles = [{
  id: 1,
  title: 'The Hidden Spice Markets of Portland',
  excerpt: "Exploring the diverse array of international spice vendors tucked away in Portland's neighborhoods.",
  image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  publication: 'Oregon Eats',
  url: '#'
}, {
  id: 2,
  title: "From Farm to Tortilla: Oregon's Masa Revolution",
  excerpt: 'How local farmers and chefs are collaborating to create authentic, sustainable corn tortillas.',
  image: 'https://images.unsplash.com/photo-1626198226928-95cf2b61ebce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  publication: 'Spoon & Savor',
  url: '#'
}, {
  id: 3,
  title: 'Seasonal Foraging: Spring Edibles in the Pacific Northwest',
  excerpt: "A guide to ethical wild food gathering in Oregon's abundant forests and fields.",
  image: 'https://images.unsplash.com/photo-1627661288492-966fc5d842a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  publication: 'Daily Foodie',
  url: '#'
}, {
  id: 4,
  title: "The Art of Fermentation: Portland's Pickle Scene",
  excerpt: 'Meet the artisans preserving traditions and creating innovative fermented foods.',
  image: 'https://images.unsplash.com/photo-1589135233689-8f9898220040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  publication: 'Portland Food Monthly',
  url: '#'
}];
const FeaturedWorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === articles.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? articles.length - 1 : prevIndex - 1);
  };
  return <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d4a3a] mb-4">
            Featured Work
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#2d4a3a] font-serif">
            A selection of my most impactful food writing and storytelling.
          </p>
        </div>
        <div className="relative">
          {/* Carousel controls */}
          <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
            <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow-md hover:bg-[#faf6f2] transition duration-300" aria-label="Previous slide">
              <ChevronLeftIcon size={24} className="text-[#2d4a3a]" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow-md hover:bg-[#faf6f2] transition duration-300" aria-label="Next slide">
              <ChevronRightIcon size={24} className="text-[#2d4a3a]" />
            </button>
          </div>
          {/* Carousel content */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {articles.map(article => <div key={article.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#8ba888] border-opacity-10">
                    <div className="aspect-w-16 aspect-h-9 relative h-64">
                      <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-[#d4704a] text-white px-3 py-1 text-sm font-medium rounded-full">
                        {article.publication}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-bold text-[#2d4a3a] mb-3">
                        {article.title}
                      </h3>
                      <p className="text-[#2d4a3a] mb-4">{article.excerpt}</p>
                      <a href={article.url} className="inline-flex items-center text-[#d4704a] font-medium hover:underline">
                        Read Full Article
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {articles.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-[#d4704a]' : 'bg-[#8ba888] opacity-50'}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/portfolio" className="inline-block bg-[#2d4a3a] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
            View All Articles
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedWorkCarousel;