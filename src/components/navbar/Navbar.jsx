import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for controlling the burger menu

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Function to close the menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } transition-colors duration-300 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Burger Menu for Mobile - Now on the left */}
          <div className="order-1 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo - Centered on mobile, right on desktop */}
          <div className="logoo flex justify-center md:justify-end items-center order-2 md:order-none w-full md:w-auto">
            <img
              src="icon/logo-black.png"
              alt="Logo"
              className={`w-[10rem] my-2 ${isScrolled ? 'block' : 'hidden'}`}
            />
            <img
              src="icon/logo-light.png"
              alt="Logo"
              className={`w-[10rem] my-2 ${isScrolled ? 'hidden' : 'block'}`}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:space-x-4">
            <a
              href="#LandingPage"
              className={`px-3 py-2 text-sm font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              PERUSAHAAN
            </a>
            <a
              href="#fitur"
              className={`px-3 py-2 text-sm font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              FITUR
            </a>
            <a
              href="#produk"
              className={`px-3 py-2 text-sm font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              PRODUK
            </a>
            <a
              href="#faq"
              className={`px-3 py-2 text-sm font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from Left */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 w-64 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Image at the top of the burger menu */}
        <div className="flex justify-center items-center py-4 border-b border-gray-200">
          <img
            src="icon/logo-black.png"
            alt="Logo inside burger"
            className="w-[8rem]"
          />
        </div>

        <div className="flex flex-col px-4 pt-4 space-y-6">
          <a href="#LandingPage" className="text-gray-800 text-lg font-medium">
            PERUSAHAAN
          </a>
          <a href="#fitur" className="text-gray-800 text-lg font-medium">
            FITUR
          </a>
          <a href="#produk" className="text-gray-800 text-lg font-medium">
            PRODUK
          </a>
          <a href="#faq" className="text-gray-800 text-lg font-medium">
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
