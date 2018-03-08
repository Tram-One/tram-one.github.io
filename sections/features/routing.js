const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
const cats = () => html\`
  <h1> Cats Rule! </h1>
\`

const dogs = () => html\`
  <h1> Dogs Rule! </h1>
\`

const unknown = () => html\`
  <h1> Animals are Neat... </h1>
\`

app.addRoute('/cats', cats)
app.addRoute('/dogs', dogs)
app.addRoute('/404', unknown)
`

const params = `
const animals = (store, actions, params) => html\`
  <div>
    <h1> My favorite animal is the \${params.animal}! </h1>
  </div>
\`

app.addRoute('/animals/:animal', animals)
`

const nested = `
const animals = (store, actions, params, subroute) => html\`
  <div>
    <h1> Animals Rule! </h1>
    \${subroute}
  </div>
\`

const turtles = () => html\`
  <h2> My Favorite are Turtles </h2>
\`

const alpaca = () => html\`
  <h2> My Favorite are Alpaca </h2>
\`

const route = Tram.route()
app.addRoute('/animals', animals, [
  route('/turtles', turtles),
  route('/alpaca', alpaca)
])
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="routing" header="Routing"/>
        </div>
        <div>
          Tram-One supports routing, having different components render based on
          which route a user is on.
          <br/><br/>
          By default, a route that doesn't match is sent to whatever component
          lives on /404 . You can handle the route from there.
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js" style="margin: -1.6em 0 1.5em 0">
            ${code}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          The route paths can contain path and query parameters, which are
          passed into the page in the params object.
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js" style="margin: -1.6em 0 1.5em 0">
            ${params}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          Routes can be nested, so you can have the same surrounding elements
          for all of your pages (like a consistent navigation bar, or header).
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js" style="margin: -1.6em 0 1.5em 0">
            ${nested}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
