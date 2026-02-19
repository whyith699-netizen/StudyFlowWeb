import { DOWNLOAD_URL, DASHBOARD_URL, VERSION } from '../../constants/data'

export default function DownloadBox() {
  return (
    <div className="perspective-1000 w-full flex justify-center">
      <div className="glass-card p-8 md:p-10 rounded-3xl w-full max-w-md floating-box transform-style-3d relative text-center border-t border-l border-white/60">
        <div className="relative z-20 flex flex-col items-center gap-5">
          {/* Version Badge */}
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-blue-100 border border-blue-200 text-blue-600 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              v{VERSION} Live
            </span>
          </div>

          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Add to Chrome
          </h3>
          <p className="text-sm text-slate-500">
            Join 10,000+ students zoning in.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <a
              href={DOWNLOAD_URL}
              download
              className="w-full group relative overflow-hidden text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-xl text-lg px-6 py-4 shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download Extension
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative overflow-hidden text-blue-600 bg-white border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 font-bold rounded-xl text-lg px-6 py-4 transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Open Web Dashboard
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-2 mt-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white" />
            </div>
            <span className="text-xs text-slate-500">Trusted by students worldwide</span>
          </div>
        </div>
      </div>
    </div>
  )
}
