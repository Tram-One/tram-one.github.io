const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const example = `
  const cats = (state) => {
    const page = state.page ? state.page : 1
    return html\`
      Here is the Page \${page} of cats!
      /* render cats */
    \`
  }

  const dogs = (state) => {
    const page = state.page ? state.page : 1
    return html\`
      Here is the Page \${page} of dogs!
      /* render dogs */
    \`
  }

  const unknown = (state) => {
    return html\`
      I don't know what you're looking for here...
      /* render sadness */
    \`
  }

  app.addRoute('/', cats)
  app.addRoute('/cats', cats)
  app.addRoute('/cats/:page', cats)
  app.addRoute('/dogs', dogs)
  app.addRoute('/dogs/:page', dogs)
  app.addRoute('/404', unknown)
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Routing" color='#e6ebef' bg='#1f7389'>
      <div style=${summaryStyle}>
        Tram-One supports routing, having different components
        render based on which route a user is on.
        <br><br>

        By default, a route that doesn't match is sent to whatever
        components lives on /404. You can handle the route from there.
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
