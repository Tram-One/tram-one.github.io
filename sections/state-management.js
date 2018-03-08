const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../elements/section-block'),
  'code-block': require('../elements/code-block'),
  'anchor-clip': require('../elements/anchor-clip')
})

const counter = `
module.exports = ({
  init: () => 0,
  upvote: (votes) => votes + 1,
  downvote: (votes) => votes - 1
})
`

const app = `
const Tram = require('tram-one')
const app = new Tram()

app.addRoute('/', require('./page'))
app.addActions({ votes: require('./vote-actions') })
`

const page = `
const Tram = require('tram-one')
const html = Tram.html()

module.exports = (store, actions) => html\`
  <div>
    <h1> My New Blog Post </h1>
    <span> Total Likes: \${store.votes} </span>
    <button onclick=\${actions.upvote}> Like </button>
    <button onclick=\${actions.downvote}> Dislike </button>
  </div>
\`
`

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="state-management" header="State Management"/>
        </div>
        <div>
          Tram-One follows a Flux-like architecture model with Hover-Engine.
          If you're familiar with redux, it's very similar.
        </div>
        <div empty />
      </section-block>
      <section-block>
        <div empty />
        <div>
          First, we build a set of actions. Each action is a function which
          takes the previous state, and returns an updated state.
        </div>
        <div>
          <code-block filename="vote-actions.js" style="margin: -1.6em 0 1.5em 0">
            ${counter}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          To use these actions, we'll need to add them to our app.
        </div>
        <div>
          <code-block filename="app.js" style="margin: -1.6em 0 1.5em 0">
            ${app}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          Now we can reference the store values, and call these actions on our
          page. Pages have access to the different stores, and an actions
          object with all the methods we defined before.
        </div>
        <div>
          <code-block filename="page.js" style="margin: -1.6em 0 1.5em 0">
            ${page}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
