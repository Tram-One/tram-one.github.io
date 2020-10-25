import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip')
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
    <div style=${featuresStyle}>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="features" header="Features"/>
        </div>
        <div>
          Tram-One relies only on ES6 Template Strings, which are
          <a href="https://caniuse.com/template-literals">supported in most major browsers</a>.
          <br/><br/>
          This means there are no extra compiliation steps required to get your code on the browser.
          It also means that when debugging you can look at the raw javascript, source-maps not required!
        </div>
        <div>
          <code-block background=${background}>
            ${templateStringCode}
          </code-block>
        </div>
      </section-block>

      <section-block>
        <div empty />
        <div>
          Tram-One takes inspiration from frameworks like
          <a href="https://choo.io/">Choo</a>,
          <a href="https://reactjs.org/">React</a>, and
          <a href="https://svelte.dev/">Svelte</a>.
          Tram-One includes a set of default hooks, similar to React and Svelte,
          which allow for routing, effects, component state, and global state management.
        </div>
        <div>
          <code-block background=${background}>
            ${stateCode}
          </code-block>
        </div>
      </section-block>

      <section-block>
        <div empty />
        <div>
          The syntax is based on similar modules that Choo uses,
          offering custom components in a js template syntax that
          should be familiar and confortable to React developers.
        </div>
        <div>
          <code-block background=${background}>
            ${componentCode}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
