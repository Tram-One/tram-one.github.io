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
  webStorage: localStorage,
  webEngine: window
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
          By default, this is <code-style>undefined</code-style>, so app
          state will not persist between page reloads. You can set it to
          <code-style>localStorage</code-style>,
          <code-style>sessionStorage</code-style>,
          or your own plain javascript object.
          <br/><br/>
          <code-style>webEngine</code-style> is an object that Tram-One will
          write and update store and actions to. This is recommended for when
          you want to pull store values or actions without passing them through
          each tag.
          <br/>
          By default, this is <code-style>undefined</code-style>. A common pattern
          is to set this to <code-style>window</code-style> (or a subfield of window),
          so that it is always accessible, however you can set it to any javascript
          object. Whatever it is set to, Tram-One will assign
          <code-style>store</code-style> and <code-style>actions</code-style> to this
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
