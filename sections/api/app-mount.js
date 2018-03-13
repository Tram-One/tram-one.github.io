const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const bold = `
  font-weight: bold;
  margin: 1em;
`

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h5" id="app-mount" header="app.mount(selector, pathname, store, actions)"/>
          </code-style>
        </div>
        <div>
          <div style=${bold}>
            WARNING: INTENDED FOR INTERNAL USE ONLY
          </div>

          <code-style>app.mount</code-style> app.mount matches a route from
          pathName, passes in a store and actions object, and either creates a
          child div, or updates a child div under selector.

          This was created to clean up the code in the library, but may be
          useful for testing.

          <div style=${bold}>
            DO NOT CALL THIS DIRECTLY FOR YOUR APP
          </div>
        </div>
        <div empty />
      </section-block>
    </div>
  `
}
