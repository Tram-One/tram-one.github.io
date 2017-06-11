const Tram = require('tram-one')

const row = require('../elements/row')
const html = Tram.html({
  row
})

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <row color="#322f3e", bg="#fdca47">
      <div style=${summaryStyle}>
        Special attribution goes to
        <a href=https://github.com/yoshuawuyts>Yoshua Wuyts's</a>
        <a href=https://github.com/yoshuawuyts/choo>choo</a>,
        an amazing project which taught me that web development
        could be lightweight and fun. Yoshua Wuyts has an insane
        number of contributions to the projects outside of choo,
        many of which are included, directly or indirectly, in Tram-One.
        <br><br>

        Also, special shout out to
        <a href="https://github.com/aaaristo">Andrea Gariboldi</a>
        who developed rbel, right around the time I was struggling
        with custom element rendering. This project would not have
        gotten as far, or been started as early as it was, without this.
      </div>
    </row>
  `
}
