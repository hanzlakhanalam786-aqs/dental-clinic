import React, { useState } from 'react';
import { ToothLogo } from './ToothLogo';
import { Menu, X, Phone, Calendar, SlidersHorizontal, MessageCircle } from 'lucide-react';
import { PracticeInfo } from '../types/dental';

interface NavbarProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
  onOpenEditModal: () => void;
  onOpenAppointmentsManager: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  practiceInfo,
  onOpenBooking,
  onOpenEditModal,
  onOpenAppointmentsManager,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-black text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-medium text-slate-200">Official Practice Concept & Portfolio</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="hidden md:inline text-slate-400">Hina Khan is currently completing advanced dental studies</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${practiceInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{practiceInfo.phone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-800">|</span>
            <button
              onClick={onOpenEditModal}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
              title="Edit practice placeholders"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Customize Details</span>
            </button>
            {bookingCount > 0 && (
              <>
                <span aria-hidden="true" className="text-slate-800">|</span>
                <button
                  onClick={onOpenAppointmentsManager}
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Requests ({bookingCount})</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & Tooth logo */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-sky-400"
          >
            <ToothLogo size={30} light={true} />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
                {practiceInfo.brandName}
              </span>
              <span className="text-[11px] font-medium text-sky-400 tracking-wider uppercase">
                {practiceInfo.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: 5 single-line clean text links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-sky-400"
            >
              About Vision
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-sky-400"
            >
              Dental Services
            </a>
            <a
              href="#why-choose-us"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-sky-400"
            >
              Why Choose Us
            </a>
            <a
              href="#gallery"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-sky-400"
            >
              Smile Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-sky-400"
            >
              Contact Clinic
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-sky-600 rounded-lg whitespace-nowrap"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-900 bg-slate-950 px-6 py-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                About Vision
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Dental Services (12 Treatments)
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Why Choose Us
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Smile Gallery & Before-After
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Patient Experience Previews
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-400 py-1"
              >
                Contact & Location
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-900 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-sky-600 rounded-lg text-center cursor-pointer shadow-sm hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`https://wa.me/${practiceInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Hina Khan Dental Care, I would like to inquire about dental appointments.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-sm font-medium text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-lg text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditModal();
                }}
                className="w-full py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-850 rounded-lg text-center flex items-center justify-center gap-1.5 border border-slate-800"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>Customize Practice Details</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
