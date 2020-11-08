import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
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
    <div id="api-section" style=${apiStyle}>
      <section-container level="2" id="api" header="API">
        <section-text>
          Tram-One has a simple interface to help you build your web app.
        </section-text>
        <section-code />
      </section-container>
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
