import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'npm': require('./npm'),
  'script-tag': require('./script-tag'),
  'tram-one-express': require('./tram-one-express')
})

const background = '#FFDFDD'

const apiStyle = `
  background: ${background};
`

module.exports = () => {
  return html`
    <div id="install-section" style=${apiStyle}>
      <section-container level="2" id="install" header="Install">
        <section-text>
          There are multiple ways to get started with Tram-One!
        </section-text>
        <section-code />
      </section-container>
      <tram-one-express background=${background} />
      <npm background=${background} />
      <script-tag background=${background} />
    </div>
  `
}
