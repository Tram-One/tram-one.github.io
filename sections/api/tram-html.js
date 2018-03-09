const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
const Tram = require('tram-one')
const html = Tram.html({
  'my-header': require('./my-header'),
  'my-footer': require('./my-footer')
})

const title = 'Tram One Rules!'
const style = 'color: blue;'

const page = () => {
  return html\`
    <div style=\${style}>
      <my-header> \${title} </my-header>
      <my-footer/>
    </div>
  \`
}
`

const dom = `
const html = Tram.html()
const page = html\`
  <div>
    <h1 id="header">Hello!</h1>
    <a href="/home">Home Page</a>
  </div>
\`
page.querySelector('#header') // --> HTMLHeadingElement
page.textContent // --> "Hello! Home Page"
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="tram-html" header="Tram.html([registry])"/>
          </code-style>
        </div>
        <div>
          <code-style>Tram.html</code-style> returns a function that can be
          used to transform template literals into Node DOM trees. It can take
          in an optional registry, which is a mapping of tag names to functions
          that render your custom tags.
        </div>
        <div>
          <code-block background=${attrs.background} filename="page.js">
            ${code}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div>
          <div empty />
        </div>
        <div>
          Whether you are on a Node Server, or running on the web,
          <code-style>Tram.html</code-style> returns a DOM tree, so you can
          interact with it just like any other DOM.
        </div>
        <div>
          <code-block background=${attrs.background} filename="dom.js">
            ${dom}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
