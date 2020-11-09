import { registerHtml } from 'tram-one'
import './section-header.css'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <div class="section-header">
      ${children}
    </div>
  `
}
