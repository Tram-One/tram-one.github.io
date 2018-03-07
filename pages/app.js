const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../components/app-header'),
  'introduction': require('../sections/introduction'),
  'features': require('../sections/features'),
  'state-management': require('../sections/state-management')
})

module.exports = () => {
  return html`
    <div>
      <app-header />
      <introduction />
      <features />
      <state-management />
    </div>
  `
}
