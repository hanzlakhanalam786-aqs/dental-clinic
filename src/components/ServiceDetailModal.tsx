import React from 'react';
import { DentalService } from '../types/dental';
import { X, Calendar, CheckCircle, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transform transition-all max-h-[90vh] flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 text-white flex items-start justify-between gap-4 shrink-0 border-b border-slate-850">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Clinical Treatment Profile</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="capitalize text-slate-300">{service.category} Care</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {service.name}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Estimated: {service.duration}</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Minimally Invasive</span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clinical Overview
            </h4>
            <p className="leading-relaxed text-slate-300 text-sm sm:text-base">
              {service.overview}
            </p>
          </div>

          {/* Suitability */}
          <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-900/50 text-xs text-sky-200 flex items-start gap-2.5">
            <span className="font-bold shrink-0 text-sky-400">Ideal For:</span>
            <span>{service.suitability}</span>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Key Clinical Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              What to Expect: Step-by-Step
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm">
              {service.procedureSteps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-950 text-slate-300"
                >
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Aftercare */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recommended Aftercare & Longevity
            </h4>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-400">
              {service.aftercare.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onBookService(service.id);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-200" />
            <span>Book Consultation for this Service</span>
            <ArrowRight className="w-4 h-4 text-sky-200" />
          </button>
        </div>
      </div>
    </div>
  );
};
