export type QualityStage = {
  slug: string
  title: string
  summary: string
  detail: string
  bullets: readonly string[]
  image?: { src: string; alt: string }
}

export const qualityPhilosophy = {
  title: 'Quality is part of the line.',
  paragraphs: [
    'Checks run during cutting, sewing, and finishing — not only as a final gate at the end of the day. That rhythm supports outerwear programs where fit, lining, and construction have to hold up in retail.',
    'Teams work to buyer tech packs, measurement tolerances, and presentation standards agreed for each program.',
  ],
} as const

export const qualityStages: readonly QualityStage[] = [
  {
    slug: 'cutting',
    title: 'Cutting',
    summary: 'Markers, panels, and grain checked before assembly starts.',
    detail:
      'Bundles leave cutting only after markers, panel counts, and grain direction match the approved specification. Critical outerwear panels are flagged before they reach the sewing line.',
    bullets: [
      'Marker placement and size breakdown against the approved spec',
      'Panel count and grain direction before bundles hit the line',
      'Critical outerwear panels flagged before sewing starts',
    ],
    image: {
      src: '/hero-2.jpg',
      alt: 'Weaving and fabric preparation reference at the Bago facility',
    },
  },
  {
    slug: 'sewing',
    title: 'Sewing',
    summary: 'Construction and stitch quality reviewed on the running line.',
    detail:
      'Seam construction and stitch consistency are reviewed in process on running styles. Key outerwear points — pockets, lining attachment, and critical seams — are addressed on the line.',
    bullets: [
      'Seam construction and stitch consistency on running styles',
      'Key outerwear points checked in process, not only at final audit',
      'Deviations addressed on the line before bulk continues',
    ],
    image: {
      src: '/hero-3.jpg',
      alt: 'Woven material reference for in-line sewing programs',
    },
  },
  {
    slug: 'finishing',
    title: 'Finishing',
    summary: 'Measurement, presentation, and packing before goods ship.',
    detail:
      'Finished goods are measured against buyer tolerance, pressed and presented per program, then packed for release. Presentation matches the brand standard before cartons leave the facility.',
    bullets: [
      'Measurement checks against buyer tolerance',
      'Pressing, hanger, or fold presentation per program',
      'Packing and carton presentation before release',
    ],
    image: {
      src: '/hero.jpg',
      alt: 'Production floor reference for finishing and packing programs',
    },
  },
] as const

/** Short copy for home & factory teasers */
export const qualityStageTeasers = qualityStages.map(({ title, summary }) => ({
  title,
  detail: summary,
}))

export const programFocus = [
  {
    title: 'Outerwear programs',
    detail:
      'Fit, lining, and construction checkpoints align with complex jacket and coat programs — where in-line review matters as much as final measurement.',
  },
  {
    title: 'Woven apparel',
    detail:
      'Grain, seam consistency, and finishing presentation follow the same floor discipline as high-volume woven runs.',
  },
] as const
