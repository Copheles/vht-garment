export const office = {
  placeName: 'Mae Khone Village, Bago',
  addressLines: [
    'Oo Paing No. (38), Block No. (620/A)',
    'Mae Khone Village (West)',
    'Bago, Myanmar',
  ],
  email: 'vhtgarmentco.ltd@gmail.com',
  phone: '09971270808',
} as const

export const representatives = [
  {
    name: 'Mr. Wu Song',
    wechat: 'wusong1352',
    phone: '095558808',
  },
] as const

/** Used for Google Maps embed & external link — refine when client shares an exact pin */
export const mapsQuery =
  'Oo Paing No. 38, Mae Khone Village West, Bago, Myanmar'

export function googleMapsEmbedUrl(query: string = mapsQuery) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

export function googleMapsOpenUrl(query: string = mapsQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
