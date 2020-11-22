import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-header': require('../../components/section-header'),
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
    <section id="api-section" class="section-page" style=${apiStyle}>
      <section-header level="2" anchor="api" header="API">
        Tram-One has a simple interface to help you build your web app.
      </section-header>
      <start background=${background}/>
      <register-html background=${background}/>
      <register-svg background=${background}/>
      <use-observable background=${background}/>
      <use-global-observable background=${background}/>
      <use-effect background=${background}/>
      <use-url-params background=${background}/>
    </section>
  `
}
