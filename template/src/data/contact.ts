/**
 * Derived from /site.config.ts. Do not edit values here; edit site.config.ts.
 */
import { siteConfig as c } from '../../site.config';

export interface Phone {
  label: string;
  /** Shown to visitors */
  display: string;
  /** Country code + number, digits only. Used for tel: and wa.me links */
  digits: string;
}

export const contact = {
  brand: c.brand.name,
  shortBrand: c.brand.shortName,
  owner: c.brand.owner,
  projectsCompleted: c.brand.projectsCompleted,
  areaServed: c.region.name,
  phones: c.phones as Phone[],
  whatsapp: c.whatsapp,
  instagram: c.instagram,
  address: c.address,
  mapEmbedUrl: c.mapEmbedUrl,
  geo: c.geo,
};
