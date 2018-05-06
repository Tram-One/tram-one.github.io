const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
const Tram = require('tram-one')

const app = new Tram({
  defaultRoute: '/',
  webStorage: localStorage
})

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
          go to when no others match. This can be useful as an error page, or
          to force all routes to go to a home page.
          <br/>
          By default, this is <code-style>'/404'</code-style>, so adding an
          error page to <code-style>'/404'</code-style> will cause all invalid
          routes to navigate to that page.
          <br/><br/>
          <code-style>webStorage</code-style> is the object that state will
          persist in.
          <br/>
          By default, this is <code-style>sessionStorage</code-style>, so app
          state will persist between page reloads, but not when the page is
          closed and re-opened. You can also set it to
          <code-style>localStorage</code-style>, or your own plain javascript
          object.
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
