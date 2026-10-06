import { Reveal } from './Reveal'

type LogoProps = {
  label: string
  width: number
  children: string
  family: string
  size: number
  weight: number
  spacing?: number
  style?: 'normal' | 'italic'
  y?: number
}

function Wordmark({
  label,
  width,
  children,
  family,
  size,
  weight,
  spacing = 0,
  style = 'normal',
  y = 33,
}: LogoProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} 48`}
      className="h-11 w-auto text-navy/75 transition-colors duration-300 hover:text-navy"
    >
      <text
        x={width / 2}
        y={y}
        textAnchor="middle"
        fill="currentColor"
        fontFamily={family}
        fontSize={size}
        fontWeight={weight}
        fontStyle={style}
        letterSpacing={spacing}
      >
        {children}
      </text>
    </svg>
  )
}

const sans = 'Outfit, system-ui, sans-serif'
const serif = '"Cormorant Garamond", Palatino, "Times New Roman", serif'

const logos = [
  <Wordmark key="hm" label="H&M" width={108} family={sans} size={34} weight={800} spacing={-0.8}>
    H&M
  </Wordmark>,
  <Wordmark key="zara" label="Zara" width={196} family={serif} size={32} weight={500} spacing={7} y={34}>
    ZARA
  </Wordmark>,
  <Wordmark key="lpp" label="LPP" width={150} family={sans} size={26} weight={600} spacing={8}>
    LPP
  </Wordmark>,
  <Wordmark key="lcw" label="LC Waikiki" width={240} family={sans} size={18} weight={600} spacing={2.4} y={31}>
    LC WAIKIKI
  </Wordmark>,
  <Wordmark key="primark" label="Primark" width={210} family={sans} size={22} weight={800} spacing={1.6}>
    PRIMARK
  </Wordmark>,
  <Wordmark key="mavi" label="Mavi" width={132} family={sans} size={34} weight={600} spacing={0.5} y={34}>
    mavi
  </Wordmark>,
  <Wordmark
    key="collins"
    label="Collin's"
    width={240}
    family={serif}
    size={32}
    weight={500}
    spacing={2}
    style="italic"
    y={34}
  >
    COLLIN'S
  </Wordmark>,
]

export function Brands() {
  return (
    <section id="brands" className="border-t border-neutral-200/80 bg-stone px-4 pt-12 pb-16 sm:px-6 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">Partnered brands</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted by leading global fashion retailers
          </h2>
        </Reveal>

        <Reveal delay={100} className="relative mt-10 overflow-hidden border-y border-neutral-200 py-8">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-stone to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-stone to-transparent sm:w-24"
            aria-hidden="true"
          />

          <div className="flex w-max items-center motion-safe:animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="m-0 flex shrink-0 list-none items-center p-0"
                aria-hidden={copy === 1}
              >
                {logos.map((logo) => (
                  <li key={`${copy}-${logo.key}`} className="px-8 sm:px-11">
                    {logo}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
