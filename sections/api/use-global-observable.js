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
          <br/><br/>
          The function takes in a key and a default value.
          The key can be used to access the value anywhere in the app.
          <br/><br/>
          If the value (or a subfield, if observing an object or array) is updated,
          then only the components that are dependent on that value will update.
        </div>
        <div>
          <code-block background=${attrs.background} filename="hooks-primitive.js">
            ${globalObservable}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}