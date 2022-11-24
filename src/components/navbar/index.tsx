import * as React from 'react';
import headerLogo from '../../assets/icons/logo.svg';

const Navbar = () => {
  return (
    <div className="w-5/6 m-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={headerLogo} alt="..." />
        </div>
        <div className="text-2xl">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200  mr-6"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200  mr-6"
          >
            Forums
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200  mr-6 "
          >
            Events
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-secondaryGreen mr-6"
          >
            Blogs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200  mr-6"
          >
            Jobs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 "
          >
            About Us
          </a>
        </div>
        <div>
          <button className="bg-transparent  text-secondaryGreen font-semibold  py-2 px-4 border  rounded mr-4">
            Login
          </button>
          <button className="bg-secondaryGreen text-primaryWhite font-semibold  py-2 px-4 border  rounded">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
