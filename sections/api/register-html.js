const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => {
    return html\`<h1>Tram-One</h1>\`
  }
}
`

const registry = `
import { registerHtml } from 'tram-one'
import customHeader from './custom-header'

const html = registerHtml({
  'custom-header': customHeader
})

const home = () => html\`
  <custom-header />
\`
`
const header = `
import { registerHtml } from 'tram-one'

const html = registerHtml()

export default () => html\`
  <h1>Tram-One</h1>
\`
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="register-html" header="registerHtml"/>
          </code-style>
        </div>
        <div>
          Function to generate a tagged template function for XHTML / HTML. 
          Takes in a mapping of the tag name (a string) to the function 
          (another tram one component) that allows you to import other tag functions 
          and use them in your template string.
        </div>
        <div>
          <code-block background=${attrs.background} filename="html-function.js">
            ${code}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div>
          <div empty />
        </div>
        <div>
          <div empty />
        </div>
        <div>
          <code-block background=${attrs.background} filename="custom-header.js">
            ${header}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div>
          <div empty />
        </div>
        <div>
          <div empty />
        </div>
        <div>
          <code-block background=${attrs.background} filename="custom-components.js">
            ${registry}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
