const Tram = require('tram-one')

const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow
})

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
    <tcr title='' color='#302d3c' bg='#0fb4d4'>
      <div style=${tramStyle}>
        <h3>Tram-One</h3>
        <div>
          <a href="https://github.com/JRJurman/tram-one">
            Repository on Github
          </a>
        </div>
        <div>
          <a href="https://github.com/JRJurman/tram-one-website">
            Repository for the Website
          </a>
        </div>
      </div>
      <div style=${jesseStyle}>
        <h3>Jesse Jurman</h3>
        <div><a href="https://github.com/JRJurman">Github</a></div>
        <div><a href="http://jrjurman.com/">Website</a>,
        <a href="https://twitter.com/jrjurman">Twitter</a></div>
      </div>
    </tcr>
  `
}
