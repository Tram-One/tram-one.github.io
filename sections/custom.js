const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  /* todo.js */
  const html = Tram.html()
  const todo = (attrs, children) => {
    return html\`
      <div>
        <input  type='checkbox'
                checked=\${attrs.checked} />
        <span>
          \${children}
        </span>
      </div>
    \`
  }

  /* index.js */
  const todo = require('./todo')
  const html = Tram.html({
    'todo': todo,
  })

  const todoList = (state) => {
    <todo> Add Docs </todo>
    <todo> Write Tests </todo>
    <todo checked> Read PRs </todo>
  }
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Custom Elements" color='#e6ebef' bg='#322f3e'>
      <div style=${summaryStyle}>
        Tram-One supports custom elements, which are passed into
        the html function, as a mapping of the tag you will use it
        as, and the component it should render.
        <br><br>

        It's always obvious where your custom elements
        have been registered from, and can be any syntax
        that makes sense for you (capitalized, kebab, whatever!)
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}
