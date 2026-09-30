import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CalendarDays,
  Camera,
  ArrowUpRight,
  Check,
  Clock3,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_uy3dsrd";
    const templateId = "template_q8jkov8";
    const publicKey = "ZYzZVzik3WEeHiCKq";

    const templateParams = {
      name,
      email,
      phone,
      to_name: "AuraLens Studio",
      event,
      location,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);

        setName("");
        setEmail("");
        setPhone("");
        setEvent("");
        setLocation("");
        setMessage("");

        setSubmitted(true);
        setLoading(false);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Submission failed:", error);
        setLoading(false);
      });
  };

  // =========================
  // 3D NEUMORPHIC INPUT STYLE
  // =========================
  const inputClass =
    "w-full rounded-2xl border border-white/90 py-4 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] hover:border-rose-300/80 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-200/50 focus:shadow-[0_4px_16px_rgba(244,114,182,0.2)]";

  return (
    <div className="min-h-screen overflow-hidden font-sans text-slate-800">

      {/* =====================================================
          HERO SECTION (3D PASTEL AMBIENCE)
      ===================================================== */}
      <section className="relative px-6 py-24 text-center">
        {/* 3D Floating Pill Badge */}
        <div className="relative inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 backdrop-blur-xl shadow-[3px_4px_12px_rgba(244,114,182,0.2),inset_0_1px_2px_rgba(255,255,255,0.9)]">
          <Sparkles size={14} className="text-rose-500" />
          <span>Reserve Your Date</span>
        </div>

        <h1 className="relative mt-5 font-serif text-4xl font-black uppercase tracking-tight text-slate-700 md:text-6xl drop-shadow-[2px_3px_0_rgba(255,255,255,0.9)]">
          Let’s Create Magic Together
        </h1>

        <p className="relative mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-black">
          Share your celebration plans, dates, and creative vision with our team.
          We’d love to craft your unforgettable story.
        </p>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION (3D GLASS CARDS)
      ===================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              LEFT CONTACT CARD (3D ELEVATION)
          ================================================= */}
          <div className="rounded-[32px] border border-white/90 bg-gradient-to-br from-white via-rose-50 to-sky-100 p-8 shadow-[0_15px_35px_-5px_rgba(186,230,253,0.4),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-2xl md:p-10 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(244,114,182,0.25)]">

            {/* 3D Raised Icon Box */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-rose-50 to-sky-100 border border-white/90 text-slate-800 shadow-[3px_4px_10px_rgba(14,165,233,0.2),-2px_-2px_6px_rgba(255,255,255,0.9),inset_0_1px_2px_rgba(255,255,255,1)]">
              <Camera size={24} className="stroke-[2.2] text-rose-500" />
            </div>

            <h2 className="mt-6 font-serif text-3xl font-bold text-slate-800">
              Studio Contacts
            </h2>

            <div className="h-[3px] w-12 bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400 my-4 rounded-full" />

            <p className="text-sm font-medium leading-relaxed text-slate-600">
              Reach out directly for custom packages, destination shoot
              inquiries, or studio visit appointments in Jaipur.
            </p>

            {/* 3D Raised Contact Channels */}
            <div className="mt-8 space-y-4">

              {/* EMAIL */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[2px_3px_8px_rgba(186,230,253,0.25),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_20px_rgba(244,114,182,0.25)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100/70 text-rose-600 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email Desk
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    hello@auralens.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[2px_3px_8px_rgba(186,230,253,0.25),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_20px_rgba(167,139,250,0.25)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100/70 text-purple-600 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Line
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[2px_3px_8px_rgba(186,230,253,0.25),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_20px_rgba(56,189,248,0.25)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100/70 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Studio Location
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    Creative Studio 404, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

            </div>

            {/* Response Time Indicator */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/90 bg-amber-50/70 p-4 text-xs font-semibold text-amber-800 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <Clock3 size={18} className="shrink-0 text-amber-600" />
              <span>
                We typically respond to inquiries within 24–48 hours.
              </span>
            </div>

          </div>

          {/* =================================================
              RIGHT FORM CARD (3D ELEVATION)
          ================================================= */}
          <div className="rounded-[32px] border border-white/90 bg-gradient-to-tl from-white via-rose-50 to-sky-100 p-8 shadow-[0_15px_35px_-5px_rgba(186,230,253,0.4),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-2xl md:p-10 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(244,114,182,0.25)]">

            <h2 className="font-serif text-3xl font-bold text-slate-800">
              Send Your Inquiry
            </h2>
            <div className="h-[3px] w-12 bg-gradient-to-r from-purple-400 to-sky-400 my-3.5 rounded-full" />
            <p className="text-sm font-medium text-slate-600">
              Please share as many details as possible for tailored planning and quotes.
            </p>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
            >

              {/* NAME */}
              <div className="group relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-rose-500"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
                  className={inputClass}
                />
              </div>

              {/* EMAIL */}
              <div className="group relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-purple-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                  className={inputClass}
                />
              </div>

              {/* PHONE */}
              <div className="group relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-sky-500"
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPhone(value);
                  }}
                  required
                  placeholder="Phone Number"
                  maxLength={10}
                  inputMode="numeric"
                  className={`${inputClass} pl-12`}
                />
              </div>

              {/* EVENT DROPDOWN */}
              <div className="group relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-teal-500"
                />
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  required
                  className={`${inputClass} cursor-pointer appearance-none text-slate-700`}
                >
                  <option value="" disabled className="bg-white text-slate-400">
                    Select Event Category
                  </option>
                  <option value="Wedding" className="bg-white text-slate-800">
                    Wedding Story
                  </option>
                  <option value="Pre-Wedding" className="bg-white text-slate-800">
                    Pre-Wedding Shoot
                  </option>
                  <option value="Birthday" className="bg-white text-slate-800">
                    Birthday Milestone
                  </option>
                  <option value="Event" className="bg-white text-slate-800">
                    Corporate / Private Gala
                  </option>
                  <option value="Other" className="bg-white text-slate-800">
                    Other Project
                  </option>
                </select>
              </div>

              {/* LOCATION */}
              <div className="group relative md:col-span-2">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-amber-500"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  placeholder="Event Location (City, Venue)"
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div className="group relative md:col-span-2">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-5 z-10 text-slate-400 transition-colors duration-300 group-focus-within:text-rose-500"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  placeholder="Tell us about the dates, estimated guest count, and your artistic vision..."
                  className={`${inputClass} resize-none pt-4`}
                />
              </div>

              {/* 3D SUBMIT BUTTON */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 text-rose-500 py-4 text-xs font-bold uppercase tracking-widest shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(244,114,182,0.45)] active:translate-y-0.5 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* SUCCESS BANNER */}
            {submitted && (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-300/80 bg-emerald-50/90 p-4 text-emerald-800 shadow-[0_6px_16px_rgba(16,185,129,0.15)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
                  <Check size={20} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    Inquiry Sent Successfully!
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-700">
                    Our photography desk will reach out to you within 24–48 hours.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;