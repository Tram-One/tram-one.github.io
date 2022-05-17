import { registerHtml } from 'tram-one';
import './code-block.css';

const html = registerHtml();

const highlightSyntax = require('highlight-syntax');
const highlightJS = require('../js-syntax-rules.json');
const highlight = highlightSyntax([highlightJS]);

module.exports = (attrs, children) => {
	const lineStyle = `
    margin-top: 0.1em;
  `;

	const unformattedCode = children
		.map((child) => child)
		.join('')
		.trim();
	const formattedCode = highlight(unformattedCode, { lang: 'js' });
	const codeDOM = html`<pre class="code-block-code" />`;
	codeDOM.innerHTML = formattedCode;

	return html` <figure class="code-block" style=${lineStyle}>${codeDOM}</figure> `;
};
