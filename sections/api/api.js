const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'anchor-clip': require('../../elements/anchor-clip'),
  'static-functions': require('./static-functions'),
  'constructor': require('./constructor'),
  'app-functions': require('./app-functions')
})

const background = '#DDEAFF'

const apiStyle = `
  background: ${background}
`

module.exports = () => {
  return html`
    <div style=${apiStyle}>
      <section-block>
        <div>
          <anchor-clip tag="h2" id="api" header="API"/>
        </div>
        <div>
          Tram-One has a simple interface to help you build your web app.
        </div>
        <div empty />
      </section-block>
      <static-functions background='#DDEAFF'/>
      <constructor background='#DDEAFF'/>
      <app-functions background='#DDEAFF'/>
    </div>
  `
}
