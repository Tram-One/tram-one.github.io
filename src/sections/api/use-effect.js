import { registerHtml } from 'tram-one';

const html = registerHtml({
	'section-container': require('../../components/section-container'),
	'api-header': require('../../components/api-header'),
	'section-text': require('../../components/section-text'),
	'code-block': require('../../components/code-block'),
});

const useEffect = `
import { registerHtml, useEffect } from 'tram-one'

const html = registerHtml()

const home = () => {
  useEffect(() => {
    console.log('App Mounted')
  })
  return html\`<h1>Tram-One</h1>\`
}
`;

module.exports = (attrs) => {
	return html`
		<section>
			<api-header level="3" anchor="use-effect" header="useEffect">
				<code-block> useEffect(effect: Effect): void </code-block>
			</api-header>
			<section-container>
				<section-text>
					Hook that triggers component start, update, and cleanup effects.
					<br /><br />
					The hook takes in an effect to run when the component is mounted. If any stores are used in the hook, when
					that data updates, it will trigger the effect again.
					<br /><br />
					If the return of effect is another function, then that function is called when the component is updated or
					removed.
				</section-text>
				<code-block> ${useEffect} </code-block>
			</section-container>
		</section>
	`;
};
