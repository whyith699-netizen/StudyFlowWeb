import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function InstallStep({ step, title, description, image, bgColor, borderColor, shadowColor, numberBg, numberText, imageClass, imageStyle, reversed }) {
  const textRef = useScrollReveal()
  const imgRef = useScrollReveal()

  const textBlock = (
    <div
      ref={textRef}
      className={`flex-1 text-center md:text-left ${reversed ? 'order-2' : 'order-2 md:order-1'} reveal ${reversed ? 'from-right' : 'from-left'}`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${numberBg} ${numberText} font-bold text-xl mb-6`}>
        {step}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-lg text-slate-500 leading-relaxed">
        {step === 3 ? (
          <>
            Navigate to{' '}
            <code className="bg-slate-100 px-2 py-1 rounded text-base border border-slate-200">
              chrome://extensions
            </code>{' '}
            in your browser bar. Toggle the <strong>Developer mode</strong> switch in the top right corner.
          </>
        ) : (
          description
        )}
      </p>
    </div>
  )

  const imageBlock = (
    <div
      ref={imgRef}
      className={`flex-1 ${reversed ? 'order-1' : 'order-1 md:order-2'} reveal ${reversed ? 'from-left' : 'from-right'}`}
    >
      <div
        className={`aspect-[4/3] ${bgColor} rounded-3xl flex items-center justify-center border ${borderColor} group hover:scale-[1.02] transition-transform duration-500 overflow-hidden`}
        style={{ boxShadow: `0 20px 40px -15px ${shadowColor}` }}
      >
        <img
          src={image}
          alt={`${title} Step`}
          className={`w-full h-full ${imageClass}`}
          style={imageStyle}
        />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden p-2">
      {textBlock}
      {imageBlock}
    </div>
  )
}
