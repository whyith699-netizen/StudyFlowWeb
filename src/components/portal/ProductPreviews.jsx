import { Link, MemoryRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../../../../Extension/src/pages/HomePage'
import ClassDetailPage from '../../../../Extension/src/pages/ClassDetailPage'
import MyTasksPage from '../../../../Extension/src/pages/MyTasksPage'
import { ExtensionPreviewDataProvider } from '../../extensionSandbox/DataContext'
import { ExtensionPreviewLanguageProvider } from '../../extensionSandbox/LanguageContext'
import { extensionPreviewClassId, extensionPreviewData } from '../../extensionSandbox/seedData'

function ExtensionPreviewShell({ children, heightClassName = 'h-[620px]' }) {
  return (
    <div className="mx-auto w-full max-w-[620px] rounded-[30px] border border-slate-200 bg-white p-2 shadow-[0_26px_60px_rgba(15,23,42,0.09)] preview-inter-font">
      <div className={`overflow-hidden rounded-[24px] bg-gray-100 ${heightClassName}`}>
        <div className="h-full bg-gray-100 p-2.5">{children}</div>
      </div>
    </div>
  )
}

function PreviewRouteNotice({ title, description, href = '/' }) {
  return (
    <div className="flex h-full items-center justify-center rounded-[18px] border border-dashed border-slate-300 bg-white/75 p-5 text-center">
      <div className="max-w-xs">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Preview Route</p>
        <p className="mt-3 text-lg font-semibold text-slate-950">{title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        <Link to={href} className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
          Back to showcase
        </Link>
      </div>
    </div>
  )
}

function ExtensionPreviewSandbox({ initialEntries, children, heightClassName }) {
  return (
    <ExtensionPreviewShell heightClassName={heightClassName}>
      <ExtensionPreviewLanguageProvider>
        <ExtensionPreviewDataProvider initialData={extensionPreviewData}>
          <MemoryRouter initialEntries={initialEntries}>
            {children}
          </MemoryRouter>
        </ExtensionPreviewDataProvider>
      </ExtensionPreviewLanguageProvider>
    </ExtensionPreviewShell>
  )
}

function ExtensionPreviewRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/class/:id" element={<ClassDetailPage />} />
      <Route path="/tasks" element={<MyTasksPage />} />
      <Route
        path="/class/add"
        element={
          <PreviewRouteNotice
            title="Add Class is disabled in preview"
            description="This portal mounts the original page source, but create/edit flows stay read-only for the marketing preview."
          />
        }
      />
      <Route
        path="/class/edit/:id"
        element={
          <PreviewRouteNotice
            title="Edit Class is disabled in preview"
            description="The preview is wired for exploration, filtering, and navigation, while edit flows remain locked."
            href={`/class/${extensionPreviewClassId}`}
          />
        }
      />
      <Route
        path="/task/add"
        element={
          <PreviewRouteNotice
            title="Add Task is disabled in preview"
            description="Buttons still come from the original extension page, but data creation is intentionally locked in the portal."
            href="/tasks"
          />
        }
      />
      <Route
        path="/task/edit/:id"
        element={
          <PreviewRouteNotice
            title="Edit Task is disabled in preview"
            description="Task filtering and expansion stay interactive, while edit forms are intentionally excluded from this showcase."
            href="/tasks"
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export function ExtensionHomePreview() {
  return (
    <ExtensionPreviewSandbox initialEntries={['/']} heightClassName="h-[620px]">
      <ExtensionPreviewRoutes />
    </ExtensionPreviewSandbox>
  )
}

export function ExtensionClassDetailPreview() {
  return (
    <ExtensionPreviewSandbox initialEntries={[`/class/${extensionPreviewClassId}`]} heightClassName="h-[720px]">
      <ExtensionPreviewRoutes />
    </ExtensionPreviewSandbox>
  )
}

export function ExtensionTasksPreview() {
  return (
    <ExtensionPreviewSandbox initialEntries={['/tasks']} heightClassName="h-[700px]">
      <ExtensionPreviewRoutes />
    </ExtensionPreviewSandbox>
  )
}
