const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const primitiveObservable = `
import { registerHtml, useObservable } from 'tram-one'
const html = registerHtml()

const page = () => {
  const [count, setCount] = useObservable(0)
  const increment = () => setCount(count + 1)
  return html\`
    <button onclick=\${increment}>\${count}</button>
  \`
}
`

const objectObservable = `
import { registerHtml, useObservable } from 'tram-one'
const html = registerHtml()

const page = () => {
  const [counter] = useObservable({ count: 0 })
  const increment = () => { counter.count += 1 }
  return html\`
    <button onclick=\${increment}>\${counter.count}</button>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" header="useObservable"/>
          </code-style>
        </div>
        <div>
          Hook that stores local component state.
          The function takes in a default value and returns the current value and a setter function.
          <br/><br/>
          This in part mimics React's useState hook,
          but allows the component to update independently.
          <br/><br/>
          If the value (or a subfield, if observing an object or array) is updated,
          then only the components that are dependent on that value will update.
        </div>
        <div>
          <code-block background=${attrs.background} filename="hooks-primitive.js">
            ${primitiveObservable}
          </code-block>
        </div>
      </section-block>

      <section-block>
        <div empty/>
        <div>
          If storing an object or array, you should mutate the subfields directly,
          and avoid using the setter that is returned. This will be more performant,
          and cause only components that are reactive to the sub-fields to update.
        </div>
        <div>
          <code-block background=${attrs.background} filename="hooks-object.js">
            ${objectObservable}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
