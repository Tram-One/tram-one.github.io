import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
})

const globalObservable = `
import { registerHtml, useGlobalObservable } from 'tram-one'
const html = registerHtml()

const page = () => {
  const [count, setCount] = useGlobalObservable('global-count', 0)
  const increment = () => setCount(count + 1)
  return html\`
    <div>
      <button onclick=\${increment}>Increment</button>
      <value-display />
    </div>
  \`
}
`
const valueDisplay = `
import { registerHtml, useGlobalObservable } from "tram-one"

const html = registerHtml()

export default () => {
  const [count] = useGlobalObservable('global-count')
  return html\`<div>\${count}</div>\`
}
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-container level="3" id="use-global-observable" header="useGlobalObservable">
        <section-text>
          Hook that stores global state and makes it accessible in the component and across the app.
          <br/><br/>
          This in part fills the role of React's Context API, but mimics the interface
          of React's useState or Tram-One's useObservable hook.
        </section-text>
        <section-code>
          <code-block background=${attrs.background}>
            ${globalObservable}
          </code-block>
        </section-code>
      </section-container>
      <section-container>
        <section-text>
          The function takes in a key and a default value.
          The key can be used to access the value anywhere in the app.
        </section-text>
        <section-code>
          <code-block background=${attrs.background}>
            ${valueDisplay}
          </code-block>
        </section-code>
      </section-container>
    </div>
  `
}
