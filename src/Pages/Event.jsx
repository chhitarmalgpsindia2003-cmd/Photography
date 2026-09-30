import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Sparkles,
  Building2,
  PartyPopper,
  Heart,
  Users,
  Check,
  Play,
} from "lucide-react";

import e1 from "../assets/e1.webp";
import e2 from "../assets/e2.webp";
import e3 from "../assets/e3.webp";
import e4 from "../assets/e4.webp";
import e5 from "../assets/e5.webp";
import e6 from "../assets/e6.webp";
import e7 from "../assets/e7.webp";
import e8 from "../assets/e8.webp";
import e9 from "../assets/e9.webp";
import e10 from "../assets/e10.webp";
import e11 from "../assets/e11.webp";
import e12 from "../assets/e12.webp";

export const Event = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    e1,
    e2,
    e3,
    e4,
    e5,
    e7,
    e6,
    e11,
    e9,
    e10,
    e8,
    e12,
  ];

  const categories = [
    "All",
    "Corporate",
    "Birthday",
    "Party",
    "Candid",
  ];

  const eventTypes = [
    {
      title: "Corporate Conferences",
      category: "ENTERPRISE MEDIA",
      description:
        "Professional coverage of conferences, leadership meetings, product launches, award ceremonies and important corporate gatherings.",
      image: e1,
      icon: <Building2 size={22} />,
      points: [
        "Keynotes",
        "Brand Launches",
        "Networking Sessions",
        "Award Ceremonies",
      ],
    },
    {
      title: "Gala & Private Parties",
      category: "LUXURY SOCIALS",
      description:
        "Capturing the atmosphere, beautiful decorations, guests, entertainment and celebratory energy of private events.",
      image: e7,
      icon: <Sparkles size={22} />,
      points: [
        "Theme Parties",
        "Live Performances",
        "Dance Moments",
        "Luxury Decor",
      ],
    },
    {
      title: "Milestone Gatherings",
      category: "SPECIAL CELEBRATIONS",
      description:
        "Anniversaries, family celebrations, baby showers and milestone gatherings captured with warmth and creativity.",
      image: e4,
      icon: <PartyPopper size={22} />,
      points: [
        "Anniversaries",
        "Family Events",
        "Special Moments",
        "Group Portraits",
      ],
    },
    {
      title: "Candid Atmosphere",
      category: "DOCUMENTARY STYLE",
      description:
        "Natural expressions, genuine reactions and spontaneous moments captured without interrupting the flow of your event.",
      image: e10,
      icon: <Heart size={22} />,
      points: [
        "Natural Smiles",
        "Real Emotions",
        "Guest Reactions",
        "Unplanned Moments",
      ],
    },
  ];

  const stats = [
    {
      number: "500+",
      title: "Events Captured",
      text: "Professional event memories preserved with creativity and detail.",
    },
    {
      number: "100+",
      title: "Happy Clients",
      text: "Beautiful experiences and memorable moments delivered.",
    },
    {
      number: "100%",
      title: "Creative Passion",
      text: "Every event photographed with care and attention to detail.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-rose-50/70 via-purple-50/40 to-sky-50/50 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={e1}
          alt="Event Photography"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT CONTENT */}

            <div className="max-w-3xl">

              {/* Badge */}

              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/90 bg-white/70 px-5 py-3 shadow-[0_12px_35px_rgba(148,163,184,0.16)] backdrop-blur-xl">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500 shadow-inner">
                  <Camera size={16} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-slate-600">
                  Event Photojournalism
                </span>

              </div>

              {/* Small Heading */}

              <p className="text-sm font-bold uppercase tracking-[0.45em] text-rose-500">
                UNFORGETTABLE EVENTS
              </p>

              {/* Main Heading */}

              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">

                Every Event Has A Story

              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-black sm:text-lg">

                From corporate gatherings and private celebrations to
                birthdays and special occasions, we capture every important
                moment with cinematic creativity and timeless style.

              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">

                {/* Gallery Button */}

                <button
                  onClick={() =>
                    document
                      .getElementById("event-gallery")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white
                    text-rose-500
                    hover:bg-rose-500
                    hover:text-white
                    bg-white/75
                    px-5
                    py-2
                    text-sm
                    font-bold
                    backdrop-blur-xl
                    shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_20px_40px_rgba(139,92,246,0.28)]
                  "
                >

                  Explore Works

                  <ArrowDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />

                </button>


                {/* Film Button */}

                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/ZFLmS1yvTF8",
                      "_blank"
                    )
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/90
                    bg-white/75
                    px-5
                    py-2
                    text-sm
                    font-bold
                    text-slate-700
                    shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500">
                    <Play size={14} fill="currentColor" />
                  </span>

                  Event Films

                </button>

              </div>

            </div>


            {/* RIGHT 3D IMAGE */}

            <div className="relative mx-auto w-full max-w-[520px]">

              {/* Back Layer */}

              <div className="absolute -right-5 -top-5 h-[420px] w-[85%] rotate-6 rounded-[38px] bg-gradient-to-br from-sky-200/60 to-purple-200/60 shadow-2xl" />

              {/* Bottom Layer */}

              <div className="absolute -bottom-5 -left-5 h-[390px] w-[78%] -rotate-6 rounded-[38px] bg-gradient-to-br from-rose-200/60 to-amber-200/60 shadow-2xl" />

              {/* Main Card */}

              <div className="relative rounded-[38px] border border-white/90 bg-white/70 p-3 shadow-[0_30px_80px_rgba(100,116,139,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[1deg]">

                <div className="relative overflow-hidden rounded-[30px]">

                  <img
                    src={e1}
                    alt="Event celebration"
                    className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-white/10" />

                  {/* Floating Card */}

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500">
                          EVENT STORIES
                        </p>

                        <h3 className="mt-2 font-serif text-2xl font-bold text-slate-800">
                          500+ Events
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Captured with creativity
                        </p>

                      </div>

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 via-purple-400 to-sky-400 text-white shadow-lg">
                        <Camera size={25} />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO SECTION
      ===================================================== */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">

        {/* Glow */}

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative mx-auto w-full max-w-xl">

            {/* Back Layer */}

            <div className="absolute -left-5 -top-5 h-full w-full rounded-[35px] bg-gradient-to-br from-rose-200/60 via-purple-200/50 to-sky-200/60" />

            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[35px] bg-gradient-to-br from-sky-200/50 to-amber-200/50" />

            {/* Main Image */}

            <div className="group relative overflow-hidden rounded-[35px] border-8 border-white/90 bg-white shadow-[0_25px_60px_rgba(100,116,139,0.18)] transition-all duration-700 hover:-translate-y-3">

              <img
                src={e2}
                alt="Event Moments"
                className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              {/* Label */}

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-white shadow-xl backdrop-blur-xl">

                <p className="text-xs font-bold tracking-[3px] text-rose-100">
                  EVENT STORIES
                </p>

                <p className="mt-1 text-lg font-semibold sm:text-xl">
                  Moments Worth Remembering
                </p>

              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
              EVENT STORIES
            </p>

            <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-slate-800 sm:text-5xl">

              More Than Just An Event

            </h2>

            <p className="mt-6 leading-8 text-slate-600">

              Every event has its own atmosphere, people and emotions.
              Our goal is to capture those details naturally while creating
              photographs that feel cinematic and timeless.

            </p>

            <p className="mt-4 leading-8 text-slate-600">

              From the first guest arriving to the final celebration,
              we preserve the energy, atmosphere and emotions of your
              event through professional photography.

            </p>


            {/* FEATURES */}

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {[
                "Professional Coverage",
                "Candid Moments",
                "Creative Details",
                "High Quality Photos",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-3xl
                    border
                    border-white/90
                    bg-white/70
                    p-4
                    shadow-[0_12px_30px_rgba(148,163,184,0.13)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_20px_40px_rgba(139,92,246,0.16)]
                  "
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-purple-100 to-sky-100 text-rose-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">

                    <Check size={17} />

                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENT EXPERIENCES
      ===================================================== */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">

        <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-14 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
              EVENT EXPERIENCES
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black text-slate-800 sm:text-5xl">

              Every Moment.{" "} Every Emotion.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">

              From professional corporate gatherings to intimate private
              celebrations, every event deserves its own visual story.

            </p>

          </div>


          {/* CARDS */}

          <div className="grid gap-7 md:grid-cols-2">

            {eventTypes.map((item, index) => (

              <div
                key={item.title}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/90
                  bg-white/70
                  p-3
                  shadow-[0_20px_55px_rgba(148,163,184,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_30px_65px_rgba(139,92,246,0.18)]
                "
              >

                {/* IMAGE */}

                <div className="relative h-72 overflow-hidden rounded-[25px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />

                  {/* Number */}

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-sm font-bold text-slate-700 shadow-lg backdrop-blur-xl">

                    0{index + 1}

                  </div>

                  {/* Icon */}

                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/75 text-rose-500 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

                    {item.icon}

                  </div>

                  {/* Category */}

                  <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-widest text-white">
                    {item.category}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="p-6">

                  <h3 className="font-serif text-2xl font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>


                  {/* POINTS */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {item.points.map((point) => (

                      <span
                        key={point}
                        className="
                          rounded-full
                          border
                          border-white
                          bg-gradient-to-r
                          from-rose-50
                          to-purple-50
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-slate-600
                          shadow-sm
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:text-rose-500
                        "
                      >

                        ✦ {point}

                      </span>

                    ))}

                  </div>


                  {/* BUTTON */}

                  <button
                    className="
                      mt-7
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white
                      bg-gradient-to-r
                      from-white
                      via-rose-50
                      to-purple-50
                      px-5
                      py-4
                      text-sm
                      font-semibold
                      text-slate-700
                      shadow-[0_8px_20px_rgba(148,163,184,0.10)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_15px_30px_rgba(139,92,246,0.14)]
                    "
                  >

                    <span>
                      Explore {item.title}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500 transition-transform duration-300 group-hover:translate-x-1">

                      <ArrowUpRight size={18} />

                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="event-gallery"
        className="relative px-5 py-24 sm:px-8 lg:px-10"
      >

        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
                LIVE CAPTURES
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black text-slate-800 sm:text-5xl">

                Event{" "}Showcase
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                A curated collection of memorable moments captured
                across different events and celebrations.
              </p>

            </div>


            {/* FILTERS */}

            <div className="flex flex-wrap gap-2 rounded-3xl border border-white/80 bg-white/60 p-2 shadow-lg backdrop-blur-xl">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-2xl
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    ${activeCategory === category
                      ? "bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400 text-white shadow-lg"
                      : "text-slate-500 hover:bg-white hover:text-slate-800"
                    }
                  `}
                >

                  {category}

                </button>

              ))}

            </div>

          </div>


          {/* GALLERY GRID */}

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {images.map((img, idx) => (

              <div
                key={idx}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/90
                  bg-white/75
                  p-2
                  shadow-[0_15px_40px_rgba(148,163,184,0.14)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(139,92,246,0.20)]
                  ${idx === 0 || idx === 5
                    ? "sm:col-span-2 lg:row-span-2"
                    : ""
                  }
                `}
              >

                <div className="relative overflow-hidden rounded-[21px]">

                  <img
                    src={img}
                    alt={`Event frame ${idx + 1}`}
                    className={`
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                      ${idx === 0 || idx === 5
                        ? "h-[520px]"
                        : "h-[280px]"
                      }
                    `}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent opacity-80" />

                  {/* Number */}

                  <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-lg backdrop-blur-xl">

                    {String(idx + 1).padStart(2, "0")}

                  </div>

                  {/* Frame Name */}

                  <div className="absolute bottom-4 left-4">

                    <span className="text-xs font-semibold text-white">
                      Event Frame #{String(idx + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Arrow */}

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-xl border border-white/70 bg-white/75 text-rose-500 shadow-xl backdrop-blur-xl opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <ArrowUpRight size={18} />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[38px] border border-white/90 bg-gradient-to-r from-rose-100/80 via-purple-100/75 to-sky-100/80 p-6 shadow-[0_25px_70px_rgba(139,92,246,0.14)] backdrop-blur-xl sm:p-10">

            <div className="grid gap-5 md:grid-cols-3">

              {stats.map((stat) => (

                <div
                  key={stat.title}
                  className="
                    group
                    rounded-[28px]
                    border
                    border-white/90
                    bg-white/75
                    p-8
                    text-center
                    shadow-[0_15px_35px_rgba(148,163,184,0.12)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:bg-white/90
                    hover:shadow-[0_25px_50px_rgba(139,92,246,0.16)]
                  "
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-purple-100 to-sky-100 text-rose-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">

                    <Camera size={24} />

                  </div>

                  <p className="mt-5 font-serif text-4xl font-black text-slate-800">

                    {stat.number}

                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-700">
                    {stat.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative px-5 pb-24 sm:px-8 lg:px-10">

        <div className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto h-80 max-w-4xl rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[42px] border border-white/90 bg-amber-50/50 p-8 shadow-[0_30px_80px_rgba(139,92,246,0.16)] backdrop-blur-xl sm:p-14">
          <div className="relative mx-auto max-w-3xl text-center">

            {/* Icon */}

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/80 bg-white/75 text-rose-500 shadow-xl backdrop-blur-xl">

              <Users size={28} />

            </div>

            {/* Small Heading */}

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
              MAKE YOUR EVENT MEMORABLE
            </p>

            {/* Heading */}

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-slate-800 sm:text-5xl">

              Let's Capture Your Special Event
            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">

              From corporate events to private celebrations,
              we create beautiful photographs that preserve the
              atmosphere, emotions and memories of your special day.

            </p>

            {/* CTA */}

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white
                text-rose-500
                hover:bg-rose-500
                hover:text-white
                px-8
                py-4
                text-sm
                font-bold
                shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_25px_50px_rgba(139,92,246,0.28)] cursor-pointer
              "
            >

              Book Event Photography

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Event;