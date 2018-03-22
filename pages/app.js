const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../components/app-header'),
  'introduction': require('../sections/introduction/introduction'),
  'features': require('../sections/features/features'),
  'api': require('../sections/api/api'),
  'install': require('../sections/install/install')
})

const pageStyle = `
  padding-bottom: 5em;
`

module.exports = () => {
  return html`
    <div style=${pageStyle}>
      <app-header />
      <introduction />
      <features />
      <custom-elements />
      <state-management />
      <routing />
      <api />
      <install />
    </div>
  `
}
