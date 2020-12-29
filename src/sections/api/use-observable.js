import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
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
    <section>
      <api-header level="3" anchor="use-observable" header="useObservable">
        <code-block>
          useObservable(value: any): [value: any, setter: Function]
        </code-block>
      </api-header>
      <section-container>
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
        <code-block>
          ${primitiveObservable}
        </code-block>
      </section-container>
    </section>
  `
}
