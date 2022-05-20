import { registerHtml } from 'tram-one';

const html = registerHtml({
	'section-container': require('../../components/section-container'),
	'api-header': require('../../components/api-header'),
	'section-text': require('../../components/section-text'),
	'code-block': require('../../components/code-block'),
	'code-style': require('../../components/code-style'),
});

const dom = `
import { registerSvg } from 'tram-one'

const svg = registerSvg()

const home = () => svg\`
  <svg>
    <g>
      <circle fill="#ce1271" cx="100" cy="100" r="20"/>
    </g>
  </svg>
\`
`;

module.exports = (attrs) => {
	return html`
		<section>
			<api-header level="3" anchor="register-svg" header="registerSvg">
				<code-block> registerSvg(registry?: {[tag: string]: TramOneComponent}): DOMTaggedTemplateFunction </code-block>
			</api-header>
			<section-container>
				<section-text>
					Function to generate a tagged template function for SVG. This acts identical to
					<code-style>registerHtml</code-style>, but uses DOM methods for building svg graphics.
				</section-text>
				<code-block> ${dom} </code-block>
			</section-container>
		</section>
	`;
};
