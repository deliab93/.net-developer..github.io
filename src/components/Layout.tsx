import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Sun, Moon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, currentTheme }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 dark:text-white"
        >
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;