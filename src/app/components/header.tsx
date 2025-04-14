"use client";

import { useState, useCallback, memo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import dread from "../../../public/img/logo-inverse2-nocopyright.webp";
import hero from "../../../public/img/hero5.avif";
import logo from "../../../public/img/logo-inverse2-nocopyright.webp";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoCloseOutline, IoFolderOutline } from "react-icons/io5";

type NavItem = {
  path: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/pages", label: "Pages" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contacts", label: "Contacts" },
];

const Header = memo(() => {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
    if (searchOpen) {
      setSearchQuery("");
    }
  }, [searchOpen]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Searching for:", searchQuery);
    },
    [searchQuery]
  );

  const isActive = (path: string) => pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="relative h-screen z-50 shadow-md px-20">
      {/* Hero Image */}
      <Image
        src={hero}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-8">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              <Image src={dread} alt="manageCard" width={150} height={0} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className="text-white font-medium text-sm uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`absolute left-0 bottom-1px h-0.5 bg-white transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              ))}

              <div className="">
                {/* Button to open modal */}
                <button
                  onClick={toggleSearch}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label="Open search"
                >
                  <FiSearch className="w-5 h-5 text-white" />
                </button>

                {/* Modal */}
                {searchOpen && (
                  <div className="fixed h-[60%] inset-0 pb-20 bg-black bg-opacity-75 flex justify-center items-center z-50 px-20">
                    <div className="relative w-full h-[80%] bg-black p-4 flex flex-col justify-between">
                      {/* Logo in the upper left */}
                      <div className="absolute top-4 left-4 text-white font-bold text-xl">
                        <Image
                          src={logo}
                          alt="manageCard"
                          width={150}
                          height={0}
                        />
                      </div>

                      {/* Search Input Section */}
                      <form
                        onSubmit={handleSearch}
                        className="absolute bottom-4 left-0 right-0 p-4 flex items-center mx-6"
                      >
                        <div className="w-full flex items-center border-b-2 border-white">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Type words and hit enter"
                            className="w-full bg-transparent text-white text-4xl px-3 py-2 focus:outline-none"
                            autoFocus
                          />
                          <button
                            type="submit"
                            className="text-white text-3xl p-2 hover:bg-gray-600 transition-colors"
                            aria-label="Submit search"
                          >
                            <FiSearch />
                          </button>
                        </div>
                      </form>

                      {/* Cancel Button */}
                      <button
                        onClick={toggleSearch}
                        className="absolute top-4 right-4 p-3 rounded-full  text-white  hover:rotate-180 transition-transform"
                        aria-label="Close search"
                      >
                        <IoCloseOutline className="text-6xl" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="flex items-center ">
            <a
              href="tel:+1234567890"
              className="p-2 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <BiPhoneCall className="text-white w-[25px] h-[25px]" />
            </a>{" "}
            <p className="ml-3 text-white ">1 800 458 56 97</p>
            <button className="px-10 py-2 bg-[#3d10d0] rounded-3xl ml-8 text-white">
              let&apos;s talk
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center space-x-6 mt-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group">
              <Link href={item.path} className="text-white text-xs uppercase">
                {item.label}
              </Link>
              <div
                className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>
          ))}
        </nav>
      </div>

      {/* Three boxes fixed to the right */}
      <div className="fixed top-1/3 right-0 space-y-6 z-50">
        <div className="flex flex-col space-y-[2px]">
          {/* Box 1 */}
          <div className="group bg-[#25058f] p-5 flex items-center text-white cursor-pointer transition-all duration-300 relative">
            <MdOutlineShoppingCart className="transition-all duration-300" />
            <div className="absolute left-full top-0 bg-black text-white p-5 w-36 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
              BUY THEME
            </div>
          </div>

          {/* Box 2 */}
          <div className="group bg-[#25058f] p-5 flex items-center text-white cursor-pointer transition-all duration-300 relative">
            <GrGallery className="transition-all duration-300" />
            <div className="absolute left-full top-0 bg-black text-white p-5 w-36 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
              OUR BESTSELLERS
            </div>
          </div>

          {/* Box 3 */}
          <div className="group bg-[#25058f] p-5 flex items-center text-white cursor-pointer transition-all duration-300 relative">
            <IoFolderOutline className="transition-all duration-300" />
            <div className="absolute left-full top-0 bg-black text-white p-5 w-36 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
              HIDE PANEL
            </div>
          </div>
        </div>
      </div>

      {/* Arrow to scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 flex justify-center items-center right-10 bg-black h-10 w-10 rounded-full text-white shadow-lg hover:bg-blue-700 transition-colors"
        >
          ↑
        </button>
      )}

      <div className="text-center mt-30 text-[#fefefe]  relative">
        <p className=" text-4xl lg:text-6xl font-bold mb-6">
          Turning Creative Ideas <br /> into Success
        </p>
        <p className="mb-4">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />{" "}
          dolore magna aliqua quis nostrud exerc.
        </p>
        <button className="px-10 py-3 bg-[#57bdef] rounded-3xl mt-8 cursor-pointer">
          Discover Now
        </button>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
