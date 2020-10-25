const Tram = require('tram-one')
const html = Tram.html({
  'anchor-clip': require('./anchor-clip')
})

const isNode = (element) => typeof element === 'object'

const indexMap = {0: 'header', 1: 'text', 2: 'code'}
const indexToField = (object, child, index) =>
  Object.assign({}, object, {[indexMap[index]]: child})

const containerGrid = `
  display: grid;
  font-size: 1em;
  padding-left: 1.5em;
  grid-template-columns: 24em minmax(35em, calc(100% - 24em));
  grid-column-gap: 1.5em;
  grid-template-areas:
    "header code-spacer "
    "text   code        ";
`

const headerStyle = `
  padding-left: 1rem;
  grid-area: header;
`

const textStyle = `
  padding-left: 1rem;
  padding-bottom: 1rem;
  grid-area: text;
  font-size: 0.9em;
`

const codeSpacer = `
  background: #2E2E2E;
  color: white;
  padding: 1em;
  grid-area: code-spacer;
`

const codeContainerStyle = `
  ${codeSpacer}
  padding-top: 0;
  grid-area: code;
`

module.exports = (attrs, children) => {
  const {header, text, code} = children
    .filter(isNode)
    .reduce(indexToField, {})

  return html`
    <div class="section-block" style=${containerGrid}>
      <div style=${headerStyle}>
        ${header}
      </div>
      <div style=${textStyle}>
        ${text}
      </div>
      <div style=${codeSpacer} />
      <div style=${codeContainerStyle}>
        ${code}
      </div>
    </div>
  `
}
