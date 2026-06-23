export const TOAST_URL = "https://order.toasttab.com/catering/scotts-provisions-88-s-4th-street-7th-floor";

export type ServiceDetail = readonly [string, string];

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  hero: string;
  shortBody: string;
  longBody: string;
  details: ServiceDetail[];
  ctas: { label: string; href: string; primary?: boolean }[];
}

export const services: Service[] = [
  {
    id: "boxed",
    slug: "boxed-meals",
    title: "Boxed Meals",
    tagline: "For meetings, trainings, and recurring workplace dining.",
    hero: "food-prawns.jpg",
    shortBody: "Individually packaged meals for meetings, trainings, and workplace dining.",
    longBody:
      "Individually packaged meals designed for meetings, trainings, and recurring workplace dining. From small team meetings to large institutional programs, every order is prepared with care and executed with disciplined logistics. Dietary-friendly options available.",
    details: [
      ["Menu", "Pre-set options with customization available"],
      ["Ordering", "Order through Toast or reach out to us directly"],
      ["Delivery", "Pick up in downtown San Jose, or we deliver for a fee within 15 miles"],
      ["Minimum", "$500 or 10 meals"],
      ["Notice", "48 hours"],
      ["Availability", "Mon–Fri (or reach out for weekend)"],
    ],
    ctas: [
      { label: "Order on Toast", href: TOAST_URL, primary: true },
      { label: "View Menu", href: "/menus#boxed" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "drop-off",
    slug: "drop-off",
    title: "Drop-Off Catering",
    tagline: "Easy service without on-site staffing.",
    hero: "food-cioppino.jpg",
    shortBody: "Delivered and professionally set up — easy service without on-site staffing.",
    longBody:
      "A streamlined catering solution for meetings, team lunches, and workplace events — designed for easy service without on-site staffing. Meals are delivered and professionally set up, allowing your guests to focus on the food, not the logistics.",
    details: [
      ["Menu", "Pre-set options with customization available"],
      ["Ordering", "Order through Toast or reach out to us directly"],
      ["Delivery", "Pick up in downtown San Jose, or we deliver for a fee within 15 miles"],
      ["Minimum", "$1,000"],
      ["Notice", "48 hours"],
      ["Availability", "Mon–Fri (or reach out for weekend)"],
    ],
    ctas: [
      { label: "Order on Toast", href: TOAST_URL, primary: true },
      { label: "View Menu", href: "/menus#appetizers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "full-service",
    slug: "full-service",
    title: "Full-Service On-Site Catering",
    tagline: "Passed appetizers, plated meals, family style — fully staffed.",
    hero: "food-crab-cakes.jpg",
    shortBody: "Passed appetizers, plated meals, family style — staffed to fit the event.",
    longBody:
      "Scott's Provisions is here to help with the full execution of your event. Our staff handles passed appetizers, plated meals, family style — and everything in between. We bring the kitchen, the front-of-house team, and the logistics so your event runs the way you want it to.",
    details: [
      ["Menu", "Fully custom — built around your event"],
      ["Availability", "Any day of the week"],
      ["Service charge", "20% service charge (not a gratuity) applies"],
      ["Additional", "Subject to applicable sales tax and credit card processing fees"],
    ],
    ctas: [
      { label: "Start Your Event", href: "/contact", primary: true },
      { label: "Explore Bar Service", href: "/services/bar" },
    ],
  },
  {
    id: "bar",
    slug: "bar",
    title: "Full-Service On-Site Bar",
    tagline: "Add-on to on-site catering, or stand-alone.",
    hero: "hero-catering.jpg",
    shortBody: "Fully licensed bar — non-alcoholic, beer & wine, or full bar packages.",
    longBody:
      "Scott's Provisions offers fully licensed bar services as an add-on to on-site catering or as a stand-alone service. Explore our non-alcoholic, mocktail, beer-and-wine, and full bar packages — professionally staffed, fully insured, and tailored to the event.",
    details: [
      ["Packages", "Non-alcoholic · Mocktail · Beer & wine · Full bar"],
      ["Staffing", "Professional bartenders included"],
      ["Licensing", "Fully licensed and insured"],
      ["Pairing", "Available as add-on to full-service catering"],
    ],
    ctas: [
      { label: "Start Your Event", href: "/contact", primary: true },
      { label: "Explore Full-Service Catering", href: "/services/full-service" },
    ],
  },
];
