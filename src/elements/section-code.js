import { registerHtml } from 'tram-one'

const html = registerHtml()

module.exports = (attrs, children) => {
  return html`
    <div class="section-code">
      ${children}
    </div>
  `
}
