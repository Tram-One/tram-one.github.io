const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const app = `
// we want to debug the store as votes come in
const debug = (store, actions, actionName) => {
  console.log(actionName, 'was triggered!')
  console.log('NEW STATE:', store)
}

app.addListener(debug)
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-add-listener" header="app.addListener(listener)"/>
          </code-style>
        </div>
        <div>
          <code-style>app.addListener</code-style> adds a function that
          triggers on every action call. This can be used to debug the
          state of the store as actions are called. This should not be used to
          update the DOM, only trigger side-effects.
          <br/><br/>
          It takes in one argument, a function, which will have the new
          <code-style>store</code-style> value,
          <code-style>actions</code-style>,
          the <code-style>actionName</code-style> that was called,
          and <code-style>actionArguements</code-style> (if any).
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js">
            ${app}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
