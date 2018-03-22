const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
const homePage = (store) => html\`
<div>
  <h1> My New Blog Post </h1>
  <span> Total Likes: \${store.votes} </span>
</div>
\`

app.addRoute('/', homePage)
const homeDOM = app.toString('/', {votes: 10})
console.log(homeDOM) // --> <div><h1> ... Likes: 10</span></div>
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-to-string" header="app.toString(pathName[, store])"/>
          </code-style>
        </div>
        <div>
          <code-style>app.toString</code-style> returns a string of the app for
          a given route and store. It has the same interface at app.toNode, and
          basically just calls .outerHTML on the node.
          <br/><br/>
          This can be useful if you want to do server-sider rendering or testing.
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js">
            ${code}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
