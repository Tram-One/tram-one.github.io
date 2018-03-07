const Tram = require('tram-one')
const html = Tram.html()

const Highlight = require('highlight-syntax')
const highlightJS = require('highlight-syntax/js')
const highlight = Highlight([highlightJS])

const codeStyle = `
  margin: 0;
  font-size: 0.8em;
  font-family: 'Source Code Pro', monospace;
`

const filenameStyle = `
  color: #FFF8DD;
  font-size: 0.8em;
  border-bottom: solid 0.1em #FFF8DD;
  margin: 0.4em 0em;
`

module.exports = (attrs, children) => {
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
