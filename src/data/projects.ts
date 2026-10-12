import type { ImageMetadata } from 'astro';
import hero from '../assets/photos/hero-modern-villa-garden.jpg';
import modernCourtyard from '../assets/photos/modern-courtyard-planter-seating.jpg';
import tradCourtyard from '../assets/photos/traditional-courtyard-tulsi.jpg';
import modernDriveway from '../assets/photos/modern-stone-slab-driveway.jpg';
import tradPath from '../assets/photos/traditional-pebble-path.jpg';
import lawn from '../assets/photos/lawn-stepping-stones.jpg';
import tropical from '../assets/photos/tropical-foliage.jpg';
import terrace from '../assets/photos/modern-terrace-planters.jpg';
import tradHouse from '../assets/photos/traditional-house-garden.jpg';

export type Category = 'modern' | 'traditional' | 'lawns' | 'stone' | 'courtyards' | 'planting';

export const categories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'modern', label: 'Modern & Modular' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'lawns', label: 'Lawns' },
  { id: 'stone', label: 'Stone & Pathways' },
  { id: 'courtyards', label: 'Courtyards' },
  { id: 'planting', label: 'Planting' },
];

/**
 * The images below are AI-generated concept visuals that illustrate the garden styles on offer.
 * TODO: replace them with real Vanascape project photos as they become available, then clear this note.
 * Set to '' to hide the caption.
 */
export const galleryNote = 'Images are AI-generated concept visuals showing the garden styles we design.';

export interface Project {
  id: string;
  title: string;
  tags: Category[];
  image: ImageMetadata;
  alt: string;
  /** CSS object-position focal point for cropped tiles */
  pos?: string;
  /** Tailwind aspect class override for the gallery tile */
  aspect?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { id: 'hero-villa-garden', title: 'Modern villa garden with stone stepping path', tags: ['modern', 'lawns'], image: hero, alt: 'Modern villa garden with a lawn, stone stepping path and tropical planting', pos: '50% 60%', aspect: 'aspect-[4/3]', featured: true },
  { id: 'modern-courtyard', title: 'Modern courtyard with planter seating', tags: ['modern', 'courtyards'], image: modernCourtyard, alt: 'Open-to-sky courtyard with a pergola, built-in planter seating and palms', pos: '50% 55%', featured: true },
  { id: 'traditional-courtyard', title: 'Traditional courtyard with tulsi maadam', tags: ['traditional', 'courtyards'], image: tradCourtyard, alt: 'Traditional South Indian courtyard with a tulsi pedestal, brass lamp and tiled roof', pos: '50% 55%', featured: true },
  { id: 'modern-driveway', title: 'Stone slab pathway set in grass', tags: ['modern', 'stone'], image: modernDriveway, alt: 'Large grey stone slabs set in a grass strip leading to a contemporary home', pos: '50% 60%', featured: true },
  { id: 'traditional-path', title: 'Pebble and stone path to the gate', tags: ['traditional', 'stone'], image: tradPath, alt: 'Pebble pathway with stone slabs between tropical plants leading to a gate', pos: '50% 55%', featured: true },
  { id: 'lawn-stepping-stones', title: 'Lawn with curved stepping stones', tags: ['modern', 'lawns'], image: lawn, alt: 'Green lawn with grey stepping stones beside a contemporary house', pos: '50% 60%', featured: true },
  { id: 'tropical-foliage', title: 'Tropical foliage planting', tags: ['planting'], image: tropical, alt: 'Monstera, calathea and ferns beside a dark stone border', pos: '50% 50%' },
  { id: 'modern-terrace', title: 'Terrace garden with modular planters', tags: ['modern', 'planting'], image: terrace, alt: 'Terrace garden with modular planters, palms and a seating nook at sunset', pos: '50% 55%' },
  { id: 'traditional-house-garden', title: 'Traditional garden with palms and pond', tags: ['traditional', 'lawns'], image: tradHouse, alt: 'Traditional South Indian house with a lawn, coconut palms and a small pond', pos: '50% 60%', aspect: 'aspect-[4/3]' },
];
