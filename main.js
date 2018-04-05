const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('./components/app-header'),
  'introduction': require('./sections/introduction/introduction'),
  'features': require('./sections/features/features'),
  'api': require('./sections/api/api'),
  'install': require('./sections/install/install')
})
const app = new Tram({defaultRoute: '/'})

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


app.addRoute('/', page)
app.start('.main')
