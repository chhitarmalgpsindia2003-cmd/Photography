import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Play,
  Sparkles,
} from "lucide-react";

import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";
import p5 from "../assets/p5.webp";
import p6 from "../assets/p6.webp";
import p7 from "../assets/p7.webp";
import p8 from "../assets/p8.webp";
import p9 from "../assets/p9.webp";
import p10 from "../assets/p10.webp";
import p11 from "../assets/p11.webp";
import p12 from "../assets/p12.webp";

export const Prewedding = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p1,
  ];

  const categories = [
    "All",
    "Couple",
    "Romantic",
    "Outdoor",
    "Candid",
  ];

  const moments = [
    {
      title: "Soulful Connections",
      category: "COUPLE PORTRAITURE",
      description:
        "Artful portraits honoring your unique dynamic, chemistry and beautiful connection.",
      highlights: [
        "Natural Poses",
        "Artistic Angles",
        "Authentic Smiles",
      ],
      image: p2,
    },
    {
      title: "Golden Hour Romance",
      category: "DESTINATION SHOOTS",
      description:
        "Basking in golden warmth, open landscapes and breathtaking cinematic surroundings.",
      highlights: [
        "Sunset Glow",
        "Breathtaking Horizons",
        "Cinematic Backdrops",
      ],
      image: p5,
    },
    {
      title: "Heritage & Architecture",
      category: "PALATIAL SCENICS",
      description:
        "Majestic forts, beautiful arches and timeless royal settings create unforgettable frames.",
      highlights: [
        "Royal Aesthetics",
        "Dramatic Lighting",
        "Grand Frames",
      ],
      image: p8,
    },
    {
      title: "Unposed Whispers",
      category: "PURE CANDIDS",
      description:
        "Carefree laughs, intimate glances and genuine moments captured naturally between frames.",
      highlights: [
        "Zero Staging",
        "Pure Joy",
        "Documentary Style",
      ],
      image: p11,
    },
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-b from-rose-50/70 via-purple-50/40 via-sky-50/50 to-amber-50/70 font-sans text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24">

        {/* Background */}
        <img
          src={p2}
          alt="Pre Wedding Photography"
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
              bg-white/75
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
              Before The Beginning
            </span>
          </div>


          {/* Small Heading */}
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600 md:text-sm">
            A Story Before Forever
          </p>


          {/* Main Heading */}
          <h1
            className="
              mt-4
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
            Your Journey {" "} Before Forever
          </h1>


          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-black md:text-lg">
            A bespoke photography experience focused on romance, freedom,
            genuine emotions and the beautiful connection that brought you
            two together.
          </p>


          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {/* Gallery Button */}
            <button
              onClick={() =>
                document
                  .getElementById("prewedding-gallery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                group
                flex items-center gap-2
                rounded-2xl
                border border-white/60
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
                hover:shadow-[0_14px_30px_rgba(244,114,182,0.4)]
                active:translate-y-0.5
              "
            >
              <span>View Stories</span>

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>


            {/* Film Button */}
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=ztQoCJlC4UI",
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

              <span>
                Pre-Wedding Films
              </span>
            </button>

          </div>


          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">

            {[
              {
                number: "250+",
                label: "Love Stories",
                gradient: "from-rose-500 to-purple-600",
              },
              {
                number: "50+",
                label: "Locations",
                gradient: "from-purple-600 to-sky-600",
              },
              {
                number: "100%",
                label: "Real Emotions",
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
          MOMENTS / EXPERIENCES
      ===================================================== */}

      <section className="relative px-6 py-28">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
                Experiences
              </p>

              <h2 className="mt-2 font-serif text-4xl font-black uppercase tracking-tight text-slate-800 md:text-5xl">
                Every Couple. Distinctly Captured.
              </h2>

            </div>

            <p className="max-w-md text-sm font-medium leading-relaxed text-slate-500">
              Every relationship has its own personality, energy and story.
              We turn those unique moments into timeless photographs.
            </p>

          </div>


          {/* Experience Cards */}
          <div className="grid gap-7 md:grid-cols-2">

            {moments.map((item, index) => (

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
                    src={item.image}
                    alt={item.title}
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
                    {item.category}
                  </span>

                </div>


                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-serif text-2xl font-black text-slate-800">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                        {item.description}
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

                    {item.highlights.map((highlight, idx) => (

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
        id="prewedding-gallery"
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
                Visual Journal
              </p>

              <h2 className="mt-2 font-serif text-4xl font-black text-slate-800 md:text-5xl">
                Pre-Wedding Showcase
              </h2>

              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-500">
                A curated collection of romantic portraits, candid emotions
                and cinematic pre-wedding moments.
              </p>

            </div>


            {/* Filters */}
            <div className="flex flex-wrap gap-2">

              {categories.map((cat) => (

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
              FEATURED GALLERY
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
                  src={p2}
                  alt="Pre Wedding Memory 01"
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

            {[p3, p4, p5, p6].map((img, index) => (

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
                    alt={`Pre Wedding Memory ${index + 2}`}
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


          {/* Remaining Images */}

          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">

            {images.slice(5).map((img, index) => {

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
                      alt={`Pre Wedding moment ${realIndex + 1}`}
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

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
              Our Experience
            </p>

            <h2 className="mt-3 font-serif text-4xl font-black uppercase text-slate-800 md:text-5xl">
              Before The Big Day
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                number: "250+",
                title: "Love Stories",
                text: "Beautiful couples captured before their big day.",
              },
              {
                number: "50+",
                title: "Locations",
                text: "Scenic outdoor locations and luxury destinations.",
              },
              {
                number: "100%",
                title: "Real Emotions",
                text: "Natural moments captured with creativity and care.",
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
            Before The Big Day
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
            Let's Capture  Your Love Story
          </h2>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            Let's create beautiful photographs that represent your
            relationship, personality and the beautiful journey you are
            about to begin together.
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
            <span>Book Your Pre-Wedding Shoot</span>

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

export default Prewedding;
