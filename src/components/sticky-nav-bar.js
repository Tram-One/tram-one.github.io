import { registerHtml } from 'tram-one'

const html = registerHtml({
  'scroll-anchor': require('../elements/scroll-anchor'),
  'nav-link': require('../elements/nav-link'),
  'tram-logo': require('./tram-logo')
})

const navGrid = `
  display: flex;
  flex-wrap: no wrap;
  margin-bottom: 0.8em;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
`

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
//TODO: should probably not be scroll anchors
module.exports = (attrs) => {
  return html`
    <div style="${navGrid}${attrs.style}">
      <tram-logo style=${linkStyle} size=${logoSize} />
      <nav-link style=${linkStyle}${tramOneStyle}>Tram-One</nav-link>
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
