import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect, useGlobalObservable, useObservable } from 'tram-one'

// import './styles.css'

const html = registerHtml({
  'app-header': require('./components/app-header'),
  'sticky-nav-bar': require('./components/sticky-nav-bar'),
  'introduction': require('./sections/introduction/introduction'),
  'features': require('./sections/features/features'),
  'api': require('./sections/api/api'),
  'install': require('./sections/install/install')
})

const linksStyle = `
  grid-area: links;
  align-items: baseline;
  padding-left: 0.5em;
`

const createScrollObserver = () => {
  const [stickyNavVisibility, setStickyNavVisibility] = useGlobalObservable('stickyNavVisibility', false)
  const [stickyNavBarColor, setStickyNavBarColor] = useGlobalObservable('stickyNavColor')
  const [entryMap] = useObservable([{}, {}, {}, {}])

  const appHeader = document.querySelector('#app-header')
  const introSection = document.querySelector('#intro-section')
  const featureSection = document.querySelector('#features-section')
  const installSection = document.querySelector('#install-section')
  const apiSection = document.querySelector('#api-section')

  const handleIntersect = (entries, observer) => {
    console.log(entries)
    const isAppHeaderEntry = (entry) => entry.target.id === 'app-header'
    const appHeaderEntry = entries.find(isAppHeaderEntry)
    if (appHeaderEntry) {
      const appHeaderIsVisible = appHeaderEntry.isIntersecting
      setStickyNavVisibility(!appHeaderIsVisible)
    }

    const isintroductionSectionEntry = (entry) => entry.target.id === 'intro-section'
    const introductionSectionEntry = entries.find(isintroductionSectionEntry)

    const isfeatureSectionEntry = (entry) => entry.target.id === 'features-section'
    const featureSectionEntry = entries.find(isfeatureSectionEntry)

    const isinstallSectionEntry = (entry) => entry.target.id === 'install-section'
    const installSectionEntry = entries.find(isinstallSectionEntry)

    const isApiSectionEntry = (entry) => entry.target.id === 'api-section'
    const apiSectionEntry = entries.find(isApiSectionEntry); // needed semi-colon
    
    // update our entryMap with the latest values from the observer
    [introductionSectionEntry, featureSectionEntry, installSectionEntry, apiSectionEntry]
      .forEach((entry, index) => {
        if (entry) {
          entryMap[index] = entry
        }
      })

    // find the first entry that is visible
    const isSectionVisible = (entry) => entry.isIntersecting
    const firstEntry = entryMap.find(isSectionVisible)
    const stickyNavColor = firstEntry.target.style.backgroundColor
    setStickyNavBarColor(stickyNavColor)
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px'
  }

  const scrollObserver = new IntersectionObserver(handleIntersect, observerOptions)
  scrollObserver.observe(appHeader)
  scrollObserver.observe(introSection)
  scrollObserver.observe(featureSection)
  scrollObserver.observe(installSection)
  scrollObserver.observe(apiSection)
}


const page = () => {
  useEffect(createScrollObserver)

  return html`
    <div>
      <app-header id='app-header' style=${linksStyle}/>
      <sticky-nav-bar style="${linksStyle}" />
      <introduction />
      <features />
      <install />
      <api />
    </div>
  `
}

start('#app', page)
