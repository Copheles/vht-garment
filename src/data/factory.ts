export type FactoryAudit = {
  code: string
  title: string
  detail: string
}

export const factoryAudits: readonly FactoryAudit[] = [
  { code: 'CMP', title: 'Cut · Make · Pack', detail: 'Production on buyer-supplied materials.' },
  { code: 'BSCI', title: 'Social compliance', detail: 'Third-party audit kept current.' },
  { code: 'GRS', title: 'Recycled standard', detail: 'Global Recycled Standard certified.' },
  { code: 'LCW', title: 'Retail audit', detail: 'Cleared for LC Waikiki programs.' },
] as const

export const facilityFacts = [
  { label: 'Founded', value: '24 Nov 2017' },
  { label: 'Site', value: '5.16 acres · Bago' },
  { label: 'Focus', value: 'Woven & outerwear' },
] as const

export const cmpPoints = [
  'Cut, make, and pack on fabrics and trims supplied by the buyer.',
  'Programs run to tech packs, measurement specs, and brand finishing standards.',
  'Outerwear and woven families share the same floor discipline and QC rhythm.',
] as const

export const capacityPoints = [
  'Nineteen active sewing lines today, with six additional lines in expansion.',
  'Roughly 200,000 pieces per month capacity, depending on style mix and complexity.',
  'About 1,200 skilled employees across cutting, sewing, and finishing.',
] as const

export { qualityStageTeasers as floorStages } from './quality'
