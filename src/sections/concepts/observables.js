import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const objectObservable = `
const page = () => {
  const counter = useStore({ count: 0 })
  const increment = () => { counter.count += 1 }
  return html\`
    <button onclick=\${increment}>\${counter.count}</button>
  \`
}
`

const comboObservable = `
const page = () => {
  const username = useGlobalStore('username')
  const votes = useStore({count: 0})
  const increment = () => setVotes(votes.count++)
  return html\`
    <section>
      \${username.name} has \${votes} votes.
    </section>
  \`
}
`

const globalObservable = `
const page = () => {
  const username = useGlobalStore('username', {name: 'Unassigned'})
  const onSetName = (event) => {username.name = event.target.value}
  return html\`
    <section>
      Username: <input onchange=\${onSetName} value=\${username.name} />
    </section>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="observables" header="Observables" />
      <section-container>
        <section-text>
          Observables are how Tram-One keeps track of state.
          They are inspired heavily by the <a href="https://svelte.dev/">Svelte</a> framework.
          <br/><br/>
          When you update an observable, only the components (and effects) that are dependent on that state are updated.
        </section-text>
        <code-block>
          ${comboObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          Observables can be tapped into by using the useStore and useGlobalStore hooks.
        </section-text>
        <code-block>
          ${globalObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          Global observables allow you to use a key to access the same data regardless of where you are in the app.
          <br/><br/>
          This can make sharing data across an entire project much easier, and fulfills the role of React's Context API.
        </section-text>
        <code-block>
          ${objectObservable}
        </code-block>
      </section-container>
    </section>
  `
}
