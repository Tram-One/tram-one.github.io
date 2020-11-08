import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../elements/section-container'),
  'section-code': require('../../elements/section-code'),
  'section-header': require('../../elements/section-header'),
  'section-text': require('../../elements/section-text'),
  'code-block': require('../../elements/code-block'),
})

const code = `
const {registerHtml, start} = require('tram-one')

const html = registerHtml()
const home = () => {
  return html\`
    <div>
      <h1> Tram-One </h1>
      <h2> A Modern View Framework For Pure Javascript </h2>
    </div>
  \`
}

start('#app', home)
`

module.exports = () => {
  return html`
    <div id="intro-section" style="background: #FFF8DD;">
      <section-container level="2" id="introduction" header="Introduction">
        <section-text>
          Tram-One is a light View Framework that comes with all the
          dependencies you need to start developing on the web.
          <br/><br/>
          Tram-One is an orchestration of common features, and relies only on
          plain javascript, so you don't have to bother learning / parsing /
          transpiling special templating languages.
          <br/><br/>
          This site is a one-stop-shop with everything you need to know about
          Tram-One. If you have any questions from this page or about Tram-One,
          or just want to say hi, <a href='https://discord.gg/dpBXAQC' >join our Discord</a>!
        </section-text>
        <section-code>
          <code-block>
            ${code}
          </code-block>
        </section-code>
      </section-container>
    </div>
  `
}
