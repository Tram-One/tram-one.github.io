const Tram = require('tram-one')

const row = require('../elements/row')
const html = Tram.html({
  row
})

const headerStyle = `
  font-size: 2.8em;
  padding: 0em 0.75em;
  margin: 0px;
`
const imageStyle = `
  vertical-align: top;
  height: 46px;
`

const summaryStyle = `
  padding: 1.5em;
  font-size: 1.6em;
`

module.exports = (attrs, children) => {
  return html`
    <row color=${attrs.color} bg=${attrs.bg}>
      <h1 style=${headerStyle}>
        Tram-One
        <img class="vhs-right vhs-delay-6 vhs-duration-6" src="./tram-car-128.png" style=${imageStyle} />
      </h1>
      <h1 style=${headerStyle}>
        Batteries Included View Framework
      </h1>
      <div style=${summaryStyle}>
        Tram-One is a view framework for developers who want
        to jump straight into building on the web. At its core,
        Tram-One is a collection of a few packages that gives you
        the tools to start working right away.
        <br><br>
        That is to say... <b>Batteries Included!</b>
      </div>
    </row>
  `
}
