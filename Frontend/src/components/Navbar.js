import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-white/80 backdrop-blur-lg shadow-lg py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img src="https://arahinfotech.net/assets/img/logo1.png" width="40" height="40" alt="logo" />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-blue-600 leading-none">
              ARAH INFOTECH
            </span>
          </div>
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative text-sm font-bold uppercase tracking-widest transition-colors
                ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-500"}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
            {/* Start Project Button */}
            <NavLink
            to="/contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Start a Project
          </NavLink>

          {/* Admin Button - CHANGED LINK TO /admin */}
          <NavLink
            to="/admin"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Admin <ArrowRight size={14} />
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-2"
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Mobile Admin Link */}
              <NavLink
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-blue-600 border-b border-slate-50 pb-2"
              >
                Admin Login
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold mt-4"
              >
                Get a Free Quote
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}