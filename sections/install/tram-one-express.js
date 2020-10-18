const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="tram-one-express" header="Tram-One Express"/>
        </div>
        <div>
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
        </div>
        <div>
          <code-block background=${attrs.background}>
            npx tram-one-express <app-name>
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
