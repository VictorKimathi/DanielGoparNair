import React from 'react';
import { Link } from 'react-router-dom';
const AboutSection = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f4b942] opacity-20 rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Daniel Gopal Nair in a kitchen setting" className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8ba888] opacity-20 rounded-full"></div>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d4a3a] mb-6">
              From Portland Kitchens to Global Flavors
            </h2>
            <div className="space-y-4 font-serif text-[#2d4a3a]">
              <p>
                My journey with food began in my grandmother's kitchen, where
                the aromas of South Indian spices mingled with the scent of
                fresh Oregon produce. This fusion of cultures shaped not just my
                palate, but my perspective on food as a universal language.
              </p>
              <p>
                With 8+ years of professional food writing experience, I've
                explored everything from Portland's vibrant food cart scene to
                the traditional cooking methods of rural communities across
                three continents.
              </p>
              <p>
                My multilingual abilities in English, Hindi, and Spanish have
                allowed me to connect with chefs, home cooks, and food artisans
                whose stories might otherwise go untold.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8 border-2 border-[#d4704a] text-[#d4704a] font-medium py-2 px-6 rounded-full hover:bg-[#d4704a] hover:text-white transition duration-300">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;