import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const globalObservable = `
import { registerHtml, useGlobalObservable } from 'tram-one'
import ValueDisplay from './ValueDisplay'
const html = registerHtml({ ValueDisplay })

const page = () => {
  const [count, setCount] = useGlobalObservable('global-count', 0)
  const increment = () => setCount(count + 1)
  return html\`
    <section>
      <button onclick=\${increment}>Increment</button>
      <ValueDisplay />
    </section>
  \`
}
`
const valueDisplay = `
import { registerHtml, useGlobalObservable } from "tram-one"

const html = registerHtml()

export default () => {
  const [count] = useGlobalObservable('global-count')
  return html\`<section>\${count}</section>\`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="use-global-observable" header="useGlobalObservable" />
      <section-container>
        <section-text>
          Hook that stores global state and makes it accessible in the component and across the app.
          <br/><br/>
          This in part fills the role of React's Context API, but mimics the interface
          of React's useState or Tram-One's useObservable hook.
        </section-text>
        <code-block background=${attrs.background}>
          ${globalObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          The function takes in a key and a default value.
          The key can be used to access the value anywhere in the app.
        </section-text>
        <code-block background=${attrs.background}>
          ${valueDisplay}
        </code-block>
      </section-container>
    </section>
  `
}
