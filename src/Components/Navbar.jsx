import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png'; // Ensure you have the correct path to the logo file

const navItems = [
  { name: 'Merge PDF', link: '#' },
  { name: 'Split PDF', link: '#' },
  { name: 'Compress PDF', link: '#' },
  { name: 'Convert PDF', link: '#' },
  { name: 'All PDF Tools', link: '#', dropdown: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 sm:mb-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:p-2 p-1 lg:mt-2">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div style={{ width: '80px', height: 'auto' }}>
            <img src={logo} alt="Logo" style={{ width: '60%', height: 'auto' }} />
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
          {navItems.map((item, index) => (
            <li key={index} className="md:mx-4 my-2 md:my-0 relative">
              <a
                href={item.link}
                className="text-gray-800 font-bold hover:text-red-400"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                {item.name}
              </a>
              {item.dropdown && isDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">Organize PDF</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">Optimize PDF</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">Convert to PDF</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">Convert from PDF</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">Edit PDF</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 font-bold hover:text-red-400">PDF Security</a></li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-400">Login</button>
          <button className="px-4 py-2 text-red-500 bg-white rounded border border-solid border-red-400">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
