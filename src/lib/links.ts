import { contact } from '../data/contact';

/** https://wa.me/91XXXXXXXXXX with an optional pre-filled message */
export function waLink(message?: string, number: string = contact.whatsapp): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(digits: string): string {
  return `tel:+${digits}`;
}

export const primaryPhone = contact.phones[0];
