const eventSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "High Performance Wrestling Camp Switzerland 2026",
  description:
    "Elite wrestling training camp in the Swiss mountains. Train with world-class champions Isa Usupov & Idris Ibaev. Wrestling, BJJ, MMA, Grappling. Only 30 spots available.",
  startDate: "2026-08-02",
  endDate: "2026-08-07",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  sport: "Wrestling",
  location: {
    "@type": "Place",
    name: "Swiss Alps Training Facility",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressRegion: "Switzerland",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "High Performance Wrestling Camp Switzerland",
    email: "onemoreroundathletics@gmail.com",
    telephone: "+41779793535",
  },
  performer: [
    {
      "@type": "Person",
      name: "Ismail Musukaev",
      jobTitle: "Leading Coach",
      description:
        "2023 World Champion 65kg Freestyle Wrestling, 2x Olympian (Tokyo 2020 & Paris 2024), European Champion",
      sameAs: "https://www.instagram.com/ismail_musukaev__/",
    },
    {
      "@type": "Person",
      name: "Idris Ibaev",
      jobTitle: "Leading Coach",
      description: "2021 World Champion Greco-Roman Wrestling 72 kg, German National Champion",
      sameAs: "https://www.instagram.com/ibaev160",
    },
    {
      "@type": "Person",
      name: "Isa Usupov",
      jobTitle: "Leading Coach",
      description:
        "Multiple-time Swiss Wrestling Champion, European Grappling Champion, Vice President of Swiss MMA National Team",
      sameAs: "https://www.instagram.com/spartansoldier_1/",
    },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Camp Only",
      price: "800",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2026-01-01",
      url: "https://elitewrestlingcamp.ch/#contact",
    },
    {
      "@type": "Offer",
      name: "Full Package",
      price: "1200",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2026-01-01",
      url: "https://elitewrestlingcamp.ch/#contact",
    },
  ],
  maximumAttendeeCapacity: 30,
  image: "https://elitewrestlingcamp.ch/head-photo.jpg",
  url: "https://elitewrestlingcamp.ch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who can join the High Performance Wrestling Camp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The camp is open to athletes of all levels — from complete beginners to advanced international competitors. Whether you wrestle, practice BJJ, MMA, Judo, Grappling or just want to start your combat sports journey, you are welcome. Age: 14+ (under 18 requires parental consent).",
      },
    },
    {
      "@type": "Question",
      name: "Where exactly is the camp located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The camp is held in Switzerland, Europe. Switzerland offers world-class training facilities, clean environment and an inspiring Alpine setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior wrestling experience to attend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The camp is designed to accommodate all skill levels. Beginners will receive foundational instruction while advanced athletes will be challenged with high-level techniques and live training.",
      },
    },
    {
      "@type": "Question",
      name: "Is accommodation included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Camp Only package (€800) covers training sessions and coaching only. The Full Package (€1200) includes accommodation and full board meals.",
      },
    },
    {
      "@type": "Question",
      name: "How many athletes will be at the camp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We strictly limit attendance to 30 athletes maximum to ensure every participant receives personal attention from the coaching staff.",
      },
    },
    {
      "@type": "Question",
      name: "What is the daily training schedule like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical day includes morning technical drilling sessions, midday strength and conditioning, afternoon live training and sparring, and evening recovery and coaching analysis.",
      },
    },
    {
      "@type": "Question",
      name: "How do I secure my spot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill in the contact form on this page or reach out via email onemoreroundathletics@gmail.com or phone +41 77 979 35 35. Spots are confirmed on a first-come, first-served basis.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to the camp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should bring: wrestling shoes, wrestling singlet or shorts/rash guard, gi (optional for BJJ sessions), training gear, personal hygiene items, and a water bottle. A full packing list will be sent to all registered athletes.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "High Performance Wrestling Camp Switzerland",
  sport: "Wrestling",
  email: "onemoreroundathletics@gmail.com",
  telephone: "+41779793535",
  url: "https://elitewrestlingcamp.ch",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
    addressRegion: "Switzerland",
  },
  sameAs: [
    "https://www.instagram.com/spartansoldier_1/",
    "https://www.instagram.com/ibaev160",
  ],
};

export default function WrestlingSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
