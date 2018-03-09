const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
  'tram-html': require('./tram-html'),
  'tram-svg': require('./tram-svg'),
  'tram-dom': require('./tram-dom'),
  'tram-route': require('./tram-route')
})

const element = `
const Tram = require('tram-one')
// const app = new Tram() <-- not needed
const html = Tram.html()
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="static-functions" header="Static Functions"/>
        </div>
        <div>
          Many of the building blocks for Tram-One apps are vanilla functions.
          Tram-One provides helper functions to make these easier to build and
          connect.
        </div>
        <div empty />
      </section-block>
      <section-block>
        <div empty />
        <div>
          Because the following functions are static, you call the function off
          of the Tram-One dependency. You do not need to have an instance of a
          Tram-One app to use these functions.
        </div>
        <div>
          <code-block background=${attrs.background} filename="element.js">
            ${element}
          </code-block>
        </div>
      </section-block>

      <tram-html background=${attrs.background}/>
      <tram-svg background=${attrs.background}/>
      <tram-dom background=${attrs.background}/>
      <tram-route background=${attrs.background}/>
    </div>
  `
}
