const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <a class="section-header" style=${attrs.style} href=${attrs.href}>
      ${children}
    </a>
  `
}
