const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-to-string" header="app.toString(pathName[, store])"/>
          </code-style>
        </div>
        <div>
          <code-style>app.toString</code-style> returns a string of the app for
          a given route and store. It has the same interface at app.toNode, and
          basically just calls .outerHTML on the node.
          <br/><br/>
          This can be useful if you want to do server-sider rendering or testing.
        </div>
        <div empty />
      </section-block>
    </div>
  `
}
