const Tram = require('tram-one')

const row = require('../elements/row')
const html = Tram.html({
  row
})

const installStyle = `
  font-size: 1.5em;
  text-align: center;
  font-family: monospace;
`

const linkStyle = `
  text-decoration-line: none;
`

module.exports = (attrs, children) => {
  return html`
    <row color=${attrs.color} bg=${attrs.bg}>
      <div style=${installStyle}>
        <a style=${linkStyle}
            href="https://github.com/Tram-One/tram-one">
          github.com/Tram-One/tram-one
        </a>
      </div>
    </row>
  `
}
