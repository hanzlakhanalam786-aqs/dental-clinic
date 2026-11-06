/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPracticeInfo, dentalServices } from './data/dentalData';
import { PracticeInfo, DentalService, AppointmentBooking } from './types/dental';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SmileGallery } from './components/SmileGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditPracticeModal } from './components/EditPracticeModal';
import { AppointmentManagerModal } from './components/AppointmentManagerModal';

export default function App() {
  // Practice Info state with localStorage persistence
  const [practiceInfo, setPracticeInfo] = useState<PracticeInfo>(() => {
    try {
      const saved = localStorage.getItem('hk_dental_practice_info');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load practice info from localStorage', e);
    }
    return initialPracticeInfo;
  });

  // Appointments list with localStorage persistence
  const [bookings, setBookings] = useState<AppointmentBooking[]>(() => {
    try {
      const saved = localStorage.getItem('hk_dental_bookings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load bookings from localStorage', e);
    }
    // Seed with one initial demo booking so the manager is readily testable
    return [
      {
        id: 'seed-1',
        referenceNumber: 'HKD-2026-7841',
        patientName: 'Sophia Reynolds',
        phoneNumber: '+1 (555) 782-9912',
        email: 'sophia.reynolds@example.com',
        serviceId: 'teeth-whitening',
        serviceName: 'Teeth Whitening',
        preferredDate: '2026-11-15',
        preferredTime: '10:30 AM',
        additionalMessage: 'Interested in gentle in-office whitening before a wedding.',
        status: 'Pending Review',
        createdAt: new Date().toISOString(),
      },
    ];
  });

  // Modals & Navigation state
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAppointmentsManagerOpen, setIsAppointmentsManagerOpen] = useState(false);

  // Sync practiceInfo changes to localStorage
  const handleSavePracticeInfo = (updated: PracticeInfo) => {
    setPracticeInfo(updated);
    try {
      localStorage.setItem('hk_dental_practice_info', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save practice info to localStorage', e);
    }
  };

  // Sync bookings to localStorage
  const handleNewBooking = (newBooking: AppointmentBooking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem('hk_dental_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save bookings to localStorage', e);
    }
  };

  const handleUpdateBookingStatus = (
    id: string,
    status: 'Pending Review' | 'Confirmed' | 'Completed'
  ) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    setBookings(updated);
    try {
      localStorage.setItem('hk_dental_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to update booking status in localStorage', e);
    }
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('hk_dental_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to delete booking from localStorage', e);
    }
  };

  // Quick scroll to booking section
  const handleScrollToBooking = (serviceIdToSelect?: string) => {
    if (serviceIdToSelect) {
      setPreselectedServiceId(serviceIdToSelect);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Navbar */}
      <Navbar
        practiceInfo={practiceInfo}
        onOpenBooking={() => handleScrollToBooking()}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenAppointmentsManager={() => setIsAppointmentsManagerOpen(true)}
        bookingCount={bookings.length}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleScrollToBooking()}
          brandName={practiceInfo.brandName}
          tagline={practiceInfo.tagline}
        />

        {/* 2. About Hina Khan & Vision */}
        <AboutSection
          practiceInfo={practiceInfo}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 3. Dental Services (12 treatments) */}
        <ServicesSection
          services={dentalServices}
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceId) => handleScrollToBooking(serviceId)}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs onOpenBooking={() => handleScrollToBooking()} />

        {/* 5. Smile Gallery & Interactive Before-After Slider */}
        <SmileGallery />

        {/* 6. Functional Appointment Booking Section */}
        <AppointmentSection
          services={dentalServices}
          practiceInfo={practiceInfo}
          preselectedServiceId={preselectedServiceId}
          onBookingSubmitted={handleNewBooking}
          onOpenAppointmentsManager={() => setIsAppointmentsManagerOpen(true)}
          bookingCount={bookings.length}
        />

        {/* 7. Patient Testimonials (Clearly marked demo content) */}
        <TestimonialsSection />

        {/* 8. FAQ Section */}
        <FaqSection />

        {/* 9. Contact & Google Maps Integration */}
        <ContactSection
          practiceInfo={practiceInfo}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        practiceInfo={practiceInfo}
        services={dentalServices}
        onSelectService={(service) => setSelectedService(service)}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Service Details Procedural Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => handleScrollToBooking(serviceId)}
      />

      {/* Customize Practice Placeholders Modal */}
      <EditPracticeModal
        practiceInfo={practiceInfo}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSavePracticeInfo}
      />

      {/* Clinic Appointment Manager Inbox */}
      <AppointmentManagerModal
        isOpen={isAppointmentsManagerOpen}
        onClose={() => setIsAppointmentsManagerOpen(false)}
        bookings={bookings}
        onUpdateStatus={handleUpdateBookingStatus}
        onDeleteBooking={handleDeleteBooking}
      />
    </div>
  );
}
