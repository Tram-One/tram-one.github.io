import { registerHtml } from 'tram-one';

const html = registerHtml({
	'section-container': require('../../components/section-container'),
	'api-header': require('../../components/api-header'),
	'section-text': require('../../components/section-text'),
	'code-block': require('../../components/code-block'),
});

const objectStore = `
import { registerHtml, useStore } from 'tram-one'
const html = registerHtml()

const page = () => {
  const counter = useStore({ count: 0 })
  const increment = () => { counter.count += 1 }
  return html\`
    <button onclick=\${increment}>\${counter.count}</button>
  \`
}
`;

const useStoreTypeDef = `
useStore<Store extends any[] | Object}>(defaultValue: Store): Store
`;

module.exports = () => {
	return html`
		<section>
			<api-header level="3" anchor="use-store" header="useStore">
				<code-block> ${useStoreTypeDef} </code-block>
			</api-header>
			<section-container>
				<section-text>
					Hook that stores local component state. The function takes in a default value and returns the current value.
					<br /><br />
					Rather than returning a setter, the values in useStore must always be an Object or Array, and apps should
					mutate the subfields the Object, or items in the Array, directly.
					<br /><br />
					When a subfield or item is updated, then only the components that are dependent on that field will update.
				</section-text>
				<code-block> ${objectStore} </code-block>
			</section-container>
		</section>
	`;
};
