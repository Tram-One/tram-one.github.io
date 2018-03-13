const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const home = `
module.exports = () => html\`
  <div>This is my shiny app!</div>
\`
`

const color = `
module.exports = (store, actions, params) => {
  const style = \`
    background: \${params.color};
    width: 100px;
    height: 100px;
  \`
  return html\`<div style=\${style} />\`
}
`

const notFound = `
module.exports = () => html\`
  <div>Oh no! We couldn't find what you were looking for</div>
\`
`

const app = `
const app = new Tram()

app.addRoute('/', require('./home'))
app.addRoute('/:color', require('./color'))
app.addRoute('/404', require('./notFound'))
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="app-add-route" header="app.addRoute(path, page[, subroutes])"/>
          </code-style>
        </div>
        <div>
          <code-style>app.addRoute</code-style> will associate a path with a
          top level component.<br/>
          <code-style>path</code-style> should be a matchable string for the
          application.
          <br/>
          <code-style>page</code-style> should be a top level component.
          <br/>
          <code-style>subroutes</code-style> should be a list of route objects.
          <br/>
          The <code-style>subroute</code-style> parameter for the top level
          component function is filled in when a subroute is resolved.
          <br/><br/>
          It takes in one argument, a function, which will have the new
          <code-style>store</code-style> value,
          <code-style>actions</code-style>,
          the <code-style>actionName</code-style> that was called,
          and <code-style>actionArguements</code-style> (if any).
          <br/><br/>
          The <code-style>params</code-style> object passed into the top level
          component will have any path parameters and query params.
        </div>
        <div>
          <code-block background=${attrs.background} filename="home.js">
            ${home}
          </code-block>
          <code-block background=${attrs.background} filename="color.js">
            ${color}
          </code-block>
          <code-block background=${attrs.background} filename="notFound.js">
            ${notFound}
          </code-block>
          <code-block background=${attrs.background} filename="app.js">
            ${app}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
