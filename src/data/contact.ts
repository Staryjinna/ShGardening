/**
 * Single source of truth for contact details.
 * Edit here and every button, link, footer and the structured data update.
 */
export interface Phone {
  label: string;
  /** Shown to visitors */
  display: string;
  /** Country code + number, digits only. Used for tel: and wa.me links */
  digits: string;
}

export const contact = {
  brand: 'Sreehari Gardens',
  shortBrand: 'SG Garden',
  owner: 'Srihari',
  projectsCompleted: '100+',
  areaServed: 'Kerala',

  phones: [
    { label: 'Main number / WhatsApp', display: '+91 89212 96589', digits: '918921296589' },
    { label: 'Phone', display: '+91 88918 25002', digits: '918891825002' },
    { label: 'Phone', display: '+91 85477 40238', digits: '918547740238' },
    // TODO: +91 85212 96589 appears on only one flyer and may be a typo of the main number.
    // Add it here only after Srihari confirms it.
  ] satisfies Phone[],

  /** Number the WhatsApp buttons and the enquiry form open (digits only, no + or spaces) */
  whatsapp: '918921296589',

  instagram: {
    handle: 'sreehari_gardens',
    url: 'https://www.instagram.com/sreehari_gardens/',
  },

  // TODO: add the business address (e.g. "Town, District, Kerala PIN"). Leave empty to hide it.
  address: '',
  // TODO: paste the Google Maps "Embed a map" iframe src URL once the address is known. Empty hides the map.
  mapEmbedUrl: '',
  // TODO: add geo coordinates for structured data, e.g. { lat: 10.0, lng: 76.3 }
  geo: null as { lat: number; lng: number } | null,
};
