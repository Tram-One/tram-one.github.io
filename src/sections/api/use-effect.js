import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const useEffect = `
import { registerHtml, useEffect } from 'tram-one'

const html = registerHtml()

const home = () => {
  useEffect(() => {
    console.log('App Mounted')
  })
  return html\`<h1>Tram-One</h1>\`
}
`

const useEffectWithObservable = `
import { registerHtml, useEffect, useObservable } from 'tram-one'

const html = registerHtml()

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

const useEffectWithAsync = `
import { registerHtml, useEffect, useObservable } from 'tram-one'

const html = registerHtml()

const todoList = () => {
  const [todos, setTodos] = useObservable()
  useEffect(async () => {
    const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const parsedTodos = await todoResponse.json()
    setTodos(parsedTodos)
  })
	return html\`
    <div>$\{JSON.stringify(todos)\}</div>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="use-effect" header="useEffect" />
      <section-container>
        <section-text>
          Hook that triggers component start, update, and cleanup effects.
          If the return of effect is another function, then that function is called on
          when the component is removed.
        </section-text>
        <code-block background=${attrs.background}>
          ${useEffect}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          If the effect is dependent on a observable object,
          it will automatically trigger again if a dependent property updates.
        </section-text>
        <code-block background=${attrs.background}>
          ${useEffectWithObservable}
        </code-block>
      </section-container>
      <section-container>
        <section-text>
          If the effect does not return a function, the return is ignored,
          which means async functions are okay!
        </section-text>
        <code-block background=${attrs.background}>
          ${useEffectWithAsync}
        </code-block>
      </section-container>
    </section>
  `
}
