import * as React from 'react';
import headerLogo from '../../assets/icons/logo.svg';

const Navbar = () => {
  return (
    <div className="w-5/6 m-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={headerLogo} alt="..." />
        </div>
        <div className="text-sm">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            About Us
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white"
          >
            Forum
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
