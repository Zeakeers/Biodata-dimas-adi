import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Biodata', to: '#biodata' },
    { name: 'Projects', to: '#projects' },
    { name: 'Skills & Education', to: '#skills-education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed w-full bg-navy/90 backdrop-blur-md shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0"
              >
                <h1 className="text-xl font-bold text-light">Dimas Adi Putra Arifin</h1>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      onClick={(e) => handleClick(e, item.to)}
                      className="text-light hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-primary focus:outline-none"
                >
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    onClick={(e) => handleClick(e, item.to)}
                    className="text-light hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar; 