import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="npm" header="NPM"/>
        </div>
        <div>
          You can install Tram-One by itself via npm.
          To see other npm details, checkout out the page on npm.
          <br/>
          <a href="https://www.npmjs.com/package/tram-one">
            https://www.npmjs.com/package/tram-one
          </a>
        </div>
        <div>
          <code-block background=${attrs.background}>
            npm install --save tram-one
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
