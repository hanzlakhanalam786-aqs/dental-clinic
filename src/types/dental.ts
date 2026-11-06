export interface DentalService {
  id: string;
  name: string;
  shortDescription: string;
  category: 'preventive' | 'cosmetic' | 'restorative' | 'orthodontics' | 'surgical' | 'pediatric';
  icon: string;
  duration: string;
  suitability: string;
  overview: string;
  keyBenefits: string[];
  procedureSteps: string[];
  aftercare: string[];
}

export interface AppointmentBooking {
  id: string;
  referenceNumber: string;
  patientName: string;
  phoneNumber: string;
  email: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
  status: 'Pending Review' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface PracticeInfo {
  brandName: string;
  tagline: string;
  doctorName: string;
  professionalTitle: string;
  academicStatus: string;
  bioIntroduction: string;
  missionStatement: string;
  coreValues: string[];
  clinicAddress: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface Testimonial {
  id: string;
  patientName: string;
  serviceReceived: string;
  rating: number;
  date: string;
  comment: string;
  isSample: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'cleaning' | 'whitening' | 'braces' | 'care';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'makeover' | 'ortho' | 'hygiene' | 'technology' | 'environment';
  image: string;
  description: string;
}
