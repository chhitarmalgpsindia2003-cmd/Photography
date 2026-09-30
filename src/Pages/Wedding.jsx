import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Play,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import wi1 from "../assets/wi1.webp";
import wi2 from "../assets/wi2.webp";
import wi3 from "../assets/wi3.webp";
import wi4 from "../assets/wi4.webp";
import wi5 from "../assets/wi5.webp";
import wi6 from "../assets/wi6.webp";
import wi7 from "../assets/wi7.webp";
import wi8 from "../assets/wi8.webp";
import wi9 from "../assets/wi9.webp";
import wi10 from "../assets/wi10.webp";
import wi11 from "../assets/wi11.webp";
import wi12 from "../assets/wi12.png";

export const Wedding = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    wi1,
    wi2,
    wi3,
    wi4,
    wi5,
    wi6,
    wi7,
    wi8,
    wi9,
    wi10,
    wi11,
    wi12,
  ];

  const functions = [
    {
      title: "Mehendi Moments",
      category: "MEHENDI RITUALS",
      description:
        "Vibrant hues, intimate laughter, intricate henna art, and candid joy captured naturally.",
      highlights: [
        "Bridal Henna Details",
        "Candid Smiles",
        "Decor & Festive Vibes",
      ],
      image: wi1,
    },
    {
      title: "Sangeet Celebration",
      category: "SANGEET NIGHT",
      description:
        "High-energy choreography, emotional musical tributes, and dazzling celebration moments.",
      highlights: [
        "Dance Floor Action",
        "Family Duets",
        "Dynamic Lighting",
      ],
      image: wi4,
    },
    {
      title: "The Holy Vows",
      category: "WEDDING CEREMONY",
      description:
        "Sacred pheras, heartfelt varmala moments, emotional rituals, and timeless bridal portraits.",
      highlights: [
        "Varmala & Phere",
        "Emotional Vidaai",
        "Bridal Portraits",
      ],
      image: wi7,
    },
    {
      title: "Grand Reception",
      category: "EVENING GALA",
      description:
        "Elegant couple portraits, family celebrations, and cinematic reception moments.",
      highlights: [
        "Editorial Posing",
        "Guest Interactions",
        "Luxury Decor",
      ],
      image: wi10,
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter(() => true);

  return (
    <main className="overflow-hidden font-sans text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24">

        {/* Background Image */}
        <img
          src={wi1}
          alt="Wedding Photography"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">

          {/* 3D Badge */}
          <div
            className="
              mb-7 inline-flex items-center gap-2.5
              rounded-full
              border border-white/90
              bg-white/70
              px-5 py-2.5
              text-xs font-bold uppercase
              tracking-[0.25em]
              text-slate-700
              backdrop-blur-xl
              shadow-[4px_6px_16px_rgba(244,114,182,0.18),inset_0_1px_3px_rgba(255,255,255,1)]
            "
          >
            <Sparkles size={15} className="text-rose-500" />

            <span>
              Royal Wedding Stories
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-serif
              text-5xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-slate-800
              drop-shadow-[2px_4px_0_rgba(255,255,255,0.95)]
              sm:text-7xl
              lg:text-8xl
            "
          >
            Cherish Forever, Frame By Frame
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-black md:text-lg">
            Every tradition, unscripted laugh, emotional glance, and sacred
            ceremony captured with warmth, precision, cinematic depth and
            timeless elegance.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {/* Explore */}
            <button
              onClick={() =>
                document
                  .getElementById("wedding-gallery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                          group
                          flex items-center gap-2
                          rounded-2xl
                          border border-white/90
                         bg-white/75
                         text-rose-500
                         hover:bg-rose-500
                         hover:text-white
                          px-8 py-4
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          backdrop-blur-xl
                          shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          active:translate-y-0.5

              "
            >
              <span>Explore Works</span>

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            {/* Film */}
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=fLW88HBTLuk",
                  "_blank"
                );
              }}
              className="
                          group
                          flex items-center gap-2
                          rounded-2xl
                          border border-white/90
                         bg-white/75
                          px-8 py-4
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                        text-slate-700
                          backdrop-blur-xl
                          shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                        hover:bg-white
                        hover:text-purple-600
  "
            >
              <Play
                size={15}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>Wedding Films</span>
            </button>

          </div>

          {/* 3D Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">

            {[
              {
                number: "500+",
                label: "Memories",
                gradient: "from-rose-500 to-purple-600",
              },
              {
                number: "100+",
                label: "Weddings",
                gradient: "from-purple-600 to-sky-600",
              },
              {
                number: "8+",
                label: "Years",
                gradient: "from-sky-600 to-teal-500",
              },
            ].map((stat, index) => (

              <div
                key={index}
                className="
                  rounded-3xl
                  border border-white/90
                  bg-white/70
                  p-4
                  backdrop-blur-xl
                  shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_18px_35px_rgba(244,114,182,0.25)]
                "
              >
                <p
                  className={`
                    bg-gradient-to-r
                    ${stat.gradient}
                    bg-clip-text
                    font-serif
                    text-3xl
                    font-black
                    text-transparent
                  `}
                >
                  {stat.number}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </p>
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FUNCTIONS SECTION
      ===================================================== */}

      <section className="relative px-6 py-28">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
                Complete Coverage
              </p>

              <h2 className="mt-2 font-serif text-4xl font-black uppercase tracking-tight text-slate-800 md:text-5xl">
                Every Function. <br />Every Emotion.
              </h2>

            </div>

            <p className="max-w-md text-sm font-medium leading-relaxed text-slate-500">
              From intimate Mehendi moments to grand reception celebrations,
              every part of your wedding story deserves to be remembered.
            </p>

          </div>


          {/* Function Cards */}
          <div className="grid gap-7 md:grid-cols-2">

            {functions.map((func, index) => (

              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/90
                  bg-white/75
                  p-3
                  backdrop-blur-xl
                  shadow-[0_15px_35px_-8px_rgba(186,230,253,0.4),inset_0_1px_3px_rgba(255,255,255,1)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_45px_rgba(244,114,182,0.3)]
                "
              >

                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-[23px]">

                  <img
                    src={func.image}
                    alt={func.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/80
                      bg-white/80
                      text-xs
                      font-black
                      text-slate-800
                      shadow-lg
                      backdrop-blur-md
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Category */}
                  <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {func.category}
                  </span>

                </div>


                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-serif text-2xl font-black text-slate-800">
                        {func.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                        {func.description}
                      </p>

                    </div>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-rose-400
                        to-purple-500
                        text-white
                        shadow-[0_6px_12px_rgba(244,114,182,0.3)]
                        transition-transform
                        duration-300
                        group-hover:rotate-6
                      "
                    >
                      <ArrowUpRight size={17} />
                    </div>

                  </div>


                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {func.highlights.map((highlight, idx) => (

                      <span
                        key={idx}
                        className="
                          rounded-full
                          border
                          border-white
                          bg-slate-50/80
                          px-3
                          py-1.5
                          text-[11px]
                          font-semibold
                          text-slate-600
                          shadow-[inset_0_1px_2px_rgba(255,255,255,1)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-purple-600
                        "
                      >
                        ✦ {highlight}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section
        id="wedding-gallery"
        className="
          border-y
          border-white/80
          bg-gradient-to-r
          from-white/70
          via-rose-50/50
          to-sky-50/50
          px-5
          py-28
          backdrop-blur-xl
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Gallery Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600">
                Curated Frames
              </p>

              <h2 className="mt-2 font-serif text-4xl font-black text-slate-800 md:text-5xl">
                Wedding Showcase
              </h2>

              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-500">
                A curated collection of beautiful wedding moments captured
                with creativity, emotion and cinematic storytelling.
              </p>

            </div>


            {/* Filter */}
            <div className="flex flex-wrap gap-2">

              {[
                "All",
                "Mehendi",
                "Sangeet",
                "Wedding",
                "Reception",
              ].map((cat) => (

                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    tracking-wider
                    transition-all
                    duration-300

                    ${activeCategory === cat
                      ? "border-transparent bg-gradient-to-r from-rose-400 to-purple-500 text-white shadow-[0_6px_15px_rgba(244,114,182,0.3)]"
                      : "border-white/90 bg-white/70 text-slate-500 shadow-[2px_3px_8px_rgba(186,230,253,0.2)] hover:-translate-y-0.5 hover:text-purple-600"
                    }
                  `}
                >
                  {cat}
                </button>

              ))}

            </div>

          </div>


          {/* =================================================
              PREMIUM FEATURED GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">

            {/* LARGE IMAGE */}
            <div
              className="
                group
                relative
                min-h-[450px]
                overflow-hidden
                rounded-[28px]
                border
                border-white
                bg-white/80
                p-2
                shadow-[0_15px_35px_-5px_rgba(186,230,253,0.4),inset_0_1px_3px_rgba(255,255,255,1)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_45px_rgba(244,114,182,0.3)]
                md:col-span-2
                md:row-span-2
                md:min-h-[620px]
              "
            >

              <div className="relative h-full overflow-hidden rounded-[22px]">

                <img
                  src={wi1}
                  alt="Wedding Memory 01"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
                    Featured Story
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    Memory #01
                  </p>

                </div>

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-purple-600
                  "
                >
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </div>


            {/* SMALL IMAGES */}
            {[wi2, wi3, wi4, wi5].map((img, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  h-[260px]
                  overflow-hidden
                  rounded-[25px]
                  border
                  border-white
                  bg-white/80
                  p-2
                  shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,1)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_18px_35px_rgba(244,114,182,0.25)]
                "
              >

                <div className="relative h-full overflow-hidden rounded-[18px]">

                  <img
                    src={img}
                    alt={`Wedding Memory ${index + 2}`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      text-xs
                      font-bold
                      tracking-wider
                      text-white
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    Memory #{String(index + 2).padStart(2, "0")}
                  </span>

                </div>

              </div>

            ))}

          </div>


          {/* =================================================
              REMAINING IMAGES
          ================================================= */}

          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">

            {filteredImages.slice(5).map((img, index) => {

              const realIndex = index + 5;

              return (
                <div
                  key={realIndex}
                  className="
                    group
                    relative
                    h-64
                    overflow-hidden
                    rounded-[25px]
                    border
                    border-white
                    bg-white/80
                    p-2
                    shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,1)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_18px_35px_rgba(244,114,182,0.25)]
                  "
                >

                  <div className="relative h-full overflow-hidden rounded-[18px]">

                    <img
                      src={img}
                      alt={`Wedding moment ${realIndex + 1}`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/75
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-4
                        left-4
                        text-xs
                        font-bold
                        tracking-wider
                        text-white
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      Memory #{String(realIndex + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-10
                        w-10
                        translate-y-3
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/50
                        bg-white/20
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight size={17} />
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE / STATS
      ===================================================== */}

      <section className="relative px-6 py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
              Our Experience
            </p>

            <h2 className="mt-3 font-serif text-4xl font-black uppercase text-slate-800 md:text-5xl">
              Moments That Matter
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                number: "500+",
                title: "Beautiful Memories",
                text: "Precious moments captured with care and creativity.",
              },
              {
                number: "100+",
                title: "Wedding Stories",
                text: "Celebrations transformed into cinematic visual stories.",
              },
              {
                number: "8+",
                title: "Years Experience",
                text: "Professional photography and visual storytelling.",
              },
            ].map((stat, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-[30px]
                  border
                  border-white/90
                  bg-white/75
                  p-8
                  text-center
                  backdrop-blur-xl
                  shadow-[0_15px_35px_-8px_rgba(186,230,253,0.4),inset_0_1px_3px_rgba(255,255,255,1)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_45px_rgba(244,114,182,0.25)]
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-rose-400
                    to-purple-500
                    text-white
                    shadow-[0_8px_18px_rgba(244,114,182,0.3)]
                    transition-transform
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <Camera size={25} />
                </div>

                <p
                  className="
                    mt-6
                    bg-gradient-to-r
                    from-rose-500
                    via-purple-600
                    to-sky-600
                    bg-clip-text
                    text-5xl
                    font-black
                    text-transparent
                  "
                >
                  {stat.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-800">
                  {stat.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/80
          bg-amber-50/50
          px-6
          py-28
          text-center
        "
      >

        {/* Glows */}

        <div className="relative z-10 mx-auto max-w-4xl">

          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white
              bg-white/80
              text-rose-500
              shadow-[4px_6px_15px_rgba(244,114,182,0.25),inset_0_1px_3px_rgba(255,255,255,1)]
              backdrop-blur-xl
            "
          >
            <Heart
              size={28}
              fill="currentColor"
            />
          </div>


          {/* Small Heading */}
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-purple-600">
            Let's Create Something Beautiful
          </p>


          {/* Main Heading */}
          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-black
              uppercase
              leading-tight
              text-slate-800
              md:text-6xl
            "
          >
            Your Story Deserves To Be Remembered
          </h2>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            Let us capture the emotions, traditions and beautiful moments
            of your wedding day and turn them into memories you can cherish
            forever.
          </p>


          {/* CTA */}
          <button
            onClick={() =>
              (window.location.href = "/contact")
            }
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/60
              text-rose-500
              hover:bg-rose-500
              hover:text-white
              px-9
              py-4
              text-xs
              font-bold
              uppercase
              tracking-wider
              shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_14px_30px_rgba(244,114,182,0.45)]
              active:translate-y-0.5
            "
          >
            <span>Book Your Wedding</span>

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

        </div>

      </section>

    </main>
  );
};

export default Wedding;