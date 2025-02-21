import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  // Handle body overflow when menu is open
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  }, [showNav]);

  // Close navbar on window resize for large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeNav();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleNav}
        className="fixed top-2 left-3 lg:hidden border border-gray-300 bg-transparent p-2 rounded-lg"
      >
        <AiOutlineMenu className="text-3xl text-gray-700" />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 h-screen bg-black/40 transition-opacity duration-300 lg:hidden ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg w-[80%] max-w-[384px] transition-transform duration-300 ease-in-out lg:w-[300px] lg:translate-x-0 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-3">
          <IoMdClose
            className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={closeNav}
          />
        </div>

        {/* Navigation Content (Add Links Here) */}
        <nav className="p-4">
          <ul className="space-y-3">
            <li className="text-lg font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
              Home
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
              About
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
