import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
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
    <section-container level="3" id="use-effect" header="useEffect">
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
      <section-code>
        <code-block background=${attrs.background}>
          ${useEffect}
        </code-block>
      </section-code>
    </section-container>
  `
}
