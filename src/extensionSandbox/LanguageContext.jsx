import { createContext, useContext, useMemo, useState } from 'react'
import translations from '../../../Extension/src/i18n/translations'

const LanguageContext = createContext(null)

export function ExtensionPreviewLanguageProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(defaultLang)

  const value = useMemo(() => ({
    lang,
    toggleLang: () => setLang((current) => (current === 'en' ? 'id' : 'en')),
    t: (key, params = {}) => {
      let text = translations[lang]?.[key] || translations.en[key] || key
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, paramValue)
      })
      return text
    },
  }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}
