import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } transition-colors duration-300 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="icon/logo-black.png" alt="" className={`w-[10rem] my-2 ${isScrolled ? 'block' : 'hidden'}`}/>
            <img src="icon/logo-light.png" alt="" className={`w-[10rem] my-2 ${isScrolled ? 'hidden' : 'block'}`}/>
          </div>
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline space-x-4  ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <a
                href="#home"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#fitur"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Fitur
              </a>
              <a
                href="#produk"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Produk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
