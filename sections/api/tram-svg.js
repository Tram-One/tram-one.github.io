const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const dom = `
const svg = Tram.svg()
const logo = () => svg\`
  <svg viewBox="0 0 864 864">
    <g>
      <circle fill="#FDF491" cx="100" cy="100" r="20"/>
    </g>
  </svg>
\`
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="tram-svg" header="Tram.svg([registry])"/>
          </code-style>
        </div>
        <div>
          <code-style>Tram.svg</code-style> is the same as
          <code-style>Tram.html</code-style>, but will create elements in the
          appropriate SVG namespace. Use this method if you're building
          components that are SVG.
        </div>
        <div>
          <code-block background=${attrs.background} filename="logo.js" style="margin: -1.6em 0 1.5em 0">
            ${dom}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
