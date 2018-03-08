const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../elements/section-block'),
  'code-block': require('../elements/code-block'),
  'anchor-clip': require('../elements/anchor-clip')
})

const myHeader = `
const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => html\`
  <div style=\${attrs.style}>
    <h1> Hello \${children} </h1>
  </div>
\`
`

const myApp = `
const Tram = require('tram-one')
const html = Tram.html({
  'my-header': require('./my-header')
})

const page = () => html\`
  <my-header style="color: blue;">
    Tram-One
  </my-header>
\`
`

const reactApp = `
const Tram = require('tram-one')
const html = Tram.html({
  'Header': require('./Header'),
  'Container': require('./Container')
})

const Page = () => html\`
  <Container>
    <Header>Tram-One</Header>
  </Container>
\`
`

module.exports = () => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="custom-elements" header="Custom Element Definitions"/>
        </div>
        <div>
          Tram-One supports creating custom tags, which can be used in your html
          just like any other html tag.
        </div>
        <div empty />
      </section-block>
      <section-block>
        <div empty />
        <div>
          Elements are simple functions that take in attributes and children
          - the same interface as real HTML elements.
        </div>
        <div>
          <code-block filename="my-header.js" style="margin: -1.6em 0 1.5em 0">
            ${myHeader}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          We can pull in our new element by using the Tram.html function.
          We define all the custom elements here, and then can
          use them in our html.
        </div>
        <div>
          <code-block filename="page.js" style="margin: -1.6em 0 1.5em 0">
            ${myApp}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          The registry allows you to define what the syntax for your tags look
          like. You could choose to use React style tags with capitalized
          letters, single-word tags to look more like standard html, or
          hyphenated tags similar to web components.
        </div>
        <div>
          <code-block filename="Page.js" style="margin: -1.6em 0 1.5em 0">
            ${reactApp}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
