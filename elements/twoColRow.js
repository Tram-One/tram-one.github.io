const Tram = require('tram-one')

const row = require('./row')
const html = Tram.html({row})

const twoColGrid = `
  display: flex;
  flex-flow: wrap-reverse;
  align-items: baseline;
`

module.exports = (attrs, children) => {
  const realChildren = children.filter(child => (child.toString().trim() !== ''))
  return html`
    <row title=${attrs.title} color=${attrs.color} bg=${attrs.bg} style=${attrs.style}>
      <div style=${twoColGrid}>
        <div style='flex: 1'>
          ${realChildren[0]}
        </div>
        <div style='flex: 1'>
          ${realChildren[1]}
        </div>
      </div>
    </row>
  `
}
