const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
  'state-management': require('./state-management'),
  'custom-elements': require('./custom-elements'),
  'routing': require('./routing')
})

const background = '#DDFFDD'

const featuresStyle = `
  background: ${background}
`

module.exports = () => {
  return html`
    <div style=${featuresStyle}>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="features" header="Features"/>
        </div>
        <div>
          With tools like Custom Element definitons, Redux-like State-Management,
          and Routing, you can start building web applications right away!
        </div>
        <div empty />
      </section-block>
      <custom-elements background=${background}/>
      <state-management background=${background}/>
      <routing background=${background}/>
    </div>
  `
}
