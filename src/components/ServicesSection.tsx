import React, { useState, useMemo } from 'react';
import { DentalService } from '../types/dental';
import {
  ShieldCheck,
  Sparkles,
  Sun,
  Layers,
  Activity,
  Grid,
  HeartHandshake,
  ShieldAlert,
  Smile,
  HeartPulse,
  CheckCircle2,
  Star,
  Search,
  ArrowRight,
  Clock,
  ChevronRight,
} from 'lucide-react';

interface ServicesSectionProps {
  services: DentalService[];
  onSelectService: (service: DentalService) => void;
  onBookService: (serviceId: string) => void;
}

// Icon dictionary mapped to service IDs
const serviceIconMap: Record<string, React.ReactNode> = {
  'general-dentistry': <ShieldCheck className="w-5 h-5 text-sky-400" />,
  'teeth-cleaning-scaling': <Sparkles className="w-5 h-5 text-amber-400" />,
  'teeth-whitening': <Sun className="w-5 h-5 text-amber-400" />,
  'dental-implants': <Layers className="w-5 h-5 text-sky-400" />,
  'root-canal-treatment': <Activity className="w-5 h-5 text-rose-400" />,
  'orthodontics-braces': <Grid className="w-5 h-5 text-sky-400" />,
  'cosmetic-dentistry': <HeartHandshake className="w-5 h-5 text-amber-400" />,
  'tooth-extraction': <ShieldAlert className="w-5 h-5 text-slate-400" />,
  'pediatric-dentistry': <Smile className="w-5 h-5 text-emerald-400" />,
  'gum-disease-treatment': <HeartPulse className="w-5 h-5 text-rose-400" />,
  'dental-checkups': <CheckCircle2 className="w-5 h-5 text-sky-400" />,
  'smile-makeover': <Star className="w-5 h-5 text-amber-400" />,
};

type CategoryTab = 'all' | 'preventive' | 'cosmetic' | 'restorative' | 'orthodontics' | 'surgical' | 'pediatric';

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory =
        activeCategory === 'all' ? true : s.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [services, activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="text-amber-400">✦</span>
              <span>Comprehensive Dental Portfolio</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-400 normal-case font-normal">12 Specialized Treatments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 [text-wrap:balance]">
              Advanced Dental Services Crafted for Your Health & Confidence
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Every procedure is delivered with gentle chairside technique, digital diagnostic precision, and complete clarity so you always know what to expect.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search services (e.g. whitening)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-xl overflow-x-auto scrollbar-none mb-10 border border-slate-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            All Treatments ({services.length})
          </button>
          <button
            onClick={() => setActiveCategory('preventive')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'preventive'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Preventive & Hygiene
          </button>
          <button
            onClick={() => setActiveCategory('cosmetic')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'cosmetic'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Cosmetic & Whitening
          </button>
          <button
            onClick={() => setActiveCategory('restorative')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'restorative'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Restorative Care
          </button>
          <button
            onClick={() => setActiveCategory('orthodontics')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'orthodontics'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Orthodontics & Braces
          </button>
          <button
            onClick={() => setActiveCategory('surgical')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'surgical'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Surgical & Implants
          </button>
          <button
            onClick={() => setActiveCategory('pediatric')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeCategory === 'pediatric'
                ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Pediatric Dentistry
          </button>
        </div>

        {/* Services Grid (Single Elevation Depth, 3 columns desktop) */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/50">
            <p className="text-sm font-semibold text-slate-300">No matching dental services found</p>
            <p className="text-xs text-slate-500 mt-1">Try another search term or switch categories.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-sky-400 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar on Card: Icon & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                      {serviceIconMap[service.id] || <Sparkles className="w-5 h-5 text-sky-400" />}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Category text kicker */}
                  <div className="space-y-1 mb-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                      {service.category} care
                    </span>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Benefit highlights bullet preview */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/80">
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-sky-400 font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 py-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-lg shadow-sm transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3 text-sky-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
