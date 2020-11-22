import { registerHtml } from 'tram-one'


const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const startElement = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => html\`
  <h1>Tram-One</h1>
\`

start('#app', home)
`
const startDom = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => html\`
  <h1>Tram-One</h1>
\`

const testApp = document.createElement('main')
start(testApp, home)
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="start" header="start" />
      <section-container>
        <section-text>
          Function to attach a component to an existing element on the page.
          This function also starts all the listeners and allows the basic hooks to
          function.
          <br/><br/>
          This should only be called for the initial render / building of the app.
        </section-text>
        <code-block background=${attrs.background}>
          ${startElement}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          You can call this with a CSS selector, or directly on a DOM element.
          Calling directly on a DOM element can be useful for server-side rendering
          and testing!
        </section-text>
        <code-block background=${attrs.background}>
          ${startDom}
        </code-block>
      </section-container>
    </section>
  `
}
