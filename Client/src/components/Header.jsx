import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/PERIOD SLAY LOGO.png";
import ProfileIcon from "../assets/profile-icon.svg";
import MenuIcon from "../assets/menu.svg";
import Close from "../assets/close-btn.svg";

export default function Header() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <header className="border-b-2 border-b-primary500">
      <nav className="w-[90%] mx-auto">
        <div className="tabs flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" width={150} />
          </Link>
          <ul className="hidden md:flex items-center gap-4 font-medium text-base ">
            <li>
              <Link
                className={location.pathname.includes("/blog") ? "active" : ""}
                to="/blog"
              >
                Health Blog
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname.includes("/tracker") ? "active" : ""
                }
                to="/tracker"
              >
                Period Tracker
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/about" ? "active" : ""}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname.includes("/contact") ? "active" : ""
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="flex items-center gap-4 md:gap-0">
              <Link to={"/profile"}>
                <img src={ProfileIcon} alt="icon" />
              </Link>
              <img
                className="md:hidden cursor-pointer"
                src={MenuIcon}
                alt="menu"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              />
            </div>
          ) : (
            <ul className="flex items-center gap-5 font-medium text-base">
              <li>
                <Link
                  className={location.pathname === "/login" ? "active" : ""}
                  to="/login"
                >
                  Log in
                </Link>
              </li>
              <li className="border-2 border-primary500 py-2 px-5 rounded-md">
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div
        className={`${
          isMobileNavOpen ? "right-0" : "right-full"
        } tabs md:hidden fixed top-0 bg-white z-50 w-2/3 h-full transition-transform transform ease-in-out duration-300`}
      >
        <img
          className="cursor-pointer"
          src={Close}
          alt="menu"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />
        <ul className="flex flex-col items-center gap-5 font-medium text-base">
          <li>
            <Link
              className={location.pathname.includes("/blog") ? "active" : ""}
              to="/blog"
            >
              Health Blog
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname.includes("/tracker") ? "active" : ""}
              to="/tracker"
            >
              Period Tracker
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname.includes("/contact") ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
