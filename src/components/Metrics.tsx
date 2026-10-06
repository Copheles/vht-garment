import { FactoryMetricsGrid } from './FactoryMetricsGrid'



export function Metrics() {

  return (

    <section

      id="metrics"

      className="relative z-20 border-t border-neutral-200/80 bg-stone px-4 py-14 sm:px-6 lg:px-10 lg:py-16"

    >

      <div className="mx-auto max-w-6xl">

        <FactoryMetricsGrid />

      </div>

    </section>

  )

}

