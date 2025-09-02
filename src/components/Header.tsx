import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/shree Hari  Logo-05.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Load Google Translate
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Language Change
  const handleLanguageChange = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate */}
      <div id="google_translate_element" className="hidden"></div>

      {/* 🔹 Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 7777974441</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@shreehariinternational.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Shree Hari Exporter Logo"
                className="w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-200 text-sm xl:text-base ${
                    isActive(item.href)
                      ? "text-green-600 border-b-2 border-green-600 pb-1"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* ✅ Language Button (Desktop) */}
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-gray-600" />
                <select
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-gray-100 border rounded px-2 py-1 text-sm focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="gu">ગુજરાતી</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t animate-fadeIn">
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium py-2 px-2 rounded-md ${
                      isActive(item.href)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* ✅ Language Button (Mobile) */}
                <div className="flex items-center space-x-2 mt-4 border-t pt-3">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <select
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-gray-100 border rounded px-2 py-1 text-sm focus:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
