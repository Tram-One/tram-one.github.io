const Tram = require('tram-one')

const row = require('./row')
const html = Tram.html({row})

const twoColGrid = `
  display: flex;
  flex-flow: wrap-reverse;
`

const colStyle = `
  flex: 1;
  min-width: 400px;
`

module.exports = (attrs, children) => {
  const realChildren = children.filter(child => (child.toString().trim() !== ''))
  return html`
    <row title=${attrs.title} color=${attrs.color} bg=${attrs.bg} style=${attrs.style}>
      <div style=${twoColGrid}>
        <div style=${colStyle}>
          ${realChildren[0]}
        </div>
        <div style=${colStyle}>
          ${realChildren[1]}
        </div>
      </div>
    </row>
  `
}
