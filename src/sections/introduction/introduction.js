import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-code': require('../../components/section-code'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
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
    <div id="intro-section" class="section-page" style="background: #FFF8DD;">
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
