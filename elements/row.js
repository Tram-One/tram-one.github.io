const Tram = require('tram-one')

const html = Tram.html()

module.exports = (attrs, children) => {
  const style = `
    color: ${attrs.color};
    background-color: ${attrs.bg};
    width: 100%;
    padding: 1em 0px;
    ${attrs.style}
  `

  const title = (attrs.title && attrs != '') ? html`
    <div>
      <h2 style="text-align: center">
        ${attrs.title}
      </h2>
      <hr />
    </div>
  ` : ''

  return html`
    <div style=${style}>
      ${title}
      <div>
        ${children}
      </div>
    </div>
  `
}
