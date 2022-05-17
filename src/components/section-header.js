import { registerHtml } from 'tram-one';
import './section-header.css';

const html = registerHtml({
	'anchor-clip': require('./anchor-clip'),
});

module.exports = (attrs, children) => {
	const hasChildren = children !== undefined;
	const sectionIntroduction = hasChildren ? html`<p class="section-introduction">${children}</p>` : '';

	return html`
		<header class="section-header">
			<anchor-clip level=${attrs.level} id=${attrs.anchor} header=${attrs.header} />
			${sectionIntroduction}
		</header>
	`;
};
