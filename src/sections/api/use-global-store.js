import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const globalStore = `
import { registerHtml, useStore } from 'tram-one'
const html = registerHtml()

const page = () => {
  const counter = useGlobalStore({ count: 0 })
  const increment = () => { counter.count += 1 }
  return html\`
    <button onclick=\${increment}>\${counter.count}</button>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <api-header level="3" anchor="use-global-store" header="useGlobalStore">
        <code-block>
          useGlobalStore(key: string, defaultValue?: Object|Array): Object|Array
        </code-block>
      </api-header>
      <section-container>
        <section-text>
          Hook that stores global state and makes it accessible in the component and across the app.
          <br/><br/>
          This in part fills the role of React's Context API, but acts just like the useStore hook.
          <br/><br/>
          useGlobalStore takes in a key and an optional default value.
          The key can be any string, and is used to access the value anywhere else in the app.
          The default value is optional and can be filled in by another call to useGlobalStore in the app.
        </section-text>
        <code-block>
          ${globalStore}
        </code-block>
      </section-container>
    </section>
  `
}
