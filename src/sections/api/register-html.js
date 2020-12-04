import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
  'code-style': require('../../components/code-style'),
})

const htmlFunction = `
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
    <section>
      <api-header level="3" anchor="register-html" header="registerHtml">
        <code-block background=${attrs.background}>
          registerHtml(registry?: any): Function
        </code-block>
      </api-header>
      <section-container>
        <section-text>
          Function to generate a tagged template function for XHTML / HTML.
          If you have no custom components, you can call this with no parameters.
        </section-text>
        <code-block background=${attrs.background}>
          ${htmlFunction}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          If you want to make a new component, all you have to do is export
          the results of the <code-style>html</code-style> function generated by
          <code-style>registerHtml</code-style>.
        </section-text>
        <code-block background=${attrs.background}>
          ${header}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          To import a custom component, include it in the <code-style>registerHtml</code-style>
          with the tag name you want to use. This can be hyphenated, camelcase, or whatever!
        </section-text>
        <code-block background=${attrs.background}>
          ${registry}
        </code-block>
      </section-container>
    </section>
  `
}
