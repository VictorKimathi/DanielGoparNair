import React from 'react';
import { BookOpenIcon, UtensilsIcon, GlobeIcon, TrendingUpIcon } from 'lucide-react';
const ServiceCard = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-md border border-[#8ba888] border-opacity-20">
      <div className="inline-block p-3 bg-[#faf6f2] rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-[#2d4a3a] mb-3">
        {title}
      </h3>
      <p className="text-[#2d4a3a]">{description}</p>
    </div>;
};
const ServicesSection = () => {
  return <section className="py-16 md:py-24 bg-[#faf6f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d4a3a] mb-4">
            Expertise & Specialties
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#2d4a3a] font-serif">
            From restaurant reviews to cultural food stories, I bring depth and
            accessibility to every culinary topic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<BookOpenIcon size={24} className="text-[#d4704a]" />} title="Restaurant Reviews" description="Thoughtful, context-rich evaluations that go beyond the plate to tell the story of each establishment." />
          <ServiceCard icon={<UtensilsIcon size={24} className="text-[#d4704a]" />} title="Cooking Guides" description="Accessible techniques and recipes that empower home cooks to explore new flavors with confidence." />
          <ServiceCard icon={<GlobeIcon size={24} className="text-[#d4704a]" />} title="Cultural Food Stories" description="Immersive narratives that explore the people, history, and traditions behind diverse cuisines." />
          <ServiceCard icon={<TrendingUpIcon size={24} className="text-[#d4704a]" />} title="Food Trend Analysis" description="Insightful perspectives on emerging culinary movements, ingredients, and dining experiences." />
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-[#8ba888] border-opacity-20">
          <h3 className="font-serif text-2xl font-bold text-[#2d4a3a] mb-4">
            Publications & Partnerships
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="inline-block bg-[#faf6f2] text-[#2d4a3a] px-4 py-2 rounded-full font-medium">
              Oregon Eats
            </span>
            <span className="inline-block bg-[#faf6f2] text-[#2d4a3a] px-4 py-2 rounded-full font-medium">
              Spoon & Savor
            </span>
            <span className="inline-block bg-[#faf6f2] text-[#2d4a3a] px-4 py-2 rounded-full font-medium">
              Daily Foodie
            </span>
            <span className="inline-block bg-[#faf6f2] text-[#2d4a3a] px-4 py-2 rounded-full font-medium">
              Portland Food Monthly
            </span>
            <span className="inline-block bg-[#faf6f2] text-[#2d4a3a] px-4 py-2 rounded-full font-medium">
              Global Gastronomy
            </span>
          </div>
          <div className="mt-8">
            <h4 className="font-serif text-xl font-bold text-[#2d4a3a] mb-2">
              Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block text-[#2d4a3a]">English</span>
              <span className="inline-block text-[#2d4a3a] before:content-['•'] before:mx-2">
                Hindi
              </span>
              <span className="inline-block text-[#2d4a3a] before:content-['•'] before:mx-2">
                Spanish
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;