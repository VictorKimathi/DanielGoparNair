import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedWorkCarousel from '../components/FeaturedWorkCarousel';
import RecipeSpotlight from '../components/RecipeSpotlight';
import TestimonialsSection from '../components/TestimonialsSection';
const Home = () => {
  return <div className="bg-[#faf6f2] w-full">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkCarousel />
      <RecipeSpotlight />
      <TestimonialsSection />
    </div>;
};
export default Home;