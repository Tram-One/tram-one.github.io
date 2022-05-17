import { registerHtml } from 'tram-one';
import './anchor-clip.css';

const html = registerHtml({
	'scroll-anchor': require('./scroll-anchor'),
});

module.exports = (attrs) => {
	const header = (() => {
		switch (attrs.level) {
			case '2':
			default:
				return html`
					<h2 class="anchor-header">
						<i class="fas fa-paperclip header-paperclip" />
						<span> ${attrs.header} </span>
					</h2>
				`;
			case '3':
				return html`
					<h3 class="topic-header anchor-header">
						<i class="fas fa-paperclip header-paperclip" />
						<span> ${attrs.header} </span>
					</h3>
				`;
		}
	})();

	const id = attrs.id || attrs.header;
	return html` <scroll-anchor class="anchor-clip" id=${id} href="#${id}"> ${header} </scroll-anchor> `;
};
