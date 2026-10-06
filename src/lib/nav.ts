export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Factory', to: '/factory' },
  { label: 'Quality', to: '/quality' },
] as const

export const contactNavItem = { label: 'Contact', to: '/contact' } as const

export type PrimaryNavLabel = (typeof primaryNav)[number]['label']
export type MainNavLabel = PrimaryNavLabel | typeof contactNavItem.label
