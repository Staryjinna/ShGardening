
import { contact } from './contact';

export const faqs = [
  {
    q: 'How do I get a price?',
    a: `Pricing depends on the area, the materials and the design. Message or call us, and after a free site visit ${contact.owner} gives you a clear quote.`,
  },
  {
    q: 'Is the site visit really free?',
    // TODO: confirm with the owner whether the free site visit applies across the whole region or only within a certain distance.
    a: `Yes. Message or call us, and ${contact.owner} arranges a free site visit to see your space and give a quote.`,
  },
  {
    q: 'Which areas do you serve?',
    // TODO: confirm exact districts/towns with the owner.
    a: `We work on homes across ${contact.areaServed}. Tell us your location on WhatsApp and we will confirm that we can reach you.`,
  },
  {
    q: 'How long does a lawn take to establish?',
    // TODO: confirm typical timelines with the owner.
    a: 'Sheet work gives you a green lawn from day one, but the grass still needs a few weeks of regular watering to root and knit together. The exact time depends on the season, sunlight and soil. We will explain this for your plot during the site visit.',
  },
  {
    q: 'Do you offer maintenance plans?',
    // TODO: confirm plan options, visit frequency and pricing with the owner.
    a: 'Yes. We offer garden maintenance: grass cutting, land clearance, pruning, manuring and weeding. Mexican grass lawns include one free maintenance visit.',
  },
];
