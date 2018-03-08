const Tram = require('tram-one')
const html = Tram.html()

const highlightSyntax = require('highlight-syntax')
const highlightJS = require('highlight-syntax/js')
const highlight = highlightSyntax([highlightJS])

const codeStyle = `
  margin: 0;
  font-size: 0.8em;
  font-family: 'Source Code Pro', monospace;
`

module.exports = (attrs, children) => {
  const backgroundColor = attrs.background ? attrs.background : '#FFF8DD'
  const filenameStyle = `
    color: ${backgroundColor};
    font-size: 0.8em;
    border-bottom: solid 0.1em ${backgroundColor};
    margin: 0.4em 0em;
  `

  const unformattedCode = children.map(child => child).join('').trim()
  const formattedCode = highlight(unformattedCode, {lang: 'js'})
  const codeDOM = html`<pre style=${codeStyle} />`
  codeDOM.innerHTML = formattedCode

  return html`
    <div style=${attrs.style}>
      <div style=${filenameStyle}>
        ${attrs.filename}
      </div>
      ${codeDOM}
    </div>
  `
}
