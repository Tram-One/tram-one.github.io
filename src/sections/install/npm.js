import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

module.exports = (attrs) => {
  return html`
    <section>
      <section-header level="3" anchor="npm" header="NPM" />
      <section-container>
        <section-text>
          You can install Tram-One by itself via npm.
          To see other npm details, checkout out the page on npm.
          <br/>
          <a href="https://www.npmjs.com/package/tram-one">
            https://www.npmjs.com/package/tram-one
          </a>
        </section-text>
        <code-block background=${attrs.background}>
          npm install --save tram-one
        </code-block>
      </section-container>
    </section>
  `
}
