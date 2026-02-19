import { useScrollReveal } from '../../hooks/useScrollReveal'
import FeatureCard from './FeatureCard'
import { featureCards } from '../../constants/data'

export default function BentoGrid() {
  const titleRef = useScrollReveal()

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-24 w-full">
      <div ref={titleRef} className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Everything you need. <span className="text-blue-600">In one place.</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Seamlessly integrated tools to keep your study flow unbroken.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
