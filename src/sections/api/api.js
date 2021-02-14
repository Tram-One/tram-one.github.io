import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-header': require('../../components/section-header'),
  'start': require('./start'),
  'register-html': require('./register-html'),
  'register-svg': require('./register-svg'),
  'use-store': require('./use-store'),
  'use-global-store': require('./use-global-store'),
  'use-effect': require('./use-effect'),
  'use-url-params': require('./use-url-params')
})

module.exports = () => {
  return html`
    <section id="api-section" class="section-page">
      <section-header level="2" anchor="api" header="API">
        Tram-One has a simple interface to help you build your web app.
      </section-header>
      <start/>
      <register-html/>
      <register-svg/>
      <use-store/>
      <use-global-store/>
      <use-effect/>
      <use-url-params/>
    </section>
  `
}
