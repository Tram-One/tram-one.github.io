const Tram = require('tram-one')

const html = Tram.html()

module.exports = (attrs, children) => {
  const project = attrs.href.split('/').slice(-1)
  return html`
    <li>
      <a href=${attrs.href}>
        ${project}
      </a>
    </li>
  `
}
