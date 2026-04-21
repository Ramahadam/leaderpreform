// ============================================================================
// SITE CONFIGURATION - Leader Perform -SD
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "LEADER",
  logoAccent: " PERFORM",
  navLinks: [
    { label: "Services", href: "#products" },
    { label: "Solutions", href: "#palette" },
    { label: "About", href: "#finale" },
  ],
  ctaText: "Contact Us",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "LEADER",
  titleLine2: "PERFORM",
  subtitle: "Professional Technical Support & BPO Services in Sudan",
  ctaText: "Explore Our Services",
  ctaHref: "#products",
  backgroundImage: "/images/hero.jpg",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [
    { row: 0, col: 2 },
    { row: 1, col: 5 },
    { row: 2, col: 0 },
    { row: 3, col: 7 },
    { row: 4, col: 3 },
    { row: 5, col: 6 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "CORE SERVICE",
  headingMain: "BPO",
  headingAccent: "SOLUTIONS",
  productName: "Business Process Outsourcing",
  description: "Leader Perform -SD delivers world-class BPO services tailored to your business needs. From customer support to technical assistance, our trained professionals ensure seamless operations and exceptional customer experiences 24/7.",
  price: "Custom",
  features: [
    { value: "24/7", label: "Support available" },
    { value: "99%", label: "Client satisfaction" },
    { value: "50%", label: "Cost reduction" },
  ],
  colorSwatches: ["#ff1493", "#6366f1", "#06b6d4", "#10b981", "#f59e0b"],
  colorSwatchesLabel: "Service Categories",
  ctaText: "Get a Quote",
  productImage: "/images/product.png",
  productImageAlt: "BPO Services Dashboard",
  decorativeText: "BPO",
};

// ----------------------------------------------------------------------------
// Color Palette Section
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "OUR SERVICES",
  headingMain: "WHAT WE",
  headingAccent: "OFFER",
  colors: [
    {
      name: "Technical",
      nameSecondary: "Support",
      color: "#ff1493",
      description: "24/7 IT helpdesk and technical troubleshooting",
    },
    {
      name: "Customer",
      nameSecondary: "Service",
      color: "#6366f1",
      description: "Inbound and outbound call center solutions",
    },
    {
      name: "Data Entry",
      nameSecondary: "Processing",
      color: "#06b6d4",
      description: "Accurate and efficient data management services",
    },
    {
      name: "Back Office",
      nameSecondary: "Operations",
      color: "#10b981",
      description: "Administrative and operational support",
    },
    {
      name: "Live Chat",
      nameSecondary: "Support",
      color: "#f59e0b",
      description: "Real-time customer engagement via chat",
    },
    {
      name: "Email",
      nameSecondary: "Management",
      color: "#8b5cf6",
      description: "Professional email support and handling",
    },
  ],
  bottomText: "Click any service to learn more",
  decorativeText: "SERVICES",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "ABOUT US",
  headingMain: "YOUR TRUSTED",
  headingAccent: "PARTNER",
  tagline: "Leader Perform -SD is a leading BPO and technical support provider based in Khartoum, Sudan. We partner with businesses worldwide to deliver exceptional customer experiences, reduce operational costs, and drive growth through our skilled workforce and cutting-edge technology.",
  features: ["Professional Team", "Cost Effective", "Scalable Solutions", "Quality Assured"],
  ctaText: "Work With Us",
  ctaHref: "#",
  image: "/images/brand-portrait.jpg",
  imageAlt: "Leader Perform -SD Team",
  decorativeText: "LEADER",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "LEADER",
  logoAccent: " PERFORM",
  brandDescription: "Professional Technical Support & BPO Services in Sudan. Your success is our mission.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "twitter", href: "#", label: "Twitter" },
    { platform: "youtube", href: "#", label: "YouTube" },
  ],
  linkSections: [
    {
      title: "Services",
      links: ["Technical Support", "Customer Service", "Data Entry", "Back Office"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Contact"],
    },
    {
      title: "Support",
      links: ["FAQs", "Get a Quote", "Client Portal", "Resources"],
    },
  ],
  contact: {
    address: "Sudan - Khartoum 3",
    phone: "+249918049082",
    email: "info@leaderpreform-sd.com",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "Leader Perform -SD. All rights reserved.",
  decorativeText: "LEADER",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Leader Perform -SD | Professional BPO & Technical Support Services",
  description: "Leading BPO and technical support provider in Sudan. 24/7 customer service, data entry, back office operations, and IT helpdesk solutions.",
  language: "en",
};
