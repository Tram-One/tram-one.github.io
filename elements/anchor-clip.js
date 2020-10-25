const Tram = require('tram-one')
const html = Tram.html({
  'scroll-anchor': require('./scroll-anchor')
})

const linkStyle = `
  color: inherit;
  outline: none;
  text-decoration: none;
`

const clipStyle = `
  width: 0.7em;
  padding-right: 0.3em;
`

const headerStyle = `
  opacity: inherit;
  margin-bottom: 0.3em;
`

module.exports = (attrs) => {
  const content = html`
    <div>
      <i class="fas fa-paperclip" style=${clipStyle} />
      <span>
        ${attrs.header}
      </span>
    </div>
  `
  const header = (() => {
    switch (attrs.tag) {
    case 'h1':
      return html`<h1 style=${headerStyle}>${content}</h1>`
    case 'h2':
    default:
      return html`<h2 style=${headerStyle}>${content}</h2>`
    case 'h3':
      return html`<h3 style=${headerStyle}>${content}</h3>`
    case 'h4':
      return html`<h4 style=${headerStyle}>${content}</h4>`
    case 'h5':
      return html`<h5 style=${headerStyle}>${content}</h5>`
    }
  })()

  const id = attrs.id || attrs.header
  return html`
    <scroll-anchor class="anchor-clip" id=${id} href="#${id}" style=${linkStyle}>
      ${header}
    </scroll-anchor>
  `
}
