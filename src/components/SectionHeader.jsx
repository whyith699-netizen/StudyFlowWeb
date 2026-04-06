export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="section-eyebrow">
          <span className="section-eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
