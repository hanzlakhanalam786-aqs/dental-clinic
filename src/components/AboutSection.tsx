import React from 'react';
import { PracticeInfo } from '../types/dental';
import { GraduationCap, Award, Heart, CheckCircle2, SlidersHorizontal, BookOpen } from 'lucide-react';
import aboutHinaKhanImg from '../assets/images/about_hina_khan_1793982818505.jpg';

interface AboutSectionProps {
  practiceInfo: PracticeInfo;
  onOpenEditModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  practiceInfo,
  onOpenEditModal,
}) => {
  return (
    <section id="about" className="py-20 bg-slate-950/70 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="text-amber-400">✦</span>
            <span>Visionary Leadership</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400 normal-case font-normal">Founding Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
            About Hina Khan & the Vision of Modern Dental Care
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Reimagining oral healthcare through compassion, meticulous academic grounding, and a commitment to genuine patient well-being.
          </p>
        </div>

        {/* Profile Card & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <div className="aspect-4/5 w-full overflow-hidden bg-slate-950">
                <img
                  src={aboutHinaKhanImg}
                  alt={`Portrait of ${practiceInfo.doctorName}, founder of Hina Khan Dental Care`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Footer Info */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {practiceInfo.doctorName}
                    </h3>
                    <p className="text-xs font-medium text-sky-400">
                      {practiceInfo.professionalTitle}
                    </p>
                  </div>
                  <button
                    onClick={onOpenEditModal}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="Customize details"
                    aria-label="Customize practice details"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Academic Transparency Note */}
                <div className="pt-3 border-t border-slate-800 text-xs text-amber-300 flex items-start gap-2 bg-amber-950/40 p-3 rounded-lg border border-amber-900/50">
                  <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-amber-200 font-semibold">Academic Milestone Note: </strong>
                    {practiceInfo.academicStatus}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="font-medium text-slate-300">Primary Focus</span>
                <span className="text-sky-400 font-semibold">Preventive & Minimally Invasive Care</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="font-medium text-slate-300">Clinical Philosophy</span>
                <span className="text-slate-200">Evidence-Based & Gentle Chairside Touch</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300">Clinic Verification</span>
                <span className="text-amber-400 font-medium">In Development / Pre-Launch</span>
              </div>
            </div>
          </div>

          {/* Vision, Mission & Values Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Introduction Story */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">
                A Mission to Restore Joy & Confidence in Dental Visits
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {practiceInfo.bioIntroduction}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                For too many people, a trip to the dentist is overshadowed by apprehension, fear of pain, or sterile coldness.
                <strong className="text-white font-medium"> Hina Khan Dental Care</strong> is designed from the ground up to redefine that narrative.
                By pairing cutting-edge gentle instruments with authentic listening, our practice ensures that every patient—from young children to adults undergoing complete smile rehabilitations—feels genuinely respected, comfortable, and informed.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-sky-500 to-amber-400" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Our Core Mission</span>
              </div>
              <p className="text-slate-100 font-medium text-base sm:text-lg leading-snug">
                "{practiceInfo.missionStatement}"
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Foundational Clinical Values</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {practiceInfo.coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Comfort Commitment */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-900/60 text-white space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Our Uncompromising Commitment to Patient Comfort
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe no patient should ever suffer in silence or feel rushed. Whether taking breaks during procedures, explaining each step beforehand, or adjusting chair ergonomics, your peace of mind is sacred to our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
