/**
 * SAI DENTAL AND COSMETOLOGY CENTER
 * Centralized Clinic Data & Configuration
 * 
 * Edit clinic contact details, hours, service definitions,
 * credentials, and links from this single source of truth.
 */

const CLINIC_DATA = {
  brand: {
    name: "Sai Dental and Cosmetology Center",
    marathiHindiName: "साई डेंटल एंड कॉस्मेटोलॉजी सेंटर",
    shortName: "Sai Dental & Cosmetology",
    tagline: "Where Healthy Smiles Meet Modern Aesthetics.",
    subTagline: "Personalized dental and cosmetic care designed around your smile, comfort and individual needs.",
    doctorName: "Dr. Pragya Shrivastava",
    doctorTitle: "Cosmetic Dentist",
    primarySpecialty: "Cosmetic Dentistry & Aesthetic Consultations",
    logoUrl: "assets/images/clinic-logo.png",
    interiorPhotoUrl: "assets/images/clinic-interior-operatory.png",
    clinicalCasePhotoUrl: "assets/images/clinical-case-before-after.png"
  },
  
  contact: {
    phoneDisplay: "08971729177",
    phoneTel: "+918971729177",
    whatsappNumber: "918971729177",
    whatsappDefaultMessage: "Hello, I would like to enquire about an appointment at Sai Dental and Cosmetology Center.",
    email: "info@saidentalcosmetic.com", // Placeholder for client verification
  },

  location: {
    clinicBuilding: "Sai Hospital, 2nd Floor",
    street: "TRP Road, MIDC",
    area: "Mirjole",
    city: "Ratnagiri",
    state: "Maharashtra",
    postalCode: "415639",
    country: "India",
    plusCode: "X8WR+HP Mirjole, Maharashtra",
    fullAddress: "2nd Floor, Sai Hospital, TRP Road, MIDC, Mirjole, Ratnagiri, Maharashtra 415639, India",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Hospital+TRP+Road+MIDC+Mirjole+Ratnagiri+Maharashtra+415639",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Sai+Hospital+TRP+Road+MIDC+Mirjole+Ratnagiri+Maharashtra+415639&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  hours: {
    statusText: "Open · Closes 7 PM",
    daysDescription: "Monday – Saturday: 10:00 AM – 7:00 PM (Listing indicated: Closes 7 PM)",
    sundayNotice: "Sunday: By Prior Appointment / Enquiries Only",
    note: "Please call ahead to confirm holiday or same-day walk-in availability."
  },

  trust: {
    rating: "5.0",
    ratingOutOf: "5.0",
    reviewCount: 27,
    googleReviewLabel: "Verified Google Reviews",
    cityPresence: "Ratnagiri, Maharashtra"
  },

  doctorProfile: {
    name: "Dr. Pragya Shrivastava",
    role: "Lead Cosmetic Dentist",
    intro: "Dr. Pragya Shrivastava combines clinical precision with an artistic eye for cosmetic enhancement. Her practice philosophy places individual patient comfort, active listening, and evidence-based aesthetic planning at the center of every consultation.",
    quote: "A smile is deeply personal. Our aim is to deliver care that enhances not only your dental health but also your self-confidence in a gentle, welcoming environment.",
    placeholders: {
      qualifications: "Qualifications — [BDS / Specialized Cosmetic Training — To be provided by clinic]",
      experience: "Clinical Experience — [Years of experience & focus areas to be provided]",
      certifications: "Advanced Certifications — [Aesthetic dentistry & cosmetology certifications to be provided]",
      memberships: "Professional Memberships — [Dental council / association details to be provided]"
    }
  },

  serviceCategories: [
    {
      id: "cosmetic",
      category: "Cosmetic Dentistry",
      subtitle: "Smile Aesthetics & Smile Design",
      featured: true,
      services: [
        {
          name: "Cosmetic Smile Consultation",
          desc: "Comprehensive smile evaluation assessing dental proportion, symmetry, gum architecture, and cosmetic goals.",
          status: "Consultation Available"
        },
        {
          name: "Teeth Whitening Consultation",
          desc: "Clinical evaluation for professional in-office whitening and personalized take-home aesthetic brightening regimens.",
          status: "Details to be confirmed"
        },
        {
          name: "Dental Veneers & Laminates",
          desc: "Custom-crafted aesthetic facings to restore chipped, discolored, or unevenly spaced front teeth.",
          status: "Details to be confirmed"
        },
        {
          name: "Complete Smile Makeover Planning",
          desc: "Holistic aesthetic redesign harmonizing facial contours, tooth shade, alignment, and lip profile.",
          status: "Details to be confirmed"
        }
      ]
    },
    {
      id: "cosmetology",
      category: "Cosmetology & Aesthetics",
      subtitle: "Facial Harmony & Skin Consultations",
      featured: true,
      services: [
        {
          name: "Aesthetic Skin & Facial Consultation",
          desc: "Detailed evaluation of facial aesthetics complementing dental smile line and symmetry.",
          status: "Details to be confirmed"
        },
        {
          name: "Cosmetology Service [01]",
          desc: "Aesthetic enhancement care tailored to individual skin and facial rejuvenation objectives.",
          status: "Placeholder — Add confirmed procedure"
        },
        {
          name: "Cosmetology Service [02]",
          desc: "Non-invasive cosmetic care designed to restore natural radiance and aesthetic balance.",
          status: "Placeholder — Add confirmed procedure"
        },
        {
          name: "Cosmetology Service [03]",
          desc: "Targeted aesthetic revitalization for refined skin health and youthful glow.",
          status: "Placeholder — Add confirmed procedure"
        }
      ]
    },
    {
      id: "general",
      category: "General & Restorative Dentistry",
      subtitle: "Foundational Dental Health",
      featured: false,
      services: [
        {
          name: "Comprehensive Dental Check-up",
          desc: "Full oral cavity screening, digital assessment, periodontal health check, and preventive treatment roadmap.",
          status: "Consultation Available"
        },
        {
          name: "Tooth-Colored Restorations",
          desc: "Biocompatible composite fillings that seamlessly blend with your natural tooth shade.",
          status: "Details to be confirmed"
        },
        {
          name: "Preventive Prophylaxis & Cleaning",
          desc: "Ultrasonic scaling and polishing to maintain gum vitality and prevent calculus accumulation.",
          status: "Details to be confirmed"
        },
        {
          name: "Restorative Dental Care",
          desc: "Crowns, bridges, and tooth preservation solutions restoring both chewing function and dental aesthetics.",
          status: "Details to be confirmed"
        }
      ]
    }
  ],

  whyChooseUs: [
    {
      number: "01",
      title: "Personalized Consultation",
      description: "Every appointment begins with thorough listening. We take time to understand your personal aesthetic goals and clinical history before recommending options."
    },
    {
      number: "02",
      title: "Artistic Aesthetic Approach",
      description: "Led by Cosmetic Dentist Dr. Pragya Shrivastava, our practice balances medical precision with refined artistic sensibilities for natural, harmonious smiles."
    },
    {
      number: "03",
      title: "Calm, Patient-Centered Comfort",
      description: "We have designed our clinical environment to alleviate dental anxiety, providing a relaxed, unhurried, and reassuring patient journey."
    },
    {
      number: "04",
      title: "Accessible Ratnagiri Location",
      description: "Conveniently situated on the 2nd Floor of Sai Hospital along TRP Road in MIDC Mirjole, with straightforward access and parking convenience."
    }
  ],

  patientJourney: [
    {
      step: "01",
      name: "BOOK",
      action: "Request your consultation",
      detail: "Choose your preferred date and time online, or reach out directly via call or WhatsApp."
    },
    {
      step: "02",
      name: "CONSULT",
      action: "In-depth clinical discussion",
      detail: "Meet Dr. Pragya Shrivastava to discuss your smile goals, dental health, or aesthetic concerns."
    },
    {
      step: "03",
      name: "PLAN",
      action: "Clear, transparent options",
      detail: "Receive a tailored, step-by-step treatment roadmap detailing each step and expected outcomes."
    },
    {
      step: "04",
      name: "BEGIN",
      action: "Comfortable treatment",
      detail: "Begin your personalized care journey with dedicated attention to your comfort and peace of mind."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_DATA;
}
