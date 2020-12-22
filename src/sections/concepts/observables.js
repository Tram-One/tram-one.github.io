import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const primitiveObservable = `
const page = () => {
  const [count, setCount] = useObservable(0)
  const increment = () => setCount(count + 1)
  return html\`
    <button onclick=\${increment}>\${count}</button>
  \`
}
`

const objectObservable = `
const page = () => {
  const [counter] = useObservable({ count: 0 })
  const increment = () => { counter.count += 1 }
  return html\`
    <button onclick=\${increment}>\${counter.count}</button>
  \`
}
`

const comboObservable = `
const page = () => {
  const [username] = useGlobalObservable('username')
  const [votes, setVotes] = useObservable(0)
  const increment = () => setVotes(votes + 1)
  return html\`
    <section>
      \${username} has \${votes} votes.
    </section>
  \`
}
`

const globalObservable = `
const page = () => {
  const [username, setUsername] = useGlobalObservable('username', 'Unassigned')
  const onSetName = (event) => setUsername(event.target.value)
  return html\`
    <section>
      Username: <input onchange=\${onSetName} value=\${username} />
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
          Observables are how Tram-One keeps track of state. They are inspired heavily by the Svelte framework.
          <br/><br/>
          When you update an observable, only the components (and effects) that are dependent on that state are updated.
        </section-text>
        <code-block>
          ${primitiveObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          Observables can be tapped into by using the useObservable and useGlobalObservable hooks.
          <br/><br/>
          Like React's useState, they return the value (secretly wrapped in an observable), and a setter function.
        </section-text>
        <code-block>
          ${comboObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          Global observables allow you to use a key to access the same data regardless of where you are in the app.
          <br/><br/>
          This can make sharing data across an entire project much easier, and fulfills the role of React's Context API.
        </section-text>
        <code-block>
          ${globalObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          You can store either primitive data (like numbers, strings, or booleans) or more complex data (like objects and arrays).
          <br/><br/>
          When using more complex data, mutate the properties directly, rather than calling the setter.
          Tram-One will then only update the the components that should react to the single property change.
        </section-text>
        <code-block>
          ${objectObservable}
        </code-block>
      </section-container>
    </section>
  `
}
