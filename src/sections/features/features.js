import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
})

const background = '#DDFFDD'

const featuresStyle = `
  background: ${background};
`

const templateStringCode = `
const html = registerHtml()

const page = () => {
  const stars = 20
  return html\`
    <div>
      There are \${stars} stars
    </div>
  \`
}
`

const stateCode = `
import { registerHtml, useObservable } from 'tram-one'
const html = registerHtml()

const page = () => {
  const [count, updateCount] = useObservable(0)
  const incrementCount = () => updateCount(count + 1)
  return html\`
    <button onclick=\${incrementCount}>
      \${count}
    </button>
  \`
}
`

const componentCode = `
const html = registerHtml({
  'tram-header': tramHeader
})

const page = () => {
  return html\`
    <tram-header color="blue">
      Tram-One Rules!
    </tram-header>
  \`
}
`

module.exports = () => {
  return html`
    <div id="features-section" style=${featuresStyle}>

      <section-container level="2" id="features" header="Features">
        <section-text>
          Tram-One relies only on ES6 Template Strings, which are
          <a href="https://caniuse.com/template-literals">supported in most major browsers</a>.
          <br/><br/>
          This means there are no extra compiliation steps required to get your code on the browser.
          It also means that when debugging you can look at the raw javascript, source-maps not required!
        </section-text>
        <section-code>
          <code-block background=${background}>
            ${templateStringCode}
          </code-block>
        </section-code>
      </section-container>

      <section-container>
        <section-text>
          Tram-One takes inspiration from frameworks like
          <a href="https://choo.io/">Choo</a>,
          <a href="https://reactjs.org/">React</a>, and
          <a href="https://svelte.dev/">Svelte</a>.
          Tram-One includes a set of default hooks, similar to React and Svelte,
          which allow for routing, effects, component state, and global state management.
        </section-text>
        <section-code>
          <code-block background=${background}>
            ${stateCode}
          </code-block>
        </section-code>
      </section-container>

      <section-container>
        <section-text>
          The syntax is based on similar modules that Choo uses,
          offering custom components in a js template syntax that
          should be familiar and confortable to React developers.
        </section-text>
        <section-code>
          <code-block background=${background}>
            ${componentCode}
          </code-block>
        </section-code>
      </section-container>
    </div>
  `
}
