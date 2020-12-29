import { registerHtml } from 'tram-one'

const html = registerHtml({
  'section-header': require('../../components/section-header'),
  'components': require('./components'),
  'observables': require('./observables'),
  'effects': require('./effects')
})

module.exports = () => {
  return html`
    <section id="concepts-section" class="section-page">
      <section-header level="2" anchor="concepts" header="Concepts">
        Tram-One shares many concepts with other web frameworks like React, Choo, and Svelte.
        If you aren't familiar with them, here are the important concepts you will encounter
        when building web applications.
      </section-header>
      <components/>
      <observables/>
      <effects/>
    </section>
  `
}
