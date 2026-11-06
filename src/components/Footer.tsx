import React from 'react';
import { ToothLogo } from './ToothLogo';
import { PracticeInfo, DentalService } from '../types/dental';
import {
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  MessageCircle,
  ArrowUp,
  Globe,
  Map,
  FileCode,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  practiceInfo: PracticeInfo;
  services: DentalService[];
  onSelectService: (service: DentalService) => void;
  onOpenEditModal: () => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  practiceInfo,
  services,
  onSelectService,
  onOpenEditModal,
  onOpenSitemap,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanWhatsAppNumber = practiceInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const officialSiteUrl = 'https://hinakhandentalcare.netlify.app';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-850">
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <ToothLogo light size={32} showText />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Healthy Smiles, Confident Lives. Dedicated to gentle, evidence-based dental healthcare, state-of-the-art hygiene, and an empowering patient experience.
            </p>

            {/* Official Website Domain Badge */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  <span>Live Official Domain</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                  Online
                </span>
              </div>
              <a
                href={officialSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-bold text-white hover:text-sky-300 flex items-center gap-1 transition-colors"
              >
                <span>{officialSiteUrl}</span>
                <ExternalLink className="w-3 h-3 text-sky-400" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>

            {/* Edit Details Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenEditModal}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Configure Practice Placeholders
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Hina Khan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Smile Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Care Advice
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Clinic Location
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSitemap}
                  className="hover:text-sky-300 transition-colors text-left flex items-center gap-1.5 cursor-pointer text-sky-400 font-medium"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Site Map Directory</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Dental Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Dental Treatments
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-400">
              {services.slice(0, 8).map((service) => (
                <button
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="text-left hover:text-sky-300 transition-colors cursor-pointer truncate"
                >
                  • {service.name}
                </button>
              ))}
              <a href="#services" className="text-amber-400 hover:text-amber-300 font-medium pt-1">
                View all 12 treatments →
              </a>
            </div>
          </div>

          {/* SEO & Sitemap Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
              <Map className="w-4 h-4 text-sky-400" />
              <span>Sitemap & Index</span>
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              Explore the full structure and search-engine index of Hina Khan Dental Care:
            </p>

            <div className="space-y-2">
              <button
                onClick={onOpenSitemap}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-800 text-sky-300 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5" />
                  <span>Interactive Site Map</span>
                </span>
                <span>→</span>
              </button>

              <a
                href={`${officialSiteUrl}/sitemap.xml`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>sitemap.xml (Google)</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`${officialSiteUrl}/robots.txt`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>robots.txt Protocol</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-slate-500 font-medium">Contact line</p>
              <a href={`tel:${practiceInfo.phone}`} className="text-xs text-slate-300 hover:text-white block mt-0.5">
                {practiceInfo.phone}
              </a>
              <a href={`mailto:${practiceInfo.email}`} className="text-xs text-slate-300 hover:text-white block">
                {practiceInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Academic Transparency Banner */}
        <div className="my-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Ethical Healthcare Disclaimer:</strong> Hina Khan Dental Care is currently a portfolio and future clinic concept website. Hina Khan is actively completing her dental academic studies. All qualifications, addresses, and sample reviews remain editable placeholders until officially confirmed upon regulatory licensing.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} {practiceInfo.brandName}. All rights reserved.</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={officialSiteUrl}
              className="text-slate-400 hover:text-sky-300 underline font-mono text-[11px]"
            >
              hinakhandentalcare.netlify.app
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenSitemap}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Site Map
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
