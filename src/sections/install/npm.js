import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
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
