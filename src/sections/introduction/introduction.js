import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'section-header': require('../../components/section-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const code = `
import {registerHtml, start} from 'tram-one'

const html = registerHtml()
const home = () => {
  return html\`
    <main>
      <h1> Tram-One </h1>
      <h2>
        A Modern View Framework
        For Vanilla Javascript
      </h2>
    </main>
  \`
}

start('#app', home)
`

module.exports = () => {
  return html`
    <section id="intro-section" class="section-page">
      <section-header level="2" anchor="introduction" header="Introduction" />
      <section-container>
        <section-text>
          Tram-One is a Modern View Framework that has advance features like hooks, observables,
          and JSX-like template components, all in plain vanilla javascript.
          <br/><br/>
          Tram-One takes inspiration from frameworks like
          <a href="https://choo.io/">Choo</a>,
          <a href="https://reactjs.org/">React</a>, and
          <a href="https://svelte.dev/">Svelte</a>, and provides a rich feature set without additional libraries.
          <br/><br/>
          This site is a one-stop-shop with everything you need to know about
          Tram-One. If you have any questions from this page or about Tram-One,
          or just want to say hi, <a href='https://discord.gg/dpBXAQC'>join our Discord</a>!
        </section-text>
        <code-block>
          ${code}
        </code-block>
      </section-container>
    </section>
  `
}
