import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shirt } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // ARIA attributes
  const ariaLabel = isMenuOpen ? 'Close navigation menu' : 'Open navigation menu';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-ananta mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
              <Shirt className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-white">Kattali Textile</h1>
              <p className="text-xs text-white/80">Since 2004</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block btn-primary bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors duration-200"
          >
            Get Quote
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-white/80"
            aria-label={ariaLabel}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4">
            <nav
              className="flex flex-col space-y-3 bg-black/80 backdrop-blur-sm rounded-lg p-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    isActive(item.href)
                      ? 'text-white border-l-4 border-white pl-4'
                      : 'text-white/90 hover:text-white pl-4'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-colors duration-200 ml-4 mr-4 text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
