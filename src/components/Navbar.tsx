import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return <header className="bg-[#faf6f2] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif italic font-bold text-2xl md:text-3xl text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
              Daniel Gopal Nair
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#2d4a3a] hover:text-[#d4704a] px-3 py-2 text-lg font-medium transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-[#2d4a3a] hover:text-[#d4704a] px-3 py-2 text-lg font-medium transition duration-300">
              About
            </Link>
            <Link to="/portfolio" className="text-[#2d4a3a] hover:text-[#d4704a] px-3 py-2 text-lg font-medium transition duration-300">
              Portfolio
            </Link>
            <Link to="/recipes" className="text-[#2d4a3a] hover:text-[#d4704a] px-3 py-2 text-lg font-medium transition duration-300">
              Recipes
            </Link>
            <Link to="/contact" className="text-[#2d4a3a] hover:text-[#d4704a] px-3 py-2 text-lg font-medium transition duration-300">
              Contact
            </Link>
          </nav>
          {/* Desktop Social & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
              <SearchIcon size={20} />
            </button>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
              <InstagramIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
              <TwitterIcon size={20} />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-[#2d4a3a] hover:text-[#d4704a] focus:outline-none transition duration-300">
              {isOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {/* Search bar */}
        {isSearchOpen && <div className="hidden md:block py-3 border-t border-[#8ba888]">
            <div className="relative max-w-lg mx-auto">
              <input type="text" placeholder="Search articles and recipes..." className="w-full px-4 py-2 border border-[#8ba888] rounded-full bg-white text-[#2d4a3a] focus:outline-none focus:ring-2 focus:ring-[#d4704a]" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2d4a3a]">
                <SearchIcon size={18} />
              </button>
            </div>
          </div>}
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#faf6f2] border-t border-[#8ba888]">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-[#2d4a3a] hover:text-[#d4704a] hover:bg-[#faf6f2] transition duration-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-[#2d4a3a] hover:text-[#d4704a] hover:bg-[#faf6f2] transition duration-300" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-base font-medium text-[#2d4a3a] hover:text-[#d4704a] hover:bg-[#faf6f2] transition duration-300" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link to="/recipes" className="block px-3 py-2 text-base font-medium text-[#2d4a3a] hover:text-[#d4704a] hover:bg-[#faf6f2] transition duration-300" onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-[#2d4a3a] hover:text-[#d4704a] hover:bg-[#faf6f2] transition duration-300" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            {/* Mobile search */}
            <div className="relative mt-3 px-3">
              <input type="text" placeholder="Search articles and recipes..." className="w-full px-4 py-2 border border-[#8ba888] rounded-full bg-white text-[#2d4a3a] focus:outline-none focus:ring-2 focus:ring-[#d4704a]" />
              <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#2d4a3a]">
                <SearchIcon size={18} />
              </button>
            </div>
            {/* Mobile social icons */}
            <div className="flex justify-start space-x-4 px-3 py-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2d4a3a] hover:text-[#d4704a] transition duration-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>}
    </header>;
};
export default Navbar;