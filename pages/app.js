const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../components/app-header'),
  'introduction': require('../sections/introduction/introduction'),
  'features': require('../sections/features/features'),
  'api': require('../sections/api/api')
})

module.exports = () => {
  return html`
    <div>
      <app-header />
      <introduction />
      <features />
      <custom-elements />
      <state-management />
      <routing />
      <api />
    </div>
  `
}
