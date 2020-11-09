import { registerHtml } from 'tram-one'
import './section-code.css'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <div class="section-code">
      ${children}
    </div>
  `
}
