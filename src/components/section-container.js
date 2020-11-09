import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-header': require('./section-header'),
  'section-spacer': require('./section-spacer'),
  'anchor-clip': require('./anchor-clip'),
})

module.exports = (attrs, children) => {
  const hasHeader = attrs.header
  const header = hasHeader ?
    html`<anchor-clip level=${attrs.level} id=${attrs.id} header=${attrs.header} />` :
    ''
  return html`
    <div class="section-container">
      <section-header>
        ${header}
      </section-header>
      <section-spacer />
      ${children}
    </div>
  `
}
