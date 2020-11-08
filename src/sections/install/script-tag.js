import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
})

const code = `
<body>
  <div class="main"></div>
  <script src="https://unpkg.com/tram-one/dist/tram-one.umd.js"></script>
  <script>
    const { registerHtml, start } = window['tram-one']
    const html = registerHtml()

    const page = () => {
      return html\`
        <div>
          <h1>Tram-One</h1>
          Learn more at <a href="tram-one.io">tram-one.io</a>
        </div>
      \`
    }

    start('.main', page)
  </script>
</body>
`

module.exports = (attrs) => {
  return html`
    <section-container level="3" id="script-tag" header="Script Tag">
      <section-text>
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
      </section-text>
      <section-code>
        <code-block background=${attrs.background}>
          ${code}
        </code-block>
      </section-code>
    </section-container>
  `
}
