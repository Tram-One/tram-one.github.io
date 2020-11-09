import { registerHtml } from 'tram-one'
import './app-header.css'

const html = registerHtml({
  'tram-logo': require('./tram-logo'),
  'nav-bar': require('./nav-bar'),
})

const logoSize = '3.8em'

module.exports = (attrs) => {
  return html`
    <div id=${attrs.id} class="app-header">
      <tram-logo class="app-header-logo" size=${logoSize} />
      <h1 class="app-header-title">
        Tram-One
      </h1>
      <nav-bar class="app-header-nav-bar" />
    </div>
  `
}
