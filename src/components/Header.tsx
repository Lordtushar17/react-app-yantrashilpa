import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (scrollToId?: string) => {
    setOpen(false);
    if (scrollToId) {
      setTimeout(() => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left: logo */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              onClick={() => {
                handleNavClick();
              }}
              className="flex items-center"
            >
              <img
                src="/header section last.png"
                alt="Yantrashilpa Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop nav (unchanged look) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-10 text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    // scroll to #about section on the homepage
                    setTimeout(() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="hover:text-orange-500"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "hover:text-orange-500"
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "hover:text-orange-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger (keeps colors/behavior identical) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {!open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel (slides open) */}
      <div
        className={`md:hidden transition-transform duration-200 ease-in-out origin-top ${
          open ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
        aria-hidden={!open}
      >
        <div className="px-4 pt-4 pb-6 bg-gray-900 bg-opacity-95 border-t border-gray-800">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => handleNavClick()}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500" : "text-gray-200 hover:text-orange-500"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <button
                onClick={() => {
                  handleNavClick("about");
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-orange-500"
              >
                About Us
              </button>
            </li>

            <li>
              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-400" : "text-gray-200 hover:text-orange-500"}`
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-400" : "text-gray-200 hover:text-orange-500"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
