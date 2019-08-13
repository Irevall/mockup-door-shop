import { getLocalItem, setLocalItem } from '@/services/StorageService';

class LanguageDetector {
  constructor (services) {
    this.type = 'languageDetector'
    this.init(services)
  }

  init (services, detectorOptions, i18nextOptions) {
    this.services = services
    this.i18nextOptions = i18nextOptions
    this.availableLanguages = services ? Object.keys(services.resourceStore.data) : []
  }

  detect () {
    return 'pl';

    const cachedLanguage = getLocalItem('language')
    if (cachedLanguage) return cachedLanguage

    const found = []

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) { // chrome only; not an array, so can't use .push.apply instead of iterating
        for (let i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i])
        }
      }

      if (navigator.language) {
        found.push(navigator.language)
      }
    }

    for (const language of found) {
      const [cleanedLanguage] = this.services.languageUtils.formatLanguageCode(language).split('-')
      if (this.availableLanguages.includes(cleanedLanguage)) return cleanedLanguage
    }

    const fallback = this.i18nextOptions.fallbackLng || []

    return Array.isArray(fallback) ? fallback[0] : fallback
  }

  cacheUserLanguage (lang) {
    setLocalItem('language', lang)
  }
}

LanguageDetector.type = 'languageDetector'

export default LanguageDetector
