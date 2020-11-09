import { registerHtml } from 'tram-one'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <div class="section-text">
      ${children}
    </div>
  `
}
