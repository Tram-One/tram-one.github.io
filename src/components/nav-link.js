import { registerHtml } from 'tram-one'
import './nav-link.css'
const html = registerHtml()

module.exports = ({href, className=""}, children) => {
  return html`
    <a class="nav-link ${className}" href=${href}>
      ${children}
    </a>
  `
}
