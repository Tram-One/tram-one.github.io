const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../elements/section-block'),
  'code-block': require('../elements/code-block'),
  'anchor-clip': require('../elements/anchor-clip')
})

const code = `
const Tram = require('tram-one')
const app = new Tram()

const html = Tram.html()
const page = () => {
  return html\`
    <div>
      <h1> Fun Times on Tram-One! </h1>
      <h2> With Custom Elements </h2>
      <h2> Routing </h2>
      <h2> and Redux State Management </h2>
      <h1> Batteries Included! </h1>
    </div>
  \`
}

app.addRoute('/', page)
app.start('.main')
`

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="introduction" header="Introduction"/>
        </div>
        <div>
          Tram-One is a light View Framework that comes with all the
          dependencies you need to start developing on the web.
          <br/><br/>
          Tram-One is an orchestration of common features, and relies only on
          plain javascript, so you don't have to bother learning / parsing /
          transpiling special templating languages.
        </div>
        <div>
          <code-block filename="app.js" style="margin: -1.6em 0 1.5em 0">
            ${code}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
