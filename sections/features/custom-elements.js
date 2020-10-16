const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
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

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          Tram-One relies only on ES6 Template Strings, which are
          <a href="https://caniuse.com/template-literals">supported in most major browsers</a>.
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
          <code-block background=${attrs.background} filename="my-header.js">
            ${myHeader}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          We can pull in our new element by passing a registry into the
          <code-style>Tram.html</code-style> function.
          We define all the custom elements in the registry, and then can
          use them in our html.
        </div>
        <div>
          <code-block background=${attrs.background} filename="page.js">
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
          <code-block background=${attrs.background} filename="Page.js">
            ${reactApp}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
