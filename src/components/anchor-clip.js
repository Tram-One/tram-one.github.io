import { registerHtml } from 'tram-one'

const html = registerHtml({
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
    switch (attrs.level) {
    case '1':
      return html`<h1 style=${headerStyle}>${content}</h1>`
    case '2':
    default:
      return html`<h2 style=${headerStyle}>${content}</h2>`
    case '3':
    case '4':
      return html`<h4 style=${headerStyle}>${content}</h4>`
    case '5':
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
