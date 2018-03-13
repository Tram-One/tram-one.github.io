const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-to-node" header="app.toNode(pathName[, store, actions])"/>
          </code-style>
        </div>
        <div>
          <code-style>app.toNode</code-style> returns a HTMLNode of the app for
          a given route and store. The function matches a route from pathName,
          and either takes in a store, or uses the default store (that's been
          created by adding reducers).
          <br/><br/>
          While initially created to clean up the code in the library, this can
          be useful if you want to manually attach the HTMLNode that Tram-One
          builds to whatever.
        </div>
        <div empty />
      </section-block>
    </div>
  `
}
