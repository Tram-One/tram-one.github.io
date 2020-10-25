import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const dom = `
import { registerSvg } from 'tram-one'

const svg = registerSvg()

const home = () => svg\`
  <svg>
    <g>
      <circle fill="#ce1271" cx="100" cy="100" r="20"/>
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
            <anchor-clip tag="h4" id="register-svg" header="regsiterSvg"/>
          </code-style>
        </div>
        <div>
          Function to generate a tagged template function for SVG.
          This acts identical to <code-style>registerHtml</code-style>, but
          uses DOM methods for building svg graphics.
        </div>
        <div>
          <code-block background=${attrs.background}>
            ${dom}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
