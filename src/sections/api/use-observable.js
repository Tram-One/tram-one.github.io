import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
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
      <section-container level="3" id="use-observable" header="useObservable">
        <section-text>
          Hook that stores local component state.
          The function takes in a default value and returns the current value and a setter function.
          <br/><br/>
          This in part mimics React's useState hook,
          but allows the component to update independently.
          <br/><br/>
          If the value (or a subfield, if observing an object or array) is updated,
          then only the components that are dependent on that value will update.
        </section-text>
        <section-code>
          <code-block background=${attrs.background}>
            ${primitiveObservable}
          </code-block>
        </section-code>
      </section-container>
      <section-container>
        <section-text>
          If storing an object or array, you should mutate the subfields directly,
          and avoid using the setter that is returned. This will be more performant,
          and cause only components that are reactive to the sub-fields to update.
        </section-text>
        <section-code>
          <code-block background=${attrs.background}>
            ${objectObservable}
          </code-block>
        </section-code>
      </section-container>
    </div>
  `
}
