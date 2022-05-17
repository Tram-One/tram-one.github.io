import { registerHtml } from 'tram-one';
import './app-header.css';

const html = registerHtml({
	'tram-logo': require('./tram-logo'),
	'nav-bar': require('./nav-bar'),
});

module.exports = (attrs) => {
	const logoElement = html` <tram-logo class="app-header-banner-logo" size="8em" /> `;
	return html`
		<header id=${attrs.id} class="app-header">
			<section class="app-header-banner">
				<h1 class="app-header-banner-title">Tram-One <span class="app-header-banner-version">v12.0.2</span></h1>
				<h2 class="app-header-banner-subtitle">Modern View Framework for Vanilla Javascript</h2>
				${logoElement}
			</section>
			<nav-bar class="app-header-nav-bar" />
		</header>
	`;
};
