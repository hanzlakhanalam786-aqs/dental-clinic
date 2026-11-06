import React from 'react';
import { ToothLogo } from './ToothLogo';
import { PracticeInfo, DentalService } from '../types/dental';
import { Phone, Mail, MapPin, Heart, ShieldAlert, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  practiceInfo: PracticeInfo;
  services: DentalService[];
  onSelectService: (service: DentalService) => void;
  onOpenEditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  practiceInfo,
  services,
  onSelectService,
  onOpenEditModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanWhatsAppNumber = practiceInfo.whatsappNumber.replace(/[^0-9]/g, '');

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

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
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

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Practice Information
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{practiceInfo.clinicAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${practiceInfo.phone}`} className="hover:text-white transition-colors">
                  {practiceInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${practiceInfo.email}`} className="hover:text-white transition-colors">
                  {practiceInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-slate-500 font-medium">Opening Hours</p>
              <p className="text-xs text-slate-400 mt-0.5">{practiceInfo.openingHours.weekdays}</p>
              <p className="text-xs text-slate-400">{practiceInfo.openingHours.saturday}</p>
            </div>
          </div>
        </div>

        {/* Ethical Academic Transparency Banner */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Ethical Healthcare Disclaimer:</strong> Hina Khan Dental Care is currently a portfolio and future clinic concept website. Hina Khan is actively completing her dental academic studies. All qualifications, addresses, and sample reviews remain editable placeholders until officially confirmed upon regulatory licensing.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {practiceInfo.brandName}. All rights reserved.</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Healthy Smiles, Confident Lives</span>
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
