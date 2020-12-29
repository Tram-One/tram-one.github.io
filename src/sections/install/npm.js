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
          This is valuable if you have your own project tooling or are working in a cloud workspace.
          To see other npm details, checkout out the page on npm:
          <a href="https://www.npmjs.com/package/tram-one">
            https://www.npmjs.com/package/tram-one
          </a>
        </section-text>
        <code-block>
          npm install --save tram-one
        </code-block>
      </section-container>
    </section>
  `
}
