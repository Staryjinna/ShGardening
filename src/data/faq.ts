import { services } from './services';

const get = (id: string) => services.find((s) => s.id === id)!;
const lawn = get('mexican-grass');

export const faqs = [
  {
    q: 'How is pricing calculated?',
    a: `Most work is priced per square foot. Lawns start from ₹${get('pearl-grass').price}/sq ft (pearl grass) and ₹${lawn.price}/sq ft (Mexican grass); stone work starts from ₹${get('tandur-stone').price}/sq ft. The final quote depends on your plot, the materials and the design, and is given after a free site visit.`,
  },
  {
    q: 'Is the site visit really free?',
    // TODO: confirm with Srihari whether the free site visit applies across all of Kerala or only within a certain distance.
    a: 'Yes. Message or call us, and Srihari arranges a free site visit to see your space and give a quote.',
  },
  {
    q: 'Which areas do you serve?',
    // TODO: confirm exact districts/towns with Srihari.
    a: 'We work on homes across Kerala. Tell us your location on WhatsApp and we will confirm that we can reach you.',
  },
  {
    q: 'How long does a lawn take to establish?',
    // TODO: confirm typical timelines with Srihari.
    a: 'Sheet work gives you a green lawn from day one, but the grass still needs a few weeks of regular watering to root and knit together. The exact time depends on the season, sunlight and soil. We will explain this for your plot during the site visit.',
  },
  {
    q: 'Do you offer maintenance plans?',
    // TODO: confirm plan options, visit frequency and pricing with Srihari.
    a: `Yes. Garden maintenance (grass cutting, land clearance, pruning, manuring and weeding) starts from ₹${get('garden-maintenance').price}/sq ft. Mexican grass lawns include one free maintenance visit.`,
  },
];
