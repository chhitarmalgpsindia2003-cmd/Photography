import React from "react";
import a3 from "../assets/a3.webp";
import a4 from "../assets/a4.webp";
import aui from "../assets/aui.webp";
import wi2 from "../assets/wi2.webp";
import p9 from "../assets/p9.webp";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";

import { FaUsers, FaCamera, FaLightbulb, FaClock } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const About = () => {
  const stats = [
    { value: "500+", label: "Happy Clients", color: "from-rose-500 to-purple-600" },
    { value: "100+", label: "Weddings Captured", color: "from-purple-600 to-sky-600" },
    { value: "8+", label: "Industry Awards", color: "from-sky-600 to-teal-500" },
  ];

  const aboutcard = [
    {
      icon: IoCameraOutline,
      title: "Artistic Vision",
      desc: "Distinctive editorial compositions tailored for authentic, heartfelt moments.",
      iconBg: "bg-rose-100/80 text-rose-600",
      accent: "from-rose-400 to-pink-400",
    },
    {
      icon: BsHeart,
      title: "True Emotion",
      desc: "Candid, unscripted feelings captured effortlessly in their purest essence.",
      iconBg: "bg-purple-100/80 text-purple-600",
      accent: "from-purple-400 to-indigo-400",
    },
    {
      icon: GoShieldCheck,
      title: "Elite Crew",
      desc: "Master visual storytellers, cinematographers & precision color grading specialists.",
      iconBg: "bg-sky-100/80 text-sky-600",
      accent: "from-sky-400 to-teal-400",
    },
  ];

  const teamMembers = [
    {
      img: c1,
      name: "Arjun Mehta",
      role: "Lead Photographer",
      experience: "6+ Years Exp",
      badgeColor: "bg-rose-100 text-rose-700",
      description:
        "Specializes in royal wedding rituals and emotion-rich candid storytelling with natural tones.",
    },
    {
      img: c2,
      name: "Rohan Sharma",
      role: "Cinematographer",
      experience: "5+ Years Exp",
      badgeColor: "bg-purple-100 text-purple-700",
      description:
        "Creates cinematic wedding trailers and luxury brand films with Hollywood-style composition.",
    },
    {
      img: c3,
      name: "Vikram Singh",
      role: "Colorist & Editor",
      experience: "4+ Years Exp",
      badgeColor: "bg-sky-100 text-sky-700",
      description:
        "Master of film-emulating color curves, subtle skin retouching, and timeless cinematic finishes.",
    },
    {
      img: c4,
      name: "Karan Joshi",
      role: "Visual Stylist",
      experience: "3+ Years Exp",
      badgeColor: "bg-teal-100 text-teal-700",
      description:
        "Focuses on editorial framing, light calibration, wardrobe symmetry, and creative couple poses.",
    },
  ];

  const features = [
    {
      icon: FaUsers,
      title: "Master Photographers",
      desc: "Dedicated professionals seasoned in multi-day celebrations and luxury destination shoots.",
    },
    {
      icon: FaCamera,
      title: "Cinema-Grade Gear",
      desc: "Utilizing top-tier prime optics, stabilized gimbal rigs, and calibrated ambient lighting.",
    },
    {
      icon: FaLightbulb,
      title: "Story First",
      desc: "We look beyond standard posed frames to chronicle your genuine personal chemistry.",
    },
    {
      icon: FaClock,
      title: "Punctual Delivery",
      desc: "Meticulously crafted galleries delivered precisely within promised timelines.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden font-sans bg-gradient-to-b from-rose-50/70 via-purple-50/50 via-sky-50/50 via-teal-50/40 to-amber-50/70 text-slate-800">
      
      {/* =====================================================
          HERO SECTION (PASTEL 3D GLOW)
      ===================================================== */}
      <section className="relative px-6 py-24 text-center">
        {/* 3D Pill Badge */}
        <div className="relative inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 backdrop-blur-xl shadow-[3px_4px_12px_rgba(244,114,182,0.2),inset_0_1px_2px_rgba(255,255,255,0.9)]">
          <Sparkles size={14} className="text-rose-500" />
          <span>About Our Legacy</span>
        </div>

        <h1 className="relative mt-6 font-serif text-4xl font-black uppercase tracking-tight text-slate-700 md:text-6xl drop-shadow-[2px_3px_0_rgba(255,255,255,0.9)]">
          Crafting Heritage In Every Single Frame
        </h1>

        <p className="relative mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-black md:text-lg">
          At AuraLens, photography is never merely about capturing what is visible.
          It is about freezing the poetry, the nervous smiles, and the profound depth of how the moment truly felt.
        </p>
      </section>

      {/* =====================================================
          ABOUT INTRO (3D FLOATING COLLAGE & PHILOSOPHY)
      ===================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* 3D Multi-Layered Photo Composition */}
          <div className="relative flex items-center justify-center gap-4">
            {/* Primary Portrait Card */}
            <div className="relative z-10 w-1/2 overflow-hidden rounded-[32px] border border-white/90 bg-white/80 p-2.5 shadow-[0_20px_45px_rgba(186,230,253,0.4),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(244,114,182,0.35)]">
              <img
                src={aui}
                alt="Studio Shot"
                className="h-[430px] w-full rounded-2xl object-cover"
              />
            </div>

            {/* Overlapping Side Stack */}
            <div className="flex w-1/2 flex-col gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/90 bg-white/80 p-2 shadow-[0_12px_30px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:rotate-1">
                <img
                  src={wi2}
                  alt="Couple Ceremony"
                  className="h-48 w-full rounded-2xl object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/90 bg-white/80 p-2 shadow-[0_12px_30px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:-rotate-1">
                <img
                  src={p9}
                  alt="Couple Detail"
                  className="h-48 w-full rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* 3D Accent Badge */}
            <div className="absolute -bottom-5 left-8 z-20 flex items-center gap-2 rounded-2xl border border-white/90 bg-white/90 px-4 py-2.5 shadow-[3px_4px_12px_rgba(244,114,182,0.25)] backdrop-blur-md">
              <Sparkles size={16} className="text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Since 2018</span>
            </div>
          </div>

          {/* Details & Philosophy */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
              Our Philosophy
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold uppercase leading-tight text-slate-800 md:text-5xl">
              Turning Raw Moments Into Timeless Stories
            </h2>

            <div className="my-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400" />

            <p className="text-sm font-medium leading-relaxed text-slate-600 md:text-base">
              Founded with the conviction that no two celebrations share the same heartbeat, we combine
              photojournalistic intuition with editorial softness. We look for unscripted laughter,
              the quiet glance across a crowded mandap, and tears of pure celebration.
            </p>

            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
              Every photograph is treated as an heirloom, hand-graded to preserve natural skin tones
              and timeless pastel palettes rather than passing trends.
            </p>

            {/* 3D Value Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutcard.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-3xl border border-white/90 bg-white/75 p-5 shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(244,114,182,0.3)]"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-slate-800">{c.title}</h3>
                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-500">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          TEAM SECTION (3D ARTIST SHOWCASE)
      ===================================================== */}
      <section className="relative border-y border-white/80 bg-gradient-to-r from-white/70 via-rose-50/30 via-sky-50/30 to-white/70 px-6 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
              Artists & Creators
            </span>
            <h2 className="mt-2 font-serif text-3xl font-black uppercase text-slate-800 md:text-5xl">
              Meet The Visionaries
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-xs font-semibold text-slate-500">
              The creative crew dedicated to framing your most memorable life chapters.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-white/90 bg-white/85 p-3 shadow-[0_12px_30px_-5px_rgba(186,230,253,0.4),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(244,114,182,0.3)]"
              >
                {/* 3D Embedded Photo */}
                <div className="relative h-72 overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${member.badgeColor}`}>
                    {member.experience}
                  </span>
                </div>

                {/* Profile Details */}
                <div className="p-3">
                  <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                    {member.role}
                  </p>
                  <p className="mt-2.5 text-xs font-medium leading-relaxed text-slate-500">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US (FEATURES GRID)
      ===================================================== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
              Our Advantages
            </span>
            <h2 className="mt-2 font-serif text-3xl font-black uppercase text-slate-800 md:text-5xl">
              Why Couples Choose Us
            </h2>
            <p className="mx-auto mt-3 max-w-md text-xs font-semibold text-slate-500">
              Committed to technical perfection, aesthetic balance, and effortless client experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-[28px] border border-white/90 bg-white/75 p-7 shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_18px_38px_rgba(244,114,182,0.25)]"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-sky-100 text-rose-600 shadow-[3px_4px_10px_rgba(14,165,233,0.15),inset_0_1px_2px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-center text-sm font-bold text-slate-800">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-center text-xs font-medium leading-relaxed text-slate-500">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS / MILESTONES (3D RAISED POD)
      ===================================================== */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/90 bg-white/80 p-8 shadow-[0_20px_50px_rgba(147,197,253,0.35),inset_0_1px_3px_rgba(255,255,255,1)] backdrop-blur-2xl md:p-12">
          <div className="grid gap-8 text-center sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {stats.map((s, idx) => (
              <div key={idx} className="pt-6 sm:pt-0 sm:px-4 space-y-1">
                <p className={`font-serif text-4xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent md:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]`}>
                  {s.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;