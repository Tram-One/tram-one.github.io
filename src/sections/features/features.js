import { registerHtml } from 'tram-one';

const html = registerHtml({
	'section-container': require('../../components/section-container'),
	'section-header': require('../../components/section-header'),
	'section-text': require('../../components/section-text'),
	'code-block': require('../../components/code-block'),
});

const componentCode = `
const html = registerHtml({
  'TramHeader': TramHeader
})

const page = (attrs) => {
  const { color } = attrs
  return html\`
    <TramHeader color=\${color}>
      Tram-One Rules!
    </TramHeader>
  \`
}
`;

const stateCode = `
const html = registerHtml()

const page = () => {
  const counter = useStore({count: 0})
  const incrementCount = () => {counter.count++}
  return html\`
    <button onclick=\${incrementCount}>
      \${count}
    </button>
  \`
}
`;

const apiCode = `
import { registerHtml, useGlobalStore, useUrlParams, start } from 'tram-one'

const html = registerHtml()
const app = () => {
  if (useUrlParams('/error').matches) return html\`<p>Oh no!</p>\`

  const { user } = useUrlParams('/:user')
  const userObject = useGlobalStore('USER_NAME', {username: ''})
  const updateUserName = (event) => { userObject.username = event.target.value }

  return html\`
    <main>
      <h1> Hello \${userObject.username} </h1>
      <input value=\${userObject.username} onchange=\${updateUserName} />
    </main>
  \`
}

start(app, '#app')
`;

module.exports = () => {
	return html`
		<section class="section-page" id="features-section">
			<section-header level="2" anchor="features" header="Features" />
			<section-container>
				<section-text>
					Tram-One offers JSX-like view components with ES6 Template Strings, which are
					<a href="https://caniuse.com/template-literals">supported in all modern browsers</a>. <br /><br />
					Anyone familiar with React should feel right at home building and composing components and pages.
				</section-text>
				<code-block> ${componentCode} </code-block>
			</section-container>

			<section-container>
				<section-text>
					Tram-One includes a set of default hooks, similar to React and Svelte, which allow for routing, effects,
					component state, and global state management.
					<br /><br />
					Tram-One's hooks are intelligent, and update components only when required, making apps more performant!
				</section-text>
				<code-block> ${stateCode} </code-block>
			</section-container>

			<section-container>
				<section-text>
					With only a handful of functions, Tram-One's API is small and easy to learn, while being complete enough to
					make rich web experiences.
					<br /><br />
					The API covers everything you need to build basic web-applications, and provide the building blocks for more
					complex ones.
				</section-text>
				<code-block> ${apiCode} </code-block>
			</section-container>
		</section>
	`;
};
