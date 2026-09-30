import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Camera, Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Wedding", path: "/wedding" },
    { name: "Pre-Wedding", path: "/prewedding" },
    { name: "Birthday", path: "/birthday" },
    { name: "Events", path: "/event" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50 w-full
        backdrop-blur-2xl
        border-b border-white/80
        bg-white/80
        shadow-[0_10px_35px_-5px_rgba(186,230,253,0.45),0_4px_12px_rgba(244,114,182,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]
        transition-all duration-300
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        
        {/* ================= LOGO ================= */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 items-center justify-center rounded-2xl
              // bg-gradient-to-br from-white via-rose-50 to-sky-100
              border border-white/90
              text-slate-800
              /* 3D Raised Icon Box */
              shadow-[3px_4px_10px_rgba(14,165,233,0.2),-2px_-2px_6px_rgba(255,255,255,0.9),inset_0_1px_2px_rgba(255,255,255,1)]
              transition-all duration-300
              group-hover:-translate-y-0.5 group-hover:scale-105
              group-hover:shadow-[4px_6px_14px_rgba(244,114,182,0.3)]
            "
          >
            <Camera size={22} className="stroke-[2.2] text-rose-500 transition-colors duration-300 group-hover:text-sky-600" />
          </div>

          <span
            className="
              font-serif text-2xl font-black tracking-wide text-slate-800
              drop-shadow-[1px_2px_0_rgba(255,255,255,0.8)]
            "
          >
            AuraLens
          </span>
        </NavLink>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden items-center gap-2 lg:flex xl:gap-3">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-slate-900 bg-white/80 shadow-[inset_1px_1px_3px_rgba(255,255,255,1),2px_3px_8px_rgba(147,197,253,0.35)] -translate-y-0.5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(244,114,182,0.2)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ================= CTA BUTTON (3D EMBOSSED) ================= */}
        <div className="hidden lg:block">
          <NavLink to="/contact">
            <button
              className="
                group relative inline-flex items-center gap-2 overflow-hidden
                rounded-xl px-5
                py-3 text-xs font-bold uppercase tracking-wider
                border border-white/40
                bg-white 
                text-rose-500
                hover:bg-rose-500
                hover:text-white
                shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(244,114,182,0.45),0_4px_8px_rgba(56,189,248,0.3)]
                active:translate-y-0.5 active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
              "
            >
              <span>Book Now</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </NavLink>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="
            rounded-xl border border-white/80 bg-white/60 p-2.5 text-slate-700
            shadow-[2px_3px_8px_rgba(186,230,253,0.3)]
            transition-all duration-200 active:scale-95 lg:hidden
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {isOpen && (
        <div
          className="
            border-b border-white/80
            bg-gradient-to-b from-white/95 via-rose-50/95 to-sky-50/95
            backdrop-blur-2xl px-6 py-6 lg:hidden
            shadow-[0_15px_30px_rgba(147,197,253,0.3)]
          "
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-white text-slate-900 shadow-[2px_4px_10px_rgba(244,114,182,0.2)]"
                        : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <button
                  className="
                    w-full rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider text-rose-500
                    shadow-[0_6px_16px_rgba(244,114,182,0.35)]
                    active:translate-y-0.5
                  "
                >
                  Book A Shoot
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;