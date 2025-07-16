import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#8b4513] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Daniel Gopal Nair
            </h3>
            <p className="mb-4 text-[#faf6f2] opacity-90">
              Food writer and storyteller with 8+ years of experience
              transforming everyday food moments into compelling narratives.
            </p>
            <p className="text-[#faf6f2] opacity-90">Based in Portland, OR</p>
          </div>
          {/* Navigation column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#faf6f2] opacity-90 hover:opacity-100 hover:text-[#f4b942] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#faf6f2] opacity-90 hover:opacity-100 hover:text-[#f4b942] transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#faf6f2] opacity-90 hover:opacity-100 hover:text-[#f4b942] transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-[#faf6f2] opacity-90 hover:opacity-100 hover:text-[#f4b942] transition duration-300">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#faf6f2] opacity-90 hover:opacity-100 hover:text-[#f4b942] transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
            
           
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon size={18} className="text-[#faf6f2]" />
              <a href="mailto:daniel@example.com" className="text-[#faf6f2] hover:text-[#f4b942] transition duration-300">
                daniel@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#faf6f2] border-opacity-20 text-center text-[#faf6f2] opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Daniel Gopal Nair. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;