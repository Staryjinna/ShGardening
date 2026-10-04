import type { ImageMetadata } from 'astro';
import { contact } from './contact';
import lawn from '../assets/photos/project-lawn-stepping-stones.jpg';
import driveway from '../assets/photos/project-stone-grass-driveway.jpg';
import drivewayWide from '../assets/photos/project-stone-grass-driveway-wide.jpg';
import pebblePath from '../assets/photos/project-pebble-pathway-entrance.jpg';
import courtyard from '../assets/photos/project-courtyard-seating-planter.jpg';
import monstera from '../assets/photos/project-monstera-side-garden.jpg';

/**
 * All service names and prices live here. Change a number and the cards,
 * price table, WhatsApp messages and FAQ all update.
 *
 * TODO: confirm units with the owner. The Instagram catalog shows prices without a unit;
 * "per sq ft" is assumed for everything except pebbles (minimum 500 kg).
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  highlights?: string[];
  price: number;
  /** Text shown after the amount, e.g. "/ sq ft" */
  unit: string;
  /** Show "Price may change according to market rate" */
  marketRate?: boolean;
  image: ImageMetadata;
  imageAlt: string;
  /** CSS object-position focal point */
  imagePos?: string;
}

export const services: Service[] = [
  {
    id: 'mexican-grass',
    name: 'Mexican grass',
    description: 'Mexican grass complete work, from levelling to planting.',
    highlights: ['One free maintenance included'],
    price: 50,
    unit: '/ sq ft',
    image: lawn,
    imageAlt: 'Green lawn with grey stepping stones beside a white house',
    imagePos: '50% 60%',
  },
  {
    id: 'pearl-grass',
    name: 'Pearl grass (sheet work)',
    description:
      'Complete pearl grass sheet work. Varieties: Pearl grass, Thailand Pearl and Variegated Pearl grass. Pearl grass splitting and planting also available.',
    highlights: ['Fast growth, low maintenance', 'Budget friendly'],
    price: 45,
    unit: '/ sq ft',
    image: drivewayWide,
    imageAlt: 'Wide view of a stone-and-grass driveway with a treeline',
    imagePos: '50% 65%',
  },
  {
    id: 'bangalore-stone',
    name: 'Bangalore stone (complete work)',
    description:
      'Natural stone work with artificial or natural grass between the stones. Finishes: Bangalore Boss Cut, Bangalore Half Cut and Bottom Flamed, in different varieties and sizes.',
    price: 165,
    unit: '/ sq ft',
    marketRate: true,
    image: driveway,
    imageAlt: 'Stone slabs set in grass in front of a laterite-red modern house',
    imagePos: '50% 62%',
  },
  {
    id: 'tandur-stone',
    name: 'Tandur stone',
    description: 'Tandur stone complete work for floors, courtyards and pathways.',
    price: 125,
    unit: '/ sq ft',
    marketRate: true,
    image: courtyard,
    imageAlt: 'Courtyard garden with stone flooring and a built-in planter seat',
    imagePos: '50% 78%',
  },
  {
    id: 'pebbles',
    name: 'Pebbles',
    description: 'Decorative pebbles for paths, borders and planters. Minimum order 500 kg.',
    price: 5000,
    unit: '(min. 500 kg)',
    marketRate: true,
    image: pebblePath,
    imageAlt: 'Pebble path with stone slabs leading to a gate',
    imagePos: '50% 70%',
  },
  {
    id: 'garden-maintenance',
    name: 'Garden maintenance',
    description:
      'Grass cutting, land clearance, pruning, manuring, weeding and upkeep for all types of grass. Professional and budget friendly.',
    price: 5,
    unit: '/ sq ft',
    image: monstera,
    imageAlt: 'Well-kept side garden with monstera and bird-of-paradise plants',
    imagePos: '50% 55%',
  },
];

/** Prices are hidden on the site. Set to true to show them again on the cards and price table. */
export const showPrices = false;

export const formatPrice = (s: Service) => `₹${s.price.toLocaleString('en-IN')} ${s.unit}`;

export const quoteMessage = (s: Service) =>
  `Hello ${contact.brand}, I would like a quote for ${s.name}. Could you arrange a free site visit?`;

/** Project types shown on the home page (from portfolio photos) */
export const projectTypes = [
  'Landscape design',
  'Courtyard & interior gardens',
  'Planters & built-in seating',
  'Stepping-stone pathways',
  'Pebble & gravel paths',
  'Stone-and-grass driveways',
  'Tropical planting: monstera, calathea, palms, heliconia',
];
