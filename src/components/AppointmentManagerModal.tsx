import React, { useState } from 'react';
import { AppointmentBooking } from '../types/dental';
import {
  X,
  Calendar,
  Clock,
  Phone,
  Trash2,
  MessageCircle,
  Copy,
  Check,
  Search,
} from 'lucide-react';

interface AppointmentManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: AppointmentBooking[];
  onUpdateStatus: (id: string, status: 'Pending Review' | 'Confirmed' | 'Completed') => void;
  onDeleteBooking: (id: string) => void;
}

export const AppointmentManagerModal: React.FC<AppointmentManagerModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onUpdateStatus,
  onDeleteBooking,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    const matchesSearch =
      searchTerm.trim() === '' ||
      b.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phoneNumber.includes(searchTerm) ||
      b.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCopy = (booking: AppointmentBooking) => {
    const text = `Appointment [${booking.referenceNumber}]:
Patient: ${booking.patientName}
Service: ${booking.serviceName}
Date/Time: ${booking.preferredDate} at ${booking.preferredTime}
Phone: ${booking.phoneNumber}
Email: ${booking.email}
Status: ${booking.status}`;

    navigator.clipboard.writeText(text);
    setCopiedId(booking.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleWhatsAppReply = (booking: AppointmentBooking) => {
    const cleanNumber = booking.phoneNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${booking.patientName}, this is Hina Khan Dental Care following up on your appointment request #${booking.referenceNumber} for ${booking.serviceName} on ${booking.preferredDate} at ${booking.preferredTime}.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transform transition-all max-h-[90vh] flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between gap-4 shrink-0 border-b border-slate-800">
          <div>
            <h3 className="font-display text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Appointment Request Inbox</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Manage patient requests submitted via the website booking portal ({bookings.length} total)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                filterStatus === 'all' ? 'bg-slate-800 text-white shadow-xs font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({bookings.length})
            </button>
            <button
              onClick={() => setFilterStatus('Pending Review')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                filterStatus === 'Pending Review' ? 'bg-slate-800 text-white shadow-xs font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Pending ({bookings.filter((b) => b.status === 'Pending Review').length})
            </button>
            <button
              onClick={() => setFilterStatus('Confirmed')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                filterStatus === 'Confirmed' ? 'bg-slate-800 text-white shadow-xs font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Confirmed ({bookings.filter((b) => b.status === 'Confirmed').length})
            </button>
          </div>

          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-750 bg-slate-900 text-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Bookings List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredBookings.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-xs">
              <Calendar className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-semibold text-slate-300">No appointment requests found</p>
              <p className="text-slate-500 mt-0.5">
                New submissions from the "Book an Appointment" section will appear here.
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="p-5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-slate-700 shadow-sm transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      {booking.referenceNumber}
                    </span>
                    <h4 className="font-display font-bold text-white text-base">
                      {booking.patientName}
                    </h4>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2">
                    <select
                      value={booking.status}
                      onChange={(e) =>
                        onUpdateStatus(
                          booking.id,
                          e.target.value as 'Pending Review' | 'Confirmed' | 'Completed'
                        )
                      }
                      className={`text-xs font-bold px-2.5 py-1 rounded-md border cursor-pointer ${
                        booking.status === 'Confirmed'
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : booking.status === 'Completed'
                          ? 'bg-slate-900 text-slate-300 border-slate-750'
                          : 'bg-amber-950 text-amber-300 border-amber-800'
                      }`}
                    >
                      <option value="Pending Review">Pending Review</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </select>

                    <button
                      onClick={() => handleCopy(booking)}
                      className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
                      title="Copy details"
                    >
                      {copiedId === booking.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => onDeleteBooking(booking.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-md transition-colors"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-850">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-400">Service:</span>
                    <span className="text-sky-300 font-medium">{booking.serviceName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{booking.preferredDate}</span>
                    <span className="text-slate-600">·</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{booking.preferredTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{booking.phoneNumber}</span>
                  </div>
                </div>

                {booking.additionalMessage && (
                  <p className="text-xs text-slate-300 italic bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    "{booking.additionalMessage}"
                  </p>
                )}

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => handleWhatsAppReply(booking)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send WhatsApp Follow-up</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Data saved locally in browser state</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
