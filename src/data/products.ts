export type ProductGalleryImage = {
  src: string
  alt: string
}

export type ProductFamily = {
  slug: string
  title: string
  summary: string
  detail: string
  heroImage: string
  heroAlt: string
  highlights: readonly string[]
  gallery: readonly ProductGalleryImage[]
}

export const productFamilies: readonly ProductFamily[] = [
  {
    slug: 'woven-jackets',
    title: 'Woven jackets',
    summary: 'Puffers, windbreakers, light outerwear, and technical woven jackets.',
    detail:
      'Outerwear programs where shell fabrics, fill, taping, and pack-down matter. Lines are set up for quilting, critical seam sealing, and measurement checks before packing.',
    heroImage: '/hero.jpg',
    heroAlt: 'Colorful fabric and outerwear production reference on the factory floor',
    highlights: [
      'Puffers, windbreakers, and light technical shells',
      'Quilting, lining, and pocket construction to buyer spec',
      'CMP on customer-supplied materials',
    ],
    gallery: [
      { src: '/hero.jpg', alt: 'Fabric rolls used for woven jacket programs' },
      { src: '/hero-3.jpg', alt: 'Patterned woven fabric for outerwear' },
      { src: '/hero-2.jpg', alt: 'Weaving line supporting jacket shell fabrics' },
    ],
  },
  {
    slug: 'trench-coats',
    title: 'Trench coats',
    summary: 'Structured coats where stitching, lining, and fit have to hold up.',
    detail:
      'Long-form outerwear with attention to belt loops, venting, topstitch, and interlining. Finishing includes pressing, hanger presentation, and size-set verification.',
    heroImage: '/hero-3.jpg',
    heroAlt: 'Structured woven fabric suitable for trench and coat programs',
    highlights: [
      'Full-length and mid-length coat silhouettes',
      'Lining, interlining, and topstitch control',
      'Retail-ready pressing and presentation',
    ],
    gallery: [
      { src: '/hero-3.jpg', alt: 'Woven material reference for coat programs' },
      { src: '/hero.jpg', alt: 'Production floor capacity for structured outerwear' },
      { src: '/hero-2.jpg', alt: 'Loom-woven base fabrics' },
    ],
  },
  {
    slug: 'woven-apparel',
    title: 'Woven apparel',
    summary: 'Casual and formal woven pieces built to a clear buyer specification.',
    detail:
      'Shirts, trousers, skirts, and uniform-style woven goods running alongside outerwear. Markers, grain, and stitch standards are checked before bulk runs.',
    heroImage: '/hero-2.jpg',
    heroAlt: 'Industrial weaving equipment for woven apparel fabrics',
    highlights: [
      'Casual and formal woven separates',
      'Marker and grain control at cutting',
      'Stable capacity across nineteen sewing lines',
    ],
    gallery: [
      { src: '/hero-2.jpg', alt: 'Weaving equipment for apparel fabrics' },
      { src: '/hero.jpg', alt: 'Woven goods production environment' },
      { src: '/hero-3.jpg', alt: 'Color and pattern range for woven programs' },
    ],
  },
] as const
