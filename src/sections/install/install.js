import { registerHtml } from 'tram-one';

const html = registerHtml({
	'section-header': require('../../components/section-header'),
	npm: require('./npm'),
	'script-tag': require('./script-tag'),
	'tram-one-express': require('./tram-one-express'),
});

module.exports = () => {
	return html`
		<section id="install-section" class="section-page">
			<section-header level="2" anchor="install" header="Install">
				There are multiple ways to get started with Tram-One!
			</section-header>
			<tram-one-express />
			<npm />
			<script-tag />
		</section>
	`;
};
