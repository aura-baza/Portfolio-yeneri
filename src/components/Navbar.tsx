import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Experiencia', path: '/experience' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-800 hover:text-amber-900 transition-colors">
            Mi Espacio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors !text-[#4313B8] hover:text-[#1C1E2F] ${
                  isActive(item.path)
                    ? 'text-amber-800 border-b-2 border-[#F297FB]'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#4313B8] hover:bg- !text-white">
              <Link to="/contact">Colaboremos</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-amber-700 hover:bg-amber-50 rounded-md ${
                    isActive(item.path)
                      ? 'text-[#4313B8] bg-amber-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 ">
                <Button asChild variant={"darkblue"} className="w-full  text-white border-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Colaboremos</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}