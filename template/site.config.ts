/**
 * SITE CONFIG: the only file you edit for each new client.
 *
 * Fill this in, replace the logo (see "Logo" below), run `npm run build`. Done.
 * Everything on the site that names the business, its owner, region, phone,
 * WhatsApp, Instagram, address or SEO text reads from here.
 *
 * Logo / icons (files, not config):
 *   1. Replace src/assets/brand/logo.jpg with the client's square logo.
 *   2. Run `npm run icons` to regenerate favicons and the social card (public/og.jpg).
 *
 * Content that is NOT in this file (edit only if the client needs it):
 *   services & prices  -> src/data/services.ts
 *   portfolio photos   -> src/data/projects.ts  (+ images in src/assets/photos/)
 *   Instagram reels    -> src/data/reels.ts
 *   FAQ                -> src/data/faq.ts
 */

export const siteConfig = {
  // ---------------------------------------------------------------- brand
  brand: {
    /** Full business name: header, footer, page titles, WhatsApp messages */
    name: 'Sreehari Gardens',
    /** Short name: logo alt text, structured data */
    shortName: 'SG Garden',
    /** Owner / person the visitor will deal with. Used in "led by ...", FAQ, About */
    owner: 'Srihari',
    /** Shown in the hero badge and trust strip, e.g. '100+' */
    projectsCompleted: '100+',
    /** Browser toolbar colour on phones (hex) */
    themeColor: '#1f4e79',
  },

  // --------------------------------------------------------------- domain
  /**
   * The live website address, no trailing slash. Drives canonical URLs, the
   * sitemap, robots.txt and social cards. The SITE_URL environment variable
   * (set on Netlify / Vercel / Cloudflare) overrides this if present.
   */
  siteUrl: 'https://example.com',

  // --------------------------------------------------------------- region
  region: {
    /** Where the business works, used in headings and copy: "Gardens made for Kerala homes" */
    name: 'Kerala',
    /** ISO 3166-2 code for structured data (Kerala = IN-KL, Karnataka = IN-KA, Tamil Nadu = IN-TN) */
    isoCode: 'IN-KL',
    /** schema.org place type: 'State' or 'City' */
    type: 'State' as 'State' | 'City',
  },

  // -------------------------------------------------------------- contact
  /** First phone is the primary one (used by the "Call now" bar). Add or remove rows freely. */
  phones: [
    { label: 'Main number / WhatsApp', display: '+91 89212 96589', digits: '918921296589' },
    { label: 'Phone', display: '+91 88918 25002', digits: '918891825002' },
    { label: 'Phone', display: '+91 85477 40238', digits: '918547740238' },
  ],
  /** `display` is what visitors read; `digits` is country code + number, digits only (no + or spaces) */

  /** Number every WhatsApp button and the enquiry form open (digits only) */
  whatsapp: '918921296589',

  /** Leave handle and url as '' to hide Instagram everywhere (the reels section is hidden too) */
  instagram: {
    handle: 'sreehari_gardens',
    url: 'https://www.instagram.com/sreehari_gardens/',
  },

  /** Business address. Leave '' to hide. */
  address: '',
  /** Google Maps > Share > Embed a map > copy the src="..." URL. Leave '' to hide the map. */
  mapEmbedUrl: '',
  /** For structured data, e.g. { lat: 10.0, lng: 76.3 }. Leave null to omit. */
  geo: null as { lat: number; lng: number } | null,

  // ------------------------------------------------------------------ SEO
  seo: {
    home: {
      title: 'Landscaping & Garden Design in Kerala | Sreehari Gardens',
      description:
        'Landscaping Kerala: Mexican grass and pearl grass lawns, Bangalore stone work, courtyards, pebble paths and garden maintenance. 100+ projects. Free site visit.',
    },
    projects: {
      title: 'Garden Projects in Kerala: Lawns, Stone Work, Courtyards | Sreehari Gardens',
      description:
        'Browse garden design projects by Sreehari Gardens: pearl grass and Mexican grass lawns, Bangalore stone pathways, courtyard gardens and tropical planting across Kerala.',
    },
    notFoundTitle: 'Page not found | Sreehari Gardens',
  },
};

export type SiteConfig = typeof siteConfig;
