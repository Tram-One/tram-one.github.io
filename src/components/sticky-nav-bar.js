import { registerHtml, useGlobalObservable } from 'tram-one'
import './sticky-nav-bar.css'

const html = registerHtml({
  'scroll-anchor': require('./scroll-anchor'),
  'nav-link': require('./nav-link'),
  'tram-logo': require('./tram-logo')
})

const logoSize = '1.2em'

const linkStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
`

module.exports = () => {
  const [stickyNavVisibility] = useGlobalObservable('stickyNavVisibility', false)
  const [stickyNavBarColor] = useGlobalObservable('stickyNavColor')

  const dynamicStyleProperties = `
    ${stickyNavVisibility ? '' : 'display: none;'}
    background: ${stickyNavBarColor}
  `

  return html`
    <nav class="sticky-nav-bar" style="${dynamicStyleProperties}">
      <tram-logo class="sticky-nav-logo" size=${logoSize} />
      <nav-link class="tram-one-link" href="/">Tram-One</nav-link>
      <scroll-anchor href="#introduction">Introduction</scroll-anchor>
      <scroll-anchor href="#features">Features</scroll-anchor>
      <scroll-anchor href="#install">Install</scroll-anchor>
      <scroll-anchor href="#concepts">Concepts</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#api">API</scroll-anchor>
      <nav-link href="https://discord.gg/dpBXAQC">Discord</nav-link>
      <nav-link href="https://github.com/Tram-One">Github</nav-link>
      <nav-link href="https://www.npmjs.com/package/tram-one">NPM</nav-link>
    </nav>
  `
}
