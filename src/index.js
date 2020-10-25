import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
// import './styles.css'

const Tram = require('tram-one')
const html = registerHtml({
  'app-header': require('./components/app-header'),
  'introduction': require('./sections/introduction/introduction'),
  'features': require('./sections/features/features'),
  'api': require('./sections/api/api'),
  'install': require('./sections/install/install')
})

const page = () => {
  return html`
    <div>
      <app-header />
      <introduction />
      <features />
      <install />
      <api />
    </div>
  `
}

start('#app', page)
