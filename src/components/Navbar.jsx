import { DOWNLOAD_URL, DASHBOARD_URL, GITHUB_URL } from '../constants/data'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/50 glass-card">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <span className="self-center text-xl font-bold whitespace-nowrap text-slate-900 group-hover:tracking-widest transition-all duration-300 font-syne">
            Study Flow
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-100 font-bold rounded-lg text-sm px-4 py-2 text-center transition-all hidden md:block"
          >
            Dashboard
          </a>
          <a
            href={DOWNLOAD_URL}
            download
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center transition-all shadow-lg hover:shadow-blue-600/30"
          >
            Get Started
          </a>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Features
              </a>
            </li>
            <li>
              <a href="#installation" className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Installation
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
