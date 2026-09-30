import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowDown,
  ArrowUpRight,
  Cake,
  Gift,
  Sparkles,
  Heart,
  Play,
  Check,
  Camera,
  PartyPopper,
  Images,
} from "lucide-react";

import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b3 from "../assets/b3.webp";
import b4 from "../assets/b4.webp";
import b5 from "../assets/b5.webp";
import b6 from "../assets/b6.webp";
import b7 from "../assets/b7.webp";
import b8 from "../assets/b8.webp";
import b9 from "../assets/b9.webp";
import b10 from "../assets/b10.webp";
import b11 from "../assets/b11.webp";
import b12 from "../assets/b12.webp";

const Bday = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");

  /* =========================
     GALLERY DATA
  ========================= */

  const gallery = [
    {
      image: b1,
      category: "Decorations",
      title: "Elegant Birthday Setup",
    },
    {
      image: b2,
      category: "Celebration",
      title: "Beautiful Celebration",
    },
    {
      image: b3,
      category: "Candid",
      title: "Natural Happiness",
    },
    {
      image: b4,
      category: "Cake",
      title: "The Cake Moment",
    },
    {
      image: b5,
      category: "Celebration",
      title: "Birthday Vibes",
    },
    {
      image: b6,
      category: "Decorations",
      title: "Dreamy Decorations",
    },
    {
      image: b7,
      category: "Celebration",
      title: "Party Energy",
    },
    {
      image: b8,
      category: "Candid",
      title: "Pure Smiles",
    },
    {
      image: b9,
      category: "Cake",
      title: "Sweet Memories",
    },
    {
      image: b10,
      category: "Candid",
      title: "Unposed Moments",
    },
    {
      image: b11,
      category: "Decorations",
      title: "Celebration Details",
    },
    {
      image: b12,
      category: "Celebration",
      title: "Forever Memories",
    },
  ];

  const categories = [
    "All",
    "Decorations",
    "Cake",
    "Celebration",
    "Candid",
  ];

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") {
      return gallery;
    }

    return gallery.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  /* =========================
     BIRTHDAY MOMENTS
  ========================= */

  const birthdayMoments = [
    {
      title: "Elegant Setups",
      subtitle: "THEME & DECOR",
      image: b1,
      icon: Sparkles,
      highlights: [
        "Custom Themes",
        "Balloon Decor",
        "Table Styling",
      ],
    },

    {
      title: "The Cake Moment",
      subtitle: "CAKE CELEBRATION",
      image: b4,
      icon: Cake,
      highlights: [
        "Cake Details",
        "Candle Moments",
        "Family Reactions",
      ],
    },

    {
      title: "Party Energy",
      subtitle: "CELEBRATION",
      image: b7,
      icon: PartyPopper,
      highlights: [
        "Dance Moments",
        "Group Photos",
        "Party Vibes",
      ],
    },

    {
      title: "Pure Smiles",
      subtitle: "CANDID STORIES",
      image: b10,
      icon: Heart,
      highlights: [
        "Natural Expressions",
        "Family Moments",
        "Candid Portraits",
      ],
    },
  ];

  /* =========================
     STATS
  ========================= */

  const stats = [
    {
      value: "300+",
      label: "Celebrations",
      icon: PartyPopper,
    },
    {
      value: "100+",
      label: "Happy Families",
      icon: Heart,
    },
    {
      value: "100%",
      label: "Real Moments",
      icon: Camera,
    },
  ];

  /* =========================
     SCROLL
  ========================= */

  const scrollToGallery = () => {
    document
      .getElementById("birthday-gallery")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-rose-50/70 via-purple-50/40 via-sky-50/40 to-amber-50/60 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden">

        {/* Background Image */}

        <img
          src={b1}
          alt="Birthday Photography"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}

            <div className="max-w-3xl">

              {/* Badge */}

              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/90 bg-white/70 px-5 py-3 shadow-[0_12px_35px_rgba(148,163,184,0.16)] backdrop-blur-xl">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500 shadow-inner">
                  <Gift size={16} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-slate-600">
                  Milestone Celebrations
                </span>

              </div>

              {/* Small Heading */}

              <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-rose-500">
                BIRTHDAY PHOTOGRAPHY
              </p>

              {/* Main Heading */}

              <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">

                Celebrate Every{" "} Precious Moment
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-black sm:text-lg">

                From beautiful decorations to genuine smiles,
                we capture every little detail that makes your
                birthday celebration unforgettable.

              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">

                <button
                  onClick={scrollToGallery}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white
                    bg-white/75
                    text-rose-500
                    hover:bg-rose-500
                    hover:text-white
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

                  Explore Gallery

                  <ArrowDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />

                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/9bsYn3hgz4w",
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

                  Birthday Films

                </button>

              </div>

            </div>

            {/* RIGHT 3D CARD */}

            <div className="relative mx-auto w-full max-w-[520px]">

              {/* Back Card */}

              <div className="absolute -right-4 -top-4 h-[420px] w-[85%] rotate-6 rounded-[38px] bg-gradient-to-br from-sky-200/50 to-purple-200/50 shadow-2xl blur-[1px]" />

              {/* Back Card */}

              <div className="absolute -bottom-5 -left-5 h-[390px] w-[78%] -rotate-6 rounded-[38px] bg-gradient-to-br from-rose-200/60 to-amber-200/50 shadow-2xl" />

              {/* Main Image Card */}

              <div className="relative overflow-hidden rounded-[38px] border border-white/90 bg-white/70 p-3 shadow-[0_30px_80px_rgba(100,116,139,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[1deg]">

                <div className="relative overflow-hidden rounded-[30px]">

                  <img
                    src={b1}
                    alt="Birthday celebration"
                    className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-white/10" />

                  {/* Floating Info */}

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500">
                          Birthday Stories
                        </p>

                        <h3 className="mt-2 font-serif text-2xl font-bold text-slate-800">
                          300+ Celebrations
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Captured with love
                        </p>

                      </div>

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 via-purple-400 to-sky-400 text-white shadow-lg">
                        <Cake size={25} />
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

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}

            <div className="relative mx-auto w-full max-w-xl">

              <div className="absolute -left-4 -top-4 h-full w-full rounded-[34px] bg-gradient-to-br from-rose-200/60 via-purple-200/50 to-sky-200/60" />

              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[34px] bg-gradient-to-br from-sky-200/50 to-amber-200/50" />

              <div className="relative rounded-[34px] border border-white/90 bg-white/75 p-3 shadow-[0_25px_70px_rgba(100,116,139,0.18)] backdrop-blur-xl">

                <div className="overflow-hidden rounded-[27px]">

                  <img
                    src={b2}
                    alt="Birthday celebration"
                    className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                </div>

              </div>

              {/* Floating Badge */}

              <div className="absolute -bottom-7 -right-4 rounded-3xl border border-white/90 bg-white/85 px-6 py-5 shadow-2xl backdrop-blur-xl sm:right-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500">
                    <Camera size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Memories
                    </p>

                    <p className="mt-1 font-serif text-lg font-bold text-slate-800">
                      Made To Last
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
                THE BIRTHDAY EXPERIENCE
              </p>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-slate-800 sm:text-5xl">
                More Than Just{" "} A Party
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Every birthday has its own personality. We focus on
                the people, emotions, decorations and little details
                that make your celebration truly yours.
              </p>

              {/* Feature Cards */}

              <div className="mt-9 grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Sparkles,
                    title: "Beautiful Details",
                    text: "Decorations and little moments captured beautifully.",
                  },
                  {
                    icon: Heart,
                    title: "Real Emotions",
                    text: "Natural smiles and genuine family moments.",
                  },
                  {
                    icon: Cake,
                    title: "Cake Moments",
                    text: "Every candle, smile and celebration captured.",
                  },
                  {
                    icon: Gift,
                    title: "Special Memories",
                    text: "Photographs you'll love looking back at.",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        group
                        rounded-3xl
                        border
                        border-white/90
                        bg-white/70
                        p-5
                        shadow-[0_14px_35px_rgba(148,163,184,0.13)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_25px_50px_rgba(139,92,246,0.16)]
                      "
                    >

                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-purple-100 to-sky-100 text-rose-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon size={21} />
                      </div>

                      <h3 className="font-serif text-xl font-bold text-slate-800">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BIRTHDAY MOMENTS
      ===================================================== */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
              OUR SPECIALTY
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black text-slate-800 sm:text-5xl">
              Every Moment Deserves{" "} To Be Remembered
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From the first decoration to the final family photograph,
              we capture the complete story of your celebration.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2">

            {birthdayMoments.map((item, index) => {

              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="
                    group
                    relative
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
                    hover:-translate-y-2
                    hover:shadow-[0_30px_65px_rgba(139,92,246,0.18)]
                  "
                >

                  <div className="relative overflow-hidden rounded-[25px]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />

                    {/* Icon */}

                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/75 text-rose-500 shadow-xl backdrop-blur-xl">
                      <Icon size={21} />
                    </div>

                    {/* Image Text */}

                    <div className="absolute bottom-5 left-5 right-5">

                      <p className="text-[10px] font-bold tracking-[0.3em] text-white/80">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-2 font-serif text-3xl font-bold text-white">
                        {item.title}
                      </h3>

                    </div>

                  </div>


                  {/* Bottom Content */}

                  <div className="p-5">

                    <div className="grid gap-3 sm:grid-cols-3">

                      {item.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-50 to-purple-50 px-3 py-3"
                        >

                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm">
                            <Check size={13} />
                          </span>

                          <span className="text-xs font-semibold text-slate-600">
                            {highlight}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="birthday-gallery"
        className="relative px-5 py-24 sm:px-8 lg:px-10"
      >

        <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-purple-200/25 blur-3xl" />

        <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
                BIRTHDAY GALLERY
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black text-slate-800 sm:text-5xl">

                Moments In{" "} Frames
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore some of our favorite birthday moments,
                celebrations and beautiful details.
              </p>

            </div>


            {/* Filter */}

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
                    ${
                      activeCategory === category
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


          {/* Gallery Grid */}

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {filteredGallery.map((item, index) => {

              const isLarge =
                activeCategory === "All" &&
                (index === 0 || index === 5);

              return (
                <div
                  key={`${item.title}-${index}`}
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
                    ${
                      isLarge
                        ? "sm:col-span-2 lg:row-span-2"
                        : ""
                    }
                  `}
                >

                  <div className="relative overflow-hidden rounded-[21px]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className={`
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        ${
                          isLarge
                            ? "h-[520px]"
                            : "h-[280px]"
                        }
                      `}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-80" />

                    {/* Category */}

                    <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 shadow-lg backdrop-blur-xl">
                      {item.category}
                    </div>

                    {/* Bottom */}

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">

                      <div>

                        <h3 className="font-serif text-xl font-bold text-white">
                          {item.title}
                        </h3>

                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/75 text-rose-500 shadow-lg backdrop-blur-xl transition-transform duration-300 group-hover:rotate-6">
                        <ArrowUpRight size={17} />
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

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

              {stats.map((stat, index) => {

                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      rounded-[28px]
                      border
                      border-white/90
                      bg-white/70
                      p-7
                      text-center
                      shadow-[0_15px_35px_rgba(148,163,184,0.12)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:bg-white/90
                    "
                  >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-purple-100 to-sky-100 text-rose-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 font-serif text-4xl font-black text-slate-800">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>

                  </div>
                );
              })}

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

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/80 bg-white/75 text-rose-500 shadow-xl backdrop-blur-xl">
              <Heart size={28} fill="currentColor" />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.4em] text-rose-500">
              LET'S CREATE MEMORIES
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-slate-800 sm:text-5xl">
              Your Celebration.
              <br />
              Our Beautiful Frames.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Let's turn your special birthday celebration into
              timeless photographs that you and your family can
              cherish forever.
            </p>

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
                hover:shadow-[0_25px_50px_rgba(139,92,246,0.28)]
              "
            >

              Book Birthday Photography

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Bday;