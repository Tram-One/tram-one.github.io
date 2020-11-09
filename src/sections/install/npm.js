import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-code': require('../../components/section-code'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

module.exports = (attrs) => {
  return html`
    <section-container level="3" id="npm" header="NPM">
      <section-text>
        You can install Tram-One by itself via npm.
        To see other npm details, checkout out the page on npm.
        <br/>
        <a href="https://www.npmjs.com/package/tram-one">
          https://www.npmjs.com/package/tram-one
        </a>
      </section-text>
      <section-code>
        <code-block background=${attrs.background}>
          npm install --save tram-one
        </code-block>
      </section-code>
    </section-container>
  `
}
