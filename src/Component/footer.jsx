import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Camera, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";


export const Footer = () => {

  return (
    <footer
      className="
        relative overflow-hidden font-sans
        /* 5-Color Pastel Luxury Gradient matching Navbar */
        backdrop-blur-2xl
        border-t border-white/80
        bg-gray-50
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_-10px_35px_-5px_rgba(186,230,253,0.3)]
        text-slate-600
      "
    >

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 z-10">

        {/* ================= TOP BRAND BAR ================= */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/80 pb-10 md:flex-row">

          {/* 3D LOGO */}
          <NavLink to="/" className="group flex items-center gap-3">
            <div
              className="
                flex h-11 w-11 items-center justify-center rounded-2xl
                bg-gradient-to-br from-white via-rose-50 to-sky-100
                border border-white/90 text-slate-800
                shadow-[3px_4px_10px_rgba(14,165,233,0.2),-2px_-2px_6px_rgba(255,255,255,0.9),inset_0_1px_2px_rgba(255,255,255,1)]
                transition-all duration-300
                group-hover:-translate-y-0.5 group-hover:scale-105
                group-hover:shadow-[4px_6px_14px_rgba(244,114,182,0.3)]
              "
            >
              <Camera size={22} className="stroke-[2.2] text-rose-500 transition-colors duration-300 group-hover:text-sky-600" />
            </div>

            <span className="font-serif text-3xl font-black tracking-wide text-slate-800 drop-shadow-[1px_2px_0_rgba(255,255,255,0.8)]">
              AuraLens
            </span>
          </NavLink>

          {/* 3D RAISED SOCIAL ICONS */}
          <div className="flex gap-3.5">
            {[
              { icon: <FaInstagram size={17} />, href: "#", hoverColor: "hover:text-pink-600 hover:shadow-pink-300/50" },
              { icon: <FaFacebookF size={17} />, href: "#", hoverColor: "hover:text-blue-600 hover:shadow-blue-300/50" },
              { icon: <FaYoutube size={17} />, href: "#", hoverColor: "hover:text-red-600 hover:shadow-red-300/50" },
              { icon: <FaTwitter size={17} />, href: "#", hoverColor: "hover:text-sky-500 hover:shadow-sky-300/50" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`
                  flex h-11 w-11 items-center justify-center rounded-2xl
                  bg-white/80 border border-white/90 text-slate-700
                  shadow-[3px_4px_8px_rgba(147,197,253,0.3),-2px_-2px_6px_rgba(255,255,255,0.9),inset_0_1px_1px_rgba(255,255,255,1)]
                  transition-all duration-300
                  hover:-translate-y-1.5 hover:rotate-3 hover:bg-white
                  hover:shadow-[0_10px_20px_rgba(244,114,182,0.35)]
                  active:translate-y-0.5 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)]
                  ${social.hoverColor}
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= MIDDLE 3D CARDS GRID ================= */}
        <div className="grid grid-cols-1 gap-7 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ABOUT CARD */}
          <div
            className="
              group p-6 rounded-3xl
              bg-white/60 border border-white/90
              backdrop-blur-xl
              shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)]
              transition-all duration-300 hover:-translate-y-1.5
              hover:shadow-[0_16px_32px_rgba(244,114,182,0.25)]
            "
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">
              About AuraLens
            </h3>
            <div className="h-[3px] w-10 bg-gradient-to-r from-rose-400 to-purple-400 my-3.5 rounded-full transition-all duration-300 group-hover:w-16" />
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              Capturing pure emotions, authentic connections, and timeless wedding
              and event stories across India with cinematic artistry.
            </p>
          </div>

          {/* QUICK LINKS CARD */}
          <div
            className="
              group p-6 rounded-3xl
              bg-white/60 border border-white/90
              backdrop-blur-xl
              shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)]
              transition-all duration-300 hover:-translate-y-1.5
              hover:shadow-[0_16px_32px_rgba(167,139,250,0.25)]
            "
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">
              Quick Links
            </h3>
            <div className="h-[3px] w-10 bg-gradient-to-r from-purple-400 to-sky-400 my-3.5 rounded-full transition-all duration-300 group-hover:w-16" />
            <ul className="space-y-2.5 text-sm font-semibold text-slate-600">
              {["Wedding", "Pre-Wedding", "Birthday", "Events"].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${link.toLowerCase().replace("-", "")}`}
                    className="inline-flex items-center gap-1 transition-all duration-200 hover:text-slate-900 hover:translate-x-1"
                  >
                    <span className="text-rose-400">›</span> {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* STUDIO CONTACT CARD */}
          <div
            className="
              group p-6 rounded-3xl
              bg-white/60 border border-white/90
              backdrop-blur-xl
              shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)]
              transition-all duration-300 hover:-translate-y-1.5
              hover:shadow-[0_16px_32px_rgba(56,189,248,0.25)]
            "
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">
              Our Studio
            </h3>
            <div className="h-[3px] w-10 bg-gradient-to-r from-sky-400 to-teal-400 my-3.5 rounded-full transition-all duration-300 group-hover:w-16" />
            <div className="space-y-3.5 text-sm font-medium text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-rose-500 shrink-0" />
                <span>Creative Studio 404, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500 shrink-0" />
                <span>hello@auralens.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-sky-500 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER CARD */}
          <div
            className="
              group p-6 rounded-3xl
              bg-white/60 border border-white/90
              backdrop-blur-xl
              shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)]
              transition-all duration-300 hover:-translate-y-1.5
              hover:shadow-[0_16px_32px_rgba(244,114,182,0.25)]
            "
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">
              Newsletter
            </h3>
            <div className="h-[3px] w-10 bg-gradient-to-r from-teal-400 to-amber-400 my-3.5 rounded-full transition-all duration-300 group-hover:w-16" />
            <p className="text-xs leading-relaxed text-slate-600 font-medium mb-3.5">
              Subscribe for creative inspiration & exclusive seasonal offers.
            </p>
            <div
              className="
                flex items-center rounded-2xl bg-white/90 p-1.5
                border border-white
                shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),2px_3px_8px_rgba(147,197,253,0.2)]
                focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-200
                transition-all
              "
            >
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent px-3 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
              />
              <NavLink to="/contact">
                <button
                  className="
                  rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider
                 bg-rose-500
                 text-white
                  shadow-[0_4px_12px_rgba(244,114,182,0.35)]
                  hover:opacity-95 hover:shadow-[0_6px_16px_rgba(244,114,182,0.45)]
                  active:scale-95 transition-all 
                  cursor-pointer
                "
                >
                  Join
                </button>
              </NavLink>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/80 pt-8 text-xs font-semibold text-slate-500 md:flex-row">
          <p>© 2026 AuraLens Photography Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;