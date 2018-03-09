const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const routes = `
const route = Tram.route()
app.addRoute('/', homePage, [
  route('/images/:page', imagePage, [
    route('/download', downloadImagePage),
    route('/preview', previewImagePage)
  ]),
  route('/about', aboutPage)
])

// navigating to /images/10/download will resolve as
// homePage(store, actions, params,
//   imagePage(store, actions, params,
//     downloadImagePage(store, actions, params)
//   )
// )
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="tram-route" header="Tram.route()"/>
          </code-style>
        </div>
        <div>
          <code-style>Tram.route</code-style> is a static method which is a
          shorthand for creating the subroutes for nested routes in the
          <code-style>app.addRoute</code-style> method. The resulting function
          takes in path, component, and subroutes, mimicking the interface used
          in <code-style>app.addRoute</code-style>.
        </div>
        <div>
          <code-block background=${attrs.background} filename="router.js">
            ${routes}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
