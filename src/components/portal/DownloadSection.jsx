import { downloadArtifacts, siteCopy } from '../../constants/data'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

export default function DownloadSection() {
  const web = downloadArtifacts.web

  return (
    <section className="px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="cta-banner">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">StudyFlow</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            {siteCopy.sectionTitles.cta}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {siteCopy.bottomCtaDescription}
          </p>

          <a href={web.href} {...getLinkProps(web)} className="mt-8 inline-flex cta-banner-button">
            {web.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
