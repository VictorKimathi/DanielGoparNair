import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const articles = [
  {
    title: "When Family Recipes Exist Only by Memory",
    description: "Some memories are carried not in stories, but in the air...",
    role: "Freelance Food Writer",
    date: "March 17, 2025",
    href: "When_Family_Recipes_Exist_Only_by_Memory.pdf",
    tags: ["Memory", "Family", "Cooking"],
    excerpt: "Exploring how family recipes live on through sensory memories.",
    image: "https://www.southernliving.com/thmb/sLBVbaEJf4ZERTAfrwPcvUN-blI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ravioli_Lasagna_010-c251db1faa1d4e0d8e2708396dc41525.jpg",
    publication: "NY Times"
  },
  {
    title: "5 Comfort Dishes That Start with a Can of Fish",
    description: "Comfort food doesn’t always begin with a passed-down recipe...",
    role: "Freelance Food Writer",
    date: "April 28, 2025",
    href: "5_Comfort_Dishes_That_Start_with_a_Can_of_Fish.pdf",
    tags: ["Comfort Food", "Pantry Staples", "Canned Fish"],
    excerpt: "Transform pantry staples into nostalgic meals with canned fish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeoC-mwuzMufNn1aEMg6pk8GiZpr4d6nFIg&s",
    publication: "Bon Appétit"
  },
  {
    title: "What You’re Actually Paying for When You Buy Fancy Butter",
    description: "Walk through the dairy aisle these days...",
    role: "Content Creator & Editor",
    date: "June 20, 2025",
    href: "What_You’re_Actually_Paying_for_When_You_Buy_Fancy_Butter.pdf",
    tags: ["Dairy", "Butter", "Food Trends"],
    excerpt: "A deep dive into the culture and cost of high-end butter.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUoSdCFJ9Odq3EOFgrAMO49KZQlMrAN5Dbg&s",
    publication: "The Atlantic"
  }
];

const FeaturedWorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
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
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-[#faf6f2] transition duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon size={24} className="text-[#2d4a3a]" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-[#faf6f2] transition duration-300"
              aria-label="Next slide"
            >
              <ChevronRightIcon size={24} className="text-[#2d4a3a]" />
            </button>
          </div>

          {/* Carousel content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {articles.map((article, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#8ba888] border-opacity-10">
                    <div className="relative h-64 w-full">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#d4704a] text-white px-3 py-1 text-sm font-medium rounded-full">
                        {article.publication}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-bold text-[#2d4a3a] mb-3">
                        {article.title}
                      </h3>
                      <p className="text-[#2d4a3a] mb-4">{article.excerpt}</p>
                      <a
                        href={article.href}
                        className="inline-flex items-center text-[#d4704a] font-medium hover:underline"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Read Full Article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index
                  ? 'bg-[#d4704a]'
                  : 'bg-[#8ba888] opacity-50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="/portfolio"
            className="inline-block bg-[#2d4a3a] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkCarousel;
