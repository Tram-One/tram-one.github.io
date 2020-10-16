const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
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
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" header="useGlobalObservable"/>
          </code-style>
        </div>
        <div>
          Hook that stores global state and makes it accessible in the component and across the app.
          This in part fills the role of React's Context API, but mimics the interface
          of React's useState or Tram-One's useObservable hook.
        </div>
        <div>
          <code-block background=${attrs.background} filename="hooks-primitive.js">
            ${globalObservable}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          The function takes in a key and a default value.
          The key can be used to access the value anywhere in the app.
        </div>
        <div>
          <code-block background=${attrs.background} filename="value-display.js">
            ${valueDisplay}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
