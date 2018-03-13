const Tram = require('tram-one')
const html = Tram.html({
  'tram-logo': require('./tram-logo'),
  'nav-bar': require('./nav-bar')
})

const logoSize = '3.8em'

const containerGrid = `
  font-size: 1.8em;
  padding-left: 1rem;
  display: grid;
  grid-template-columns: ${logoSize} auto;
  grid-template-rows: 2em auto;
  grid-column-gap: 0.75em;
  grid-template-areas:
    "logo header"
    "logo links";
`

const logoStyle = `
  grid-area: logo;
`

const headerStyle = `
  grid-area: header;
  margin: 0;
`

const linksStyle = `
  grid-area: links;
  align-items: baseline;
  padding-left: 0.25em;
`

module.exports = () => {
  return html`
    <div style=${containerGrid}>
      <tram-logo style=${logoStyle} size=${logoSize} />
      <h1 style=${headerStyle}>
        Tram-One
      </h1>
      <nav-bar style=${linksStyle} />
    </h1>
  `
}
