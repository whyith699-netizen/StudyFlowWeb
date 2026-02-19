import { useScrollReveal } from '../../hooks/useScrollReveal'
import InstallStep from './InstallStep'
import { installSteps } from '../../constants/data'

export default function InstallSection() {
  const titleRef = useScrollReveal()

  return (
    <section id="installation" className="py-24 w-full bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
            Setup is simple.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Five easy steps to get you flowing.
          </p>
        </div>

        <div className="space-y-32">
          {installSteps.map((step) => (
            <InstallStep key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
