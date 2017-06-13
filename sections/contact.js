const Tram = require('tram-one')

const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow
})

const hStyle = `
  margin: 0px;
`

const tramStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

const jesseStyle = `
  text-align: right;
  padding: 1em;
  padding-right: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title='' color=${attrs.color} bg=${attrs.bg}>
      <div style=${tramStyle}>
        <h3 style=${hStyle}>Tram-One</h3>
        <div>
          <a href="https://github.com/JRJurman/tram-one">Github</a>,
          <a href="https://www.npmjs.com/package/tram-one">npm</a>
        </div>
        <div>
          <a href="https://github.com/JRJurman/tram-one-website">
            Repo for the Website
          </a>
        </div>
      </div>
      <div style=${jesseStyle}>
        <h3 style=${hStyle}>Jesse Jurman</h3>
        <div><a href="https://github.com/JRJurman">Github</a></div>
        <div><a href="http://jrjurman.com/">Website</a>,
        <a href="https://twitter.com/jrjurman">Twitter</a></div>
      </div>
    </tcr>
  `
}
