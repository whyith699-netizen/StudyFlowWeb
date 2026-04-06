import SectionHeader from '../SectionHeader'
import { siteCopy, workspaceHighlights } from '../../constants/data'

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Integrated Workspace"
            title={siteCopy.sectionTitles.workspace}
            description="StudyFlow brings together the structure of a planner, the momentum of a focus timer, and the clarity of a central academic dashboard."
          />

          <div className="mt-8 grid gap-4">
            {workspaceHighlights.map((item) => (
              <article key={item.title} className="feature-note">
                <div className="feature-note-icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="workspace-preview">
          <div className="workspace-board">
            <div className="desk-laptop" />
            <div className="desk-phone" />
            <div className="desk-cup" />
            <div className="desk-notebook" />
            <div className="desk-pen" />
          </div>
        </div>
      </div>
    </section>
  )
}
