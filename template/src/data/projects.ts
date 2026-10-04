import type { ImageMetadata } from 'astro';
import courtyardPergola from '../assets/photos/project-courtyard-planter-pergola.jpg';
import courtyardSeating from '../assets/photos/project-courtyard-seating-planter.jpg';
import drivewayWide from '../assets/photos/project-stone-grass-driveway-wide.jpg';
import driveway from '../assets/photos/project-stone-grass-driveway.jpg';
import lawn from '../assets/photos/project-lawn-stepping-stones.jpg';
import pebblePath from '../assets/photos/project-pebble-pathway-entrance.jpg';
import tropical from '../assets/photos/project-tropical-plants-closeup.jpg';
import monstera from '../assets/photos/project-monstera-side-garden.jpg';

export type Category = 'lawns' | 'stone' | 'courtyards' | 'planting';

export const categories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'lawns', label: 'Lawns' },
  { id: 'stone', label: 'Stone & Pathways' },
  { id: 'courtyards', label: 'Courtyards' },
  { id: 'planting', label: 'Planting' },
];

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: ImageMetadata;
  alt: string;
  /** CSS object-position focal point for cropped tiles */
  pos?: string;
  /** Optional. Do not invent locations; only add real ones. */
  location?: string;
  /** Appears in the home page "Featured projects" grid */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'courtyard-planter-pergola',
    title: 'Courtyard garden with granite planter seating',
    category: 'courtyards',
    image: courtyardPergola,
    alt: 'Open-to-sky courtyard with a pergola, red jaali wall, granite planter seating and tropical plants',
    pos: '50% 55%',
    featured: true,
  },
  {
    id: 'stone-grass-driveway',
    title: 'Stone slabs set in grass at a laterite-red home',
    category: 'stone',
    image: driveway,
    alt: 'Stone slabs set in grass in front of a laterite-red modern house',
    pos: '50% 60%',
    featured: true,
  },
  {
    id: 'lawn-stepping-stones',
    title: 'Lawn with grey stepping stones',
    category: 'lawns',
    image: lawn,
    alt: 'Green lawn with grey stepping stones beside a white house',
    pos: '50% 60%',
    featured: true,
  },
  {
    id: 'monstera-side-garden',
    title: 'Side garden with monstera and bird-of-paradise',
    category: 'planting',
    image: monstera,
    alt: 'Side garden planted with monstera and bird-of-paradise',
    pos: '50% 50%',
    featured: true,
  },
  {
    id: 'pebble-pathway-entrance',
    title: 'Pebble path with stone slabs to the gate',
    category: 'stone',
    image: pebblePath,
    alt: 'Pebble pathway with stone slabs leading to the entrance gate',
    pos: '50% 65%',
    featured: true,
  },
  {
    id: 'courtyard-seating-planter',
    title: 'Courtyard seating and planter, second angle',
    category: 'courtyards',
    image: courtyardSeating,
    alt: 'Courtyard with built-in planter seating and tropical plants seen from another angle',
    pos: '50% 60%',
    featured: true,
  },
  {
    id: 'stone-grass-driveway-wide',
    title: 'Stone-and-grass driveway with a treeline',
    category: 'stone',
    image: drivewayWide,
    alt: 'Wide view of a stone-and-grass driveway with a treeline behind',
    pos: '50% 60%',
  },
  {
    id: 'tropical-plants-closeup',
    title: 'Tropical foliage close-up: calathea and companions',
    category: 'planting',
    image: tropical,
    alt: 'Close-up of calathea and other tropical foliage',
    pos: '50% 50%',
  },
];
