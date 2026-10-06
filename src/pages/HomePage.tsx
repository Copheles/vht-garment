import { Brands } from '../components/Brands'
import { Hero } from '../components/Hero'
import { HomeBrief } from '../components/HomeBrief'
import { Metrics } from '../components/Metrics'

export function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Brands />
      <HomeBrief />
    </>
  )
}
