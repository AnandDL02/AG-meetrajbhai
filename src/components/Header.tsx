import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../image/shree Hari  Logo-05.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 7777974441</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>shreehariexpoter11@gmail.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right text-[11px] sm:text-sm">
            Premium Quality • Global Export • Trusted Manufacturer
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            
            {/* 🔹 Logo Section */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col items-start">
                <img 
                  src={logo} 
                  alt="Shree Hari Exporter Logo" 
                  className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 object-contain" 
                />
                {/* <p className="text-[10px] sm:text-xs md:text-sm text-green-600">
                  Premium Agro Exports
                </p> */}
              </div>
            </Link>

            {/* 🔹 Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                    isActive(item.href)
                      ? 'text-green-600 border-b-2 border-green-600 pb-1'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 md:px-6 md:py-2.5 xl:px-8 xl:py-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg text-sm md:text-base"
              >
                Get Quote
              </Link>
            </nav>

            {/* 🔹 Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* 🔹 Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium py-2 ${
                      isActive(item.href) ? 'text-green-600' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-6 py-2 rounded-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
