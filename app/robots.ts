import type { MetadataRoute } from 'next';

// Phase 1 preview: keep search engines out until go-live.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: '/' },
  };
}
