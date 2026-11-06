import React, { useState } from 'react';
import { PracticeInfo } from '../types/dental';
import { X, Save, RotateCcw, SlidersHorizontal, Check } from 'lucide-react';
import { initialPracticeInfo } from '../data/dentalData';

interface EditPracticeModalProps {
  practiceInfo: PracticeInfo;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: PracticeInfo) => void;
}

export const EditPracticeModal: React.FC<EditPracticeModalProps> = ({
  practiceInfo,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<PracticeInfo>({ ...practiceInfo });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof PracticeInfo, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleReset = () => {
    setFormData({ ...initialPracticeInfo });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transform transition-all max-h-[92vh] flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between gap-4 shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Customize Practice Details</h3>
              <p className="text-xs text-slate-400">
                Update credentials, contact phone, and clinic address placeholders in real-time.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Clinician Name */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-300">Clinician Name</label>
              <input
                type="text"
                value={formData.doctorName}
                onChange={(e) => handleChange('doctorName', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* Professional Title */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-300">Professional Title</label>
              <input
                type="text"
                value={formData.professionalTitle}
                onChange={(e) => handleChange('professionalTitle', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-300">Clinic Telephone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-300">WhatsApp Number (with country code)</label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1 sm:col-span-2">
              <label className="font-semibold text-slate-300">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* Clinic Address */}
            <div className="space-y-1 sm:col-span-2">
              <label className="font-semibold text-slate-300">Clinic Address Placeholder</label>
              <input
                type="text"
                value={formData.clinicAddress}
                onChange={(e) => handleChange('clinicAddress', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {/* Academic Milestone Status */}
            <div className="space-y-1 sm:col-span-2">
              <label className="font-semibold text-slate-300">
                Academic & Licensing Status (Ethical Transparency)
              </label>
              <textarea
                rows={2}
                value={formData.academicStatus}
                onChange={(e) => handleChange('academicStatus', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed"
              />
            </div>

            {/* Mission Statement */}
            <div className="space-y-1 sm:col-span-2">
              <label className="font-semibold text-slate-300">Mission Statement</label>
              <textarea
                rows={2}
                value={formData.missionStatement}
                onChange={(e) => handleChange('missionStatement', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Practice Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
