import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const code = `
<html>
  <head>
    <script src="https://unpkg.com/tram-one/dist/tram-one.umd.js"></script>
  </head>
  <body>
    <div class="app"></div>
    <script>
      const { registerHtml, start } = window['tram-one']
    </script>
  </body>
</html>
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="script-tag" header="Script Tag" />
      <section-container>
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
        <code-block>
          ${code}
        </code-block>
      </section-container>
    </section>
  `
}
