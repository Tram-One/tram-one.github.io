const Tram = require('tram-one')

const stylizedCode = require('../elements/stylizedCode')
const twoColRow = require('../elements/twoColRow')
const listItemProject = require('../elements/listItemProject')

const html = Tram.html({
  'tcr': twoColRow,
  lip: listItemProject,
  'style-code': stylizedCode
})

const example = `
  const Tram = require('tram-one')
  const app = new Tram()

  const html = Tram.html()
  const page = () => {
    return html\`
      <div>
        <h1> Fun Times on Tram-One! </h1>
        <h2> With Custom Elements </h2>
        <h2> Routing </h2>
        <h2> and Redux State Management </h2>
        <h1> Batteries Included! </h1>
      </div>
    \`
  }

  app.addRoute('/', page)
  app.start('.main')
`

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="The Batteries" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        Tram-One uses a collection of most excellent packages.
        <br>
        Here are the different packages that make Tram-One possible...
        <br><br>
        For Rendering:
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/substack/hyperx"></lip>
          <lip href="https://github.com/jrjurman/bel-create-element"></lip>
          <lip href="https://github.com/aaaristo/rbel"></lip>
          <lip href="https://github.com/choojs/nanomorph"></lip>
        </ul>
        For Routing
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/chrisdavies/rlite"></lip>
          <lip href="https://github.com/jrjurman/url-listener"></lip>
        </ul>
        For State Management
        <ul style='margin-top: 0px'>
          <lip href="https://github.com/JRJurman/hover-engine"></lip>
        </ul>
      </div>
      <div>
        <style-code code=${example}></style-code>
      </div>
    </tcr>
  `
}
