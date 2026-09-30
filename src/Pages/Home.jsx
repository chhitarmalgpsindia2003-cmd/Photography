import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Camera, Sparkles, ChevronRight } from "lucide-react";

import h1 from "../assets/h1.webp";
import weding from "../assets/weding.webp";
import bday from "../assets/bday.webp";
import preweding from "../assets/preweding.webp";
import event from "../assets/event.webp";

import i1 from "../assets/i1.webp";
import i2 from "../assets/i2.webp";
import i3 from "../assets/i3.webp";
import i4 from "../assets/i4.webp";
import i5 from "../assets/i5.webp";
import i6 from "../assets/i6.webp";

import ha1 from "../assets/ha1.webp";
import ha2 from "../assets/ha2.webp";
import ha3 from "../assets/ha3.webp";

import p4 from "../assets/p4.webp";
import p10 from "../assets/p10.webp";
import p8 from "../assets/p8.webp";

import wi2 from "../assets/wi2.webp";
import wi9 from "../assets/wi9.webp";
import wi11 from "../assets/wi11.webp";

import b6 from "../assets/b6.webp";
import b7 from "../assets/b7.webp";
import b11 from "../assets/b11.webp";

import e2 from "../assets/e2.webp";
import e7 from "../assets/e7.webp";
import e12 from "../assets/e12.webp";
import autopalyVideo from "../assets/autopaly.mp4";

