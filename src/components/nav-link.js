import { registerHtml } from 'tram-one'
import './nav-link.css'
const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <a class="nav-link ${attrs.className}" href=${attrs.href}>
      ${children}
    </a>
  `
}
