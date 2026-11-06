import React from 'react';
import { PracticeInfo } from '../types/dental';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  SlidersHorizontal,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  practiceInfo: PracticeInfo;
  onOpenEditModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  practiceInfo,
  onOpenEditModal,
}) => {
  const cleanWhatsAppNumber = practiceInfo.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="text-amber-400">✦</span>
              <span>Direct Clinic Communications</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-400 normal-case font-normal">Contact & Location</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
              Get in Touch with Hina Khan Dental Care
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Whether you need to discuss a treatment plan, inquire about dental checkups, or locate the future practice clinic, our team is at your service.
            </p>
          </div>

          <button
            onClick={onOpenEditModal}
            className="self-start md:self-auto px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Customize Contact Placeholders</span>
          </button>
        </div>

        {/* Contact Layout: Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Clinic Location (Concept Placeholder)</span>
              </div>
              <p className="font-display text-base font-bold text-white">
                {practiceInfo.clinicAddress}
              </p>
              <p className="text-xs text-slate-400">
                Official physical premises will be confirmed upon regulatory licensing.
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call or Message Us</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Telephone Line:</span>
                  <a
                    href={`tel:${practiceInfo.phone}`}
                    className="font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    {practiceInfo.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Email Address:</span>
                  <a
                    href={`mailto:${practiceInfo.email}`}
                    className="font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    {practiceInfo.email}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
                  'Hello Hina Khan Dental Care, I would like to inquire about appointments and clinic services.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Clinic Opening Hours */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Regular Operating Hours</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Weekdays:</span>
                  <span className="font-semibold text-white">{practiceInfo.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Saturdays:</span>
                  <span className="font-semibold text-white">{practiceInfo.openingHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sundays:</span>
                  <span className="text-amber-400 font-semibold">{practiceInfo.openingHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 text-white">
            <div className="p-5 bg-slate-950 border-b border-slate-850 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
                <div>
                  <h4 className="text-sm font-bold text-white">Interactive Location Map</h4>
                  <p className="text-xs text-slate-400">Medical District Pavilion Preview</p>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Healthcare Pavilion Medical Center')}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-sky-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Interactive Map */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-950">
              <iframe
                title="Hina Khan Dental Care Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13284.45339674066!2d73.047882!3d33.684422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Info Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-800 text-slate-100 shadow-2xl">
                <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  Patient Accessibility
                </p>
                <p className="text-xs font-semibold text-slate-200 mt-1">
                  Valet parking, step-free wheelchair accessibility, and elevator access available.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
              <span>Location placeholder can be customized in settings</span>
              <button
                onClick={onOpenEditModal}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                Change Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
