import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full z-50 nav-blur bg-gray-900/30">
      <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <div className="flex space-x-8 text-sm">
          <Link 
            to="/retail-advertising"
            className={`hover:text-gray-400 transition-colors ${location.pathname === '/retail-advertising' ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Retail Advertising
          </Link>
          <Link 
            to="/music"
            className={`hover:text-gray-400 transition-colors ${location.pathname === '/music' ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Music
          </Link>
          <Link 
            to="/technology"
            className={`hover:text-gray-400 transition-colors ${location.pathname === '/technology' ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Technology
          </Link>
          <Link 
            to="/platform"
            className={`hover:text-gray-400 transition-colors ${location.pathname === '/platform' ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Platform
          </Link>
        </div>
      </div>
    </nav>
  );
}