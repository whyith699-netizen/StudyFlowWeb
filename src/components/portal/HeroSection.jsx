import { downloadArtifacts, siteCopy } from '../../constants/data'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M7.5 5.833 14.167 10 7.5 14.167V5.833Z" fill="currentColor" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 4.167v7.5m0 0 3.333-3.333M10 11.667 6.667 8.334M4.167 15.833h11.666"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HeroSection() {
  const primary = downloadArtifacts.extension
  const secondary = downloadArtifacts.web

  return (
    <section id="home" className="px-4 pb-18 pt-18 md:px-6 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="hero-badge">{siteCopy.badge}</p>
        <h1 className="hero-title">{siteCopy.heroTitle}</h1>
        <p className="hero-subtitle">{siteCopy.heroSubtitle}</p>
        <p className="hero-support">{siteCopy.heroSupport}</p>

        <div className="hero-actions">
          <a href={primary.href} {...getLinkProps(primary)} className="button-primary">
            <DownloadIcon />
            {primary.buttonLabel}
          </a>

          <a href={secondary.href} {...getLinkProps(secondary)} className="button-secondary">
            <PlayIcon />
            {secondary.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
