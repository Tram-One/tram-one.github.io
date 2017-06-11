const Tram = require('tram-one')

const html = Tram.html()

const linkStyle = `
  color: #e6ebef;
`

module.exports = (attrs, children) => {
  const project = attrs.href.split('/').slice(-1)
  return Tram.html()`
    <li>
      <a style=${linkStyle} href=${attrs.href}>
        ${project}
      </a>
    </li>
  `
}
