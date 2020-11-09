import { registerHtml } from 'tram-one'
import './code-block.css'

const html = registerHtml()

const highlightSyntax = require('highlight-syntax')
const highlightJS = require('highlight-syntax/js')
const highlight = highlightSyntax([highlightJS])

module.exports = (attrs, children) => {
  const backgroundColor = attrs.background ? attrs.background : '#FFF8DD'
  const lineStyle = `
    color: ${backgroundColor};
    border-bottom: solid 0.1em ${backgroundColor};
  `

  const unformattedCode = children.map(child => child).join('').trim()
  const formattedCode = highlight(unformattedCode, {lang: 'js'})
  const codeDOM = html`<pre class="code-block-code" />`
  codeDOM.innerHTML = formattedCode

  return html`
    <div class="code-block">
      <div class="code-block-line" style=${lineStyle}>
        ${attrs.filename}
      </div>
      ${codeDOM}
    </div>
  `
}
