/**
 * Sanity Studio mounted at /studio.
 *
 * The `next-sanity/studio` package handles rendering inside Next.js App Router.
 * Drafts and edits made here sync directly to your Sanity project.
 */

'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
