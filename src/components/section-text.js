import { registerHtml } from 'tram-one'
import './section-text.css'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <p class="section-text">
      ${children}
    </p>
  `
}
