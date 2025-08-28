import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../image/shree Hari  Logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        
        {/* 🔹 Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Shree Hari Exporter Logo" 
                className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48 object-contain" 
              />
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
              Leading exporter of premium quality agro commodities, spices, and cold-pressed oils from Gujarat, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com/themeetsagar" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">Our Products</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-green-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-300 hover:text-green-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><span className="text-gray-300">Coriander Seeds</span></li>
              <li><span className="text-gray-300">Cumin Seeds</span></li>
              <li><span className="text-gray-300">Groundnut Kernels</span></li>
              <li><span className="text-gray-300">Cold Pressed Oils</span></li>
              <li><span className="text-gray-300">Spices & More</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  A-40, 3rd floor, <br /> Sumel business park 2, Opp.vanijya bhavan, <br /> Kankariya, Ahemdabad, <br /> Gujarat, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+91 7777974441</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">shreehariexpoter11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              © 2024 Shree Hari International. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
