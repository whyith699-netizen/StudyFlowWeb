import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function FeatureCard({ title, description, image, bgColor, hoverBgColor, colSpan, delay, hoverEffect, imageClass, isLarge }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-8 relative overflow-hidden group reveal bg-white ${colSpan || ''}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      <div className={`absolute inset-0 ${bgColor} ${hoverBgColor} transition-colors duration-500`} />
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-slate-500 mb-6">{description}</p>
        <div
          className={`flex-grow relative overflow-hidden shadow-2xl border border-slate-200 transition-transform duration-500 ${
            isLarge
              ? 'rounded-t-xl border-t border-l border-r translate-y-4 group-hover:translate-y-2'
              : `rounded-xl ${hoverEffect || ''}`
          }`}
        >
          <img
            src={image}
            alt={title}
            className={`w-full h-full ${imageClass}`}
          />
        </div>
      </div>
    </div>
  )
}
