import { registerHtml } from 'tram-one'
import './anchor-clip.css'

const html = registerHtml({
  'scroll-anchor': require('./scroll-anchor')
})

module.exports = (attrs) => {
  const content = html`
    <div>
      <i class="fas fa-paperclip header-paperclip" />
      <span>
        ${attrs.header}
      </span>
    </div>
  `
  const header = (() => {
    switch (attrs.level) {
    case '1':
      return html`<h1 class="anchor-header">${content}</h1>`
    case '2':
    default:
      return html`<h2 class="anchor-header">${content}</h2>`
    case '3':
    case '4':
      return html`<h4 class="anchor-header">${content}</h4>`
    case '5':
      return html`<h5 class="anchor-header">${content}</h5>`
    }
  })()

  const id = attrs.id || attrs.header
  return html`
    <scroll-anchor class="anchor-clip" id=${id} href="#${id}">
      ${header}
    </scroll-anchor>
  `
}
