const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const dom = `
const xul = Tram.dom(
  'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'
)
const toolbarButton = () => xul\`
  <toolbarbutton label="Menu" type="menu">
    <menupopup>
      <menuitem label="Action 1"/>
      <menuitem label="Action 2"/>
    </menupopup>
  </toolbarbutton>
\`
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="tram-dom" header="Tram.dom([namespace, registry])"/>
          </code-style>
        </div>
        <div>
          <code-style>Tram.dom</code-style> is the generic version of
          <code-style>Tram.html</code-style> and <code-style>Tram.svg
          </code-style>. It is the driving function that builds document trees,
          and can be used whenever you need to use a namespace other than XHTML
          and SVG.
        </div>
        <div>
          <code-block background=${attrs.background} filename="toolbar.js">
            ${dom}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
