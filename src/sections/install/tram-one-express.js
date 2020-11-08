import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
})

module.exports = (attrs) => {
  return html`
    <section-container level="3" id="tram-one-express" header="Tram-One Express">
      <section-text>
        The fastest and best way to install Tram-One is by using
        Tram-One Express, a dedicated generator for building single-page
        apps using Tram-One.
        <br/><br/>
        It comes with example code, scripts, and tests to help you
        get started!
        <br/><br/>
        You can check out the documentation here:
        <br/>
        <a href="https://github.com/Tram-One/tram-one-express">
          https://github.com/Tram-One/tram-one-express
        </a>
      </section-text>
      <section-code>
        <code-block background=${attrs.background}>
          npx tram-one-express app-name
        </code-block>
      </section-code>
    </section-container>
  `
}
