const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
  'add-actions': require('./app-add-actions'),
  'add-listener': require('./app-add-listener'),
  'add-route': require('./app-add-route'),
  'start': require('./app-start'),
  'mount': require('./app-mount'),
  'to-node': require('./app-to-node'),
  'to-string': require('./app-to-string')
})

const app = `
const Tram = require('tram-one')
const app = new Tram()

app
  .addActions(...)
  .addRoute(...)
  .addRoute(...)
  .addRoute(...)
  .start(...)
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="app-functions" header="App Functions"/>
        </div>
        <div>
          The following functions should be called on an instance of a Tram-One
          app (see the app constructor above).
          <br/><br/>
          These functions all return an instance of the app, so that it is easy
          to chain one after the other.
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js">
            ${app}
          </code-block>
        </div>
      </section-block>

      <add-actions background=${attrs.background} />
      <add-listener background=${attrs.background} />
      <add-route background=${attrs.background} />
      <start background=${attrs.background} />
      <mount background=${attrs.background} />
      <to-node background=${attrs.background} />
      <to-string background=${attrs.background} />
    </div>
  `
}