export const Home = () => {
  const services = [
    {
      image: weding,
      title: "Wedding",
      subtitle: "TIMELESS LOVE",
      text: "A sacred union captured with cinematic grandeur and authentic emotion.",
      link: "/wedding",
    },
    {
      image: preweding,
      title: "Pre-Wedding",
      subtitle: "LOVE STORIES",
      text: "Intimate connections, surreal destinations, and romantic moments.",
      link: "/prewedding",
    },
    {
      image: bday,
      title: "Birthday",
      subtitle: "PURE HAPPINESS",
      text: "Celebrations, cake cuttings, and joyful milestones captured seamlessly.",
      link: "/birthday",
    },
    {
      image: event,
      title: "Events",
      subtitle: "LIVE MOMENTS",
      text: "Dynamic photojournalism for high-profile events and private gatherings.",
      link: "/event",
    },
  ];

  const gallery = [i1, i2, i3, i4, i5, i6];

  const homeSections = [
    {
      img1: wi2,
      img2: wi9,
      img3: wi11,
      name: "WEDDING PHOTOGRAPHY",
      title: "CAPTURING TIMELESS MOMENTS",
      text: "Every ritual, joyful tear, and candid glance composed into high-fashion cinema.",
      link: "/wedding",
      button: "Explore Wedding",
    },
    {
      img1: p4,
      img2: p10,
      img3: p8,
      name: "PRE-WEDDING SHOOT",
      title: "CELEBRATING YOUR LOVE STORY",
      text: "Dramatic golden hour light, breathtaking landscapes, and effortless couple chemistry.",
      link: "/prewedding",
      button: "Explore Pre-Wedding",
    },
    {
      img1: b6,
      img2: b7,
      img3: b11,
      name: "BIRTHDAY CELEBRATION",
      title: "MAKING EVERY MOMENT MEMORABLE",
      text: "Turning festive decorations, laughter, and family hugs into everlasting art.",
      link: "/birthday",
      button: "Explore Birthday",
    },
    {
      img1: e2,
      img2: e7,
      img3: e12,
      name: "EVENT PHOTOGRAPHY",
      title: "CAPTURING THE ENERGY",
      text: "Unobtrusive, professional documentation of conferences, galas, and celebrations.",
      link: "/event",
      button: "Explore Events",
    },
  ];

  return (
    <main className="overflow-hidden font-sans bg-gradient-to-b via-purple-50/10 via-sky-50/10 to-amber-50/10 from-rose-50/10 text-slate-800">


      <div>

      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-10">

        <div className="mx-auto max-w-5xl text-center">
          <video
            className="
                absolute inset-0
                h-full w-full
                scale-[1.15]
                object-cover
                pointer-events-none
                opacity-80"
            src={autopalyVideo} autoPlay muted loop playsInline preload="auto" />


          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative z-10 mx-auto max-w-4xl text-center">

              <p className="mb-4 text-red-800 text-sm font-semibold uppercase tracking-[0.35em] drop-shadow-lg">
                AuraLens Photography
              </p>

              <h1 className="font-serif text-gray-800 text-5xl font-black leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:text-7xl">
                Capturing Moments That Last Forever
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black drop-shadow-md md:text-lg">
                We turn your special moments into timeless photographs and cinematic
                stories that you will cherish for a lifetime.
              </p>

            </div>
            <NavLink to="/portfolio">
              <button
                type="button"
                className="group flex items-center gap-2 rounded-xl border border-white/90 bg-white/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-rose-500 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white active:translate-y-0.5"
              >
                <span>View Portfolio</span>
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </NavLink>

            <NavLink to="/contact">
              <button
                type="button"
                className="rounded-xl border border-white/90 bg-white/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-purple-600 active:translate-y-0.5"
              >
                Book Your Shoot
              </button>
            </NavLink>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { val: "500+", label: "Stories Told", color: "from-rose-500 to-purple-600" },
              { val: "100+", label: "Weddings", color: "from-purple-600 to-sky-600" },
              { val: "100%", label: "Satisfaction", color: "from-sky-600 to-teal-500" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-3xl text-center border border-white/90 bg-white/70 p-4 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <p className={`font-serif text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.val}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
                What We Capture
              </p>
              <h2 className="mt-2 font-serif text-4xl font-bold uppercase tracking-tight text-slate-800 md:text-5xl">
                Signature Services
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium text-slate-500">
              Every celebration demands custom composition, soft natural tones, and cinematic visual depth.
            </p>
          </div>

          {/* 3D Elevated Service Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <NavLink to={item.link} key={index} className="group">
                <div className="relative overflow-hidden rounded-[28px] border border-white/90 bg-white/80 p-3 shadow-[0_12px_30px_-5px_rgba(186,230,253,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(244,114,182,0.3)]">

                  {/* Image with Inner Frame */}
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/80 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">
                      {item.text}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-500 transition-colors group-hover:text-purple-600">
                      <span>Discover</span>
                      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED GALLERY ================= */}
      <section className="relative border-y border-white/80 bg-gradient-to-r from-white/70 via-rose-50/40 via-sky-50/40 to-white/70 px-6 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
                Editorial Showcase
              </p>
              <h2 className="mt-2 font-serif text-4xl font-bold text-slate-800 md:text-5xl">
                Featured Works
              </h2>
            </div>
            <NavLink
              to="/portfolio"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 transition-colors hover:text-purple-600 sm:flex"
            >
              <span>Full Portfolio</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </div>

          {/* 3D Gallery Grid with Raised Frames */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="group relative h-72 overflow-hidden rounded-3xl border border-white/90 bg-white/80 p-2 shadow-[0_10px_25px_-5px_rgba(186,230,253,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(244,114,182,0.3)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt={`Portfolio ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Frame #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORIES WE CAPTURE ================= */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl space-y-28">
          {homeSections.map((sec, i) => (
            <div
              key={i}
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* 3D Multi-Layer Floating Image Composition */}
              <div className="relative flex justify-center">
                <div className="relative z-10 overflow-hidden rounded-[36px] border border-white/90 bg-white/80 p-3 shadow-[0_20px_50px_rgba(147,197,253,0.4),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-xl">
                  <img
                    src={sec.img1}
                    alt={sec.title}
                    className="h-96 w-full rounded-[28px] object-cover md:h-[450px]"
                  />
                </div>

                {/* Overlapping 3D Floater Box */}
                <div className="absolute -bottom-6 -right-4 z-20 hidden overflow-hidden rounded-3xl border-4 border-white bg-white/90 p-1.5 shadow-[0_15px_35px_rgba(244,114,182,0.35)] sm:block">
                  <img
                    src={sec.img2}
                    alt="Accent"
                    className="h-40 w-40 rounded-2xl object-cover"
                  />
                </div>

                {/* Floater Tag */}
                <div className="absolute -top-4 -left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white/90 font-serif text-lg font-black text-blue-500 shadow-[3px_4px_12px_rgba(186,230,253,0.35)]">
                  0{i + 1}
                </div>
              </div>

              {/* Story Content Card */}
              <div className="p-4">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
                    {sec.name}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl font-bold uppercase leading-tight text-slate-800 md:text-5xl">
                  {sec.title}
                </h3>
                <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600">
                  {sec.text}
                </p>

                <NavLink to={sec.link}>
                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl  text-cyan-500 hover:bg-cyan-500 hover:text-white border border-white/90 bg-white/80 px-6 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1  hover:shadow-[0_8px_20px_rgba(244,114,182,0.35)] active:translate-y-0.5"
                  >
                    <span>{sec.button}</span>
                    <ChevronRight size={16} />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden border-t border-white/80 bg-amber-50/50 px-6 py-24 text-center">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white/80 text-rose-500 shadow-[3px_4px_12px_rgba(186,230,253,0.35)]">
            <Camera size={26} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600">
            Your Story Deserves To Be Remembered
          </p>

          <h2 className="mt-4 font-serif text-4xl font-black uppercase text-slate-800 md:text-6xl">
            Let's Create Something Timeless
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-slate-600">
            From intimate ceremonies to grand celebrations, let's preserve every milestone
            with authentic artistry and modern elegance.
          </p>

          <NavLink to="/contact">
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/60 text-rose-500 bg-white hover:bg-rose-500 hover:text-white px-9 py-4 text-xs font-bold uppercase tracking-wider shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(244,114,182,0.45)] active:translate-y-0.5"
            >
              <span>Start Your Story</span>
              <ArrowUpRight size={18} />
            </button>
          </NavLink>
        </div>
      </section>

    </main>
  );
};

export default Home;


