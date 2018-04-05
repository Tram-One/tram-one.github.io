const Tram = require('tram-one')
const html = Tram.html({
  'tram-logo': require('../components/tram-logo'),
  'code-block': require('../elements/code-block')
})

const logoSize = '12em'

const code = `
const Tram = require('tram-one')
const app = new Tram()

const html = Tram.html()
const page = () => {
  return html\`
    <div>
      <h1> Fun Times on Tram-One! </h1>
    </div>
  \`
}
`

const pageStyle = `
  background: #2E2E2E;
  font-size: 2em;

  display: grid;
  grid-template-areas:
    "header header "
    "logo   code";
`

module.exports = () => html`
  <div style=${pageStyle}>
    <h1 style="grid-area: header; color: white; text-align: center; font-size: 4em;">Tram-One</h1>
    <tram-logo style="grid-area: logo; margin: -2em 0 0 2em;" size=${logoSize} />
    <code-block style="grid-area: code;">
      ${code}
    </code-block>
  </div>
`
