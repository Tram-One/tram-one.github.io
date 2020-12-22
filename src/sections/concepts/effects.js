import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const useEffect = `
const home = () => {
  useEffect(() => {
    console.log('App Mounted')
  })
  return html\`<h1>Tram-One</h1>\`
}
`

const useEffectWithObservable = `
const counter = () => {
  const [countObject] = useObservable({ value: 0 })
  useEffect(() => {
    console.log(\`Current count: $\{countObject.value\}\`)
  })
  const incrementCount = () => countObject.value++
  return html\`
    <button onclick=$\{incrementCount\}>
      Increment Count
    </button>
  \`
}
`

const useEffectWithCleanup = `
const counter = () => {
  useEffect(() => {
    const cleanup = () => console.log('component removed/updated')
    return cleanup
  })
  return html\`
    <section>
    </section>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="effects" header="Effects" />
      <section-container>
        <section-text>
          Effects are functions that run after elements have been added, updated, or removed.
          They are inspired by React's useEffect hook.
          <br/><br/>
          Effects are defined using the useEffect hook.
          They take in a single dependency, the effect to trigger.
        </section-text>
        <code-block>
          ${useEffect}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          If the effect is dependent on a observable object,
          it will automatically trigger again when that dependent property updates.
        </section-text>
        <code-block>
          ${useEffectWithObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          If the effect returns a function, it will call that function
          when the component is updated or removed.
          <br/><br/>
          If the effect does not return a function, the return is ignored,
          which means you can make the entire effect an async function and the returned promise will be ignored.
        </section-text>
        <code-block>
          ${useEffectWithCleanup}
        </code-block>
      </section-container>
    </section>
  `
}
