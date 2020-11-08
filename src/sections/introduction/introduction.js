import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip')
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
      <section-block>
        <div>
          <anchor-clip tag="h2" id="introduction" header="Introduction"/>
        </div>
        <div>
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
        </div>
        <div>
          <code-block>
            ${code}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
