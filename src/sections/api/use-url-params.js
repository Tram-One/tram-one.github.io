import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
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
  <div style=\${pageStyle}>
    <div>Tram-One hooks are neat!</div>
  </div>
}
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" header="useUrlParams"/>
          </code-style>
        </div>
        <div>
          Hook that returns path variables based on the route.
          Can return path parameters, query params, and more!
          <br/><br/>
          You can test for a path by calling <code-style>useUrlParams</code-style>
          with the paths you expect to see. The hook will return false if the path
          does not match.
        </div>
        <div>
          <code-block background=${attrs.background}>
            ${checkUrlPath}
          </code-block>
        </div>
      </section-block>

      <section-block>
        <div empty />
        <div>
          If you want to pull variables from the path, then use the <code-style>/:var/</code-style>
          pattern in the path you pass in. You can also pull query parameters from the path as well.
          <br/><br/>
          It's internal functionality is powered by the package
          <a href="https://www.npmjs.com/package/rlite-router">rlite</a>.
        </div>
        <div>
          <code-block background=${attrs.background}>
            ${checkUrlParams}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
