/**
 * Instagram reels shown in the "Watch our work on Instagram" section.
 *
 * To add a reel: open it on Instagram, tap Share > Copy link, and paste the URL below.
 * Anything after the video code (utm_source, stkn ...) is ignored.
 * The page then shows Instagram's official embed, which plays inside the page.
 * If this list is empty, the site shows a photo grid that links to the profile.
 */
export const reels: string[] = [
  'https://www.instagram.com/reel/DdIxUfmxe0m/',
  'https://www.instagram.com/reel/DcDGIj1xOJi/',
  'https://www.instagram.com/reel/DYCJpPVRVux/',
  'https://www.instagram.com/reel/DZm0yc7zOaZ/',
];

/** Strip tracking parameters and force the canonical reel URL form */
export function cleanReelUrl(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/);
  return m ? `https://www.instagram.com/reel/${m[1]}/` : null;
}
