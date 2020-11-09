import { registerHtml } from 'tram-one'
import './section-text.css'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <div class="section-text">
      ${children}
    </div>
  `
}
