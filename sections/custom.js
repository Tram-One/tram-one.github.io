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

  const todoList = (store) => {
    return html\`
      <div>
        <todo> Add Docs </todo>
        <todo> Write Tests </todo>
        <todo checked> Read PRs </todo>
      </div>
    \`
  }
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

const monospaceStyle = `
  font-family: monospace;
  font-size: larger;
`

const tags = [
  '<Todo>',
  '<my-todo>',
  '<todo>'
]

module.exports = (attrs, children) => {
  return html`
    <tcr title="Custom Elements" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One supports custom elements, which are passed into the
        <span style=${monospaceStyle}>html</span>
        function, as a mapping of the tag you will use,
        and the component it should render.
        <br><br>

        It's always obvious where your custom elements
        have been registered from, and can be any syntax
        that makes sense for you, e.g.
        <span style=${monospaceStyle}>${tags[0]}</span>,
        <span style=${monospaceStyle}>${tags[1]}</span>, or
        <span style=${monospaceStyle}>${tags[2]}</span>
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}
