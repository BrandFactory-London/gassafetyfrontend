/**
 * Single source for brand details and client facts.
 * Anything in [square brackets] is a placeholder waiting on the client.
 * Change the name, contact details or prices here and every page updates.
 */

export const site = {
  name: "Keystone",
  legalName: "[Company name] Ltd",
  companyNumber: "[XXXXXXXX]",
  tagline: "Gas and electrical certificates for landlords, done properly and on record.",
  phone: "[020 XXXX XXXX]",
  phoneHref: "tel:",
  whatsapp: "[07XXX XXXXXX]",
  email: "[hello@domain.co.uk]",
  remedialEmail: "[remedials@domain.co.uk]",
  hours: "Monday to Saturday, 8am to 6pm",
  hoursShort: "Mon to Sat, 8am to 6pm",
  base: "[location]",
  rating: "[4.9]",
  reviewCount: "[XX]",
  liability: "£[X]m",
  quoteResponse: "[X working hours]",
  registrations: {
    gasSafe: "[XXXXXX]",
    napit: "[XXXXXX]",
    nic: "[XXXXXX]",
  },
  registers: {
    gasSafe: "https://www.gassaferegister.co.uk/",
    napit: "https://www.napit.org.uk/",
    nic: "https://www.niceic.com/",
  },
} as const;

export const prices = {
  cp12: "£69",
  cp12BoilerHob: "£79",
  eicr: "£99",
  eicrMid: "£129",
  eicrLarge: "£169",
  epc: "£79",
  bundle: "£149",
  bundleMid: "£159",
  bundleLarge: "£199",
  bundleBoilerOnly: "£139",
  bundleSaving: "£29",
  separateMid: "£208",
  bundleSavingMax: "£49",
  alarmCheck: "Free",
  alarmFit: "£69",
  boilerService: "£115",
  extraAppliance: "£20",
  extraConsumerUnit: "£49",
  agentDiscount: "20%",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Certificates", href: "/landlord-certificates" },
  { label: "Gas", href: "/gas" },
  { label: "Electrical", href: "/electrical" },
  { label: "Letting agents", href: "/letting-agents" },
  { label: "Pricing", href: "/pricing" },
  { label: "Guides", href: "/guides" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Certificates",
    links: [
      { label: "Gas Safety (CP12)", href: "/landlord-certificates/gas-safety-certificate" },
      { label: "EICR", href: "/landlord-certificates/eicr" },
      { label: "EPC", href: "/landlord-certificates/epc" },
      { label: "Landlord Bundle", href: "/landlord-certificates/landlord-bundle" },
      { label: "Smoke and CO alarms", href: "/landlord-certificates/smoke-co-alarms" },
      { label: "Remedial works", href: "/remedial-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About and accreditations", href: "/about" },
      { label: "Letting agents", href: "/letting-agents" },
      { label: "Pricing", href: "/pricing" },
      { label: "Areas we cover", href: "/areas" },
      { label: "Guides", href: "/guides" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
