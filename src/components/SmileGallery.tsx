import React, { useState } from 'react';
import smileAestheticImg from '../assets/images/smile_aesthetic_care_1793982818504.jpg';
import heroClinicImg from '../assets/images/hero_dental_clinic_1793982818277.jpg';
import clinicTechImg from '../assets/images/clinic_tech_equipment_1793982818505.jpg';
import aboutPortraitImg from '../assets/images/about_hina_khan_1793982818505.jpg';
import { Sparkles, Sliders, Info, ShieldCheck, Eye } from 'lucide-react';

export const SmileGallery: React.FC = () => {
  // Before-After Slider State (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState(50);
  const [activeFilter, setActiveFilter] = useState<'all' | 'smiles' | 'clinic' | 'technology'>('all');
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string; desc: string } | null>(null);

  const galleryItems = [
    {
      id: 'g-1',
      title: 'Radiant Smile Rejuvenation',
      category: 'smiles',
      image: smileAestheticImg,
      desc: 'Natural enamel revitalization and professional whitening result preserving organic translucency.',
      badge: 'Aesthetic Whitening',
    },
    {
      id: 'g-2',
      title: 'State-of-the-Art Clinical Suite',
      category: 'clinic',
      image: heroClinicImg,
      desc: 'Spacious treatment operatory equipped with ergonomic patient lounger and floor-to-ceiling natural light.',
      badge: 'Serene Architecture',
    },
    {
      id: 'g-3',
      title: '3D Intraoral Digital Scanning',
      category: 'technology',
      image: clinicTechImg,
      desc: 'Comfortable optical scanning replacing uncomfortable traditional impression trays.',
      badge: 'Digital Precision',
    },
    {
      id: 'g-4',
      title: 'Empathetic Consultative Care',
      category: 'clinic',
      image: aboutPortraitImg,
      desc: 'Dedicated clinician-patient consultation time explaining options without rushing.',
      badge: 'Patient Centric',
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="text-amber-400">✦</span>
            <span>Aesthetics & Clinic Ambiance</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400 normal-case font-normal">Smile Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
            Experience the Art & Science of a Healthy Smile
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Explore authentic visuals of our clinic environment, advanced dental technology, and radiant smile designs.
          </p>
        </div>

        {/* Interactive Before & After Comparison Showcase */}
        <div className="mb-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Clinical Comparison</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Professional Enamel Whitening & Prophylaxis
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Drag the slider left and right to inspect the simulated transformation from common dietary stains to polished, radiant enamel.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 self-start lg:self-auto">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Simulated illustrative comparison for educational demonstration</span>
            </div>
          </div>

          {/* Interactive Slider Container */}
          <div className="relative max-w-4xl mx-auto h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-slate-750 shadow-2xl">
            {/* "After" Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={smileAestheticImg}
                alt="Radiant white healthy teeth after professional dental treatment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AFTER: Polished & Whitened</span>
              </div>
            </div>

            {/* "Before" Image (Clipped with slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: '100%' }}>
                {/* Simulated stain tone overlay on before state */}
                <img
                  src={smileAestheticImg}
                  alt="Before treatment with natural coffee and lifestyle discoloration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-90 sepia-[0.35] brightness-90"
                  style={{
                    width: '100%',
                    maxWidth: 'none',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-slate-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 shadow-lg">
                  <span>BEFORE: Dietary Staining</span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-950 shadow-2xl border-2 border-slate-900 flex items-center justify-center -ml-0.5">
                <Sliders className="w-4 h-4 text-slate-950" />
              </div>
            </div>

            {/* Invisible Range Input on top for effortless dragging and accessibility */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Drag to compare before and after dental treatment"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-400">
              Drag the central handle or click anywhere along the image to slide
            </span>
          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Visuals
            </button>
            <button
              onClick={() => setActiveFilter('smiles')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'smiles'
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Smile Makeovers
            </button>
            <button
              onClick={() => setActiveFilter('clinic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'clinic'
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Clinic Environment
            </button>
            <button
              onClick={() => setActiveFilter('technology')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'technology'
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Modern Technology
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Ethical Healthcare Photography & Educational Visuals</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-sm hover:border-sky-500/40 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-slate-900/90 text-white border border-slate-700 shadow-md">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                    {item.badge}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white mt-0.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">{selectedImage.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
