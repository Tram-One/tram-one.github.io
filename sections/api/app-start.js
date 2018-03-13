const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const index = `
<html>
  <head>
    <title>Tram One</title>
  </head>
  <body>
    <div class="main"></div>
    <script src="/app.js"></script>
  </body>
</html>
`

const app = `
const app = new Tram()
const html = Tram.html()

const homePage = () => {
  return html\`<div>This is my shiny app!</div>\`
}

app.addRoute('/', homePage)
app.start('.main')
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-start" header="app.start(selector[, pathName])"/>
          </code-style>
        </div>
        <div>
          <code-style>app.start</code-style> will kick off the app. Once this
          is called the app is mounted onto the <code-style>selector</code-style>.
          <br/>
          <code-style>selector</code-style> can be a node or a css selector
          (which is fed into <code-style>document.querySelector</code-style>).
          <br/>
          <code-style>pathname</code-style> can be an initial path, if you
          don't want to check the browser's current path.
          <br/>
          <code-style>subroutes</code-style> should be a list of route objects.
          <br/><br/>
          This method only works on the client. If you are running Tram on a
          server, then use <code-style>.toString()</code-style>.
          <br/><br/>
          Note: setting <code-style>pathname</code-style> is great for testing
          , but prevents other routes from being reached.
        </div>
        <div>
          <code-block background=${attrs.background} filename="index.html">
            ${index}
          </code-block>
          <code-block background=${attrs.background} filename="app.js">
            ${app}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
