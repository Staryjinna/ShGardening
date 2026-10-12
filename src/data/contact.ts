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
  brand: 'Vanascape Gardens',
  shortBrand: 'Vanascape',
  owner: 'Vinoth',
  // TODO: Vinoth to confirm a real project count (e.g. '50+'). Leave empty to hide the claim.
  projectsCompleted: '',
  city: 'Coimbatore',
  region: 'Tamil Nadu',
  areaServed: 'Coimbatore',

  phones: [
    { label: 'Main number / WhatsApp', display: '+91 73584 70999', digits: '917358470999' },
  ] satisfies Phone[],

  /** Number the WhatsApp buttons and the enquiry form open (digits only, no + or spaces) */
  whatsapp: '917358470999',

  // TODO: add Vanascape's Instagram page here (handle and full URL). While url is empty, all Instagram links and the reels section are hidden.
  instagram: {
    handle: '',
    url: '',
  },

  // TODO: add the business address (e.g. "Area, Coimbatore, Tamil Nadu PIN"). Leave empty to hide it.
  address: '',
  // TODO: paste the Google Maps "Embed a map" iframe src URL once the address is known. Empty hides the map.
  mapEmbedUrl: '',
  // TODO: add geo coordinates for structured data, e.g. { lat: 10.0, lng: 76.3 }
  geo: null as { lat: number; lng: number } | null,
};
