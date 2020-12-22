import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
  'code-style': require('../../components/code-style'),
})

const checkUrlPath = `
import { start, registerHtml, useUrlParams } from 'tram-one'

const url = window.location.hostname
const html = registerHtml()

const home = () => {
  if (useUrlParams('/home')) return html\`<h1>Home Page</h1>\`
  if (useUrlParams('/details')) return html\`<h1>Details Page</h1>\`
  return html\`<h1>No Page</h1>\`
}
`

const checkUrlParams = `
import { start, registerHtml, useUrlParams } from 'tram-one'

const url = window.location.hostname
const html = registerHtml()

const home = () => {
  const { size } = useUrlParams('/:size')
  const pageStyle = \`font-size: \${size}em;\`
  return html\`
  <main style=\${pageStyle}>
    <h1>Tram-One hooks are neat!</h1>
  </main>
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <api-header level="3" anchor="use-url-params" header="useUrlParams">
        <code-block>
          useUrlParams(pattern?: string): any
        </code-block>
      </api-header>
      <section-container>
        <section-text>
          Hook that returns path variables based on the route.
          Can return path parameters, query params, and more!
          <br/><br/>
          You can test for a path by calling <code-style>useUrlParams</code-style>
          with the paths you expect to see. The hook will return false if the path
          does not match.
        </section-text>
        <code-block>
          ${checkUrlPath}
        </code-block>
      </section-container>

      <section-container>
        <section-text>
          If you want to pull variables from the path, then use the <code-style>/:var/</code-style>
          pattern in the path you pass in. You can also pull query parameters from the path as well.
          <br/><br/>
          It's internal functionality is powered by the package
          <a href="https://www.npmjs.com/package/rlite-router">rlite</a>.
        </section-text>
        <code-block>
          ${checkUrlParams}
        </code-block>
      </section-container>
    </section>
  `
}
