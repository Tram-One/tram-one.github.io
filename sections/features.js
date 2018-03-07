const Tram = require('tram-one')
const html = Tram.html({
  'section': require('../elements/section'),
  'anchor-clip': require('../elements/anchor-clip')
})

module.exports = () => {
  return html`
    <div>
      <section>
        <div>
          <anchor-clip tag="h2" id="features" header="Features"/>
        </div>
        <div>
          Tram-One is a light View Framework that comes with all the
          dependencies you need to start developing on the web.
        </div>
        <div>
          <!-- No Code for this Section -->
        </div>
      </section>
    </div>
  `
}
