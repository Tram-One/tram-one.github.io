const Tram = require('tram-one')
const app = new Tram({defaultRoute: '/'})

const contact = require('./sections/contact')
const custom = require('./sections/custom')
const example = require('./sections/example')
const header = require('./sections/header')
const install = require('./sections/install')
const reducers = require('./sections/reducers')
const routing = require('./sections/routing')
const thanks = require('./sections/thanks')

const html = Tram.html({
  contact, custom, example,
  header, install, reducers,
  routing, thanks,
})

const home = (state) => {
  return html`
    <div>
      <div class="vhs-top">
        <header></header>
      </div>
      <div class="vhs-bottom vhs-delay-5">
        <install></install>
        <example></example>
        <routing></routing>
        <custom></custom>
        <reducers></reducers>
        <thanks></thanks>
        <contact></contact>
      </div>
    </div>
  `
}

app.addRoute('/', home)

app.start('.main')
