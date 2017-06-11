const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const Tram = require('tram-one')
  const app = new Tram()
  const html = Tram.html()

  const commentReducer = (state, action) => {
    switch(action.type) {
      case('LIKE'):
        return state.likes + 1
      case('UNLIKE'):
        return state.likes - 1
      default:
        return state
    }
  }

  const comment = (state) => {
    onLike = () => {
      state.dispatch({type: 'LIKE'})
    }
    onUnLike = () => {
      state.dispatch({type: 'UNLIKE'})
    }
    return html\`
      <h2> My Neat Post </h2>
      Likes: \${state.comment.likes}
      <button onclick=\${onLike}>Like</button>
      <button onclick=\${onUnLike}>UnLike</button>
    \`
  }

  app.addReducer('comment', commentReducer, 0)
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="State Management" color='#e6ebef' bg='#1f7389'>
      <div style=${summaryStyle}>
        Tram-One follows the Flux architecture model with minidux,
        an API compliant tiny version of redux. If you're familiar
        with redux, you'll feel right at home.
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
