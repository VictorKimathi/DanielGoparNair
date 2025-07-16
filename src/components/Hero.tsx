import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="relative w-full bg-[#faf6f2] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
    }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center items-center text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d4a3a] leading-tight mb-6">
          Daniel Gopal Nair
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-[#d4704a]">
            Food Writer & Storyteller
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#2d4a3a] mb-8 font-serif">
          Transforming everyday food moments into compelling narratives for 8+
          years
        </p>
        <Link to="/portfolio" className="bg-[#d4704a] text-white font-medium py-3 px-8 rounded-full hover:bg-[#c06040] transition duration-300 shadow-md">
          Explore My Stories
        </Link>
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-center space-x-4">
            <div className="p-2 bg-white rounded-full shadow-md transform rotate-3">
              <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Colorful spices" className="h-20 w-20 rounded-full object-cover" />
            </div>
            <div className="p-2 bg-white rounded-full shadow-md transform -rotate-2">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Artisan bread" className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div className="p-2 bg-white rounded-full shadow-md transform rotate-6">
              <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Fresh pasta" className="h-20 w-20 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;