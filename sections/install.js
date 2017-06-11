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

module.exports = (attrs, children) => {
  return html`
    <row color=${attrs.color} bg=${attrs.bg}>
      <div style=${installStyle}>
        npm install tram-one
      </div>
    </row>
  `
}
