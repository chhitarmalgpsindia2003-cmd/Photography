import React from "react";
import { FaPlay, FaArrowRight, FaImages } from "react-icons/fa";
import { Sparkles, ArrowUpRight, Film, Camera } from "lucide-react";

import pw1 from "../assets/pw1.webp";
import pw2 from "../assets/pw2.webp";
import pw3 from "../assets/pw3.webp";
import pw4 from "../assets/pw4.webp";
import pw5 from "../assets/pw5.webp";

import ppw1 from "../assets/ppw1.webp";
import ppw2 from "../assets/ppw2.webp";
import ppw3 from "../assets/ppw3.webp";
import ppw4 from "../assets/ppw4.webp";
import ppw5 from "../assets/ppw5.webp";

import b1 from "../assets/b1.webp";
import b7 from "../assets/b7.webp";
import b9 from "../assets/b9.webp";
import b11 from "../assets/b11.webp";
import b12 from "../assets/b12.webp";

import e2 from "../assets/e2.webp";
import e3 from "../assets/e3.webp";
import e7 from "../assets/e7.webp";
import e9 from "../assets/e9.webp";
import e12 from "../assets/e12.webp";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "wedding",
      tag: "WEDDING CINEMATOGRAPHY",
      tagColor: "text-rose-500",
      accentGradient: "from-rose-400 via-purple-400 to-sky-400",
      title: "Wedding Stories",
      text: "Sacred rituals, heartfelt vows, and unforgettable moments documented with royal grandeur, pristine skin tones, and timeless cinema.",
      videoUrl: "https://www.youtube.com/embed/fLW88HBTLuk",
      images: [pw1, pw2, pw3, pw4, pw5],
    },
    {
      id: "prewedding",
      tag: "ROMANTIC ODYSSEY",
      tagColor: "text-purple-600",
      accentGradient: "from-purple-400 via-pink-400 to-sky-400",
      title: "Pre-Wedding Tales",
      text: "Golden hour glows, destination landscapes, and genuine connections captured naturally before your lifelong adventure begins.",
      videoUrl: "https://www.youtube.com/embed/ztQoCJlC4UI",
      images: [ppw1, ppw2, ppw3, ppw4, ppw5],
    },
    {
      id: "birthday",
      tag: "MILESTONE CELEBRATIONS",
      tagColor: "text-sky-600",
      accentGradient: "from-sky-400 via-teal-400 to-amber-400",
      title: "Birthday & Milestones",
      text: "Unfiltered laughter, family hugs, cake cutting traditions, and playful party moments preserved into everlasting joyful memories.",
      videoUrl: "https://www.youtube.com/embed/9bsYn3hgz4w",
      images: [b1, b7, b9, b11, b12],
    },
    {
      id: "event",
      tag: "LIVE PRODUCTIONS",
      tagColor: "text-teal-600",
      accentGradient: "from-teal-400 via-sky-400 to-purple-400",
      title: "Corporate & Events",
      text: "High-octane energy, keynote addresses, executive summits, and candid networking interactions captured with finesse and prestige.",
      videoUrl: "https://www.youtube.com/embed/ZFLmS1yvTF8",
      images: [e2, e3, e7, e9, e12],
    },
  ];

  return (
    <div className="overflow-hidden font-sans text-slate-800">

      {/* =========================================================
          HERO SECTION (3D GLASS & FLOATING DEPTH)
      ========================================================= */}
      <section className="relative overflow-hidden px-6 py-28 text-center md:py-20">
        {/* 3D Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -left-24 top-8 h-96 w-96 rounded-full" />
        <div className="pointer-events-none absolute right-8 top-10 h-96 w-96 rounded-full" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-200/40 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          {/* 3D Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/75 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 backdrop-blur-xl shadow-[3px_4px_12px_rgba(244,114,182,0.2),inset_0_1px_2px_rgba(255,255,255,0.9)]">
            <Sparkles size={14} className="text-rose-500" />
            <span>Master Archive</span>
          </div>

          {/* 3D Heading */}
          <h1 className="font-serif text-5xl font-black uppercase tracking-tight text-slate-700 md:text-7xl lg:text-8xl drop-shadow-[2px_3px_0_rgba(255,255,255,0.9)]">
            Stories Through Our{" "} Cinematic Lens
          </h1>

          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-black md:text-lg">
            Explore our curated films and high-resolution stills spanning royal weddings,
            intimate couple journeys, joyful milestone birthdays, and prestigious live corporate events.
          </p>

          {/* 3D Action Chips */}
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a
              href="#wedding"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/60  text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(244,114,182,0.45)] active:translate-y-0.5 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]"
            >
              <span>Explore Portfolio</span>
              <FaArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/80 px-7 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <FaImages className="text-purple-600" />
              <span>4 Photography Disciplines</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO SECTIONS (3D GLASS PODS & CINEMA FRAMES)
      ========================================================= */}
      <div className="space-y-28 pb-32">
        {sections.map((sec, i) => (
          <section
            key={sec.id}
            id={sec.id}
            className="border-y border-white/80 bg-gradient-to-r from-white/70 via-rose-50/30 via-sky-50/30 to-white/70 px-6 py-20 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Details Column */}
                <div className="space-y-5">
                  <span className={`text-xs font-bold uppercase tracking-[0.3em] ${sec.tagColor}`}>
                    {sec.tag}
                  </span>

                  <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-slate-800 md:text-5xl">
                    {sec.title}
                  </h2>

                  <div className={`h-[3px] w-14 rounded-full bg-gradient-to-r ${sec.accentGradient}`} />

                  <p className="text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                    {sec.text}
                  </p>

                  <div className="pt-2">
                    <a
                      href={sec.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-rose-400 hover:to-sky-400 hover:text-white hover:shadow-[0_8px_20px_rgba(244,114,182,0.35)] active:translate-y-0.5"
                    >
                      <FaPlay size={12} className="transition-transform duration-300 group-hover:scale-110" />
                      <span>Watch Full Film</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {/* 3D Cinema Video Frame */}
                <div className="group relative overflow-hidden rounded-[36px] border border-white/90 bg-white/80 p-3 shadow-[0_20px_50px_rgba(186,230,253,0.45),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(244,114,182,0.35)]">
                  <div className="aspect-video w-full overflow-hidden rounded-[26px] bg-black shadow-inner">
                    <iframe
                      className="h-full w-full"
                      src={sec.videoUrl}
                      title={sec.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

              </div>

              {/* 3D Raised Stills Row */}
              <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
                {sec.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative h-60 overflow-hidden rounded-3xl border border-white/90 bg-white/80 p-2 shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(244,114,182,0.3)]"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <img
                        src={img}
                        alt={`${sec.title} ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <span className="absolute bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Still #{String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-3 items-center justify-center rounded-xl bg-white/90 text-slate-800 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* =========================================================
          FINAL CTA (PASTEL LUXURY GLOW)
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/80 bg-amber-50/50 py-24 text-center">
       
        <div className="relative mx-auto max-w-4xl px-6">
          {/* 3D Icon Pod */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-rose-50 to-sky-100 border border-white/90 text-rose-500 shadow-[3px_4px_10px_rgba(14,165,233,0.2),-2px_-2px_6px_rgba(255,255,255,0.9),inset_0_1px_2px_rgba(255,255,255,1)]">
            <Film size={26} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-purple-600">
            YOUR STORY DESERVES TO BE REMEMBERED
          </p>

          <h2 className="mt-3 font-serif text-4xl font-black uppercase text-slate-800 md:text-6xl">
            Let's Create{" "}  Beautiful Memories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
            From weddings and pre-weddings to milestone birthdays and high-profile corporate galas,
            we turn your precious moments into timeless cinematic legacies.
          </p>

          <button
            onClick={() => navigate("/contact")}
            type="button"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/60 text-rose-500 hover:bg-rose-500 hover:text-white px-9 py-4 text-xs font-bold uppercase tracking-wider shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(244,114,182,0.45)] active:translate-y-0.5"
          >
            <span>Book Your Photography</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;