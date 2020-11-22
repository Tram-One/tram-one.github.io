import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
  'code-style': require('../../components/code-style'),
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
    <section>
      <section-header level="3" anchor="register-svg" header="regsiterSvg" />
      <section-container>
        <section-text>
          Function to generate a tagged template function for SVG.
          This acts identical to <code-style>registerHtml</code-style>, but
          uses DOM methods for building svg graphics.
        </section-text>
        <code-block background=${attrs.background}>
          ${dom}
        </code-block>
      </section-container>
    </section>
  `
}
