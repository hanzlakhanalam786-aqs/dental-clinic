import React, { useState } from 'react';
import { dentalFaqs } from '../data/dentalData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950/70 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <span className="text-amber-400">✦</span>
              <span>Patient Guidance & Clarity</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-400 normal-case font-normal">Common Questions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Frequently Asked Dental Health Questions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Find transparent answers regarding treatments, hygiene procedures, teeth whitening safety, and appointments.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {dentalFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-slate-900/90 ${
                    isOpen
                      ? 'border-sky-500/50 shadow-md'
                      : 'border-slate-800 hover:border-slate-700 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-white pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-sky-950 text-sky-400 rotate-180 border border-sky-800' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prompt for Custom Inquiries */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
            <h4 className="font-display text-base font-bold text-white">
              Have a specific question about your dental situation?
            </h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our clinical coordinator is ready to answer questions about pre-existing conditions, sensitive teeth, or tailored procedures.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
              <span>Reach Out to Our Team Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
