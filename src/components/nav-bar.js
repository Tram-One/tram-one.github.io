import { registerHtml } from 'tram-one'
import './nav-bar.css'

const html = registerHtml({
  'scroll-anchor': require('./scroll-anchor'),
  'nav-link': require('./nav-link')
})

const linkStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
`

const externalStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
  color: #3939ab;
`

module.exports = (attrs) => {
  return html`
    <div class="nav-bar ${attrs.className}" style="${attrs.style}">
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
