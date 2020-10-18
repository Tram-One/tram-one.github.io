const Tram = require('tram-one')
const html = Tram.html()

const highlightSyntax = require('highlight-syntax')
const highlightJS = require('highlight-syntax/js')
const highlight = highlightSyntax([highlightJS])

const containerStyle = `
  margin: -1.8em 0 2.5em 0;
`

const codeStyle = `
  margin: 0;
  font-size: 0.8em;
  font-family: 'Source Code Pro', monospace;
`

module.exports = (attrs, children) => {
  const backgroundColor = attrs.background ? attrs.background : '#FFF8DD'
  const filenameStyle = attrs.filename ? `
    color: ${backgroundColor};
    font-size: 0.8em;
    border-bottom: solid 0.1em ${backgroundColor};
    margin: 0.4em 0em;
  ` : `
    color: ${backgroundColor};
    border-bottom: solid 0.1em ${backgroundColor};
    margin: 1.2em 0em 0.4em 0em;
  `

  const unformattedCode = children.map(child => child).join('').trim()
  const formattedCode = highlight(unformattedCode, {lang: 'js'})
  const codeDOM = html`<pre style=${codeStyle} />`
  codeDOM.innerHTML = formattedCode

  return html`
    <div style=${containerStyle}>
      <div style=${filenameStyle}>
        ${attrs.filename}
      </div>
      ${codeDOM}
    </div>
  `
}
