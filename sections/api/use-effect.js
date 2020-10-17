const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const useEffect = `
import { start, registerHtml, useEffect } from 'tram-one'

const html = registerHtml()

const home = () => {
  useEffect(() => {
    console.log('App Mounted')
  })
  return html\`<h1>Tram-One</h1>\`
}
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" header="useEffect"/>
          </code-style>
        </div>
        <div>
          Hook that triggers component start, update, and cleanup effects.
          If the return of effect is another function, then that function is called on
          when the component is removed.
          <br/><br/>
          If the effect is dependent on a observable,
          it will automatically trigger again if that value updates.
          <br/><br/>
          If effect does not return a function, the return is ignored,
          which means async functions are okay!
        </div>
        <div>
          <code-block background=${attrs.background} filename="use-effect.js">
            ${useEffect}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
