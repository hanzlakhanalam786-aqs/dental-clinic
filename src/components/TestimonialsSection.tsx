import React, { useState } from 'react';
import { sampleTestimonials } from '../data/dentalData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sampleTestimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sampleTestimonials.length - 1 ? 0 : prev + 1));
  };

  const current = sampleTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-950/70 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="text-amber-400">✦</span>
            <span>Patient Experience Vision</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400 normal-case font-normal">Demonstration Previews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
            Envisioning Care Through the Patient's Eyes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            The heart of Hina Khan Dental Care is peace of mind, open communication, and gentle dentistry.
          </p>
        </div>

        {/* Ethical Transparency Disclaimer Box */}
        <div className="mb-10 p-4 rounded-xl bg-amber-950/40 border border-amber-900/50 text-xs text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-amber-300">Ethical Transparency Standard: </strong>
            In accordance with medical advertising guidelines, the testimonials below represent sample illustrative patient experiences designed for practice demonstration prior to clinic launch. No fictional accounts are presented as certified clinical case studies.
          </p>
        </div>

        {/* Testimonial Showcase Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
            <Quote className="w-20 h-20 text-slate-800/60 absolute -top-2 -right-2 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Star Rating & Demo Indicator */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className="text-xs font-semibold text-slate-400 tracking-wide">
                  {current.date}
                </span>
              </div>

              {/* Quote Comment */}
              <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
                "{current.comment}"
              </blockquote>

              {/* Author & Treatment */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {current.patientName}
                  </h4>
                  <p className="text-xs font-semibold text-sky-400 mt-0.5">
                    Treatment: {current.serviceReceived}
                  </p>
                </div>

                {/* Slider Nav Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-xl bg-sky-600 hover:bg-sky-500 border border-sky-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sampleTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-sky-400' : 'w-2 bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
