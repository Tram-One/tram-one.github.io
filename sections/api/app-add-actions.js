const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const actions = `
module.exports = {
  init: () => 0,
  up: (vote) => vote + 1,
  down: (vote) => vote - 1
}
`

const page = `
module.exports = (state, actions) => {
  const upvote = () => {
    actions.up()
  }

  const downvote = () => {
    actions.down()
  }

  return html\`
    <div>
      <h1> Votes: \${state.votes} </h1>
      <button onclick=\${upvote}>UPVOTE</button>
      <button onclick=\${downvote}>DOWNVOTE</button>
    </div>
  \`
}
`

const app = `
const app = new Tram()
const html = Tram.html()

app
  .addRoute('/', require('./page'))
  .addActions({votes: require('./vote-actions')})
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-add-actions" header="app.addActions(actionGroups)"/>
          </code-style>
        </div>
        <div>
          <code-style>app.addActions</code-style> adds a set of actions that
          can be triggered in the instance of a Tram-One app. First, we need
          to define a set of actions that can mutate a
          <code-style>store</code-style>.
        </div>
        <div>
          <code-block background=${attrs.background} filename="vote-actions.js">
            ${actions}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          We can access the current value of the
          <code-style>store</code-style>  via the
          <code-style>state</code-style> object on the page, and each action
          defined will be a method on the
          <code-style>actions</code-style> object.
        </div>
        <div>
          <code-block background=${attrs.background} filename="page.js">
            ${page}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          Finally, we hook it all together with the
          <code-style>app.addActions</code-style> method, which defines what
          key we can use to get the current value of our action group.
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
