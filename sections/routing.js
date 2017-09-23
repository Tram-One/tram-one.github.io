const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const cats = (store, actions, params) => {
    return html\`
      <div>
        Here is Page \${params.page} of cats!
      </div>
    \`
  }

  const dogs = (store, actions, params) => {
    return html\`
      <div>
        Here is Page \${params.page} of dogs!
      </div>
    \`
  }

  const unknown = () => {
    return html\`
      <div>No Animals Here...</div>
    \`
  }

  app.addRoute('/cats/:page', cats)
  app.addRoute('/dogs/:page', dogs)
  app.addRoute('/404', unknown)
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

module.exports = (attrs, children) => {
  return html`
    <tcr title="Routing" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One supports routing, having different components
        render based on which route a user is on.
        <br><br>

        By default, a route that doesn't match is sent to whatever
        component lives on
        <span style=${monospaceStyle}>/404</span>
        . You can handle the route from there.
        <br><br>

        You can handle dynamic routes as well, as path parameters.
        These are passed into the state object, and can be read when
        the view updates.
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}
