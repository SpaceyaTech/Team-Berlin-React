import * as React from 'react';
import headerLogo from '../../assets/icons/logo.svg';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="w-5/6  m-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-10">
        <div className="flex items-center flex-shrink-0 text-white 2xl:mr-12">
          <img src={headerLogo} alt="..." />
        </div>
        <div className="hidden lg:block">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkText  mr-12 lg:mr-6"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkText  mr-12 lg:mr-6"
          >
            Forums
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkText  mr-12 lg:mr-6"
          >
            Events
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-secondaryGreen mr-12 lg:mr-6"
          >
            Blogs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkText  mr-12 lg:mr-6"
          >
            Jobs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkText "
          >
            About Us
          </a>
        </div>
        <div className="hidden lg:block">
          <button className="bg-transparent  text-secondaryGreen font-semibold  py-2 px-4 border 2xl:w-32  lg:w-20 rounded mr-4">
            Login
          </button>
          <button className="bg-secondaryGreen text-primaryWhite font-semibold  py-2 px-4 border 2xl:w-32  lg:w-20 h-12  rounded">
            Sign
          </button>
        </div>
        <div className="space-y-2 lg:hidden 2xl:hidden cursor-pointer" onClick={toggleNavbar}>
          <span className="block w-8 h-1 bg-secondaryGreen"></span>
          <span className="block w-8 h-1 bg-secondaryGreen"></span>
          <span className="block w-8 h-1 bg-secondaryGreen"></span>
        </div>
      </nav>
      <nav className={isVisible ? 'visible container' : 'hidden'}>
        <div className=" align-middle">
          <a href="#responsive-header" className="block mt-4  text-darkText ">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4  text-darkText">
            Forums
          </a>
          <a href="#responsive-header" className="block mt-4  text-darkText">
            Events
          </a>
          <a href="#responsive-header" className="block mt-4  text-secondaryGree">
            Blogs
          </a>
          <a href="#responsive-header" className="block mt-4  text-darkText">
            Jobs
          </a>
          <a href="#responsive-header" className="block mt-4  text-darkText ">
            About Us
          </a>
          <div className="flex justify-center">
            <button className="bg-transparent  text-secondaryGreen font-semibold  py-2 px-4 border  mr-4 rounded">
              Login
            </button>
            <button className="bg-secondaryGreen text-primaryWhite font-semibold  py-2 px-4 border  rounded">
              Sign
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
