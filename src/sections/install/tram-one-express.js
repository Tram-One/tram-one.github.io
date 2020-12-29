import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="tram-one-express" header="Tram-One Express" />
      <section-container>
        <section-text>
          The fastest and easiest way to get started wtih Tram-One is by using
          Tram-One Express, a dedicated generator for building single-page
          apps using Tram-One.
          <br/><br/>
          It comes with example code, build tooling
          (via <a href="https://parceljs.org/">parcel</a>),
          and tests to help you get started!
          <br/><br/>
          You can check out the documentation here:
          <br/>
          <a href="https://github.com/Tram-One/tram-one-express">
            https://github.com/Tram-One/tram-one-express
          </a>
        </section-text>
        <code-block>
          npx tram-one-express app-name
        </code-block>
      </section-container>
    </section>
  `
}
