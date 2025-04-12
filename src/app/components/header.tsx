// components/Header.tsx
"use client";

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";
import dread from "../../../public/img/logo-inverse2-nocopyright.webp";
import { BiPhoneCall } from "react-icons/bi";

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

  return (
    <header className="h-screen z-50 bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between  mt-8">
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
                    className={`
                  absolute left-0 bottom-1px h-0.5 bg-white transition-all duration-300
                  ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                `}
                  />
                </div>
              ))}

              {/* Search */}
              <div className="flex items-center space-x-4">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="px-3 py-1 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-white text-sm text-gray-900"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-3 py-1 bg-white text-gray-900 rounded-r-md hover:bg-gray-100 transition-colors"
                      aria-label="Submit search"
                    >
                      <FiSearch />
                    </button>
                    <button
                      type="button"
                      onClick={toggleSearch}
                      className="ml-2 p-1 rounded-full hover:bg-gray-800 transition-colors"
                      aria-label="Close search"
                    >
                      <FiX className="text-white" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Open search"
                  >
                    <FiSearch className="w-5 h-5 text-white" />
                  </button>
                )}
              </div>
            </nav>
          </div>
          <div className="flex items-center ">
            <a
              href="tel:+1234567890"
              className="p-2 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <BiPhoneCall className="text-white w-[25px] h-[25px]" />
            </a>{" "}
            <p className="ml-3">1 800 458 56 97</p>
            <button className="px-10 py-2 bg-[#4927ba] rounded-3xl ml-8">
              let&apos;s talk
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center space-x-6 mt-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group">
              <Link href={item.path} className="text-white text-xs uppercase">
                {item.label}
              </Link>
              <div
                className={`
                absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300
                ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
              `}
              />
            </div>
          ))}
        </nav>
      </div>
      <div className="text-center mt-30 text-[#fefefe]">
        <p className="text-6xl font-bold mb-6 ">
          Turning Creative Ideas <br /> into Success
        </p>
        <p className="mb-4 ">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />{" "}
          dolore magna aliqua quis nostrud exerc.
        </p>
        <button className="px-10 py-3 bg-[#57bdef] rounded-3xl mt-8">
          Discover Now
        </button>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
