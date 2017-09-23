const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const commentActions = (store, actions) => {
    init: () => 0,
    like: (likes) => likes + 1
  }

  const comment = (store, actions) => {
    const onLike = () => {
      actions.like()
    }
    return html\`
      <div>
        <h2> My Neat Post </h2>
        Likes: \${store.likes}
        <button onclick=\${onLike}>Like</button>
      </div>
    \`
  }

  app.addActions({comments: commentActions})
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="State Management" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One follows a Flux-like architecture model with Hover-Engine.
        If you're familiar with redux, it's very similar.
        <br><br>

        Flux follows a single flow architecture model. Views dispatch
        actions, which in turn will update the store, which triggers
        a re-render.
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}
