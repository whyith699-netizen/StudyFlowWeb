import SectionHeader from '../SectionHeader'
import { featureCards, siteCopy } from '../../constants/data'

function TaskPreview() {
  return (
    <div className="grid gap-3">
      {[
        ['Linear Algebra worksheet', 'High'],
        ['Biology lab notes', 'Medium'],
        ['History quiz review', 'Low'],
      ].map(([label, level]) => (
        <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full border-2 border-sky-500 bg-white" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </div>
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
              {level}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function AnalyticsPreview() {
  const bars = [40, 68, 54, 88, 72, 94]

  return (
    <div className="rounded-[26px] bg-slate-50 p-5">
      <div className="flex items-end gap-3">
        {bars.map((height, index) => (
          <div key={height} className="flex-1 text-center">
            <div
              className={`mx-auto w-full rounded-t-2xl ${index === bars.length - 1 ? 'bg-sky-600' : 'bg-sky-200'}`}
              style={{ height: `${height}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
        <span>Mon</span>
        <span>Sat</span>
      </div>
    </div>
  )
}

function MaterialsPreview() {
  return (
    <div className="grid gap-3">
      {['Algorithms', 'Research Methods', 'Macroeconomics'].map((label, index) => (
        <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${
                index === 1 ? 'bg-sky-100 text-sky-700' : 'bg-slate-900 text-white'
              } text-sm font-semibold`}
            >
              {label.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{label}</p>
              <p className="text-xs text-slate-500">Links, notes, and weekly references</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FocusPreview() {
  return (
    <div className="rounded-[28px] bg-sky-600 px-6 py-8 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Focus mode</p>
      <div className="mt-5 text-center">
        <p className="font-['Sora'] text-5xl font-semibold tracking-[-0.04em]">25:00</p>
        <p className="mt-2 text-sm text-white/80">Current session: Calculus practice</p>
      </div>
      <div className="mt-6 flex gap-3">
        <button type="button" className="flex-1 rounded-full bg-white px-4 py-3 text-sm font-semibold text-sky-700">
          Start Session
        </button>
        <button type="button" className="flex-1 rounded-full border border-white/35 px-4 py-3 text-sm font-semibold text-white">
          Pause
        </button>
      </div>
    </div>
  )
}

function DeadlinesPreview() {
  return (
    <div className="grid gap-3">
      {[
        ['Database project', 'Today'],
        ['English essay', 'Tomorrow'],
        ['Physics quiz', 'Friday'],
      ].map(([label, due]) => (
        <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{label}</p>
            <p className="text-xs text-slate-500">Deadline synced to your dashboard</p>
          </div>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">{due}</span>
        </div>
      ))}
    </div>
  )
}

const previewMap = {
  prioritization: TaskPreview,
  analytics: AnalyticsPreview,
  materials: MaterialsPreview,
  focus: FocusPreview,
  deadlines: DeadlinesPreview,
}

export default function FeatureObservatory() {
  return (
    <section id="features" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Feature Snapshot"
          title={siteCopy.sectionTitles.features}
          description="The StudyFlow experience is built around the moments students repeat every day: deciding what matters now, starting a focus block, and keeping deadlines visible."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => {
            const Preview = previewMap[card.id]
            const emphasis = card.id === 'focus' ? 'card-focus' : ''

            return (
              <article key={card.id} className={`landing-card p-6 ${emphasis}`}>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>

                <div className="mt-6">
                  <Preview />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
