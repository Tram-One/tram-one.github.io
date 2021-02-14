import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const startElement = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => html\`
  <h1>Tram-One</h1>
\`

start(home, '#app')
`
const startDom = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => html\`
  <h1>Tram-One</h1>
\`

const testContainer = document.createElement('main')
start(home, testContainer)
`

module.exports = (attrs) => {
  return html`
    <section>
      <api-header level="3" anchor="start" header="start">
        <code-block>
          start(component: Function, selector: string | Node): void
        </code-block>
      </api-header>
      <section-container>
        <section-text>
          Function to attach a component to an existing element on the page.
          This function also starts all the listeners and allows the basic hooks to
          function.
          <br/><br/>
          This should only be called for the initial render / building of the app.
        </section-text>
        <code-block>
          ${startElement}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          You can call this with a CSS selector, or directly on a DOM element.
          Calling directly on a DOM element can be useful for server-side rendering
          and testing!
        </section-text>
        <code-block>
          ${startDom}
        </code-block>
      </section-container>
    </section>
  `
}
