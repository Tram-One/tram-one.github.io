const Tram = require('tram-one')
const Highlight = require('highlight-syntax')
const highlightJS = require('highlight-syntax/js')
const highlight = Highlight([highlightJS])

const html = Tram.html()

const codeStyle = `
  margin: -1em 0px;
  padding: 0 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  const formattedCode = highlight(attrs.code, {lang: 'js'})
  const code = document.createElement('code')
  code.innerHTML = formattedCode

  return html`
    <pre style=${codeStyle}>
      ${code}
    </pre>
  `
}
