import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const useEffect = `
import { start, registerHtml, useEffect } from 'tram-one'

const html = registerHtml()

const home = () => {
  useEffect(() => {
    console.log('App Mounted')
  })
  return html\`<h1>Tram-One</h1>\`
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
          <br/><br/>
          If the effect is dependent on a observable,
          it will automatically trigger again if that value updates.
          <br/><br/>
          If effect does not return a function, the return is ignored,
          which means async functions are okay!
        </section-text>
        <code-block background=${attrs.background}>
          ${useEffect}
        </code-block>
      </section-container>
    </section>
  `
}
