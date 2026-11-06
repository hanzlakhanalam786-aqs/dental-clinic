import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartPulse, Sparkles, Smile } from 'lucide-react';
import heroDentalClinicImg from '../assets/images/hero_dental_clinic_1793982818277.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  brandName: string;
  tagline: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, brandName, tagline }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-900">
      {/* Subtle deep ambient glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-950/25 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Two-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="text-amber-400">✦</span>
              <span>Modern Dental Healthcare Experience</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-400 normal-case font-normal">Patient-Centered Concept</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Healthy Smiles, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">
                Confident Lives.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-white font-semibold">{brandName}</strong>.
              We are shaping an international-standard dental care sanctuary where gentle chairside empathy,
              advanced digital dentistry, and uncompromising clinical hygiene combine to make every visit calm,
              transparent, and empowering.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-xl shadow-lg shadow-sky-950/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-sky-200 transition-transform group-hover:scale-110" />
                <span className="whitespace-nowrap">Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 active:scale-98 rounded-xl border border-slate-800 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap text-center"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Unboxed Metadata Trust Line */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 border-t border-slate-900">
              <span className="font-medium text-slate-300">12 Specialized Treatments</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Minimally Invasive Dentistry</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Anxiety-Free Philosophy</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Transparent Guidance</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 aspect-16/10 lg:aspect-4/3 group">
              <img
                src={heroDentalClinicImg}
                alt="Modern luxury interior of Hina Khan Dental Care clinic with state-of-the-art equipment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl text-white flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Clinic Architecture
                  </p>
                  <p className="text-sm font-bold text-white">
                    State-of-the-Art Ergonomics & Hygiene
                  </p>
                </div>
                <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Horizontal Proof / Highlight Strip Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Patient-Centric Care</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Gentle, listening-focused consultations crafted to eliminate dental anxiety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Modern Digital Approach</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                High-definition intraoral diagnostics and computer-guided accuracy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Hospital-Grade Safety</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Class-B vacuum autoclaves and medical-grade multi-barrier infection control.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-rose-400 shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Tailored Treatment Plans</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Transparent options, zero hidden fees, and patient-guided decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
