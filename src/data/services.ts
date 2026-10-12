/**
 * Services shown as button tiles on the Services page.
 * Prices are intentionally not shown anywhere: this is information only.
 * Edit names and descriptions here; everything else updates.
 */
export interface Service {
  id: string;
  name: string;
  /** One-line summary shown on the tile */
  summary: string;
  /** Full description shown in the details popup */
  description: string;
  highlights?: string[];
}

export const services: Service[] = [
  {
    id: 'mexican-grass',
    name: 'Mexican grass',
    summary: 'Complete Mexican grass lawn work.',
    description: 'Complete Mexican grass lawn work, from levelling and soil preparation to planting.',
    highlights: ['Hardy, wider-leaved lawn grass', 'Suits family lawns and play areas'],
  },
  {
    id: 'pearl-grass',
    name: 'Pearl grass',
    summary: 'Sheet work and splitting & planting.',
    description:
      'Complete pearl grass sheet work. Varieties: Pearl grass, Thailand Pearl and Variegated Pearl grass. Pearl grass splitting and planting is also available.',
    highlights: ['Fast growth, low maintenance', 'Neat, dense-looking lawns'],
  },
  {
    id: 'bangalore-stone',
    name: 'Bangalore stone',
    summary: 'Natural stone work with grass between stones.',
    description:
      'Natural stone work with artificial or natural grass between the stones. Finishes: Bangalore Boss Cut, Bangalore Half Cut and Bottom Flamed, in different varieties and sizes.',
    highlights: ['Boss Cut, Half Cut and Bottom Flamed finishes', 'Several varieties and sizes'],
  },
  {
    id: 'tandur-stone',
    name: 'Tandur stone',
    summary: 'Tandur stone floors, courtyards and paths.',
    description: 'Tandur stone complete work for floors, courtyards and pathways.',
  },
  {
    id: 'pebbles',
    name: 'Pebbles',
    summary: 'Decorative pebbles for paths and borders.',
    description: 'Decorative pebbles for paths, borders and planters. Minimum order 500 kg.',
    highlights: ['Minimum order 500 kg'],
  },
  {
    id: 'garden-maintenance',
    name: 'Garden maintenance',
    summary: 'Cutting, clearing, pruning, manuring, weeding.',
    description:
      'Professional garden maintenance: grass cutting, land clearance, pruning, manuring, weeding and upkeep for all types of grass.',
    highlights: ['Grass cutting and land clearance', 'Pruning, manuring and weeding'],
  },
];

export const quoteMessage = (s: Service) =>
  `Hello Vanascape Gardens, I would like to know more about ${s.name}. Could you arrange a free site visit?`;

/** Project types shown on the About page */
export const projectTypes = [
  'Landscape design',
  'Courtyard & interior gardens',
  'Planters & built-in seating',
  'Stepping-stone pathways',
  'Pebble & gravel paths',
  'Stone-and-grass driveways',
  'Tropical planting: monstera, calathea, palms, heliconia',
];
