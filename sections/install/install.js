const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
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
    <div style=${apiStyle}>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="install" header="Install"/>
        </div>
        <div>
          There are multiple ways to get started with Tram-One!
        </div>
        <div empty />
      </section-block>
      <tram-one-express background=${background} />
      <npm background=${background} />
      <script-tag background=${background} />
    </div>
  `
}
