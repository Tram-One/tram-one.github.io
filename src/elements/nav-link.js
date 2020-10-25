import { registerHtml } from 'tram-one'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <a class="nav-link" style=${attrs.style} href=${attrs.href}>
      ${children}
    </a>
  `
}
