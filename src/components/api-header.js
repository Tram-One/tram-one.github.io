import { registerHtml } from 'tram-one'
import './api-header.css'

const html = registerHtml({
  'anchor-clip': require('./anchor-clip')
})

module.exports = (attrs, children) => {

  return html`
    <header class="api-header">
      <anchor-clip level=${attrs.level} id=${attrs.anchor} header=${attrs.header} />
      ${children}
    </header>
  `
}
