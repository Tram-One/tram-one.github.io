const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
const Tram = require('tram-one')
const app = new Tram({defaultRoute: '/'})
const html = Tram.html()

const home = (state) => {
  return html\`<div>This is my shiny app!</div>\`
}

app.addRoute('/', home)
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h3" id="constructor" header="new Tram([options])"/>
          </code-style>
        </div>
        <div>
          <code-style>new Tram()</code-style> returns an instance of a Tram-One
          app. The constructor takes in an optional <code-style>options</code-style>
          object, for different configurations.
          <br/><br/>
          <code-style>defaultRoute</code-style> is the path that Tram-One will
          go to when no others match. <br/>
          By default, this is <code-style>'/404'</code-style>
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js">
            ${code}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
