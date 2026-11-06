import React from 'react';
import { whyChooseUsPillars } from '../data/dentalData';
import {
  HeartHandshake,
  Armchair,
  Cpu,
  ClipboardList,
  MessagesSquare,
  ShieldCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import clinicTechImg from '../assets/images/clinic_tech_equipment_1793982818505.jpg';

const pillarIconMap: Record<string, React.ReactNode> = {
  'patient-focused': <HeartHandshake className="w-5 h-5 text-sky-400" />,
  'comfortable-environment': <Armchair className="w-5 h-5 text-amber-400" />,
  'modern-approach': <Cpu className="w-5 h-5 text-sky-400" />,
  'personalized-planning': <ClipboardList className="w-5 h-5 text-emerald-400" />,
  'friendly-communication': <MessagesSquare className="w-5 h-5 text-sky-400" />,
  'hygiene-safety': <ShieldCheck className="w-5 h-5 text-rose-400" />,
};

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-950/70 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="text-amber-400">✦</span>
            <span>The Hina Khan Standard</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400 normal-case font-normal">Patient Centered Excellence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
            Why Patients Choose Our Modern Dental Sanctuary
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            We bridge the gap between world-class clinical precision and a gentle, welcoming atmosphere that puts your comfort and peace of mind first.
          </p>
        </div>

        {/* Bento Grid Layout: 6 Pillars + Marquee Technology Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 6 Core Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUsPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                    {pillarIconMap[pillar.id] || <Sparkles className="w-5 h-5 text-sky-400" />}
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{pillar.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Modern Technology & Sterilization Feature Spotlight (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
            <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
              <img
                src={clinicTechImg}
                alt="State-of-the-art 3D intraoral scanner and digital dental technology at Hina Khan Dental Care"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                  Precision Technology
                </span>
                <p className="font-display text-base font-bold">
                  3D Digital Intraoral Scanners & Low-Radiation Imaging
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="font-display text-lg font-bold text-white">
                  Cleanliness & Safety Without Compromise
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every instrument undergoes a rigorous 4-step sterilization cycle adhering to international CDC and WHO dental infection control guidelines. We utilize medical-grade autoclave spore tests daily to ensure 100% biological verification.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Class-B fractional vacuum autoclaves for porous tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Individual sterile pouch packaging opened in patient presence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>High-volume evacuation (HVE) aerosol reduction systems</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-xl shadow-md transition-all duration-200 text-center cursor-pointer"
                >
                  Experience the Hina Khan Care Standard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
