import { registerHtml } from 'tram-one';
import './section-container.css';

const html = registerHtml({
	'anchor-clip': require('./anchor-clip'),
});

module.exports = (attrs, children) => {
	return html` <section class="section-container">${children}</section> `;
};
