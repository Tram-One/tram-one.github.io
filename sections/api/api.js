const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
  'code-block': require('../../elements/code-block'),
  'start': require('./start'),
  'register-html': require('./register-html'),
  'register-svg': require('./register-svg'),
  'use-observable': require('./use-observable'),
  'use-global-observable': require('./use-global-observable'),
  'use-effect': require('./use-effect'),
  'use-url-params': require('./use-url-params')
})

const background = '#DDEAFF'

const apiStyle = `
  background: ${background};
`

module.exports = () => {
  return html`
    <div style=${apiStyle}>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="api" header="API"/>
        </div>
        <div>
          Tram-One has a simple interface to help you build your web app.
        </div>
        <div empty />
      </section-block>
      <start background=${background}/>
      <register-html background=${background}/>
      <register-svg background=${background}/>
      <use-observable background=${background}/>
      <use-global-observable background=${background}/>
      <use-effect background=${background}/>
      <use-url-params background=${background}/>
    </div>
  `
}
