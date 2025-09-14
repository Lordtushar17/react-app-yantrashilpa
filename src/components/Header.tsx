import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left side - Logo + contact */}
        <div className="flex items-center space-x-6">
          {/* Logo (click navigates to homepage) */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="/company-logo-header.png" alt="Yantrashilpa Logo" className="h-10 w-auto cursor-pointer" />
          </Link>

          {/* Contact info (hidden on small screens) */}
          <div className="hidden md:flex space-x-4 text-sm text-gray-300">
            <span>📧 info@yantrashilpa.com</span>
            <span>📞 +91 98765 43210</span>
          </div>
        </div>

        {/* Right side - Navigation */}
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-400")}
              >
                Home
              </NavLink>

            </li>

            {/* About links to home + anchor: use pathname + hash */}
            <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById("about")?.scrollIntoView({ behavior:              "smooth" });
                    }, 100); // wait for navigation
                  }}
                  className="hover:text-green-400"
                >
                  About Us
                </NavLink>
            </li>


            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-400")}>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-400")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
