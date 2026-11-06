import React from 'react';
import { DentalService } from '../types/dental';
import { X, Globe, FileCode, ExternalLink, ArrowRight, CheckCircle2, Map } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: DentalService[];
  onSelectService: (service: DentalService) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  services,
  onSelectService,
}) => {
  if (!isOpen) return null;

  const siteUrl = 'https://hinakhandentalcare.netlify.app';

  const mainPages = [
    { title: 'Home / Hero Overview', url: `${siteUrl}/`, anchor: '#' },
    { title: 'About Hina Khan & Practice Vision', url: `${siteUrl}/#about`, anchor: '#about' },
    { title: 'Dental Healthcare Services (12 Treatments)', url: `${siteUrl}/#services`, anchor: '#services' },
    { title: 'Why Choose Us (6 Core Pillars)', url: `${siteUrl}/#why-choose-us`, anchor: '#why-choose-us' },
    { title: 'Smile Gallery & Before-and-After Slider', url: `${siteUrl}/#gallery`, anchor: '#gallery' },
    { title: 'Appointment Booking Portal', url: `${siteUrl}/#booking`, anchor: '#booking' },
    { title: 'Patient Experience Previews (Testimonials)', url: `${siteUrl}/#testimonials`, anchor: '#testimonials' },
    { title: 'Frequently Asked Questions (FAQ)', url: `${siteUrl}/#faq`, anchor: '#faq' },
    { title: 'Contact Information & Location Map', url: `${siteUrl}/#contact`, anchor: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transform transition-all max-h-[90vh] flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between gap-4 shrink-0 border-b border-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800/80">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <span>Website Site Map & Index</span>
              </h3>
              <p className="text-xs text-slate-400">
                Official Site Architecture & SEO Directory for Hina Khan Dental Care
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close Site Map"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Canonical Domain Strip */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Canonical Website URL
                </span>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm font-bold text-white hover:text-sky-300 underline underline-offset-2 flex items-center gap-1 mt-0.5"
                >
                  <span>{siteUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={`${siteUrl}/sitemap.xml`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>XML Sitemap</span>
              </a>
              <a
                href={`${siteUrl}/googlebfe1a4961296d02e.html`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
                title="Google Search Console verification file"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google Verification</span>
              </a>
              <a
                href={`${siteUrl}/robots.txt`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-700"
              >
                <span>Robots.txt</span>
              </a>
            </div>
          </div>

          {/* Section 1: Core Navigation & Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Primary Website Sections</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {mainPages.map((page, idx) => (
                <a
                  key={idx}
                  href={page.anchor}
                  onClick={onClose}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="font-medium text-slate-200 group-hover:text-white truncate">
                      {page.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: All 12 Dental Treatments Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>12 Specialized Dental Treatment Pages</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    onClose();
                    onSelectService(service);
                  }}
                  className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 transition-all text-left flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-xs text-slate-300 group-hover:text-white truncate">
                    • {service.name}
                  </span>
                  <span className="text-[10px] text-sky-400 font-mono ml-2 shrink-0">
                    {service.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span className="font-mono">Sitemap updated & verified for Google & Bing Search Console</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            Close Site Map
          </button>
        </div>
      </div>
    </div>
  );
};
