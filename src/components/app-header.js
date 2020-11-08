import { registerHtml } from 'tram-one'

const html = registerHtml({
  'tram-logo': require('./tram-logo'),
  'nav-bar': require('./nav-bar'),
})

const logoSize = '3.8em'

const containerGrid = `
  font-size: 1.2em;
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

module.exports = (attrs) => {
  return html`
    <div id=${attrs.id} class="app-header" style=${containerGrid}>
      <tram-logo style=${logoStyle} size=${logoSize} />
      <h1 style=${headerStyle}>
        Tram-One
      </h1>
      <nav-bar class="nav-bar" style=${attrs.style} />
    </div>
  `
}
