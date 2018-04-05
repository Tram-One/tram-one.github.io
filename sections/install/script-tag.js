const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
<html>
  <head>
    <script src="https://unpkg.com/tram-one/dist/tram-one.umd.js">
    </script>
  </head>
  <body>
    <div class="main"></div>
    <script>
      const Tram = window['tram-one']
      const html = Tram.html()
      const app = new Tram()

      const page = () => {
        return html\`<div><h2>UMD Page Example</h2></div>\`
      }

      app.addRoute('/page', page)
      app.start('.main', '/page')
    </script>
  </body>
</html>
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="script-tag" header="Script Tag"/>
        </div>
        <div>
          You can include Tram-One in an html page by adding a script tag
          pointing to the umd module on the npm content delivery network
          <a href="https://unpkg.com">unpkg</a>.
          <br/>
          <a href="https://unpkg.com/tram-one/dist/tram-one.umd.js">
            https://unpkg.com/tram-one/dist/tram-one.umd.js
          </a>
          <br/><br/>
          This is nice because it does not require a build system, and allows
          you to quickly see Tram-One running in your browser. However to build
          larger applications, it's recommended that you use one of the above solutions.
        </div>
        <div>
          <code-block background=${attrs.background} filename="index.html">
            ${code}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
