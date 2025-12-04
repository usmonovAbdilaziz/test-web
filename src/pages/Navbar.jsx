import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-[30px]" tabIndex={0}>
              LOGO
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-[16px]" tabIndex={0}>
              Why LegalSifter
            </a>
            <a href="#" className="text-[16px]" tabIndex={0}>
              Solutions
            </a>
            <a href="#" className="text-[16px]" tabIndex={0}>
              Blogs
            </a>
            <a href="#" className="text-[16px] flex items-center" tabIndex={0}>
              Resources <i className="fa-solid fa-angle-down ml-1"></i>
            </a>
            <a href="#" className="text-[16px] flex items-center" tabIndex={0}>
              Socials <i className="fa-solid fa-angle-down ml-1"></i>
            </a>
          </div>

          {/* Language + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[16px] flex items-center" tabIndex={0}>
              <i className="fa-solid fa-globe mr-1"></i>EN
              <i className="fa-solid fa-angle-down ml-1"></i>
            </a>
            <a
              href="#"
              className="w-[142px] h-[46px] border-2 border-[#e0e0e0] rounded-[50px] flex items-center justify-center text-[16px]"
              tabIndex={0}
            >
              Join Waitlist
            </a>
            <a
              href="#"
              className="w-[142px] h-[46px] bg-white text-black border-2 border-[#e0e0e0] rounded-[50px] flex items-center justify-center text-[16px]"
              tabIndex={0}
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              tabIndex={0}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <i className="fa-solid fa-xmark text-2xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-2 pt-2 pb-3 space-y-1 shadow-md">
          <a href="#" className="block text-[16px]" tabIndex={0}>
            Why LegalSifter
          </a>
          <a href="#" className="block text-[16px]" tabIndex={0}>
            Solutions
          </a>
          <a href="#" className="block text-[16px]" tabIndex={0}>
            Blogs
          </a>
          <a
            href="#"
            className="block text-[16px] flex items-center"
            tabIndex={0}
          >
            Resources <i className="fa-solid fa-angle-down ml-1"></i>
          </a>
          <a
            href="#"
            className="block text-[16px] flex items-center"
            tabIndex={0}
          >
            Socials <i className="fa-solid fa-angle-down ml-1"></i>
          </a>
          <a
            href="#"
            className="block text-[16px] flex items-center"
            tabIndex={0}
          >
            <i className="fa-solid fa-globe mr-1"></i>EN{" "}
            <i className="fa-solid fa-angle-down ml-1"></i>
          </a>
          <a
            href="#"
            className="block w-full text-center my-1 h-[46px] border-2 border-[#e0e0e0] rounded-[50px] flex items-center justify-center text-[16px]"
            tabIndex={0}
          >
            Join Waitlist
          </a>
          <a
            href="#"
            className="block w-full text-center my-1 h-[46px] bg-white text-black border-2 border-[#e0e0e0] rounded-[50px] flex items-center justify-center text-[16px]"
            tabIndex={0}
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
