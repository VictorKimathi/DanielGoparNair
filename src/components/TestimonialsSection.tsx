import React from 'react';
import { QuoteIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  quote: "Daniel has a rare gift for making complex culinary traditions accessible without sacrificing authenticity. His writing transforms recipes into stories that readers can't wait to be part of.",
  author: 'Emily Chen',
  position: 'Editor, Spoon & Savor Magazine'
}, {
  id: 2,
  quote: "Working with Daniel on our restaurant feature was a revelation. He captured not just the flavors of our menu but the heart behind our family's culinary heritage.",
  author: 'Marcus Johnson',
  position: 'Chef & Owner, Hearth & Grain'
}, {
  id: 3,
  quote: "Daniel's food writing goes beyond trends to find the human stories that make a dish meaningful. His perspective bridges cultures and brings readers along on a journey of discovery.",
  author: 'Sophia Rodriguez',
  position: 'Food Culture Director, Portland Arts Foundation'
}];
const TestimonialsSection = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d4a3a] mb-4">
            Testimonials & Recognition
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#2d4a3a] font-serif">
            What editors, chefs, and collaborators have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-[#faf6f2] rounded-lg p-6 shadow-md relative">
              <QuoteIcon size={40} className="absolute top-4 right-4 text-[#d4704a] opacity-20" />
              <p className="text-[#2d4a3a] mb-6 relative z-10 font-serif">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-[#2d4a3a]">{testimonial.author}</p>
                <p className="text-sm text-[#2d4a3a]">{testimonial.position}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-[#2d4a3a] text-white p-8 rounded-lg shadow-md">
          <h3 className="font-serif text-2xl font-bold mb-4 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-[#f4b942] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4a3a]">
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                  <circle cx="12" cy="8" r="7"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  Judge, Portland Food Cart Awards
                </h4>
                <p className="text-sm text-white/80">2020-2023</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#f4b942] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4a3a]">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  Oregon Food Writer of the Year
                </h4>
                <p className="text-sm text-white/80">
                  2022, Oregon Publishers Association
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#f4b942] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4a3a]">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Best Cultural Food Coverage</h4>
                <p className="text-sm text-white/80">
                  2021, Culinary Journalists Association
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#f4b942] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4a3a]">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  Recipe Development Excellence
                </h4>
                <p className="text-sm text-white/80">
                  2020, Home Cooking Collective
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;