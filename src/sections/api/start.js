import { registerHtml } from 'tram-one'


const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
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

const testDiv = document.createElement('div')
start(testDiv, home)
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="start" header="start"/>
          </code-style>
        </div>
        <div>
					Function to attach a component to an existing element on the page.
					This function also starts all the listeners and allows the basic hooks to
					function.
					<br/><br/>
					This should only be called for the initial render / building of the app.
        </div>
        <div>
          <code-block background=${attrs.background}>
            ${startElement}
          </code-block>
        </div>
      </section-block>
      <section-block>
				<div>
					<div empty />
				</div>
        <div>
					You can call this with a CSS selector, or directly on a DOM element.
          Calling directly on a DOM element can be useful for server-side rendering
          and testing!
        </div>
        <div>
          <code-block background=${attrs.background}>
            ${startDom}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
