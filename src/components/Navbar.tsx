import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-primary-500 dark:text-primary-400 font-bold text-xl">
          <Code size={24} />
          <span>.NET Developer</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-500 dark:text-primary-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200'
            }
          >
            About Me
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-500 dark:text-primary-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200'
            }
          >
            Contact
          </NavLink>
          <a 
            href="#" 
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              // Would typically trigger a resume download
              alert('Resume download would start here in a real implementation');
            }}
          >
            <Terminal className="mr-2" size={18} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 absolute w-full transition-all duration-300 shadow-lg ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-500 dark:text-primary-400 font-medium py-2' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2 transition-colors duration-200'
            }
            onClick={closeMenu}
          >
            About Me
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-500 dark:text-primary-400 font-medium py-2' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2 transition-colors duration-200'
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
               <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-500 dark:text-primary-400 font-medium py-2' 
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2 transition-colors duration-200'
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;