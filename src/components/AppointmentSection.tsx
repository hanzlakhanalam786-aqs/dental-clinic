import React, { useState, useEffect } from 'react';
import { DentalService, AppointmentBooking, PracticeInfo } from '../types/dental';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  ListOrdered,
} from 'lucide-react';

interface AppointmentSectionProps {
  services: DentalService[];
  practiceInfo: PracticeInfo;
  preselectedServiceId: string | null;
  onBookingSubmitted: (booking: AppointmentBooking) => void;
  onOpenAppointmentsManager: () => void;
  bookingCount: number;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  services,
  practiceInfo,
  preselectedServiceId,
  onBookingSubmitted,
  onOpenAppointmentsManager,
  bookingCount,
}) => {
  // Form State
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:30 AM');
  const [additionalMessage, setAdditionalMessage] = useState('');

  // Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<AppointmentBooking | null>(null);

  // Sync preselected service from "Learn More" or Service Cards
  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    } else if (services.length > 0 && !serviceId) {
      setServiceId(services[0].id);
    }
  }, [preselectedServiceId, services, serviceId]);

  // Set default minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:15 PM',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!patientName.trim()) {
      newErrors.patientName = 'Please enter your full name.';
    } else if (patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!serviceId) {
      newErrors.serviceId = 'Please select a dental service.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const selectedService = services.find((s) => s.id === serviceId);
      const referenceNumber = `HKD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      const newBooking: AppointmentBooking = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        referenceNumber,
        patientName: patientName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        serviceId,
        serviceName: selectedService ? selectedService.name : 'General Consultation',
        preferredDate,
        preferredTime,
        additionalMessage: additionalMessage.trim(),
        status: 'Pending Review',
        createdAt: new Date().toISOString(),
      };

      onBookingSubmitted(newBooking);
      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
    }, 400);
  };

  const handleWhatsAppBooking = () => {
    const selectedService = services.find((s) => s.id === serviceId);
    const serviceName = selectedService ? selectedService.name : 'Dental Consultation';
    const cleanNumber = practiceInfo.whatsappNumber.replace(/[^0-9]/g, '');

    const message = `Hello Hina Khan Dental Care, I would like to schedule an appointment:
• Patient Name: ${patientName || '[Your Name]'}
• Dental Service: ${serviceName}
• Preferred Date: ${preferredDate || '[Preferred Date]'}
• Preferred Time: ${preferredTime}
• Phone: ${phoneNumber || '[Phone Number]'}
${additionalMessage ? `• Notes: ${additionalMessage}` : ''}`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmittedBooking(null);
    setPatientName('');
    setPhoneNumber('');
    setEmail('');
    setPreferredDate('');
    setAdditionalMessage('');
    setErrors({});
  };

  return (
    <section id="booking" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="text-amber-400">✦</span>
              <span>Reserve Your Visit</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-400 normal-case font-normal">Patient Booking Portal</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
              Book an Appointment with Hina Khan Dental Care
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Experience gentle, transparent dentistry. Submit your preferred time slot below or connect directly via WhatsApp for quick consultation scheduling.
            </p>
          </div>

          {bookingCount > 0 && (
            <button
              onClick={onOpenAppointmentsManager}
              className="self-start md:self-auto px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ListOrdered className="w-4 h-4 text-sky-400" />
              <span>Review Submitted Bookings ({bookingCount})</span>
            </button>
          )}
        </div>

        {/* Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form / Confirmation Area (7 cols) */}
          <div className="lg:col-span-7">
            {submittedBooking ? (
              /* Honest Transparent Booking Confirmation */
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6 animate-fade-in text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Request Received & Logged
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Appointment Request Submitted
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{submittedBooking.patientName}</strong>.
                  Your request has been saved with reference code{' '}
                  <span className="font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                    {submittedBooking.referenceNumber}
                  </span>.
                  Our clinical coordinator will review your preferred slot and confirm your visit via phone/email shortly.
                </p>

                {/* Summary Details */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex justify-between pb-2 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Selected Service</span>
                    <span className="font-semibold text-white">{submittedBooking.serviceName}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Requested Date & Time</span>
                    <span className="font-semibold text-white">
                      {submittedBooking.preferredDate} at {submittedBooking.preferredTime}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Patient Contact</span>
                    <span className="font-semibold text-white">
                      {submittedBooking.phoneNumber} · {submittedBooking.email}
                    </span>
                  </div>
                  {submittedBooking.additionalMessage && (
                    <div className="pt-1">
                      <span className="text-slate-400 font-medium block">Patient Notes:</span>
                      <p className="text-slate-200 mt-1 italic">"{submittedBooking.additionalMessage}"</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="flex-1 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Confirm via WhatsApp</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="py-3 px-5 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-750 rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-400" />
                      <span>Patient Full Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-950 text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.patientName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.patientName && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.patientName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-950 text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phoneNumber
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-400" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-950 text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Select Dental Service */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Select Dental Service *</span>
                    </label>
                    <select
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-950 text-white focus:outline-none transition-colors ${
                        errors.serviceId
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id} className="bg-slate-900 text-white">
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                    {errors.serviceId && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.serviceId}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      min={minDateString}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-950 text-white focus:outline-none transition-colors ${
                        errors.preferredDate
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>Preferred Time Slot *</span>
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-slate-900 text-white">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-sky-400" />
                      <span>Additional Message / Symptoms (Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe any sensitivity, specific requests, or questions you have for our team..."
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit and WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-6 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-xl shadow-lg shadow-sky-950/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-sky-200" />
                        <span>Submit Appointment Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="py-3.5 px-6 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/80 active:scale-98 rounded-xl border border-emerald-800/80 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Book via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Your contact details are strictly confidential. No upfront payment is required to submit a booking request.
                </p>
              </form>
            )}
          </div>

          {/* Right Information & FAQs Highlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-2xl border border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  What Happens Next?
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Our Transparent Booking Guarantee
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-sky-300 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-800">
                    1
                  </span>
                  <p className="leading-snug">
                    <strong className="text-white">Review & Scheduling:</strong> We verify operatory availability and cross-check procedure duration.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-sky-300 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-800">
                    2
                  </span>
                  <p className="leading-snug">
                    <strong className="text-white">Direct Confirmation:</strong> You receive an email and WhatsApp message confirming the exact time.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-sky-300 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-800">
                    3
                  </span>
                  <p className="leading-snug">
                    <strong className="text-white">Pre-Visit Guidance:</strong> We share tips on eating before treatment or bring along previous dental X-rays.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <p>
                  Need urgent attention for severe discomfort? Please call our emergency priority line at{' '}
                  <a href={`tel:${practiceInfo.phone}`} className="text-sky-300 underline font-medium">
                    {practiceInfo.phone}
                  </a>.
                </p>
              </div>
            </div>

            {/* Clinic Hours Snapshot */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="font-display text-sm font-bold text-white">
                Consultation Hours & Availability
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-white">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-amber-400 font-medium">Emergency Priority Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
