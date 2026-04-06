export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Workspace', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Clarity', href: '#clarity' },
  { label: 'Start', href: '#start' },
]

export const downloadArtifacts = {
  extension: {
    id: 'extension',
    label: 'Chrome Extension',
    shortLabel: 'Extension',
    version: 'v1.5.0',
    href: './downloads/studyflow-extension-v1.5.0.zip',
    action: 'download',
    buttonLabel: 'Download Extension',
    helper: 'Manual install package for Chrome and Edge',
    fileName: 'studyflow-extension-v1.5.0.zip',
    platform: 'Chrome, Edge',
  },
  web: {
    id: 'web',
    label: 'Web Application',
    shortLabel: 'Web App',
    version: 'Live',
    href: 'https://whyith699-netizen.github.io/StudyFlowDasboarduser/',
    action: 'external',
    buttonLabel: 'Open Web App',
    helper: 'Live dashboard for any modern browser',
    platform: 'Web',
  },
  android: {
    id: 'android',
    label: 'Android APK',
    shortLabel: 'Android',
    version: 'v1.5.0',
    href: './downloads/studyflow-android-v1.5.0.apk',
    action: 'download',
    buttonLabel: 'Download APK',
    helper: 'Android-only mobile companion for reminders and focus sessions',
    fileName: 'studyflow-android-v1.5.0.apk',
    platform: 'Android',
  },
}

export const workspaceHighlights = [
  {
    title: 'Organize everything in one view',
    text: 'Track classes, assignments, and focus time without splitting your workflow across disconnected tools.',
  },
  {
    title: 'Stay synced across your devices',
    text: 'Move from browser extension to the live web dashboard to the Android companion while keeping the same study system.',
  },
]

export const featureCards = [
  {
    id: 'prioritization',
    title: 'Smart Task Prioritization',
    description: 'Sort upcoming work by urgency, subject, and effort so you know what deserves attention first.',
  },
  {
    id: 'analytics',
    title: 'Deep Work Analytics',
    description: 'Visualize how consistent your study sessions are and where your weekly focus time actually goes.',
  },
  {
    id: 'materials',
    title: 'Course Material Hub',
    description: 'Keep key links, notes, and reading references grouped by class instead of scattered across tabs.',
  },
  {
    id: 'focus',
    title: 'Focus Mode Timer',
    description: 'Start quick Pomodoro sessions and keep your most important task visible while the timer is running.',
  },
  {
    id: 'deadlines',
    title: 'Automated Deadlines',
    description: 'Surface due dates clearly so missed assignments stop sneaking up on you at the end of the week.',
  },
]

export const clarityFields = [
  { label: 'Weekly Progress', value: '84% of your planned sessions completed' },
  { label: 'Next Deadline', value: 'Operating Systems report due tomorrow' },
  { label: 'Focus Goal', value: '2 deep work blocks left for today' },
]

export const platformCards = [
  {
    id: 'extension',
    title: 'Chrome Extension',
    description: 'Quick access to classes, tasks, and study shortcuts directly from your browser toolbar.',
  },
  {
    id: 'web',
    title: 'Web Application',
    description: 'A complete planning workspace with dashboard views, reports, notes, and schedule tracking through the live GitHub Pages deployment.',
  },
  {
    id: 'android',
    title: 'Android Application',
    description: 'An Android-only companion for reminders, focus sessions, and lightweight task check-ins during the day.',
  },
]

export const extensionInstallSteps = [
  {
    title: 'Download the extension package',
    description: 'Grab the latest ZIP package, then extract it to a permanent folder on your computer.',
  },
  {
    title: 'Open the browser extension page',
    description: 'Go to chrome://extensions in Chrome or edge://extensions in Microsoft Edge.',
  },
  {
    title: 'Enable Developer Mode and load the folder',
    description: 'Turn on Developer Mode, click Load unpacked, and choose the extracted StudyFlow extension folder.',
  },
  {
    title: 'Pin StudyFlow to the toolbar',
    description: 'Pin the extension so you can open classes, tasks, and shortcuts directly from the browser toolbar.',
  },
]

export const androidInstallNotes = [
  'The mobile app is available only for Android in this release.',
  'Install the APK manually on your Android device and allow installation from unknown sources if prompted.',
  'There is no iOS build or App Store package yet.',
]

export const siteCopy = {
  badge: 'StudyFlow',
  heroTitle: 'One dashboard to master your academic life',
  heroSubtitle:
    'The integrated workspace for tasks, focus sessions, course planning, and deadlines across your browser extension, live web dashboard, and Android companion.',
  heroSupport: 'Built for students who want a calmer way to study, plan, and stay consistent.',
  sectionTitles: {
    workspace: 'Integrated Study Workspace',
    features: 'Experience a better way to study.',
    clarity: 'Crafted for Clarity',
    start: 'Get Started Everywhere',
    cta: 'Ready to reclaim your focus?',
  },
  bottomCtaDescription:
    'Open the live dashboard, install the extension, and keep the Android companion ready when you need it.',
}
