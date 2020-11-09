import { registerHtml, useGlobalObservable } from 'tram-one'

const html = registerHtml({
  'scroll-anchor': require('./scroll-anchor'),
  'nav-link': require('./nav-link'),
  'tram-logo': require('./tram-logo')
})

const logoSize = '1.2em'

const logoStyle = `
  grid-area: logo;
`

const linkStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
`

const tramOneStyle = `
  font-weight: bold;
  color: #000;
  opacity: 1;
`

const externalStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
  color: #3939ab;
`

const backgroundStyle = `
  background-color: #FFF8DD;
  z-index: 1;
`

//TODO: should probably not be scroll anchors
module.exports = (attrs) => {
  const [stickyNavVisibility] = useGlobalObservable('stickyNavVisibility', false)
  const [stickyNavBarColor] = useGlobalObservable('stickyNavColor')

  const stickyNavStyle = `
    ${stickyNavVisibility ? '' : 'display: none;'}
    background: ${stickyNavBarColor}
  `

  return html`
    <div class="sticky-nav-bar" style="${attrs.style}${backgroundStyle}${stickyNavStyle}">
      <tram-logo style=${linkStyle} size=${logoSize} />
      <nav-link style=${linkStyle}${tramOneStyle} href="/">Tram-One</nav-link>
      <scroll-anchor style=${linkStyle} href="#introduction">Introduction</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#features">Features</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#install">Install</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#api">API</scroll-anchor>
      <nav-link style=${externalStyle} href="https://discord.gg/dpBXAQC">Discord</nav-link>
      <nav-link style=${externalStyle} href="https://github.com/Tram-One">Github</nav-link>
      <nav-link style=${externalStyle} href="https://www.npmjs.com/package/tram-one">NPM</nav-link>
    </div>
  `
}
