import { registerHtml } from 'tram-one'

const html = registerHtml()
import './code-style.css'

module.exports = (attrs, children) => html`
  <span class="code-style">
    ${children}
  </span>
`
